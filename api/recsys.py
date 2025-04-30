import requests

# Replace with your OpenRouter API key


def recsys(text):

    API_URL = 'https://openrouter.ai/api/v1/chat/completions'

    headers = {
        'Authorization': f'Bearer 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',
        'Content-Type': 'application/json'
    }

    data = {
        "model": "deepseek/deepseek-chat:free",
        "messages": [{"role": "user", "content": "Порекомендуй книги для людей, которым нравится книга "+text}]
    }

    response = requests.post(API_URL, json=data, headers=headers)
    

    if response.status_code == 200:
        return response.json()
    else:
        return response.status_code