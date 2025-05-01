import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';



import './App.css';

function App() {
  return (
    <Router>
        <div className='store'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<h1>Products</h1>} />
            <Route path='/cart' element={<h1>Cart</h1>} />
            <Route path='/checkout' element={<h1>Checkout</h1>} />
            <Route path='/login' element={<h1>Login</h1>} />
            <Route path='/register' element={<h1>Register</h1>} />
            <Route path='/profile' element={<h1>Profile</h1>} />
            <Route path='/orders' element={<h1>Orders</h1>} />
            <Route path='/order/:id' element={<h1>Order Details</h1>} />
            <Route path='/products/:id' element={<h1>Product Details</h1>} />         
          </Routes>  
        </div>
    </Router>
  );
}

export default App;
