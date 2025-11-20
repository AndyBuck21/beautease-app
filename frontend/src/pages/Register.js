import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'customer' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://beautease-api.onrender.com/api/auth/register', form);
      alert('Registered! Token: ' + res.data.token);
    } catch (err) {
      alert(err.response?.data?.msg || 'Error');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} /><br/><br/>
        <input placeholder="Email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} /><br/><br/>
        <input placeholder="Password" type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} /><br/><br/>
        <select value={form.role} onParticipantsChange={e => setForm({...form, role: e.target.value})}>
          <option value="customer">Customer</option>
          <option value="provider">Beautician</option>
        </select><br/><br/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}