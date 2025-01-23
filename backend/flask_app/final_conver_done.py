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

# MongoDB setup
# client = MongoClient('mongodb://localhost:27017/')
# db = client['file_control']
# fs = gridfs.GridFS(db)

# # File ID to be downloaded
# file_id = "676bc1af5ae610ea2fd697ee"
# file_id = ObjectId(file_id)

# Tesseract OCR and poppler path setup for Windows
if platform.system() == "Windows":
    pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
    path_to_poppler_exe = Path(r"C:\Program Files\poppler-24.08.0\Library\bin")  # Update this with the actual path

# Temporary output file for OCR text
out_directory = Path(r"~\Desktop").expanduser()
text_file = out_directory / Path("extracted_text.txt")

def extract_text_from_pdf(file_object):
    """Extract text from a PDF file object using OCR."""
    image_file_list = []
    extracted_text = ""

    with TemporaryDirectory() as tempdir:
        # Convert PDF file bytes to images
        if platform.system() == "Windows":
            pdf_pages = convert_from_bytes(file_object.read(), 500, poppler_path=path_to_poppler_exe)
        else:
            pdf_pages = convert_from_bytes(file_object.read(), 500)
        
        for page_enumeration, page in enumerate(pdf_pages, start=1):
            filename = f"{tempdir}/page_{page_enumeration:03}.jpg"
            page.save(filename, "JPEG")
            image_file_list.append(filename)

        # Perform OCR on each image
        for image_file in image_file_list:
            text = str(((pytesseract.image_to_string(Image.open(image_file)))))
            text = text.replace("-\n", "")
            extracted_text += text

    return extracted_text

# def main():
#     """Main function to process the file directly from GridFS and extract text."""
#     # Retrieve the PDF file object from GridFS
#     file_object = fs.get(file_id)

#     # Extract text from the file object
#     text = extract_text_from_pdf(file_object)

#     # Print the extracted text to the terminal
#     print("\nExtracted Text:\n")
#     print(text)

# if __name__ == "__main__":
#     main()
