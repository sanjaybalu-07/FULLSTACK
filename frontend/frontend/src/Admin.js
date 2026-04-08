import { useEffect, useState } from "react";
import API from "./api";

export default function Admin({ setUser }) {

  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("DEVELOPER");

  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");

  // 🔹 Logout function
  const logout = () => {
    setUser(null);
  };

  const loadUsers = () => {
    API.get("/admin/users").then(res => setUsers(res.data));
  };

  const loadProjects = () => {
    API.get("/admin/projects").then(res => setProjects(res.data));
  };

  useEffect(() => {
    loadUsers();
    loadProjects();
  }, []);

  const createUser = async () => {
    await API.post("/admin/create-user", {
      username,
      password,
      role
    });

    alert("User Created");
    setUsername("");
    setPassword("");
    loadUsers();
  };

  const createProject = async () => {
    await API.post("/admin/create-project", {
      name: projectName,
      description: projectDesc
    });

    alert("Project Created");
    setProjectName("");
    setProjectDesc("");
    loadProjects();
  };

  return (
    <div>
      {/* 🔹 Navbar */}
      <div className="navbar">
        <h2>Admin Dashboard</h2>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {/* 🔹 Main Content */}
      <div className="container">
        <h3>Create User</h3>

        <input
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="DEVELOPER">Developer</option>
          <option value="TESTER">Tester</option>
          <option value="MANAGER">Manager</option>
        </select>

        <button onClick={createUser}>Create User</button>

        <hr />

        <h3>Create Project</h3>

        <input
          placeholder="Project Name"
          value={projectName}
          onChange={e => setProjectName(e.target.value)}
        />

        <input
          placeholder="Project Description"
          value={projectDesc}
          onChange={e => setProjectDesc(e.target.value)}
        />

        <button onClick={createProject}>Create Project</button>

        <hr />

        <h3>Existing Users</h3>
        {users.map(u => (
          <div key={u.id}>
            {u.username} — {u.role}
          </div>
        ))}

        <hr />

        <h3>Existing Projects</h3>
        {projects.map(p => (
          <div key={p.id}>
            {p.name} — {p.description}
          </div>
        ))}
      </div>
    </div>
  );
}