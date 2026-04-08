import { useEffect, useState } from "react";
import API from "./api";

function BugList() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    API.get("/bugs").then(res => setBugs(res.data));
  }, []);

  return (
    <div className="container">
      <h3>Bug List</h3>
      <ul>
        {bugs.map(bug => (
          <li key={bug.id}>
            {bug.title} - {bug.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BugList;
