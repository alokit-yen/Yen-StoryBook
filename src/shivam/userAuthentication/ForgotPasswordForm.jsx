import React, { useState } from "react";
import "./userAuth.css";

const ForgotPasswordForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");

  return (
    <form className="auth-form" onSubmit={(e) => { e.preventDefault(); onSubmit(email); }}>
      <h2>Forgot Password</h2>
      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Send Reset Link</button>
    </form>
  );
};

export default ForgotPasswordForm;
