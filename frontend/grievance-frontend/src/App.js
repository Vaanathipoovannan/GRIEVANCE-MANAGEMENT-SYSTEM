import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';
import ComplaintForm from './ComplaintForm';
import ComplaintStatus from './ComplaintStatus';
import AdminDashboard from './AdminDashboard';
import ProfilePage from './ProfilePage';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Navbar />  {/* Navigation Bar */}
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/complaint-form" element={<ComplaintForm />} />
        <Route path="/complaint-status" element={<ComplaintStatus />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      
      <Footer />  {/* Footer */}
    </Router>
  );
}

export default App;

