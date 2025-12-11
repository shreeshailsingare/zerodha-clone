import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, form);

      if (res.data.success) {
        alert("Signup successful! Please log in.");
        navigate("/login"); 
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow p-4" style={{ width: "380px" }}>
        <h3 className="text-center mb-4">Create Account</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter username"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
