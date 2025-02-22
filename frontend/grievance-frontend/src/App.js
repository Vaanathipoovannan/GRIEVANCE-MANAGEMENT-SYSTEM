import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import ComplaintForm from './components/ComplaintForm';
import ComplaintStatus from './components/ComplaintStatus';
import AdminDashboard from './components/AdminDashboard';
import ProfilePage from './components/ProfilePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />  
      <LandingPage/>
      {/* <Login />
      <Register />
      <ComplaintForm />
      <ComplaintStatus />
      <AdminDashboard />
      <ProfilePage /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/complaint-form" element={<ComplaintForm />} />
        <Route path="/complaint-status" element={<ComplaintStatus />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      
      <Footer />  
    </Router>
  );
}

export default App;

