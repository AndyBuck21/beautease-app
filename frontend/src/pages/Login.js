import { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://beautease-api.onrender.com';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(${API_URL}/api/auth/login, form);
      localStorage.setItem('token', res.data.token);
      setMessage('Login Successful!');
      window.location.href = '/dashboard';
    } catch (err) {
      setMessage('Invalid credentials');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required /><br/><br/>
        <input placeholder="Password" type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required /><br/><br/>
        <button type="submit" style={{ padding: '10px 20px', background: '#ff4081', color: 'white', border: 'none' }}>
          Login
        </button>
      </form>
      {message && <p style={{ marginTop: 20, color: message.includes('Success') ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
}