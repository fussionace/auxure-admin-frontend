import React from "react";
import { CheckIcon } from "../../../../auxure/src/assets/svg/svg-icons";
import {
  Filter,
  Pen,
  Search,
  DeleteFill,
  FilterDark,
  PenDark,
  DeleteDark,
} from "../../assets/svgs/svg-icons";
import per from "../../assets/images/perf221.png";

const ProductsTable = ({ darkTheme }) => {
  const product = [
    {
      pic: per,
      name: "Golden Serenable",
      sku: "2384560012",
      price: "N125, 000",
    },
    {
      pic: per,
      name: "Golden Serenable",
      sku: "2384560012",
      price: "N125, 000",
    },
    {
      pic: per,
      name: "Golden Serenable",
      sku: "2384560012",
      price: "N125, 000",
    },
    {
      pic: per,
      name: "Golden Serenable",
      sku: "2384560012",
      price: "N125, 000",
    },
    {
      pic: per,
      name: "Golden Serenable",
      sku: "2384560012",
      price: "N125, 000",
    },
  ];

  return (
    <section className="mt-[4rem]">
      <div className="filter flex justify-between w-[95%] gap-[3rem]">
        <div className="input-container relative w-[70%]">
          <Search className="absolute top-[35%] left-[3.5%]" />
          <input
            type="text"
            className="bg-accent-4 dark:bg-cream w-full py-[.75rem] px-[3.5rem] dark:text-accent-5 rounded-[1.875rem] outline-none"
            placeholder="Search by name, or product no..."
          />
        </div>
        <div className="filter p-[.625rem] rounded-[.5rem] border-solid border-coffee-brown dark:border-gray dark:border-bg-acent-4 border-[1px] flex items-center justify-center gap-[.5rem] cursor-pointer">
          {darkTheme ? <FilterDark /> : <Filter />}
          <span className="block text-[1rem] font-medium dark:text-white">
            Filter
          </span>
        </div>
      </div>
      {/* table */}
      <div className="mt-[4rem] bg-white dark:bg-dark-primary rounded-[.625rem]">
        <table className="w-full dark:text-accent-5">
          <thead>
            <tr className="border-b-[.0625rem] border-light-gray dark:border-opacity-5 text-left text-[1rem] text-darker dark:text-accent-4 font-medium bg-accent-2 dark:bg-darker">
              <th className="h-[4.25rem] px-[2rem] flex justify-content items-center  gap-[1rem]">
                <hgroup className="flex relative gap-[0.65rem] items-center justify-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="w-[1.5rem] h-[1.5rem] appearance-none rounded-[0.313rem] shrink-0 checked:bg-white border-solid border-coffee-brown dark:border-accent-8 border-[1px] focus:outline-none peer cursor-pointer"
                  />
                  <label
                    htmlFor="remember-me"
                    className="text-lighter text-base font-light leading-3 cursor-pointer"
                  ></label>
                  <CheckIcon className="hidden bg-coffee-brown rounded-[0.313rem] w-[1.5rem] h-[1.5rem] peer-checked:block absolute pointer-events-none left-0" />
                </hgroup>
                PRODUCT
              </th>
              <th>STOCKS</th>
              <th>SKU</th>
              <th>PRICE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {product.map((order) => (
              <tr
                className="last:pl-[2rem] border-b-[0.0625rem] dark:border-opacity-5 border-accent-5"
                key={order.id}
              >
                <td className="px-[2rem] text-[.875rem] font-light h-[4.25rem] flex items-center justify-start">
                  <hgroup className="flex relative gap-[0.65rem] items-center justify-center">
                    <input
                      type="checkbox"
                      id="remember-me"
                      className="w-[1.5rem] h-[1.5rem] appearance-none rounded-[0.313rem] shrink-0 checked:bg-white border-solid border-coffee-brown dark:border-accent-8 dark:bg-cream  border-[1px] focus:outline-none peer cursor-pointer"
                    />
                    <label
                      htmlFor="remember-me"
                      className="text-lighter text-base font-light leading-3 cursor-pointer"
                    ></label>
                    <CheckIcon className="hidden bg-coffee-brown rounded-[0.313rem] w-[1.5rem] h-[1.5rem] peer-checked:block absolute pointer-events-none left-0" />
                  </hgroup>
                  <div className="img-name flex items-center justify-center gap-[.5rem]">
                    <div className="img-container w-[3rem] h-[3rem] rounded-[.5rem] bordr-solid border-[.5px] dark:border-accent-4 border-darker flex items-center justify-center">
                      <img src={order.pic} alt="profile image" />
                    </div>
                    <span className="block">{order.name}</span>
                  </div>
                </td>
                <td className="text-[.875rem] font-light">
                  <svg
                    width="48"
                    height="28"
                    viewBox="0 0 48 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="48" height="28" rx="14" fill="#D4B483" />
                    <circle cx="34" cy="14" r="10" fill="white" />
                  </svg>
                </td>

                <td className="text-[.875rem] font-light">{order.sku}</td>
                <td className="text-[.875rem] font-light">{order.price}</td>

                <td>
                  <div className="flex items-center justify-center w-[6.6875rem] gap-[.25rem] h-[2rem] border-solid border-gray border-[1px] rounded-[.25rem]">
                    <div className="w-full h-full item-container flex items-center justify-center gap-[.625rem] border-r-[1px] border-r-gray">
                      {darkTheme ? <PenDark /> : <Pen />}
                      <span className="block text-[.875rem]">Edit</span>
                    </div>
                    <div className="item-container h-full w-[36%] flex items-center justify-center">
                      {darkTheme ? <DeleteDark /> : <DeleteFill />}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductsTable;
