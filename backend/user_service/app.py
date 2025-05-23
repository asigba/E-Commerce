from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@postgres_user:5432/user_database'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email
        }

with app.app_context():
    db.create_all()
    if not User.query.first():
        # Add sample data if the table is empty
        sample_users = [
            User(name='John Doe', email='john@email.com', password='password123'),
            User(name='Jane Smith', email='jane@email.com', password='password456'),
        ]
        db.session.add_all(sample_users)
        db.session.commit()


@app.route('/api/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users])

@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get(user_id)
    if user:
        return jsonify(user.to_dict())
    else:
        return jsonify({"error": "User not found"}), 404
    
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if user and user.password == password:
        return jsonify({
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "message": "Login successful"
            }), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401
    
@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    name = data.get('fullName')
    email = data.get('email')
    password = data.get('password')

    if User.query.filter_by(email=email).first():
        return jsonify({"error": "Email already exists"}), 400

    new_user = User(name=name, email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

@app.route('/api/users/itemsListed', methods=['GET'])
def get_items_listed():
    # This is a placeholder. In a real application, you would fetch the items listed by the user.
    # For now, we'll just return an empty list.
    return jsonify([])

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0',port=5002)