# Spelling Bee Learning Game

...

## Spelling Bee Admin Tool

This tool helps automate sentence generation using OpenAI, serves the website locally, and allows calendar generation.

## Installation

1. Using `pipx` (recommended):
    ```bash
    python -m pip install pipx
    python -m pipx ensurepath
    pipx install .
    ```

2. Using pip:
    ```bash
    pip install .
    ```

3. Set up the `.env` file with your OpenAI API key:
    ```
    OPENAI_API_KEY=your_openai_api_key
    OPENAI_ORG_ID=your_openai_org_id
    ```

## Usage

### Generate Sentences
```bash
spellingbee --sentences
```