from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

# Configure PostgreSQL database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@postgres_product:5432/product_database'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the database
db = SQLAlchemy(app)

class Product(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float, nullable=False)
    image = db.Column(db.String(255), nullable=True)  
    category = db.Column(db.String(50), nullable=True)  

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'image': f"http://localhost:5001{self.image}",
            'category': self.category
        }
    
# Create the database and tables
with app.app_context():
    db.create_all()
    if not Product.query.first():
        # Add sample data if the table is empty
        sample_products = [
            Product(name='Vintage Phone', price=59.99, image='/static/images/vintage-phone.jpg', category='electronics'),
            Product(name='Vintage Bike', price=26.94, image='/static/images/vintage-bike.jpg', category='vehicles'),
            Product(name='Vintage Car', price=161.94, image='/static/images/vintage-car.jpg',category='vehicles'),
        ]
        db.session.add_all(sample_products)
        db.session.commit()

@app.route('/api/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([product.to_dict() for product in products])

@app.route('/api/products/<int:productId>', methods=['GET'])
def get_product(productId):
    product = Product.query.get(productId)
    
    if product:
        return jsonify(product.to_dict())
    else:
        return jsonify({'error': 'Product not found'}), 404

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0',port=5001) 