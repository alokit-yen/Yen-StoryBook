import React, { useState } from "react";
import "./userAuth.css";

const SigninForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="auth-form" onSubmit={(e) => { e.preventDefault(); onSubmit({ username, password }); }}>
      <h2>Sign In</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default SigninForm;
