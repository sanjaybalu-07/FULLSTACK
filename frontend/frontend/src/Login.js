import { useState } from "react"; import API from "./api";
export default function Login({ setUser }) {
  const [u, p] = [useState(""), useState("")];
  const login = async () => {
    try {
      const r = await API.post("/auth/login", { username: u[0], password: p[0] });
      setUser(r.data);
    } catch { alert("Invalid login"); }
  };
  return (<div className="container">
    <h2>Login</h2>
    <input onChange={e => u[1](e.target.value)} placeholder="Username" />
    <input type="password" onChange={e => p[1](e.target.value)} placeholder="Password" />
    <button onClick={login}>Login</button>
  </div>);
}
