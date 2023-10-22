import React, { useState } from "react";
import {
  Moon,
  Alert,
  AlertDark,
  NewMessage,
  ArrowDown,
  Sun,
  ArrowdownDark,
  Search,
  Chevrondown,
  ChevronLeft,
  ChevronRight,
} from "../assets/svgs/svg-icons";
import Ellipse from "../assets/images/Ellipse.png";

const Transaction = ({ toggleTheme, darkTheme, openSidebar }) => {
  const products = [
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Delivered",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Delivered",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Delivered",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Delivered",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Delivered",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Canceled",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Canceled",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Canceled",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Canceled",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Canceled",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Canceled",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Canceled",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Canceled",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Canceled",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Canceled",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Canceled",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Canceled",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Canceled",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Canceled",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Canceled",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Canceled",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Canceled",
      action: "View Details",
    },
    {
      id: "#14327A",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      price: "N100,000",
      paymentMethod: "CC",
      status: "Canceled",
      action: "View Details",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [display, setDisplay] = useState(10);
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

  const [openDetails, setOpenDetails] = useState(false);

  return (
    <div
      className={
        openSidebar
          ? "ml-[18.125rem] p-[2rem] bg-light-gray dark:bg-darkest min-h-screen"
          : "ml-[8.125rem] p-[2rem] bg-light-gray dark:bg-darkest min-h-screen"
      }
    >
      <hgroup className="title-container flex items-center justify-between mb-[3rem] mr-[4rem]">
        <h1 className="font-medium dark:text-white md:text-[2rem]">
          Transaction
        </h1>
        <div className="flex items-center justify-center gap-[1.5rem]">
          <div className="theme cursor-pointer" onClick={toggleTheme}>
            {darkTheme ? <Sun /> : <Moon />}
          </div>
          <div className="alert relative cursor-pointer">
            {darkTheme ? <AlertDark /> : <Alert />}
            <NewMessage className="absolute top-0 right-0" />
          </div>
          <div className="flex items-center justify-items-center gap-[.4rem] cursor-pointer mr-[1rem]">
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

      <div className="form-filters flex justify-between items-center mb-[2rem]">
        <div className="flex-container flex items-center gap-[1.6rem]">
          <div className="form-field relative">
            <input
              type="text"
              className="text-[16px] font-light dark:bg-accent-dark dark:text-accent-4 text-gray rounded-[.25rem] px-[1rem] py-[.5rem] pr-[2rem] outline-none"
              placeholder="Search..."
            />
            <Search className="absolute top-[30%] right-[4%] cursor-pointer" />
          </div>
          <div className="bg-white dark:bg-accent-dark status h-[2.5rem] px-[1rem] py-[.5rem] rounded-[.25rem] flex items-center gap-[.375rem] justify-center cursor-default">
            <span className="block text-[.9375rem] font-medium text-gray">
              Status : All
            </span>
            <Chevrondown />
          </div>
        </div>
        <div
          onClick={() => setOpenDetails(!openDetails)}
          className="bg-white relative dark:bg-accent-dark status h-[2.5rem] px-[1rem] py-[.5rem] rounded-[.25rem] flex items-center gap-[.375rem] justify-center cursor-pointer"
        >
          <span className="block text-[.9375rem] font-medium text-gray">
            Filter by date range
          </span>
          <Chevrondown />
          {openDetails && (
            <div className=" h-[6rem] w-[100%] p-[.8rem] data-output absolute top-[110%] left-0 dark:bg-accent-dark bg-white">
              <span className="block dark:text-white">
                Filter range details
              </span>
            </div>
          )}
        </div>
      </div>

      {/* table */}
      <div className="bg-white dark:bg-dark-primary rounded-[.625rem]">
        <table className="w-full dark:text-white">
          <thead>
            <tr className="border-b-2 border-light-gray dark:border-space-gray text-left text-[.8125rem] font-semibold text-gray">
              <th className="h-[3.3125rem] px-[2rem]">ID</th>
              <th>CUSTOMER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAYMENT METHOD</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {values.map((order) => (
              <tr
                className="last:pl-[2rem] border-b-2 border-light-gray dark:border-cream"
                key={order.id}
              >
                <td className="px-[2rem] text-[.875rem] font-light h-[3.3125rem]">
                  {order.id}
                </td>
                <td className="text-[.875rem] font-light">{order.customer}</td>
                <td className="text-[.875rem] font-light">{order.date}</td>
                <td className="text-[.875rem] font-light">{order.price}</td>
                <td className="text-[.875rem] font-light">
                  {order.paymentMethod}
                </td>
                <td
                  className={
                    order.status === "Canceled"
                      ? "text-[.875rem] font-light text-canceled"
                      : order.status === "Delivered"
                      ? "text-8[.75rem] font-light text-delivered"
                      : ""
                  }
                >
                  {order.status}
                </td>
                <td className="text-[.875rem] font-light">{order.action}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination-container flex items-center justify-between mt-[1rem] pb-[2rem] px-[2rem]">
          <div className="numbers-flex flex items-center gap-[.6rem]">
            <label
              htmlFor="number"
              className="text-[.9375rem] font-semibold dark:text-gray"
            >
              Showing
            </label>
            <div className="flex dark:text-accent-4 items-center justify-center gap-[.375rem] border-solid border-[.5px] border-light-gray rounded-[5px] w-[4rem] h-[2rem]">
              {values.length}
              {darkTheme ? <ArrowdownDark /> : <ArrowDown />}
            </div>
            <span className="block text-gray text-[.9375rem] font-semibold">
              of 50
            </span>
          </div>
          {/* pagination */}
          <div className="pagination flex items-center justify-center gap-[.25rem]">
            <button
              className="bg-light-gray dark:bg-carousel dark:border-none flex items-center justify-center w-[1.75rem] h-[1.75rem] text-base border-light-gray border-solid border-[1px] rounded-[.25rem]"
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
                    ? "bg-black text-white w-[1.75rem] h-[1.75rem] text-[.8125rem] dark:text-accent-yellow dark:bg-transparent border-light-gray dark:border-gray dark:border-solid dark:border-[1px] font-light rounded-[.25rem]"
                    : "rounded-[.25rem] text-gray bg-light-gray w-[1.75rem] h-[1.75rem] dark:bg-transparent border-light-gray dark:border-gray border-solid border-[1px] text-[.8125rem]"
                }
                onClick={() => handleChange(btn)}
              >
                {btn}
              </button>
            ))}
            <button
              className="w-[1.75rem] dark:bg-carousel dark:border-none h-[1.75rem] bg-light-gray flex items-center justify-center text-base border-light-gray border-solid border-[1px] rounded-[.25rem]"
              onClick={onNextClick}
              disabled={activePage === btnCount.length}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
