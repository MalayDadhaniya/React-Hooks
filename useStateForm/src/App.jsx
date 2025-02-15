import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleOnInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="container">
      <h1 className="title">User Form</h1>

      <form action="" className="userForm" onSubmit={handleOnSubmit}>
        <label htmlFor="fnm">First Name : </label>
        <input
          type="text"
          placeholder="Enter your first name"
          id="fnm"
          required
          name="firstname"
          value={user.firstname}
          onChange={handleOnInputChange}
        />

        <label htmlFor="lnm">Last Name : </label>
        <input
          type="text"
          placeholder="Enter your last name"
          id="lnm"
          required
          name="lastname"
          value={user.lastname}
          onChange={handleOnInputChange}
        />

        <label htmlFor="email">Email : </label>
        <input
          type="email"
          placeholder="Enter email"
          id="email"
          required
          name="email"
          value={user.email}
          onChange={handleOnInputChange}
        />

        <label htmlFor="password">Password : </label>
        <input
          type="password"
          placeholder="Enter password"
          id="password"
          required
          name="password"
          value={user.password}
          onChange={handleOnInputChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
