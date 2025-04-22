import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

/**
 * Login component renders a login form inside a card.
 * This component is part of the authentication flow.
 */
export default function Login() {

  const { login } = useAuth();
  const navigate = useNavigate();


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

    login(form.email, form.password)
      .then(data => {
        if (data.user) navigate('/admin')
        else alert("Invalid credentials")
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