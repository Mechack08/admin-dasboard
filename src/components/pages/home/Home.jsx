import React from "react";
import Chart from "../chart/Chart";
import Featuredinfo from "../featuredinfo/Featuredinfo";
import "./home.css";
import { userData } from "../../../dummyData";
import WidgetSm from "../../widgetSm/WidgetSm";
import WidgetLg from "../../widgetLg/WidgetLg";

const Home = () => {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart
        title="Users Analytics"
        data={userData}
        grid
        dataKey="Active User"
      />
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
