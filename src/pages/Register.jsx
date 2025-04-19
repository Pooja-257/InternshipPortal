import { useState } from 'react';
import axios from '../services/api';
import './Register.css'; // Make sure this path is correct

export default function Register() {
  const [form, setForm] = useState({ rollNo: '', name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!form.rollNo || !form.name || !form.email || !form.password) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      await axios.post('/auth/register', form);
      alert('Registered successfully');
      setForm({ rollNo: '', name: '', email: '', password: '', confirmPassword: '' });
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2 className="form-title">Student Registration</h2>

        {error && <div className="error-message">{error}</div>}

        <input 
          name="rollNo" 
          placeholder="Roll No" 
          value={form.rollNo} 
          onChange={handleChange} 
          className="input-style" 
        />
        <input 
          name="name" 
          placeholder="Name" 
          value={form.name} 
          onChange={handleChange} 
          className="input-style" 
        />
        <input 
          name="email" 
          type="email" 
          placeholder="Email" 
          value={form.email} 
          onChange={handleChange} 
          className="input-style" 
        />
        <input 
          name="password" 
          type="password" 
          placeholder="Password" 
          value={form.password} 
          onChange={handleChange} 
          className="input-style" 
        />
        <input 
          name="confirmPassword" 
          type="password" 
          placeholder="Confirm Password" 
          value={form.confirmPassword} 
          onChange={handleChange} 
          className="input-style" 
        />

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
}
