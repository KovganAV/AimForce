import React, { useState } from "react";
import './RegisterForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("your-backend-endpoint", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(formData), 
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();

      console.log("Registration successful:", data);

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Email"
            name="email"
            required
            onChange={handleChange}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={handleChange}
          />
          <FaLock className="icon" />
        </div>

        <button type="submit">Register</button>
      </form>
      <div className="login-link">
        <p>
            <Link to="/login">Already have an account?</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
