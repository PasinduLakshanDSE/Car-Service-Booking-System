import React, { useState, useEffect } from "react";
import "./design.css";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";

function Log() {
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("signUp");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400); // 400ms loading delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };

  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");

  return (
    <div className="body">
      {loading ? (
        <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        style={{ zIndex: 9999 }}
      >
        <div
          className="spinner-border text-primary"
          style={{ width: '3rem', height: '3rem' }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      ) : (
        <div className="logapp">
          <div className={containerClass} id="container">
            <div className="container1">
              <SignUpForm />
              <SignInForm />
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1 className="title">Welcome Back!</h1>
                    <p className="p">
                      If you already have an account, please log in here
                    </p>
                    <button
                      className="ghost button"
                      id="signIn"
                      onClick={() => handleOnClick("signIn")}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1 className="title">Hello, Customer!</h1>
                    <p className="p">Don't have an account? Sign up here</p>
                    <button
                      className="ghost button"
                      id="signUp"
                      onClick={() => handleOnClick("signUp")}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Log;
