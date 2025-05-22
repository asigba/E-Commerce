from flask import Flask, jsonify, request
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
            Product(name='Barefoot Shoe', price=49.99, image='/static/images/barefoot-shoe.jpg', category='clothing'),
            Product(name="Apple IPhone 7", price=199.99, image='/static/images/apple-iphone.jpg', category='electronics'),
            Product(name='Armored Car', price=0.99, image='/static/images/armored-car.jpg', category='vehicles'),
            Product(name='Black Shirt', price=6.94, image='/static/images/black-shirt.jpg', category='clothing'),
            Product(name='Brown Shorts', price=16.94, image='/static/images/brown-shorts.jpg',category='clothing'),
            Product(name='Denim Shirt', price=49.99, image='/static/images/denim-shirt.jpg', category='clothing'),
            Product(name="Floral Shirt", price=19.99, image='/static/images/floral-shirt.jpg', category='clothing'),
            Product(name='Frog Shirt', price=8.99, image='/static/images/frog-shirt.jpg', category='clothing'),
            Product(name='Green Shorts', price=7.94, image='/static/images/green-shorts.jpg', category='clothing'),
            Product(name='Helicopter', price=11.94, image='/static/images/helicopter.jpg',category='vehicles'),
            Product(name='Hoverboard', price=49.99, image='/static/images/hoverboard.jpg', category='vehicles'),
            Product(name="Jetski", price=9.99, image='/static/images/jetski.jpg', category='vehicles'),
            Product(name='Keyboard & Mouse', price=5.99, image='/static/images/keyboard-and-mouse.jpg', category='electronics'),
            Product(name='Microphone', price=26.94, image='/static/images/microphone.jpg', category='electronics'),
            Product(name='Monitor', price=61.94, image='/static/images/monitor.jpg',category='electronics'),
            Product(name='MP3 Player', price=9.99, image='/static/images/mp3-player.jpg', category='electronics'),
            Product(name="Orange Shirt", price=1.99, image='/static/images/orange-shirt.jpg', category='clothing'),
            Product(name='Orange Shorts', price=9.99, image='/static/images/orange-shorts.jpg', category='clothing'),
            Product(name='PC', price=260.94, image='/static/images/pc.jpg', category='electronics'),
            Product(name='Pink Shorts', price=11.94, image='/static/images/pink-shorts.jpg',category='clothing'),
            Product(name='Plane', price=4.99, image='/static/images/plane.jpg', category='vehicles'),
            Product(name="3D Printer", price=199.99, image='/static/images/printer-3d.jpg', category='electronics'),
            Product(name='Submarine', price=6.99, image='/static/images/submarine.jpg', category='vehicles'),
            Product(name='SUV', price=3.94, image='/static/images/suv.jpg', category='vehicles'),
            Product(name='Train', price=6.94, image='/static/images/train.jpg',category='vehicles'),
            Product(name='TV', price=9.99, image='/static/images/tv.jpg', category='electronics'),
            Product(name="VR Headset", price=199.99, image='/static/images/vr-headset.jpg', category='electronics'),
            Product(name='Webcam', price=59.99, image='/static/images/webcam.jpg', category='electronics'),
            Product(name='Yacht', price=26.94, image='/static/images/yacht.jpg', category='vehicles'),
            Product(name='Yellow Shorts', price=161.94, image='/static/images/yellow-shorts.jpg',category='clothing')          
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
    
@app.route('/api/products', methods=['POST'])
def create_product():
    data = request.json
    new_product = Product(
        name=data['name'],
        price=data['price'],
        image=data['image'],
        category=data['category']
    )
    db.session.add(new_product)
    db.session.commit()
    return jsonify(new_product.to_dict()), 201

@app.route('/api/products/<string:category>', methods=['GET'])
def get_products_by_category(category):
    products = Product.query.filter_by(category=category).all()
    return jsonify([product.to_dict() for product in products])


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0',port=5001) 