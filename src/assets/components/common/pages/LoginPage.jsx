import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      navigate('/home'); 
    } else {
      alert('Please enter valid credentials!');
    }
  };

  return (
    <div className="login-page">
      {/* Top Header */}
      <header className="header">
        <div className="header-left">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"></img>
          <input
            type="text"
            className="search-bar"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="header-right">
          <button className="login-btn"><p>Login</p></button>
          <button className="seller-btn"><p>Become a Seller</p></button>
          <button className="cart-btn"><p>Cart</p></button>
        </div>
      </header>

      {/* Center Login Box */}
      <div className="login-box">
        <div className="login-left">
          <h2>Login</h2>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg"
            alt="Login Illustration"
          />
        </div>
        <div className="login-right">
          <div className="input-field">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button className="submit-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;