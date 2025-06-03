import React, { useState } from "react";
import "./userAuth.css";

const SignupForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="auth-form" onSubmit={(e) => { e.preventDefault(); onSubmit({ name, email, password }); }}>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default SignupForm;
