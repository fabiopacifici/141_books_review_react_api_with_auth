import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../contexts/GlobalContext";

/**
 * Register component renders a registration form inside a card.
 * This component is part of the authentication flow.
 */
export default function Register() {


  /*  const { setIsLoading } = useContext(GlobalContext); */
  /* setIsLoading(false); */

  const registrationUrl = "http://localhost:3000/register"; // Replace with your actual registration URL

  const initialFormState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  }
  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here

    console.log("Form submitted:", form);



    fetch(registrationUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        console.log("Registration response:", data);
      })
      .catch(error => {
        console.error("Error during login:", error);
      })
      .finally(() => {
        setForm(initialFormState);
      })


  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card p-4" style={{ minWidth: 350 }}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={form.email}
              autoComplete="off"
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
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
          <div className="mt-3 text-center">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}