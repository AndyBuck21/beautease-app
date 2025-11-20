import { useState } from 'react';
import axios from 'axios';
const API = 'https://beautease-api.onrender.com';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(${API}/api/auth/login, form);
      localStorage.setItem('token', res.data.token);
      setMsg('Login Successful! 🎉');
      setTimeout(() => window.location.href = '/dashboard', 1500);
    } catch (err) {
      setMsg('Invalid credentials');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" type="email" required style={{ width: '100%', padding: 10, margin: '10px 0' }}
          onChange={e => setForm({...form, email: e.target.value})} />
        <input placeholder="Password" type="password" required style={{ width: '100%', padding: 10, margin: '10px 0' }}
          onChange={e => setForm({...form, password: e.target.value})} />
        <button type="submit" style={{ width: '100%', padding: 12, background: '#ff4081', color: 'white', border: 'none', borderRadius: 5 }}>
          Login
        </button>
      </form>
      {msg && <p style={{ marginTop: 20, color: msg.includes('Success') ? 'green' : 'red', textAlign: 'center' }}>{msg}</p>}
    </div>
  );
}