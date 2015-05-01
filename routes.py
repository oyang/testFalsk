from app import app

@app.route('/')
@app.route('/index.html')
def index():
    return app.send_static_file('index.html')
