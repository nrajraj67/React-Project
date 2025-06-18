// Updated Register.js
import React from "react";

export default function Register({ goTo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const imageUrl = "https://i.imgur.com/6VBx3io.png";
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      image: imageUrl,
    };
    goTo("account", data);
  };

  return (
    <div className="page register">
      <h2>
        Create your
        <br />
        PopX account
      </h2>

      <form onSubmit={handleSubmit}>
        <label>Full Name*</label>
        <input type="text" name="name" placeholder="Marry Doe" required />

        <label>Phone number*</label>
        <input type="text" placeholder="Marry Doe" required />

        <label>Email address*</label>
        <input type="email" name="email" placeholder="Marry Doe" required />

        <label>Password*</label>
        <input type="password" placeholder="Marry Doe" required />

        <label>Company name</label>
        <input type="text" placeholder="Marry Doe" />

        <p className="agency-label">Are you an Agency?*</p>
        <div className="radio-group">
          <label className="radio-option">
            <input type="radio" name="agency" required />
            <span>Yes</span>
          </label>
          <label className="radio-option">
            <input type="radio" name="agency" />
            <span>No</span>
          </label>
        </div>

        <button type="submit" className="primary-btn">
          Create Account
        </button>
      </form>
    </div>
  );
}
