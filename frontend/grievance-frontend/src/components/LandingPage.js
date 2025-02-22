import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4">
        <a className="navbar-brand text-white fw-bold" href="#">PUBLIC GRIEVANCE MANAGEMENT SYSTEM</a>
        <div className="ms-auto">
          <a className="text-white mx-3" href="/">Home</a>
          <a className="text-white mx-3" href="#">About</a>
          <a className="text-white mx-3" href="#">Contact</a>
          <a className="text-white mx-3" href="#" style={{ color: "#ea4a57" }}>
            Login/ Register
          </a>
          <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/complaint-status">Complaint Status</Link>
      <Link to="/profile">Profile</Link>
        </div>
        
      </nav>

      {/* Hero Section */}
      <div
        className="text-center text-white d-flex flex-column justify-content-center align-items-center"
        style={{
          background: "url('C:\Users\SRI\Desktop\grievance management system\frontend\grievance-frontend\public\images\image1.jpg') no-repeat center center/cover",
          height: "70vh",
        }}
      >
        <h2 className="fw-bold">PUBLIC GRIEVANCE MANAGEMENT SYSTEM</h2>
        <p className="fw-semibold">
          We respect your privacy, Your data is confidential & securely stored
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-danger text-white text-center py-3">
        <div>
          <a href="#" className="text-white me-4">Contact</a>
          <a href="#" className="text-white">Social Media</a>
        </div>
        <p className="mt-2 mb-0">&copy; 2025 Grievance Management System</p>
      </footer>
    </div>
  );
};

export default LandingPage;
