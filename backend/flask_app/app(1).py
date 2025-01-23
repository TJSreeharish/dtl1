
from flask_session import Session
from pymongo import MongoClient
from user_upload import file_upload , file_get
from bson.objectid import ObjectId
from gemini_pdf_chatbot import final_result
from flask import Flask, request, jsonify, render_template, session, redirect, url_for ,send_file
from flask_cors import CORS
from datetime import timedelta
from final_conver_done import extract_text_from_pdf
from insurance_data import insurance_data
import os

app = Flask(__name__, static_folder='static')
client = MongoClient('mongodb+srv://sumedhudupa15:sumud@cluster0.xtvve.mongodb.net/?',port=3001)
db = client["test"]
collection = db["patients"]

# Configure CORS to allow credentials from React frontend
CORS(app, 
     supports_credentials=True,
     resources={r"/*": {"origins": ["http://localhost:5173"], "methods": ["GET", "POST", "OPTIONS"]}})

# Configure session storage (filesystem)
session_folder = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'flask_session')

# Session configuration
app.secret_key = 'your_secret_key'  # Required to encrypt the session data
app.config.update(
    SESSION_TYPE='filesystem',  # Store session data in files
    SESSION_PERMANENT=True,
    PERMANENT_SESSION_LIFETIME=timedelta(minutes=30),  # Set session expiry time
    SESSION_FILE_DIR=session_folder,  # Use the new path for session files
    SESSION_COOKIE_SECURE=False,  # Set to True if you're using HTTPS
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE='Lax',
)

# Make the session folder if it doesn't exist
os.makedirs(session_folder, exist_ok=True)

# Initialize Flask-Session
Session(app)


@app.route('/receive-user-id', methods=['POST'])
def receive_user_id():
    try:
        data = request.get_json()
        user_id = data.get('userId')

        if user_id:
            session['op'] = user_id  # Store user ID in session
            session['email'] = session['op']  # Store email for demonstration
            print("Session is stored:", session["op"])
            # Return a redirect URL as JSON
            return jsonify({"redirect": url_for('login')}), 200
        else:
            return jsonify({"error": "No user ID found"}), 400

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500

@app.route("/login",methods=["POST","GET"])
def login():
    if "op" in session:
        email = session["op"]

        user = collection.find_one({"email":email})
        print("user name is ",user['firstname'])
        session["user_id"] = str(user["_id"])
       

        if user is None:
                  return ("user not found ")
        else:   
            if "fs_id" in user and user["fs_id"]:
                return redirect(url_for("pro"))
            else:
                  print("upload")
                  return render_template("upload.html")
    else:
        return "<h1>user not found with the name </h1>"

    


@app.route("/upload" , methods = ["POST"])
def upload():
    if request.method == "POST":
      if "file" not in request.files:
            return "no file found",400
      file = request.files["file"]
      print("reached")
      user_id = session.get("user_id")
      object_id = ObjectId(user_id)
      fs_id = (file_upload(file))
      collection.update_one({"_id": object_id}, {"$set": {"fs_id": fs_id}})
      file = file_get(fs_id)
      pdf_text = extract_text_from_pdf(file)
      collection.update_one({"_id": object_id}, {"$set": {"pdf_text": pdf_text}})
      
      session["text"] = pdf_text
    #   print("Session after setting:", session)
      if not pdf_text:
            return "<h1>pdf_text does not  exist </h1>"
      if "text" not in session:
           return "<h1>session is not 1 working </h1>"
      
      return redirect(url_for("dash"))
    
    else:
        return render_template("upload.html")

@app.route("/process")
def pro():
    if "user_id" in session:
        user = collection.find_one({'_id':ObjectId(session.get("user_id"))})
        # fs_id=user["fs_id"]
        # file = file_get(fs_id)
        # pdf_text = extract_text_from_pdf(file)
        pdf_text = user['pdf_text']
        session["text"] = pdf_text 
        return redirect(url_for("dash"))
    else:
         return render_template("upload.html")



import asyncio
@app.route('/download', methods=['GET'])
def download_file():
    user = collection.find_one({'_id': ObjectId(session.get("user_id"))})
    file_data = file_get(user['fs_id'])  # Replace this with actual file retrieval logic
    return send_file(file_data, as_attachment=True, download_name='document.pdf')



@app.route("/dashboard", methods=["POST", "GET"])
def dash():
    insurance_text = insurance_data()
    if "text" not in session:
        return "<h1>Session is not working</h1>"

    summary = final_result(pdf_text=session.get("text"), user_query="summarize only in 100 words")
    recommed_init = insurance_text + session.get("text")
    recom = final_result(pdf_text=recommed_init, user_query="only in 100 words, which is top 3 best insurance to consider for me,i need only the names of insurance and thier features  ,i dont want the thinking process, write a keyword like op12 before listing top 3 insurance after each insurance add a keyword <br>")
    user = collection.find_one({'_id': ObjectId(session.get("user_id"))})
    collection.update_one({'_id': user["_id"]}, {'$set': {'summary': summary}})
    # recom1 = recom.split("op12")
    # recom = recom1[1].strip()

    user["summary"] = summary
    user["recom"] = recom

    session["summary"] = summary
    session["recom"] = recom
    session["langkan"] = 1
    return render_template("dashboard.html", ai_text=user)
from googletrans import Translator

@app.route("/translator", methods=["POST", "GET"])
def trans():
    if request.method == "POST":
        from googletrans import Translator

        # Create a translator object
        translator = Translator()

        # The English text to be translated
        english_text = (
            "Date: 21-DEC-2024. Dear Author, We are pleased to inform you that your paper titled "
            "'Smart Soil Analysis System for Crop Recommendation Using an Affordable NPK Sensor' "
            "has been accepted for publication. Please be aware that the publication fee is non-refundable "
            "under any circumstances."
        )

        # Translate the text to Kannada
        summary = translator.translate(session.get("summary"), src='en', dest='kn')
        trans = translator.translate(session.get("recom"), src='en', dest='kn')

        # Fetch the user data and update it with the translated text
        user = collection.find_one({'_id': ObjectId(session.get("user_id"))})
        user["summary"] = summary.text
        user["recom"] = trans.text
        if session["langkan"] == 1:
            session["langkan"]=0
            return render_template("dashboard.html", ai_text=user)
        else:
             return redirect(url_for("dash"))
             
             
        return render_template("dashboard.html", ai_text=user)
    else:
        return redirect(url_for("dash"))


            


            
      

@app.route("/chatbot",methods=["POST","GET"])
def chat():
     if request.method == "POST":
        data = request.get_json()  
        user_input = data.get('userInput') 
        ai_reply= final_result(pdf_text=session.get("text"),user_query=user_input) 
        return jsonify({"response": ai_reply}) 
     else:
        return render_template("chatbot.html")  
    

if __name__ == "__main__":
    app.run( port=5000, debug=True)

