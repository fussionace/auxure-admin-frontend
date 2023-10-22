import React from "react";
import {
  MoneyDark,
  MoneyLight,
  OrderDark,
  OrderLight,
  ProductsDark,
  ProductsLight,
} from "../../assets/svgs/svg-icons";

const Numbers = ({ darkTheme }) => {
  return (
    <section className="cards flex items-center justify-between gap-[2rem] w-full">
      <div className="total_sales w-full h-[7.25rem] rounded-[.625rem] bg-white dark:bg-dark-primary flex items-center jusitfy-start gap-[1.25rem] p-[1.5rem]">
        <div
          className={
            darkTheme
              ? "flex items-center justify-center h-[3.75rem] w-[3.75rem] rounded-full bg-accent-dark-3"
              : "flex items-center justify-center h-[3.75rem] w-[3.75rem] rounded-full bg-lightbrown"
          }
        >
          {darkTheme ? <MoneyDark /> : <MoneyLight />}
        </div>
        <div className="group">
          <h1 className="font-medium text-[1.5rem] dark:text-white">
            N34,060,000
          </h1>
          <span className="block text-[.875rem] font-light text-gray">
            Total sales
          </span>
        </div>
      </div>
      <div className="total_order w-full h-[7.25rem] rounded-[.625rem] bg-white dark:bg-dark-primary flex items-center jusitfy-start gap-[1.25rem] p-[1.5rem]">
        <div
          className={
            darkTheme
              ? "flex items-center justify-center h-[3.75rem] w-[3.75rem] rounded-full bg-accent-yellow-2"
              : "flex items-center justify-center h-[3.75rem] w-[3.75rem] rounded-full bg-accent-yellow"
          }
        >
          {darkTheme ? <OrderDark /> : <OrderLight />}
        </div>
        <div className="group">
          <h1 className="font-medium text-[1.5rem] dark:text-white">2472</h1>
          <span className="block text-[.875rem] font-light text-gray">
            Total Order
          </span>
        </div>
      </div>
      <div className="total_products w-full h-[7.25rem] rounded-[.625rem] bg-white dark:bg-dark-primary flex items-center jusitfy-start gap-[1.25rem] p-[1.5rem]">
        <div
          className={
            darkTheme
              ? "flex items-center justify-center h-[3.75rem] w-[3.75rem] rounded-full bg-accent-coffee-2"
              : "flex items-center justify-center h-[3.75rem] w-[3.75rem] rounded-full bg-accent-7"
          }
        >
          {darkTheme ? <ProductsDark /> : <ProductsLight />}
        </div>

        <div className="group">
          <h1 className="font-medium text-[1.5rem] dark:text-white">764</h1>
          <span className="block text-[.875rem] font-light text-gray">
            Total Products
          </span>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
