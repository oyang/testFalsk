from db import db
from uuid import uuid4

__all__ = ['Task']

class Task(db.Model):
    id = db.Column(db.String(36), default=lambda: str(uuid4()), primary_key=True)
    subject = db.Column(db.String(64))
