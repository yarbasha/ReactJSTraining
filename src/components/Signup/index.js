import React from 'react';
import './signup.css';

export default function Signup(props) {
  return (
    <>
      <div className="side">

      </div>
      <div className="content">
        <h1>Create Account</h1>
        <div className="social-buttons-container">
          <div className="social-button">
            <a href="http://">f</a>
          </div>
          <div className="social-button">
            <a href="http://">G</a>
          </div>
          <div className="social-button">
            <a href="http://">in</a>
          </div>
        </div>
        <div>
          <label>or use your email for registration:</label>
        </div>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button>SIGN UP</button>
      </div>

    </>
  );
}