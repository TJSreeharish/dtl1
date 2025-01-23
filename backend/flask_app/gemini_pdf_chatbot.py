import google.generativeai as genai

# Configure the API key
genai.configure(api_key="AIzaSyBX9vfjRWVrLwofxH5Gr8rmq6JVVtIgY5U")

# AI function to generate a response
def ai(user_query):
    model = genai.GenerativeModel('gemini-1.5-pro-latest')
    response = model.generate_content(user_query)
    return response.text

# Function to process PDF and query
def final_result(pdf_text, user_query):
    return ai(pdf_text + " " + user_query)
