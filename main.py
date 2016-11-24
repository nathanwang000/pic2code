from flask import Flask, render_template, send_from_directory, request
import base64
import re
from PIL import Image
from io import BytesIO

app = Flask(__name__, static_folder='static', static_url_path='/static')

@app.route('/', methods = ['POST', 'GET'])
def index():
    if request.method == 'POST':
        image_data = base64.b64decode(re.sub('^data:image/.+;base64,', '', request.form['img']))
        im = Image.open(BytesIO(image_data))
        im.show()
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
