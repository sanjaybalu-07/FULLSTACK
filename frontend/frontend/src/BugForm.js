import { useState } from "react";
import API from "./api";

function BugForm() {
  const [title, setTitle] = useState("");
  const [severity, setSeverity] = useState("");

  const submitBug = async () => {
    await API.post("/bugs", {
      title,
      severity,
      status: "NEW"
    });
    alert("Bug reported");
  };

  return (
    <div className="container">
      <h3>Report Bug</h3>
      <input placeholder="Bug Title" onChange={e => setTitle(e.target.value)} />
      <input placeholder="Severity" onChange={e => setSeverity(e.target.value)} />
      <button onClick={submitBug}>Submit</button>
    </div>
  );
}

export default BugForm;
