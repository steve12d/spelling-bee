start:
	python3 -m http.server 8080

sentences:
	# Query ChatGPT and save sentences to sentences.json
	# Usage: make sentences ARG="['game', 'shake', 'make', 'same', 'plane', 'brave', 'taste', 'take', 'little', 'there']"
	/home/stephen/venv/bin/python3 get_sentences.py "$(ARG)"