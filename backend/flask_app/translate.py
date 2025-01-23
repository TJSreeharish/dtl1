import asyncio
from googletrans import Translator

# Create a translator object
translator = Translator()

async def translator1(english_text):
    # Translate the English text to Hindi
    translated_text = await translator.translate(english_text, src='en', dest='kn')
    return translated_text.text

# Example usage
async def main():
    english_text = ("Date: 21-DEC-2024. Dear Author, We are pleased to inform you that your paper titled "
                    "'Smart Soil Analysis System for Crop Recommendation Using an Affordable NPK Sensor' "
                    "has been accepted for publication. Please be aware that the publication fee is non-refundable "
                    "under any circumstances.")
    hindi_translation = await translator1(english_text)
    print(hindi_translation)

# Run the asynchronous function
asyncio.run(main())
