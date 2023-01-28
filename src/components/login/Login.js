import "./Login.css";

import React, { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-form-container">
      <h3>
        Log In Here
      </h3>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          id="password"
          name="password"
        />
        <button type="submit">LOG IN</button>
      </form>
   
    </div>
  );
}

export default Login;
