import { useState } from 'react';
import axios from '../services/api';
import './Login.css'; // Make sure to import the CSS file

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = e => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', credentials);
      alert('Login successful');
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      alert('Login failed: ' + err.response.data.error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="form-title">Student Login</h2>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="input-style" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="input-style" />
        <button className="submit-btn">Login</button>
      </form>
    </div>
  );
}
