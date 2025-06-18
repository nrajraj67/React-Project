import React, { useState } from "react";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";
import "./App.css";

function App() {
  const [page, setPage] = useState("welcome");
  const [userData, setUserData] = useState({});

  const goTo = (targetPage, data = {}) => {
    if (targetPage === "account") setUserData(data);
    setPage(targetPage);
  };

  return (
    <div className="container">
      {page === "welcome" && <Welcome goTo={goTo} />}
      {page === "login" && <Login goTo={goTo} />}
      {page === "register" && <Register goTo={goTo} />}
      {page === "account" && <Account user={userData} />}
    </div>
  );
}

export default App;
