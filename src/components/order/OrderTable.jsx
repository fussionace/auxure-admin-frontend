import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Search,
  Tools,
  ToolsDark,
} from "../../assets/svgs/svg-icons";

const OrderTable = ({ darkTheme }) => {
  const products = [
    {
      id: "#12569",
      name: "Micheal Lane",
      date: "09-12-2023",
      product: "Enchanted Elixir",
      total: "N125, 000",
      status: "Pending",
    },
    {
      id: "#12569",
      name: "Micheal Lane",
      date: "09-12-2023",
      product: "Enchanted Elixir",
      total: "N125, 000",
      status: "Canceled",
    },
    {
      id: "#12569",
      name: "Micheal Lane",
      date: "09-12-2023",
      product: "Enchanted Elixir",
      total: "N125, 000",
      status: "Delivered",
    },
    {
      id: "#12569",
      name: "Micheal Lane",
      date: "09-12-2023",
      product: "Enchanted Elixir",
      total: "N125, 000",
      status: "Delivered",
    },
    {
      id: "#12569",
      name: "Micheal Lane",
      date: "09-12-2023",
      product: "Enchanted Elixir",
      total: "N125, 000",
      status: "Delivered",
    },
    {
      id: "#12569",
      name: "Micheal Lane",
      date: "09-12-2023",
      product: "Enchanted Elixir",
      total: "N125, 000",
      status: "Delivered",
    },
    {
      id: "#12569",
      name: "Micheal Lane",
      date: "09-12-2023",
      product: "Enchanted Elixir",
      total: "N125, 000",
      status: "Delivered",
    },
    {
      id: "#12569",
      name: "Micheal Lane",
      date: "09-12-2023",
      product: "Enchanted Elixir",
      total: "N125, 000",
      status: "Delivered",
    },
    {
      id: "#12569",
      name: "Micheal Lane",
      date: "09-12-2023",
      product: "Enchanted Elixir",
      total: "N125, 000",
      status: "Delivered",
    },
    {
      id: "#12569",
      name: "Micheal Lane",
      date: "09-12-2023",
      product: "Enchanted Elixir",
      total: "N125, 000",
      status: "Delivered",
    },
    {
      id: "#12569",
      name: "Micheal Lane",
      date: "09-12-2023",
      product: "Enchanted Elixir",
      total: "N125, 000",
      status: "Delivered",
    },
    {
      id: "#12569",
      name: "Micheal Lane",
      date: "09-12-2023",
      product: "Enchanted Elixir",
      total: "N125, 000",
      status: "Delivered",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [display, setDisplay] = useState(6);
  const [activePage, setActivePage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(9);
  const [minPageLimit, setMinPageLimit] = useState(0);

  const last = currentPage * display;
  const first = last - display;
  const values = products.slice(first, last);
  const btnCount = [];

  for (let i = 1; i <= Math.ceil(products.length / display); i++) {
    btnCount.push(i);
  }

  const handleChange = (i) => {
    setCurrentPage(i);
    setActivePage(i);
  };

  // prev
  const onPrevClick = () => {
    if ((currentPage - 1) % display === 0) {
      setMaxPageLimit(maxPageLimit - display);
      setMinPageLimit(minPageLimit - display);
    }
    setCurrentPage((prev) => prev - 1);
    setActivePage((prev) => prev - 1);
  };

  // Next
  const onNextClick = () => {
    if (currentPage - 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + display);
      setMinPageLimit(minPageLimit + display);
    }
    setCurrentPage((prev) => prev + 1);
    setActivePage((prev) => prev + 1);
  };

  return (
    <section className="mt-[4rem]">
      <div className="filter flex justify-between w-[95%] gap-[3rem]">
        <div className="input-container relative w-full">
          <Search className="absolute top-[35%] left-[2%]" />
          <input
            type="text"
            className="bg-accent-4 dark:bg-cream w-full py-[.75rem] px-[3.5rem] dark:text-accent-5 rounded-[1.875rem] outline-none"
            placeholder="Search by name, date or ID"
          />
        </div>
        <div className="filter p-[.625rem] rounded-[.5rem] border-solid border-coffee-brown dark:border-gray dark:border-bg-acent-4 border-[1px] flex gap-[.5rem] cursor-pointer">
          <Filter />
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
              <th className="h-[4.25rem] px-[2rem]">ORDER ID</th>
              <th>CUSTOMER</th>
              <th>DATE</th>
              <th>PRODUCT</th>
              <th>TOTAL</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {values.map((order) => (
              <tr
                className="last:pl-[2rem] border-b-[0.0625rem] dark:border-opacity-5 border-accent-5"
                key={order.id}
              >
                <td className="px-[2rem] text-[.875rem] font-light h-[4.25rem]">
                  {order.id}
                </td>
                <td className="text-[.875rem] font-light">{order.name}</td>
                <td className="text-[.875rem] font-light">{order.date}</td>
                <td className="text-[.875rem] font-light">{order.product}</td>
                <td className="text-[.875rem] font-light">{order.total}</td>
                <td
                  className={
                    order.status === "Canceled"
                      ? "text-[.875rem] font-light text-canceled"
                      : order.status === "Delivered"
                      ? "text-[.875rem] font-light text-delivered"
                      : order.status === "Pending"
                      ? "text-[.875rem] font-light text-yellow-400"
                      : ""
                  }
                >
                  {order.status}
                </td>
                <td>
                  {
                    darkTheme ?
                    <ToolsDark />
                    :
                    <Tools />
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination-container flex items-center justify-between mt-[1rem] pb-[2rem] px-[2rem]">
          <div className="numbers-flex flex items-center gap-[.6rem]">
            <label
              htmlFor="number"
              className="text-[.9375rem] font-semibold dark:text-accent-5"
            >
              Showing
            </label>
            {/* <input type="number"  className='outline-none w-[6rem] flex border-solid border-gray border-[1px] rounded-[.625rem] py-[.625rem] px-[1.25rem]' min={0}/> */}

            <span className="block text-mono dark:text-white text-[.875rem] font-light">
              12 of 48
            </span>
          </div>
          {/* pagination */}
          <div className="pagination flex items-center justify-center gap-[.25rem]">
            <button
              className="bg-light-gray dark:bg-carousel dark:border-opacity-5 flex items-center justify-center w-[1.75rem] h-[1.75rem] text-base border-light-gray border-solid border-[1px] rounded-[.25rem]"
              onClick={onPrevClick}
              disabled={activePage === 1}
            >
              <ChevronLeft />
            </button>
            {btnCount.map((btn) => (
              <button
                key={Math.random()}
                className={
                  btn === activePage
                    ? "bg-white dark:bg-dark-primary text-yellow-400 w-[1.75rem] h-[1.75rem] text-[.8125rem] font-light rounded-[.25rem] border-light-gray border-solid border-[1px]"
                    : "rounded-[.25rem] text-gray bg-light-gray dark:bg-dark-primary w-[1.75rem] h-[1.75rem] border-light-gray border-solid border-[1px] text-[.8125rem]"
                }
                onClick={() => handleChange(btn)}
              >
                {btn}
              </button>
            ))}
            <button
              className="w-[1.75rem] h-[1.75rem] bg-light-gray dark:border-opacity-5 dark:bg-carousel flex items-center justify-center text-base border-light-gray border-solid border-[1px] rounded-[.25rem]"
              onClick={onNextClick}
              disabled={activePage === btnCount.length}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderTable;
