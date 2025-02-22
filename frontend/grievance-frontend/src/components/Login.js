import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const LoginSignup = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const sendOtp = () => {
    setOtpSent(true);
    alert("OTP sent to your phone number");
  };

  const verifyOtp = () => {
    if (otp === "123456") {
      alert("OTP Verified Successfully");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="container-fluid login-page">
      <div className="header">
        <h2>PUBLIC GRIEVANCE MANAGEMENT SYSTEM</h2>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Login/Register</a>
        </nav>
      </div>
      
      <div className="row content">
        <div className="col-md-6 login-section">
          <h3>Sign in</h3>
          <input type="text" placeholder="NAME" className="form-control" />
          <div className="phone-input">
            <input type="text" placeholder="PHONE NO." className="form-control" />
            <button onClick={sendOtp} className="verify-btn">VERIFY</button>
          </div>
          {otpSent && (
            <>
              <input
                type="text"
                placeholder="OTP"
                className="form-control"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button onClick={verifyOtp} className="verify-btn">VERIFY OTP</button>
              <p className="resend-otp">RESEND OTP</p>
            </>
          )}
          <input type="email" placeholder="EMAIL ID" className="form-control" />
          <input type="password" placeholder="PASSWORD" className="form-control" />
        </div>

        <div className="col-md-6 signup-section">
          <h3>Sign up</h3>
          <input type="text" placeholder="NAME" className="form-control" />
          <input type="text" placeholder="PHONE NO. / EMAIL ID" className="form-control" />
          <input type="password" placeholder="PASSWORD" className="form-control" />
          <p className="forgot-password">FORGOT PASSWORD</p>
        </div>
      </div>

      <div className="footer">
        <p>Contact | Social Media</p>
        <p>© 2025 Grievance Management System</p>
      </div>
    </div>
  );
};

export default LoginSignup;

