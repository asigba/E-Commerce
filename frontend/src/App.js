import React, { use } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Products from './pages/Products'; 
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login'; 
import Navbar from './pages/Navbar';
import Register from './pages/Register';
import './App.css';
import AuthProvider from './pages/AuthContext';
import CartProvider from './pages/CartContext';
import { useLocation } from 'react-router-dom';
import Checkout from './pages/Checkout';

function AppContent() {
  const location = useLocation();

  const hideNavbarRoutes = ['/login','/register']


  return (
    <>
    {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
        <div className='store'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/login' element={<Login />} />
            <Route path='/users/:userId' element={<UserProfile />} />
            <Route path='/products/:productId' element={<ProductDetails />} />     
            <Route path='/register' element={<Register />} />    
            <Route path='/checkout' element={<Checkout />} />
          </Routes>  
        </div>
      
    </>
  );
}

function App() {
  return (
    <AuthProvider> 
      <CartProvider> 
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}


export default App;
