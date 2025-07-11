


import React from 'react';
import { Link } from 'react-router-dom';
import './log_in.css';

function log_in() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />

        <button type="submit">Login</button>

        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </form>
    </div>
  );
}

export default log_in;

