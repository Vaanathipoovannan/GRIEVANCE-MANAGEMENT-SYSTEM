// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/complaint-status">Complaint Status</Link>
      <Link to="/profile">Profile</Link>
      
    </nav>
  );
}

export default Navbar;
