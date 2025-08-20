import React, { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // mock auth
    window.location.href = "/dashboard";
  };

  return (
    <main className="auth-page">
      <div className="auth-box">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />

          <label>Password</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />

          <button type="submit" className="btn">Sign In</button>
        </form>

        <div className="auth-alt">
          <button className="btn-outline">Continue with Google</button>
          <button className="btn-outline">Continue with LinkedIn</button>
        </div>

        <p>Don’t have an account? <a href="/register">Register Now</a></p>
      </div>
    </main>
  );
}
