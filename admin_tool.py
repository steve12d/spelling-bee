# admin_tool.py
import argparse
import datetime as dt
import json
import os
from pathlib import Path
import sys
from openai import OpenAI
from dotenv import load_dotenv
from http.server import SimpleHTTPRequestHandler, HTTPServer

dotenv_file = str(Path.cwd() / ".env")
words_file = str(Path.cwd() / "words.txt")
sentences_file = str(Path.cwd() / "sentences.json")

def generate_sentences():
    # Check if .env exists
    if not os.path.exists(dotenv_file):
        print(".env does not exist - cannot generate sentences")
        return
    else:
        # Read OpenAI API key from .env file
        load_dotenv(dotenv_file)
        if not (os.getenv("OPENAI_API_KEY") and os.getenv("OPENAI_ORG_ID")):
            print("Unable to read OPENAI_API_KEY and OPENAI_ORG_ID")
            return

    # Check if words.txt exists
    if not os.path.exists(words_file):
        print("words.txt does not exist - generating a words.txt file with example words")
        with open(words_file,"w") as f:
            f.write("reply, describe, guide, surprise, exercise, island, bicycle, library, fright, height")


    client = OpenAI(
        api_key=os.getenv("OPENAI_API_KEY"),
        organization=os.getenv("OPENAI_ORG_ID")
    )

    # Read words.txt and generate prompt
    with open(words_file) as f:
        word_list = f.read()

    # Verbose logging - print words list in JSON format
    try:
        print(json.dumps(
                word_list.split(", ")
        ))
    except:
        pass

    num_words = len(word_list.split(","))
        
    prompt = f"Make sample spelling sentences for 6 year-olds for the following words, responding only with the sentences in json list format and excluding the keys (just a list of values): {word_list}"

    stream = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        stream=True,
    )

    result = ""
    
    print_buffer=""
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            _chunk = chunk.choices[0].delta.content
            result += _chunk

            print_buffer += _chunk
            if '",' in _chunk or ']' in _chunk:
                print(print_buffer)
                print_buffer=""
            

    with open(sentences_file, "w") as f:
        f.write(result)
    
    # Check if the right number of sentences has been generated in valid json format
    try:
        with open(sentences_file) as f:
            sentences = json.load(f)
        
        assert len(sentences) == num_words, f"Incorrect number of sentences was generated ({len(sentences)} instead of {num_words})"
    except Exception as e:
        print("Error: ", e)

def calendar():
    """Generate a calendar (mock example for now)."""
    today = dt.date.today()
    current_weekday = today.isocalendar().weekday
    start_date = today - dt.timedelta(days=current_weekday - 1)
    print(f"{'Week':<15}{'Number':<8}{'Start Date'}")
    print('-' * 34)
    [print(f"{('Current Week' if i == 0 else ('Previous Week' if i == -1 else 'Next Week')):<15}{today.isocalendar().week + i:<8}{start_date + dt.timedelta(days=7 * i)}") for i in range(-1, 2)]

def serve():
    """Serve the static site."""
    httpd = HTTPServer(('localhost', 8000), SimpleHTTPRequestHandler)
    print("Serving at http://localhost:8000...")
    httpd.serve_forever()

def main():
    parser = argparse.ArgumentParser(description="Admin utility for Spelling Bee app.")
    
    # Flags for each command
    parser.add_argument('--sentences', action='store_true', help="Generate spelling sentences.")
    parser.add_argument('--calendar', action='store_true', help="Generate a new calendar.")
    parser.add_argument('--serve', action='store_true', help="Serve the static website locally.")
    
    args = parser.parse_args()

    # If no arguments are passed, show the help message
    if len(sys.argv) == 1:
        parser.print_help()
        sys.exit(1)

    # Handle command logic
    if args.sentences:
        generate_sentences()
    
    elif args.calendar:
        calendar()

    elif args.serve:
        serve()

if __name__ == '__main__':
    main()