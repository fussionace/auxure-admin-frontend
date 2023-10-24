import React from "react";

const Statistics = ({ openSidebar }) => {
  return <div className={ openSidebar ? "md:ml-[18.125rem] p-[2rem]" : "md:ml-[8.125rem] p-[2rem]"}>Statistics</div>;
};

export default Statistics;
