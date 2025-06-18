export default function Welcome({ goTo }) {
  return (
    <div className="welcome">
      <h2>Welcome to PopX</h2>
      <p>
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit.
      </p>
      <div className="welcome-buttons">
        <button className="primary-btn" onClick={() => goTo("register")}>
          Create Account
        </button>
        <button className="secondary-btn" onClick={() => goTo("login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
