from pymongo import MongoClient

# MongoDB Connection
MONGODB_URI="Your_MongoDb_Url_Here!!"
client = MongoClient(MONGODB_URI)
db = client['manuals_db']  # Replace 'manuals_db' with your database name
