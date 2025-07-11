



import React from 'react';
import { Link } from 'react-router-dom';
import './sign_up.css';

function Signup() {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" required />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password</label>
        <input type="password" placeholder="Create a password" required />

        <button type="submit">Sign Up</button>

        <p>Already have an account? <Link to="/">Login</Link></p>
      </form>
    </div>
  );
}

export default Signup;

