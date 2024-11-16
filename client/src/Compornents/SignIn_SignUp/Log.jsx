import React, { useState } from "react";
import "./design.css";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";

 function Log() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="body">
    <div className="logapp ">
      
      <div className={containerClass} id="container" >
        <div className="container1">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="title">Welcome Back!</h1>
              <p className="p">
              If you already have an account, please login in here
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
              <h1 className="title">Hello,Customer!</h1>
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
    </div>
  );
}
export default Log;
