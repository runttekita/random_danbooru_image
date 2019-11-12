from flask import Flask
from dotenv import load_dotenv
import os

app = Flask(__name__)
load_dotenv()
token = os.getenv("API_KEY")


@app.route('/request')
def send_api_query():
    return 'Hello, World!'


if __name__ == '__main__':
    app.run()
