import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./user.css";

const User = () => {
  return (
    <div className="user">
      <div className="user-title-container">
        <h1 className="user-title-container">Edit User</h1>
        <Link to="/new-user">
          <button className="user-add-btn">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-display">
          <div className="user-show-top">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="user-show-img"
            />
            <div className="user-show-top-title">
              <span className="user-show-username">Dorcas Mbusa</span>
              <span className="user-show-usertitle">Software Engeneer</span>
            </div>
          </div>
          <div className="user-show-bottom">
            <span className="user-show-title">Account Details</span>
            <div className="user-show-info">
              <PermIdentity className="user-show-icon" />
              <span className="user-show-info-title">dorcasmbusa</span>
            </div>
            <div className="user-show-info">
              <CalendarToday className="user-show-icon" />
              <span className="user-show-info-title">22.05.2002</span>
            </div>
            <span className="user-show-title">Contact Details</span>
            <div className="user-show-info">
              <PhoneAndroid className="user-show-icon" />
              <span className="user-show-info-title">+243 978 225 071</span>
            </div>
            <div className="user-show-info">
              <MailOutline className="user-show-icon" />
              <span className="user-show-info-title">
                dorcasmbusa@gmail.com
              </span>
            </div>
            <div className="user-show-info">
              <LocationSearching className="user-show-icon" />
              <span className="user-show-info-title">Lubumbashi | DRC</span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="user-update-title">Edit</span>
          <form action="" className="user-update-form">
            <div className="user-update-left">
              <div className="user-update-item">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="dorcasmbusa"
                />
              </div>
              <div className="user-update-item">
                <label htmlFor="fullname">Full name</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Dorcas Mbusa"
                />
              </div>
              <div className="user-update-item">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="dorcasmbusa@gmail.com"
                />
              </div>
              <div className="user-update-item">
                <label htmlFor="phone">Phone</label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="+243 978 225 071"
                />
              </div>
              <div className="user-update-item">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Lubumbashi | DRC"
                />
              </div>
            </div>
            <div className="user-update-right">
              <div className="user-update-upload">
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="user-update-img"
                />
                <label htmlFor="file">
                  <Publish className="user-update-icon" />
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              <button className="user-update-botton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
