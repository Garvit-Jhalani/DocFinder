# from flask import Flask, request, jsonify
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
from config import db
from ocr import extract_text_from_file  # Unified OCR function
from datetime import datetime
from fuzzywuzzy import fuzz
from fuzzywuzzy import process

# Flask App Setup
app = Flask(__name__)
CORS(app)

# Directory to store uploads
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/search', methods=['GET'])
def search_documents():
    query = request.args.get('query', '').strip()
    if not query:
        return jsonify({'success': False, 'message': 'Query parameter is missing'}), 400

    try:
        # Fetch all documents from the database
        documents = list(db.documents.find({}, {"_id": 0, "file_name": 1, "content": 1}))
        if not documents:
            return jsonify({'success': False, 'message': 'No documents found in the database'}), 404

        # Perform fuzzy matching
        search_results = []
        for doc in documents:
            # Calculate match scores for file name and content separately
            file_name_score = fuzz.partial_ratio(query, doc['file_name'])
            content_score = fuzz.partial_ratio(query, doc['content'])

            # Take the higher score as the match score for the document
            match_score = max(file_name_score, content_score)

            # Include document if it meets the threshold
            if match_score > 50:  # Adjust the threshold as needed
                search_results.append({
                    'file_name': doc['file_name'],
                    'match_score': match_score,
                    'content_preview': doc['content'][:200]  # Limit preview length
                })

        # Sort results by match score in descending order
        search_results = sorted(search_results, key=lambda x: x['match_score'], reverse=True)

        if not search_results:
            return jsonify({'success': False, 'message': 'No matching documents found'}), 404

        return jsonify({'success': True, 'data': search_results}), 200

    except Exception as e:
        return jsonify({'success': False, 'message': f'Error during search: {str(e)}'}), 500

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({'success': False, 'message': 'No file provided'}), 400

    file = request.files['file']
    user_id = request.form.get('user_id')

    if file.filename == '':
        return jsonify({'success': False, 'message': 'No selected file'}), 400

    if not user_id:
        return jsonify({'success': False, 'message': 'No user ID provided'}), 400

    # Save the uploaded file
    filename = secure_filename(file.filename)
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(file_path)

    # Determine file type
    file_extension = os.path.splitext(filename)[1].lower()

    # Process OCR based on file type
    try:
        extracted_text = extract_text_from_file(file_path, file_extension)
        if extracted_text:
            # Store in MongoDB with additional metadata
            document = {
                "user_id": user_id,
                "file_name": filename,
                "file_type": file_extension,
                "upload_date": datetime.utcnow(),
                "content": extracted_text
            }
            db.documents.insert_one(document)

            return jsonify({
                'success': True,
                'message': 'File processed successfully',
                'data': {
                    "file_name": filename,
                    "file_type": file_extension,
                    "content_preview": extracted_text[:2000], 
                    "upload_date": document["upload_date"]
                }
            }), 200
        else:
            return jsonify({'success': False, 'message': 'OCR processing failed'}), 500
    except Exception as e:
        return jsonify({'success': False, 'message': f'Error processing file: {str(e)}'}), 500


# Route: Fetch All Documents
# @app.route('/documents', methods=['GET'])
# def documents():
#     documents = list(db.documents.find({}, {"_id": 0}))
#     return jsonify({'success': True, 'data': documents}), 200

@app.route('/documents', methods=['GET'])
def documents():
    user_id = request.args.get('user_id')
    
    if not user_id:
        return jsonify({'success': False, 'message': 'No user ID provided'}), 400

    try:
        documents = list(db.documents.find({"user_id": user_id}, {"_id": 1, "file_name": 1, "file_type": 1, "upload_date": 1}))
        
        # Convert ObjectId to string for JSON serialization
        for doc in documents:
            doc['_id'] = str(doc['_id'])
        
        return jsonify({'success': True, 'data': documents}), 200
    except Exception as e:
        return jsonify({'success': False, 'message': f'Error fetching documents: {str(e)}'}), 500
    
@app.route('/delete-document', methods=['DELETE'])
def delete_document():
    user_id = request.args.get('user_id')
    document_id = request.args.get('document_id')
    
    if not user_id or not document_id:
        return jsonify({'success': False, 'message': 'User ID and document ID are required'}), 400

    try:
        result = db.documents.delete_one({"_id": document_id, "user_id": user_id})
        
        if result.deleted_count == 1:
            return jsonify({'success': True, 'message': 'Document deleted successfully'}), 200
        else:
            return jsonify({'success': False, 'message': 'Document not found or user not authorized'}), 404
    except Exception as e:
        return jsonify({'success': False, 'message': f'Error deleting document: {str(e)}'}), 500

@app.route('/downloadDocument', methods=['GET'])
def downloadDocument():
    document_id = request.args.get('document_id')

    if not document_id:
        return jsonify({'success': False, 'message': 'Document ID is required'}), 400

    try:
        # Try to fetch the document using the provided ID as is
        document = db.documents.find_one({"_id": document_id})

        # If not found, try converting to ObjectId
        if not document:
            try:
                object_id = document_id
                document = db.documents.find_one({"_id": object_id})
            except:
                pass  # If conversion fails, document will remain None

        if not document:
            print(f"Document not found for ID: {document_id}")  # Logging
            return jsonify({'success': False, 'message': 'Document not found'}), 404

        # Create a temporary text file for download
        file_name = f"{document['file_name'].split('.')[0]}.txt"
        file_path = os.path.join(UPLOAD_FOLDER, file_name)
        
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(document['content'])
        
        # Serve the file for download
        return send_file(file_path, as_attachment=True, download_name=file_name)

    except Exception as e:
        print(f"Error in downloadDocument: {str(e)}")  # Logging
        return jsonify({'success': False, 'message': f'Error downloading document: {str(e)}'}), 500    

if __name__ == '__main__':
    app.run(debug=True, port=5000)


# @app.route('/delete-document', methods=['DELETE'])
# def delete_document():
#     user_id = request.args.get('user_id')
#     document_id = request.args.get('document_id')
    
#     if not user_id or not document_id:
#         return jsonify({'success': False, 'message': 'User ID and document ID are required'}), 400

#     try:
#         result = db.documents.delete_one({"_id": ObjectId(document_id), "user_id": user_id})
        
#         if result.deleted_count == 1:
#             return jsonify({'success': True, 'message': 'Document deleted successfully'}), 200
#         else:
#             return jsonify({'success': False, 'message': 'Document not found or user not authorized'}), 404
#     except Exception as e:
#         return jsonify({'success': False, 'message': f'Error deleting document: {str(e)}'}), 500
