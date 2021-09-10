import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import "./featuredinfo.css";

const Featuredinfo = () => {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featured-title">Revanue</span>
        <div className="featured-money-container">
          <span className="featured-money">$2,451</span>
          <span className="featured-money-rate">
            -11.4 <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <div className="featured-sub">Compared to the last month.</div>
      </div>
      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featured-money-container">
          <span className="featured-money">$6,021</span>
          <span className="featured-money-rate">
            -1.4 <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <div className="featured-sub">Compared to the last month.</div>
      </div>
      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="featured-money-container">
          <span className="featured-money">$3,614</span>
          <span className="featured-money-rate">
            +9.3 <ArrowUpward className="featured-icon" />
          </span>
        </div>
        <div className="featured-sub">Compared to the last month.</div>
      </div>
    </div>
  );
};

export default Featuredinfo;
