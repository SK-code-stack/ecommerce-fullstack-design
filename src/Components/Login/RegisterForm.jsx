import React, { useState } from 'react';
import axios from 'axios';
import api from "../Api"

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    full_name: '',
    password: '',
    confirm_password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/accounts/register/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(
        err.response?.data?.detail || JSON.stringify(err.response?.data || 'Something went wrong')
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Register
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-center">{message}</p>}
    </div>
  );
};

export default RegisterForm;
