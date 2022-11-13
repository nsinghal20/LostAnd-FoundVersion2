from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app.config['SQLALCHEMY_DATABASE_URI']= "sqlite:///todo.db"
db=SQLAlchemy(app)

class Todo(db.Model):
    sno=db.column(db.Integer , primary_key = True)
    title=db.column(db.String(200) , nullable = False)

    def __repr__(self) -> str:
        return f"{self.sno} - {self.title}"

app=flask.Flask("__main__")
@app.route("/")

def ny_index():
    return flask.render_template("index.html",token="Hello Veer")

app.run(debug=True)

