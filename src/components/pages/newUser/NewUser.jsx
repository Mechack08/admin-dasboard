import React from "react";
import "./newUser.css";

const NewUser = () => {
  return (
    <div className="new-user">
      <h1 className="new-user-title">New User</h1>
      <form action="" className="new-user-form">
        <div className="new-user-item">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="john@01"
          />
        </div>
        <div className="new-user-item">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="John Gilbert"
          />
        </div>
        <div className="new-user-item">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johngil@gmail.com"
          />
        </div>
        <div className="new-user-item">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="+256791358371"
          />
        </div>
        <div className="new-user-item">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Sir Appollo Kaggwa | Kla Ug."
          />
        </div>
        <div className="new-user-item">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
          />
        </div>
        <div className="new-user-item">
          <label>Gender</label>
          <div className="new-user-gender">
            <input type="radio" name="gender" id="male" value="mail" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="femail" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="new-user-item">
          <label>Active</label>
          <select name="active" id="active" className="new-user-select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="new-user-button">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
