from flask.ext.script import Manager

from app import app
from routes import *
from db import db
import modules
import api

manager = Manager(app)

@manager.command
def create_db():
    db.create_all()

@manager.command
def runserver():
    api.create_api(app, db)
    app.run()

if __name__ == "__main__":
    manager.run()
