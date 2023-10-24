import React from "react";
import {
  Alert,
  AlertDark,
  ArrowdownDark,
  NewMessage,
  ArrowDown,
  Calendar,
  Divide,
  ProjectionUp,
  GoldBag,
  ProjectionDown,
  CustomersGold,
  Visitors,
  Stars,
  BiroRed,
  DeleteRed,
} from "../assets/svgs/svg-icons";
import Ellipse from "../assets/images/Ellipse.png";
import perf221 from "../assets/images/image9.png";
import { ArrowUp } from "../../../auxure/src/assets/svg/svg-icons";
import AnalyticsFigure from "../components/analytics/AnalyticsFigure";
import AnalyticsCharts from "../components/analytics/AnalyticsCharts";
import Analyticsproducts from "../components/analytics/Analyticsproducts";

const Analytics = ({ darkTheme, openSidebar }) => {
  return (
    <div
      className={
        openSidebar
          ? "md:ml-[18.125rem] ml-0 p-[2rem] min-h-screen bg-accent dark:bg-dark-secondary"
          : "md:ml-[8.125rem] ml-0 p-[2rem] min-h-screen bg-accent dark:bg-dark-secondary"
      }
    >
      <hgroup className="title-container flex items-center justify-between mb-[3rem] mr-[4rem]">
        <h1 className="font-medium dark:text-white md:text-[2rem]">
          Analytics
        </h1>
        <div className="flex items-center justify-center gap-[1.5rem]">
          <div className="alert relative cursor-pointer">
            {darkTheme ? <AlertDark /> : <Alert />}
            <NewMessage className="absolute top-0 right-0" />
          </div>
          <div className="flex items-center justify-items-center gap-[.4rem] cursor-pointer">
            <div className="image h-[2.5rem] w-[2.5rem] rounded-full">
              <img
                src={Ellipse}
                alt="user-image"
                className="w-full h-full object-cover"
              />
            </div>
            {darkTheme ? <ArrowdownDark /> : <ArrowDown />}
          </div>
        </div>
      </hgroup>

      <section className="flex items-center justify-between">
        <span className="block text-[1rem] font-light dark:text-gray">
          Activity
        </span>
        <div className="innter-flex flex items-center justify-center gap-[3.1875rem]">
          <div className="calendar flex items-center justify-center gap-[.5rem]">
            <Calendar />
            <span className="block text-[1rem] text-accent-6 font-light">
              9 May - 16 May
            </span>
          </div>

          <div className="dropdown cursor-pointer flex items-center justify-center gap-[.5rem]">
            <span className="block text-[1rem] font-light dark:text-white">
              Week
            </span>
            {darkTheme ? <ArrowdownDark /> : <ArrowDown />}
          </div>
        </div>
      </section>

      <div className="card-section">
        <AnalyticsFigure />
      </div>

      <div className="charts">
        <AnalyticsCharts />
      </div>

      <div className="product">
        <Analyticsproducts />
      </div>
    </div>
  );
};

export default Analytics;
