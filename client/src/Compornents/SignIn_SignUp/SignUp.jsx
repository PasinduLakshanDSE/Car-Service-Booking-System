import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    const newErrors = { name: "",  contactNo: "", email: "", password: "" };

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

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    if (validate()) {
      console.log("Form submitted successfully:", state);

      // Clear form fields after successful submission
      setState({
        name: "",
        address: "",
        contactNo: "",
        email: "",
        password: ""
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form className="form" onSubmit={handleOnSubmit}>
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

        
        {errors.address && <small className="text-danger">{errors.address}</small>}

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
