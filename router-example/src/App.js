import { useState } from 'react';
import './App.css';
import Homepage from './page/Homepage';
import About from './page/About';
import { Routes, Route, Navigate } from  "react-router-dom";
import Product from './page/Product';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import UserInfo from './page/UserInfo';

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    return authenticate == true ? <UserInfo /> : <Navigate to="/login" />;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
