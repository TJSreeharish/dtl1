# Import SpaCy
import spacy



# Load English tokenizer, tagger, parser, and NER
nlp = spacy.load("en_core_web_trf")
def spac(text):
    # Process text
    doc = nlp(text)

    # Gather analyses
    analysis_result = ""

    # Tokenization
    analysis_result += "\nTokens:\n"
    for token in doc:
        analysis_result += f"Text: {token.text}, Lemma: {token.lemma_}, POS: {token.pos_}, Dep: {token.dep_}, Stop Word: {token.is_stop}\n"

    # Named Entities
    analysis_result += "\nNamed Entities:\n"
    for entity in doc.ents:
        analysis_result += f"Text: {entity.text}, Label: {entity.label_} ({spacy.explain(entity.label_)})\n"

    # Noun Chunks
    analysis_result += "\nNoun Phrases:\n"
    for chunk in doc.noun_chunks:
        analysis_result += f"Text: {chunk.text}, Root Text: {chunk.root.text}, Root Dep: {chunk.root.dep_}\n"



    # Token Shapes
    analysis_result += "\nToken Shapes:\n"
    for token in doc:
        analysis_result += f"Text: {token.text}, Shape: {token.shape_}, Prefix: {token.prefix_}, Suffix: {token.suffix_}\n"

    # Entity Labels Summary
    analysis_result += "\nEntity Labels Summary:\n"
    entity_types = {entity.label_ for entity in doc.ents}
    for entity_type in entity_types:
        analysis_result += f"{entity_type}: {spacy.explain(entity_type)}\n"
    return(analysis_result)


