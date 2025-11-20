import { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://beautease-api.onrender.com'; // ← CHANGE TO YOUR RENDER URL

export default function Register() {
  const [form, setForm] = useState({
    name: '', email: '', password: '', role: 'customer'
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(${API_URL}/api/auth/register, form);
      setMessage('Registration Successful! Token saved.');
      localStorage.setItem('token', res.data.token);
      window.location.href = '/dashboard';
    } catch (err) {
      setMessage(err.response?.data?.msg || 'Error registering');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required /><br/><br/>
        <input placeholder="Email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required /><br/><br/>
        <input placeholder="Password" type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required /><br/><br/>
        <select value={form.role} onChange={e => setForm({...form, role: e.target.value})}>
          <option value="customer">Customer</option>
          <option value="provider">Beautician (Provider)</option>
        </select><br/><br/>
        <button type="submit" style={{ padding: '10px 20px', background: '#ff4081', color: 'white', border: 'none' }}>
          Register Now
        </button>
      </form>
      {message && <p style={{ marginTop: 20, color: message.includes('Success') ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
}