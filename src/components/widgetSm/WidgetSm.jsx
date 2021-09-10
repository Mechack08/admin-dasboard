import { Visibility } from "@material-ui/icons";
import React from "react";
import "./widgetSm.css";

const WidgetSm = () => {
  return (
    <div className="widget-sm">
      <span className="widget-sm-title">New Join Members</span>
      <ul className="widget-sm-liste">
        <li className="widget-sm-liste-item">
          <img src="./assets/img/user2.jpg" alt="" className="widget-sm-img" />
          <div className="widget-sm-user">
            <span className="widget-sm-username">Jessica Muaka</span>
            <span className="widget-sm-user-title">hardware Engineer</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className="widget-sm-icon" />
            Display
          </button>
        </li>
        <li className="widget-sm-liste-item">
          <img src="./assets/img/makasi.jpg" alt="" className="widget-sm-img" />
          <div className="widget-sm-user">
            <span className="widget-sm-username">Mechack Makasi</span>
            <span className="widget-sm-user-title">Front-end Developper</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className="widget-sm-icon" />
            Display
          </button>
        </li>
        <li className="widget-sm-liste-item">
          <img
            src="./assets/img/mastaki.jpg"
            alt=""
            className="widget-sm-img"
          />
          <div className="widget-sm-user">
            <span className="widget-sm-username">Ruth Mastaki</span>
            <span className="widget-sm-user-title">Busness Woman</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className="widget-sm-icon" />
            Display
          </button>
        </li>
        <li className="widget-sm-liste-item">
          <img src="./assets/img/exo.jpg" alt="" className="widget-sm-img" />
          <div className="widget-sm-user">
            <span className="widget-sm-username">Exocé Tshangamusa</span>
            <span className="widget-sm-user-title">Agro Industry</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className="widget-sm-icon" />
            Display
          </button>
        </li>
        <li className="widget-sm-liste-item">
          <img src="./assets/img/malik.jpg" alt="" className="widget-sm-img" />
          <div className="widget-sm-user">
            <span className="widget-sm-username">Malik Yousoufa</span>
            <span className="widget-sm-user-title">Youtouber</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className="widget-sm-icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
