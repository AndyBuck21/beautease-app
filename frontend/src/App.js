import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <header style={{ padding: '20px 0', borderBottom: '2px solid #ff4081' }}>
        <h1 style={{ margin: 0, color: '#ff4081' }}>Beau+ease</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/register"> Register</Link> | <Link to="/login"> Login</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;// Tiny comment
