import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate('/');
  }

  return (
    <div>
      <h1>About</h1>
      <button onClick={goToHomepage}>GO to Homepage</button>
    </div>
  );
};

export default About;
