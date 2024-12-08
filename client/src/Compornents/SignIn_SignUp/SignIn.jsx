import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Alert } from "react-bootstrap"; 

function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = React.useState({
    email: "",
    password: ""
  });
  const [showError, setShowError] = React.useState(false); // Error alert state
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setState({
      ...state,
      [name]: value
    });

    // Clear error when user modifies input
    setErrors({
      ...errors,
      [name]: ""
    });
  };

  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(state.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    // Password validation (minimum 6 characters)
    if (state.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    if (validate()) {
      try {
        const result = await axios.post('http://localhost:5000/api/users/SignInForm', state);
        console.log(result.data);
        setState({ email: "", password: "" });
        setShowError(false); // Hide error on successful login

        // Store user data and navigate to the home page
        localStorage.setItem('currentUser', JSON.stringify(result.data));
        navigate('/');  // Navigate to the home page after login
      } catch (error) {
        console.error(error);
        setShowError(true); // Show error alert if login fails
      }
    } else {
      setShowError(true); // Show error alert if validation fails
    }
  };

  return (
    <div className="form-container sign-in-container">
     
      <form className="form" onSubmit={handleOnSubmit}>
         {/* Error Alert */}
      {showError && (
        <Alert variant="danger" className="mt-2">
          Invalid email or password. Please try again.
        </Alert>
      )}
        <h1 className="title pb-3">Sign in</h1>
        <input
          className={`input ${errors.email && "is-invalid"}`}
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        {errors.email && <small className="text-danger">{errors.email}</small>}

        <input
          className={`input ${errors.password && "is-invalid"}`}
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        {errors.password && <small className="text-danger">{errors.password}</small>}

        <button className="button mt-3" type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
