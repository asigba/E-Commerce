import requests
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/orders', methods=['GET'])
def get_orders():
    response = requests.get('http://localhost:5001/api/orders')
    products = response.json()
    orders = [{"id": 1, "product": products[0], "quantity": 2},]
    return jsonify(orders)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0',port=5003)