// Account.js
import React from "react";

export default function Account({ user = {} }) {
  return (
    <div className="container">
      <div className="account-page">
        <div className="account-header">
          <h3>Account Settings</h3>
        </div>
        <div className="account-content">
          <div className="profile-section">
            <div className="profile-icon">
              <img
                src={user.image || "https://i.imgur.com/6VBx3io.png"}
                alt="Profile"
                className="profile-image"
              />
            </div>
            <div className="profile-details">
              <p className="profile-name">{user.name || "Marry Doe"}</p>
              <p className="profile-email">{user.email || "Marry@Gmail.Com"}</p>
            </div>
          </div>
          <p className="account-description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
            <br />
            Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            <br />
            Labore Et Dolore Magna Aliquyam Erat. Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
}
