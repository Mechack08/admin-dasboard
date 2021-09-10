import {
  AttachMoney,
  BarChart,
  ChatBubble,
  ChatBubbleOutlineOutlined,
  DynamicFeed,
  LineStyle,
  MailOutline,
  MenuBookOutlined,
  PermIdentity,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <Link to="/" className="link">
              <li className="sidebar-list-item active">
                <LineStyle className="sidebar-icons" />
                Home
              </li>
            </Link>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icons" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <TrendingUp className="sidebar-icons" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <Link to="/users" className="link">
              <li className="sidebar-list-item">
                <PermIdentity className="sidebar-icons" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebar-list-item">
                <Storefront className="sidebar-icons" />
                Products
              </li>
            </Link>
            <li className="sidebar-list-item">
              <AttachMoney className="sidebar-icons" />
              Transactions
            </li>
            <li className="sidebar-list-item">
              <BarChart className="sidebar-icons" />
              Rapports
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notification</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <MailOutline className="sidebar-icons" />
              Mail
            </li>
            <li className="sidebar-list-item">
              <DynamicFeed className="sidebar-icons" />
              Feedback
            </li>
            <li className="sidebar-list-item">
              <ChatBubbleOutlineOutlined className="sidebar-icons" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <WorkOutline className="sidebar-icons" />
              Manage
            </li>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icons" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <MenuBookOutlined className="sidebar-icons" />
              Rapports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
