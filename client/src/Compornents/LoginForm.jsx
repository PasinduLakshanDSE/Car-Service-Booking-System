import React, { useState } from 'react';
import './css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AuthForm() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [signupError, setSignupError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({ name: "", address: "", contact: "", email: "", password: "", confirmPassword: "" });

  const togglePanel = () => setIsRightPanelActive(!isRightPanelActive);

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    formType === "login"
      ? setLoginForm({ ...loginForm, [name]: value })
      : setSignupForm({ ...signupForm, [name]: value });
  };

  const validateSignup = (e) => {
    e.preventDefault();
    if (signupForm.password !== signupForm.confirmPassword) {
      setSignupError("Passwords do not match.");
      return;
    }
    setSignupError("");
    alert("Account created successfully!");
  };

  const validateLogin = (e) => {
    e.preventDefault();
    const validEmail = "user@example.com";
    const validPassword = "password123";
    if (loginForm.email !== validEmail || loginForm.password !== validPassword) {
      setLoginError("Email or password does not match.");
      return;
    }
    setLoginError("");
    alert("Logged in successfully!");
  };

  return (
    <div className={`body1  con container ${isRightPanelActive ? "right-panel-active" : ""}`}>

      <div className="row shadow-lg login-container">
        {/* Login Form */}
        <div className={`col-md-6 form-container ${isRightPanelActive ? "d-none" : "d-block"}`}>
          <form onSubmit={validateLogin} className="p-4">
            <h1>Sign In</h1>
            <div className="form-group">
              <input type="email" name="email" className="form-control" placeholder="Email" value={loginForm.email} onChange={(e) => handleInputChange(e, "login")} required />
            </div>
            <div className="form-group">
              <input type="password" name="password" className="form-control" placeholder="Password" value={loginForm.password} onChange={(e) => handleInputChange(e, "login")} required />
            </div>
            {loginError && <p className="text-danger">{loginError}</p>}
            <button type="submit" className="btn btn-primary w-100">Log In</button>
          </form>
        </div>

        {/* Signup Form */}
        <div className={`col-md-6 form-container ${isRightPanelActive ? "d-block" : "d-none"}`}>
          <form onSubmit={validateSignup} className="p-4">
            <h1>Create Account</h1>
            <div className="form-group">
              <input type="text" name="name" className="form-control" placeholder="Name" value={signupForm.name} onChange={(e) => handleInputChange(e, "signup")} required />
            </div>
            <div className="form-group">
              <input type="text" name="address" className="form-control" placeholder="Address" value={signupForm.address} onChange={(e) => handleInputChange(e, "signup")} required />
            </div>
            <div className="form-group">
              <input type="tel" name="contact" className="form-control" placeholder="Contact Number" value={signupForm.contact} onChange={(e) => handleInputChange(e, "signup")} required />
            </div>
            <div className="form-group">
              <input type="email" name="email" className="form-control" placeholder="Email" value={signupForm.email} onChange={(e) => handleInputChange(e, "signup")} required />
            </div>
            <div className="form-group">
              <input type="password" name="password" className="form-control" placeholder="Password" value={signupForm.password} onChange={(e) => handleInputChange(e, "signup")} required />
            </div>
            <div className="form-group">
              <input type="password" name="confirmPassword" className="form-control" placeholder="Confirm Password" value={signupForm.confirmPassword} onChange={(e) => handleInputChange(e, "signup")} required />
            </div>
            {signupError && <p className="text-danger">{signupError}</p>}
            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          </form>
        </div>

        {/* Overlay Panel */}
        <div className="col-md-6 overlay-container">
          <div className="overlay">
            <div className="overlay-panel d-flex flex-column justify-content-center align-items-center">
              {isRightPanelActive ? (
                <>
                  <h1>Welcome Back!</h1>
                  <p>If you already have an account, please log in here</p>
                  <button className="btn btn-light mt-2" onClick={togglePanel}>Log In</button>
                </>
              ) : (
                <>
                  <h1>Hello, Customer!</h1>
                  <p>Don't have an account? Sign up here</p>
                  <button className="btn btn-light mt-2" onClick={togglePanel}>Sign Up</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
