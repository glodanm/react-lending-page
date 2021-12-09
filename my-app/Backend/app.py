from flask import Flask, request, jsonify, abort
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS, cross_origin
from os import abort

app = Flask(__name__)

CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///entertainment.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Entertainment(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(20))
    paragraph = db.Column(db.String(10000))
    imageUrl  = db.Column(db.String(10000))
    price = db.Column(db.Integer)

class EntertainmentSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'paragraph', 'imageUrl',  'price')
    
entertainment_schema = EntertainmentSchema()
entertainments_schema = EntertainmentSchema(many=True)

@app.route("/search", methods=["GET"])
@cross_origin()
def get_search():
    search_query = request.args.get('title')
    entertainments = Entertainment.query.filter(Entertainment.title.contains(search_query)).all()
    result = entertainment_schema.dump(entertainments)
    return jsonify(result)

@app.route('/entertainment', methods=['GET'])
@cross_origin()
def get_entertainments():
    all_entertainments = Entertainment.query.all()
    result = entertainments_schema.dump(all_entertainments)
    return jsonify(result)


@app.route('/entertainment/<id>', methods=['GET'])
@cross_origin()
def get_entertainment(id):
    entertainment = Entertainment.query.get(id)
    if entertainment == None:
        abort(404)
    return entertainment_schema.jsonify(entertainment)


@app.route('/entertainment', methods=['POST'])
@cross_origin()
def add_entertainment():
    data = EntertainmentSchema().load(request.json)
    new_entertainment = Entertainment(**data)
    
    db.session.add(new_entertainment)
    db.session.commit()

    return entertainment_schema.jsonify(new_entertainment)


@app.route('/entertainment/<id>', methods=['PUT'])
@cross_origin()
def put_entertainment(id):
    entertainment = Entertainment.query.get(id)
    
    if entertainment == None:
        abort(404)

    data = EntertainmentSchema().load(request.json)

    for i in data:
        setattr(entertainment, i, request.json[i])

    db.session.commit()
    return entertainment_schema.jsonify(entertainment)


@app.route('/entertainment/<id>', methods=['DELETE'])
@cross_origin()
def delete_entertainment(id):
    entertainment = Entertainment.query.get(id)
    if entertainment == None:
        abort(404)

    db.session.delete(entertainment)
    db.session.commit()

    return entertainment_schema.jsonify(entertainment)


if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)