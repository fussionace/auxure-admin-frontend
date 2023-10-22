import React from "react";
import { Analytics, Graph } from "../../assets/svgs/svg-icons";

const Chart = () => {
  return (
    <section className="mt-[2rem] flex items-center justify-between gap-[2rem] w-full">
      <div className="reports w-[60%] h-[25.5rem] bg-white dark:bg-dark-primary rounded-[.625rem]">
        <Graph className="h-full w-full" />
      </div>
      <div className="analytics w-[40%] h-[25.5rem] bg-white dark:bg-dark-primary rounded-[.625rem]">
        <Analytics className="w-full h-full" />
      </div>
    </section>
  );
};

export default Chart;
