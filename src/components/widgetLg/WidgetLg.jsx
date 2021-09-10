import React from "react";
import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widget-lg-button " + type}>{type}</button>;
  };

  return (
    <div className="widget-lg">
      <div className="widget-lg-title">Latest Transanctions</div>
      <table className="widget-lg-table">
        <tr className="widget-lg-tr">
          <th className="widget-lg-th">Customer</th>
          <th className="widget-lg-th">Date</th>
          <th className="widget-lg-th">Amount</th>
          <th className="widget-lg-th">Status</th>
        </tr>
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img
              className="widget-lg-img"
              src="./assets/img/client1.jpg"
              alt=""
            />
            <span className="widget-lg-username">Mechack Kambale</span>
          </td>
          <td className="widget-lg-date">10 Jun 2021</td>
          <td className="widget-lg-amount">$214.00</td>
          <td className="widget-lg-status">{<Button type="Approved" />}</td>
        </tr>
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img
              className="widget-lg-img"
              src="./assets/img/client2.jpg"
              alt=""
            />
            <span className="widget-lg-username">Elias kambale</span>
          </td>
          <td className="widget-lg-date">07 Jun 2021</td>
          <td className="widget-lg-amount">$85.00</td>
          <td className="widget-lg-status">{<Button type="Pending" />}</td>
        </tr>
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img
              className="widget-lg-img"
              src="./assets/img/client3.jpg"
              alt=""
            />
            <span className="widget-lg-username">Obama Charles</span>
          </td>
          <td className="widget-lg-date">05 Jun 2021</td>
          <td className="widget-lg-amount">$195.00</td>
          <td className="widget-lg-status">{<Button type="Approved" />}</td>
        </tr>
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img
              className="widget-lg-img"
              src="./assets/img/client4.jpg"
              alt=""
            />
            <span className="widget-lg-username">Kobius Makasi</span>
          </td>
          <td className="widget-lg-date">03 Jun 2021</td>
          <td className="widget-lg-amount">$123.00</td>
          <td className="widget-lg-status">{<Button type="Declined" />}</td>
        </tr>
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img
              className="widget-lg-img"
              src="./assets/img/client5.jpg"
              alt=""
            />
            <span className="widget-lg-username">Clovis Mukulunga</span>
          </td>
          <td className="widget-lg-date">02 Jun 2021</td>
          <td className="widget-lg-amount">$270.00</td>
          <td className="widget-lg-status">{<Button type="Approved" />}</td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
