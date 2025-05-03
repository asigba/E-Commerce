from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

products = [
    {"id": 1, "name": "Laptop", "price": 999.99},
    {"id": 2, "name": "Smartphone", "price": 499.99},
    {"id": 3, "name": "Tablet", "price": 299.99},
    {"id": 4, "name": "Smartwatch", "price": 199.99},
    {"id": 5, "name": "Headphones", "price": 149.99},
]

@app.route('/api/products', methods=['GET'])
def get_products():
    return jsonify(products)

@app.route('/api/products/<int:productId>', methods=['GET'])
def get_product(productId):
    prod = next((prod for prod in products if prod['id'] == productId), None)
    if prod:
        return jsonify([prod])
    else:
        return jsonify({"error": "Product not found"}), 404

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0',port=5001) 