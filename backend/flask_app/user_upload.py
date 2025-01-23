from pymongo import MongoClient
import gridfs


client = MongoClient('mongodb+srv://sumedhudupa15:sumud@cluster0.xtvve.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', port=3001)
db = client["file_control"]
fs = gridfs.GridFS(db)

def file_upload(file):
    """Uploads an uploaded file to MongoDB using GridFS."""
    file.seek(0)  # Ensure the file pointer is at the beginning
    data = file.read()
    file_id = fs.put(data, filename=file.filename)
    uploaded_file = db['fs.files'].find_one({"_id": file_id})
    print("this is the file_id", uploaded_file['_id'])
    return uploaded_file['_id']

def file_get(fs_id):
    return(fs.get(fs_id))