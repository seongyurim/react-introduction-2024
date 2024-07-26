import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate('/products?q=pants');
  }

  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/about">Go to about page</Link><p />
      <button onClick={goProductPage}>Go to Product Page</button>
    </div>
  );
};

export default Homepage;
