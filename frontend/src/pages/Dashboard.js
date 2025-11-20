export default function Dashboard() {
  const token = localStorage.getItem('token');
  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h2>Dashboard</h2>
      {token ? <p>You are logged in!</p> : <p>Please login first.</p>}
      <button onClick={() => { localStorage.clear(); window.location.href = '/' }}>Logout</button>
    </div>
  );
}