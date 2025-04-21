import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Login component renders a login form inside a card.
 * This component is part of the authentication flow.
 */
export default function Login() {


  const loginUrl = "http://localhost:3000/login"; // Replace with your actual registration URL

  const initialFormState = {

    email: "",
    password: "",

  }

  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here

    console.log("Form submitted:", form);



    fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        console.log("Login response:", data);
      })
      .catch(error => {
        console.error("Error during login:", error);
      })
      .finally(() => {
        setForm(initialFormState)
      })
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card p-4" style={{ minWidth: 350 }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>
          <div className="mt-3 text-center">
            Don't have an account? <Link to="/register">Register now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}