export default function Dashboard() {
  const token = localStorage.getItem('token');
  return (
    <div style={{ textAlign: 'center', padding: 50 }}>
      <h2>Dashboard</h2>
      {token ? <p style={{ color: 'green', fontSize: 20 }}>You are logged in! Welcome to Beau+ease 🎉</p> : <p>Please login</p>}
      <button onClick={() => { localStorage.clear(); window.location.href = '/' }}
        style={{ padding: 10, background: '#ff1744', color: 'white', border: 'none', borderRadius: 5 }}>
        Logout
      </button>
    </div>
  );
}