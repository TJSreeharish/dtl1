from pymongo import MongoClient
import gridfs
from tempfile import TemporaryDirectory
from pathlib import Path
from PIL import Image
import pytesseract
from pdf2image import convert_from_bytes
import platform
from bson.objectid import ObjectId
from io import BytesIO
client = MongoClient('mongodb+srv://sumedhudupa15:sumud@cluster0.xtvve.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', port=3001)
db = client["Insurance"]
fs = gridfs.GridFS(db)
collection = db["Insurance_in_text_format"]
def insurance_data():
    data = collection.find_one({"name":"policy_insurance"})
    # fs_id =data["pdf_file_in"]
    # file = fs.get(fs_id)
    # with open("djremix.pdf", "wb") as f:
    #     f.write(file.read()) 
    text = data["text"]
    text = text.split("46.")
    return(text[0])