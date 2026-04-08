import { useState } from "react";
import Login from "./Login";
import Tester from "./Tester";
import Developer from "./Developer";
import Admin from "./Admin";
import Manager from "./Manager";

function App() {
  const [user, setUser] = useState(null);

  // Not logged in
  if (!user) {
    return <Login setUser={setUser} />;
  }

  console.log("Logged in user:", user);

  // Role-based rendering
  if (user.role === "ADMIN") {
    return <Admin setUser={setUser} />;
  }

  if (user.role === "MANAGER") {
    return <Manager setUser={setUser} />;
  }

  if (user.role === "TESTER") {
    return <Tester setUser={setUser} />;
  }

  if (user.role === "DEVELOPER") {
    return <Developer setUser={setUser} />;
  }

  return <div>Unknown Role</div>;
}

export default App;