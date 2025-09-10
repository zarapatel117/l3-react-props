
import React from "react";
import Profile from "./Profile";

function App() {
  return (
    <div>
      <h1>React Props Example</h1>
      {/* Passing props to the Profile component */}
      <Profile name="Faruk" age={53} profession="CMD of KP Group" />
      <Profile name="Aayesha" age={40} profession="Teacher" />
      <Profile name="Umar" age={18} profession="Student" />
      <Profile name="Zara" age={15} profession="Student" />
    </div>
  );
}

export default App;
