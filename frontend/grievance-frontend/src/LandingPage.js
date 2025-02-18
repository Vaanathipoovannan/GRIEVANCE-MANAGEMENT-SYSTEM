import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to the Grievance Management System</h1>
        <p>Your one-stop platform to raise and track grievances efficiently.</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ul>
          <li>Step 1: Register or Login</li>
          <li>Step 2: Submit your complaint</li>
          <li>Step 3: Track your complaint status</li>
          <li>Step 4: Get resolution notifications</li>
        </ul>
      </section>
    </div>
  );
}

export default LandingPage;

