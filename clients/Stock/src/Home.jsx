import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import backgroundImage from './assets/Background.jpg';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}> 
      <h1>Welcome to "Investment Innovations: Cutting-Edge Tactics for Wealth Growth"</h1>
      <div className="buttons">
        <Link to="/signup" className="button">Sign Up</Link>
        <Link to="/login" className="button">Login</Link>
      </div>
    </div>
  );
}

export default Home;
