# E-Commerce

A full-stack e-commerce web application built with React, Flask, and PostgreSQL.

## Features

- User authentication (sign up, login, logout)
- Product listing and categories(done)
- Product details page(done)
- Add to cart and checkout(done)
- Admin product management (not sure yet)
- Image upload and display(still working on this!!!)

## Tech Stack

- **Frontend:** React, React Router
- **Backend:** Flask, Flask-SQLAlchemy
- **Database:** PostgreSQL
- **Other:** Docker (Required), AWS S3 (optional for image storage)

## Getting Started

### Prerequisites

- Node.js & npm
- Python 3.x & pip
- PostgreSQL
- (Required) Docker

### Installation 

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/e-commerce.git
   cd e-commerce
   ```

2. **Install Docker**

3. **Docker Compose**

   ```
   docker compose up --build
   ```

### Usage

- Visit `http://localhost:3000` for the frontend.
- The backend API runs on `http://localhost:5001`.

## Folder Structure

```
/backend
  /order_service
    app.py
    Dockerfile
    requirements.txt
  /product_service
    /static
      /images
        apple-iphone.jpg
        barefoot-shoe.jpg
        vintage-bike.jpg
        vintage-car.jpg
        vintage-phone.jpg
    app.py
    Dockerfile
    requirements.txt
  /user_service
    app.py
    Dockerfile
    requirements.txt
/frontend
  /images
    hero-background.jpg
  /public
    index.html
  /src
    /components
      Category.css
      Category.jsx
      Navbar.css
      Navbar.jsx
    /context
      AuthContext.jsx
      CartContext.jsx
    /pages
      /Admin
        AdminDashboard.jsx
      /Checkout
        CartSummary.css
        CartSummary.jsx
        Checkout.css
        Checkout.jsx
        CheckoutButton.jsx
        PaymentForm.css
        PaymentForm.jsx
        ShippingForm.jsx
      /Products
        ProductDetails.css
        ProductDetails.jsx
        Products.css
        Products.jsx
      Cart.css
      Cart.jsx
      Home.css
      Home.jsx
      Login.css
      Login.jsx
      Register.css
      Register.jsx
      UserProfile.css
      UserProfile.jsx
    App.css
    App.js
    App.test.js
    index.css
    index.js
  package-lock.json
  package-json
docker-compose.yml
package-lock.json
package.json
rmAll.sh
/README.md
```

## API Endpoints

- `GET /api/products` — List all products
- `GET /api/products/<id>` — Get product details
- `GET /api/products/<category>` - Get all products under category
- `POST /api/login` — User login
- `GET /api/users/<id>` - Get user profile
