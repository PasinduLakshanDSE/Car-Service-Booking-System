import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Alert } from "react-bootstrap";

function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
    address: "",
    contactNo: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = React.useState({
    name: "",
    address: "",
    contactNo: "",
    email: "",
    password: ""
  });

  const [showAlert, setShowAlert] = React.useState(false); // State for success alert

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
    const newErrors = { name: "", address: "", contactNo: "", email: "", password: "" };

    // Name validation
    if (!state.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    // Contact Number validation (basic regex for numbers)
    const contactNoRegex = /^[0-9]{10}$/;
    if (!contactNoRegex.test(state.contactNo)) {
      newErrors.contactNo = "Contact number must be 10 digits.";
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(state.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    // Password validation
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
        const result = await axios.post('/api/users/SignUpForm', state);
        console.log(result.data);
        setState({ name: "", contactNo: "", email: "", password: "" });
        setShowAlert(true); // Show success alert
        setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="form-container sign-up-container">
      

      <form className="form" onSubmit={handleOnSubmit}>
      {showAlert && (
        <Alert variant="success" className="mt-2">
          Registration successful! 
        </Alert>
      )}
        <h1 className="title pb-3">Create Account</h1>

        <input
          className={`input ${errors.name && "is-invalid"}`}
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name && <small className="text-danger">{errors.name}</small>}

        <input
          className={`input ${errors.contactNo && "is-invalid"}`}
          type="text"
          name="contactNo"
          value={state.contactNo}
          onChange={handleChange}
          placeholder="Contact No"
        />
        {errors.contactNo && <small className="text-danger">{errors.contactNo}</small>}

        <input
          className={`input ${errors.email && "is-invalid"}`}
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <small className="text-danger">{errors.email}</small>}

        <input
          className={`input ${errors.password && "is-invalid"}`}
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <small className="text-danger">{errors.password}</small>}

        <button className="button mt-3">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
