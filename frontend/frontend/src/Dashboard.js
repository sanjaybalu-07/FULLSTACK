function Dashboard({ user }) {
  return (
    <div className="container">
      <h2>{user.role} Dashboard</h2>

      {user.role === "ADMIN" && <p>Manage users and projects</p>}
      {user.role === "TESTER" && <p>Report bugs</p>}
      {user.role === "DEVELOPER" && <p>Fix assigned bugs</p>}
      {user.role === "MANAGER" && <p>Assign bugs</p>}
    </div>
  );
}

export default Dashboard;
