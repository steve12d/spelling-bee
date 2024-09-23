#!/home/stephen/venv/bin/python3

import os
import sys
import requests
import json
from dotenv import load_dotenv
from openai import OpenAI


def get_words(word_list):
    load_dotenv()

    client = OpenAI(
        api_key=os.environ.get("OPENAI_API_KEY"),
        organization=os.environ["OPENAI_ORG_ID"],
    )

    prompt = f"Make sample spelling sentences for 6 year-olds for the following words, responding only with the sentences in json list format and excluding the keys (just a list of values): {word_list}"

    stream = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        stream=True,
    )
    result = ""
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            _chunk = chunk.choices[0].delta.content
            print(_chunk)
            result += _chunk

    with open("sentences.json", "w") as f:
        f.write(result)


if __name__ == "__main__":
    # Get the word list from the first command-line argument
    test_words = '[reply, describe, guide, surprise, exercise, island, bicycle, library, fright, height]'
    if len(sys.argv) > 1:
        word_list = test_words if sys.argv[1] == "test" else sys.argv[1]
        get_words(word_list)
        try:
            with open("sentences.json") as f:
                sentences = json.load(f)
            assert len(sentences) == len(json.loads(word_list)), "Incorrect number of sentences was generated"
        except Exception as e:
            print("Error: ", e)
    else:
        print(f'Usage: python get_sentences.py "{test_words}"')

#
