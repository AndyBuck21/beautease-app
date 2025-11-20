import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh' }}>
        <header style={{ background: '#ff4081', color: 'white', padding: '20px', textAlign: 'center' }}>
          <h1 style={{ margin: 0 }}>Beau+ease</h1>
          <nav style={{ marginTop: '10px' }}>
            <Link to="/" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Home</Link> |
            <Link to="/register" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Register</Link> |
            <Link to="/login" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Login</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;