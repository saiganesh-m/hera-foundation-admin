// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Logo from "./logo.png"; // Ensure logo.png exists in src

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@theherafoundation.com");
  const [password, setPassword] = useState("Password@1235");

  const handleSubmit = (e) => {
    e.preventDefault();

    const validEmail = "admin@theherafoundation.com";
    const validPassword = "Password@1235";

    if (email === validEmail && password === validPassword) {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="login-left-section">
        <div className="hera-admin-logo">
          <img src={Logo} alt="Hera Logo" className="logo-placeholder" />
          <div className="logo-text">
            <h3>Hera Admin</h3>
            <p>Admin Console</p>
          </div>
        </div>

        <div className="welcome-section">
          <h2>Welcome back, Admin</h2>
          <p>
            Sign in to manage journeys, content, users and insights across Hera's platform.
          </p>
        </div>

        <small className="copyright-text">© 2025 Hera</small>
      </div>

      {/* Right Section */}
      <div className="login-right-section">
        <div className="login-card">
          <h5>Admin Login</h5>
          <small className="subtitle">Single admin access</small>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="emailInput">Email</label>
              <input
                type="email"
                id="emailInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@theherafoundation.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="passwordInput">Password</label>
              <input
                type="password"
                id="passwordInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password@1235"
              />
            </div>

            <button type="submit" className="login-button">
              Login
            </button>

            <small className="tip-text">
              Tip: Do not share the admin login and password with anyone outside the organization
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}
