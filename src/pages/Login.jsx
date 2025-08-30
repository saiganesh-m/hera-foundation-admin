import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "./Login.css"; // Custom styles
import Logo from "./logo.png"; // Make sure this exists in src

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check login credentials (hardcoded for this example)
    const email = "admin@therafoundation.com";
    const password = "Password@123$";

    // In your form, the values are fixed, so just validate
    // Normally, you'd get input values using state
    if (email === "admin@therafoundation.com" && password === "Password@123$") {
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="d-flex vh-100">
      {/* Left Section */}
      <div className="login-left-section col-md-6 d-flex flex-column justify-content-center align-items-start text-white p-5">
        <div className="hera-admin-logo d-flex align-items-center mb-3">
          <img
            src={Logo}
            alt="Hera Logo"
            className="logo-img"
            style={{ width: "40px", height: "40px", borderRadius: "8px" }}
          />
          <h3 className="fw-bold ms-2 mb-0">Hera Admin</h3>
          <p className="mb-5 admin-console-text">Admin Console</p>
        </div>

        <div className="welcome-section">
          <h2 className="fw-semibold welcome-admin-text fs-2">Welcome back, Admin</h2>
          <p className="text-white-25 sign-in-text fs-6">
            Sign in to manage journeys, content, users and insights across Hera's platform
          </p>
        </div>

        <small className="mt-auto copyright-text">© 2025 Hera</small>
      </div>

      {/* Right Section */}
      <div className="col-md-6 d-flex justify-content-center align-items-center bg-light">
        <div className="card shadow p-4 rounded-4 login-card">
          <h5 className="fw-bold mb-2 admin-login-title">Admin Login</h5>
          <small className="text-muted mb-3 single-admin-access-text">Single admin access</small>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="admin@therafoundation.com"
                value="admin@therafoundation.com"
                readOnly
              />
            </div>

            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                placeholder="Password@123$"
                value="Password@123$"
                readOnly
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 rounded-pill login-button">
              Login
            </button>

            <small className="text-muted d-block mt-3 tip-text">
              Tip: Do not share the admin Login and password with anyone outside the organization
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}
