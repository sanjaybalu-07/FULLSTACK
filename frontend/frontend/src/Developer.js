import { useEffect, useState } from "react";
import API from "./api";

export default function Developer({ setUser }) {

  const [bugs, setBugs] = useState([]);

  // 🔹 Logout
  const logout = () => {
    setUser(null);
  };

  // 🔹 Load bugs
  useEffect(() => {
    API.get("/bugs/developer/developer1")
      .then(res => setBugs(res.data))
      .catch(err => console.error(err));
  }, []);

  // 🔹 Fix bug
  const fixBug = (id) => {
    API.put(`/bugs/${id}/fix`)
      .then(() => {
        alert("Bug Fixed");

        // update UI instantly
        setBugs(bugs.map(b =>
          b.id === id ? { ...b, status: "FIXED" } : b
        ));
      });
  };

  return (
    <div>
      {/* 🔹 Navbar */}
      <div className="navbar">
        <h2>Developer Dashboard</h2>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {/* 🔹 Main UI */}
      <div className="container">
        <h3>Assigned Bugs</h3>

        {bugs.map(b => (
          <div key={b.id} className="card">
            <p><b>Bug:</b> {b.title}</p>
            <p>
              <b>Status:</b>{" "}
              <span className={`status ${b.status}`}>
                {b.status}
              </span>
            </p>

            {b.status !== "FIXED" && (
              <button onClick={() => fixBug(b.id)}>
                Mark as FIXED
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}