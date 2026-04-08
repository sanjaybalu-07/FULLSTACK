import { useEffect, useState } from "react";
import API from "./api";

export default function Manager({ setUser }) {

  const [bugs, setBugs] = useState([]);

  // 🔹 Logout
  const logout = () => {
    setUser(null);
  };

  // 🔹 Load bugs
  useEffect(() => {
    API.get("/bugs")
      .then(res => setBugs(res.data));
  }, []);

  // 🔹 Assign bug
  const assignBug = (id) => {
    API.put(`/bugs/${id}/assign/developer1`)
      .then(() => {
        alert("Bug Assigned");

        // update UI
        setBugs(bugs.map(b =>
          b.id === id ? { ...b, status: "IN PROGRESS" } : b
        ));
      });
  };

  return (
    <div>
      {/* 🔹 Navbar */}
      <div className="navbar">
        <h2>Manager Dashboard</h2>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {/* 🔹 Main UI */}
      <div className="container">
        <h3>All Bugs</h3>

        {bugs.map(b => (
          <div key={b.id} className="card">
            <p><b>{b.title}</b></p>
            <p>
              Status:{" "}
              <span className={`status ${b.status}`}>
                {b.status}
              </span>
            </p>

            <button onClick={() => assignBug(b.id)}>
              Assign to Developer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}