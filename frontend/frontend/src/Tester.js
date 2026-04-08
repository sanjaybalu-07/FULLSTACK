import { useState, useEffect } from "react";
import API from "./api";

export default function Tester({ setUser }) {

  const [title, setTitle] = useState("");
  const [severity, setSeverity] = useState("");
  const [developer, setDeveloper] = useState("");
  const [developers, setDevelopers] = useState([]);

  // 🔹 Logout
  const logout = () => {
    setUser(null);
  };

  // 🔹 Load developers from backend
  useEffect(() => {
  API.get("/admin/users")
    .then(res => {
      // filter only developers
      const devs = res.data.filter(u => u.role === "DEVELOPER");
      setDevelopers(devs);
    })
    .catch(err => console.error(err));
}, []);

  // 🔹 Submit Bug
  const submitBug = async () => {
    if (!title || !severity || !developer) {
      alert("Please fill all fields");
      return;
    }

    await API.post("/bugs", {
      title,
      severity,
      assignedTo: developer
    });

    alert("Bug created and assigned successfully");

    // clear form
    setTitle("");
    setSeverity("");
    setDeveloper("");
  };

  return (
    <div>
      {/* 🔹 Navbar */}
      <div className="navbar">
        <h2>Tester Dashboard</h2>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {/* 🔹 Main Content */}
      <div className="container">
        <h3>Create Bug</h3>

        <input
          placeholder="Bug Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <select
          value={severity}
          onChange={e => setSeverity(e.target.value)}
        >
          <option value="">Select Severity</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select
          value={developer}
          onChange={e => setDeveloper(e.target.value)}
        >
          <option value="">Assign Developer</option>

          {developers.map(dev => (
            <option key={dev.id} value={dev.username}>
              {dev.username}
            </option>
          ))}
        </select>

        <button onClick={submitBug}>
          Create & Assign Bug
        </button>
      </div>
    </div>
  );
}