import React from "react";

export default function Login({ goTo }) {
  return (
    <div className="page login">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div>
        <label>Email Address</label>
        <input type="email" placeholder="Enter email address" />
      </div>

      <div>
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
      </div>

      <button className="disabled-btn" disabled>
        Login
      </button>
    </div>
  );
}
