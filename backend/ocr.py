# import fitz  # PyMuPDF
# from PIL import Image
# import pytesseract
# import sys, pymupdf 
# import io

# def extract_text_from_file(file_path, file_extension):
#     """Extract text from image or PDF."""
#     if file_extension in ['.jpg', '.jpeg', '.png']:
#         # Process image file
#         image = Image.open(file_path)
#         return pytesseract.image_to_string(image)

#     elif file_extension == '.pdf':
#         # # Process PDF file
#         # text = ""
#         # pdf_document = fitz.open(file_path)

#         # for page_num in range(len(pdf_document)):
#         #     page = pdf_document[page_num]
#         #     images = page.get_images(full=True)

#         #     for img_index, img in enumerate(images):
#         #         xref = img[0]
#         #         base_image = pdf_document.extract_image(xref)
#         #         image_bytes = base_image['image']
#         #         image = Image.open(io.BytesIO(image_bytes))
#         #         text += pytesseract.image_to_string(image) + "\n"

#         # pdf_document.close()
#         # return text.strip()
#         fname = file_path
#         doc = pymupdf.open(fname)  # open document
#         for page in doc:  # iterate through the pages
#             pix = page.get_pixmap()  # render page to an image
#             pix.save("page-%i.png" % page.number)  # store image as a PNG

#         image = Image.open('./page-0.png')
#         return pytesseract.image_to_string(image)

#     else:
#         raise ValueError("Unsupported file type")


# import fitz  # PyMuPDF
# from PIL import Image
# import pytesseract
# import os
# import io


# def process_pdf(file_path):
#     """Extract text from a PDF and save images for each page."""
#     # Extract file name without extension for folder creation
#     base_name = os.path.splitext(os.path.basename(file_path))[0]
#     output_folder = os.path.join(os.path.dirname(file_path), base_name)
    
#     # Create a folder to save images
#     os.makedirs(output_folder, exist_ok=True)
    
#     # Open the PDF document
#     doc = fitz.open(file_path)
#     combined_text = ""  # To store combined text from all pages

#     for page_number in range(len(doc)):
#         # Get the current page
#         page = doc[page_number]
#         # Render page as an image
#         pix = page.get_pixmap()
#         # Save image in the output folder
#         image_path = os.path.join(output_folder, f"page-{page_number + 1}.png")
#         pix.save(image_path)
        
#         # Extract text from the image using Tesseract
#         with Image.open(image_path) as img:
#             page_text = pytesseract.image_to_string(img)
#             combined_text += page_text + "\n"  # Append page text with newline

#     # Close the document
#     doc.close()
#     return combined_text


# def extract_text_from_file(file_path, file_extension):
#     """Unified function to handle text extraction from images and PDFs."""
#     if file_extension in ['.jpg', '.jpeg', '.png']:
#         # Process image file
#         image = Image.open(file_path)
#         return pytesseract.image_to_string(image)
    
#     elif file_extension == '.pdf':
#         # Process PDF file
#         return process_pdf(file_path)

#     else:
#         raise ValueError("Unsupported file type")


import fitz  # PyMuPDF
from PIL import Image
import pytesseract
import os


def process_pdf(file_path):
    """Extract text from a PDF and save images for each page."""
    # Create a folder for storing extracted images
    base_name = os.path.splitext(os.path.basename(file_path))[0]
    output_folder = os.path.join(os.path.dirname(file_path), f"{base_name}_images")
    os.makedirs(output_folder, exist_ok=True)

    # Open the PDF document
    doc = fitz.open(file_path)
    combined_text = ""  # To store combined text from all pages

    for page_number in range(len(doc)):
        # Get the current page
        page = doc[page_number]
        # Render page as an image
        pix = page.get_pixmap()
        image_path = os.path.join(output_folder, f"page-{page_number + 1}.png")
        pix.save(image_path)  # Save image to folder

        # Extract text from the image using Tesseract
        with Image.open(image_path) as img:
            page_text = pytesseract.image_to_string(img)
            combined_text += page_text + "\n"

    # Close the document after processing
    doc.close()
    return combined_text


def extract_text_from_file(file_path, file_extension):
    """Unified function to handle text extraction from images and PDFs."""
    if file_extension in ['.jpg', '.jpeg', '.png']:
        # Process image file
        image = Image.open(file_path)
        return pytesseract.image_to_string(image)
    
    elif file_extension == '.pdf':
        # Process PDF file
        return process_pdf(file_path)

    else:
        raise ValueError("Unsupported file type")
