##pip3 freeze > requirements.txt

from config import app

if __name__ == '__main__':
    app.run(debug=True, port=5000)
