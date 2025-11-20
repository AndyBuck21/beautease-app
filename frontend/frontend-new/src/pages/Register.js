import { useState } from 'react';
import axios from 'axios';

const API = 'https://beautease-api.onrender.com'; // ← CHANGE IF YOUR RENDER URL IS DIFFERENT

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'customer' });
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(${API}/api/auth/register, form);
      localStorage.setItem('token', res.data.token);
      setMsg('Registration Successful! 🎉');
      setTimeout(() => window.location.href = '/dashboard', 1500);
    } catch (err) {
      setMsg(err.response?.data?.msg || 'Error');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Full Name" required style={{ width: '100%', padding: 10, margin: '10px 0' }}
          onChange={e => setForm({...form, name: e.target.value})} />
        <input placeholder="Email" type="email" required style={{ width: '100%', padding: 10, margin: '10px 0' }}
          onChange={e => setForm({...form, email: e.target.value})} />
        <input placeholder="Password" type="password" required style={{ width: '100%', padding: 10, margin: '10px 0' }}
          onChange={e => setForm({...form, password: e.target.value})} />
        <select style={{ width: '100%', padding: 10, margin: '10px 0' }}
          onChange={e => setForm({...form, role: e.target.value})}>
          <option value="customer">Customer</option>
          <option value="provider">Beautician (Provider)</option>
        </select>
        <button type="submit" style={{ width: '100%', padding: 12, background: '#ff4081', color: 'white', border: 'none', borderRadius: 5 }}>
          Register Now
        </button>
      </form>
      {msg && <p style={{ marginTop: 20, color: msg.includes('Success') ? 'green' : 'red', textAlign: 'center' }}>{msg}</p>}
    </div>
  );
}