import React from "react";
import {
  Moon,
  Alert,
  AlertDark,
  NewMessage,
  ArrowDown,
  Sun,
  ArrowdownDark,
  Search,
  Edit,
  Recycle,
  Lock,
  EditDark,
  LockDark,
  RecycleDark,
} from "../assets/svgs/svg-icons";
import Ellipse from "../assets/images/Ellipse.png";
import Ellipse1 from "../assets/images/Ellipse200.png";
import Ellipse2 from "../assets/images/Ellipse201.png";
import Ellipse3 from "../assets/images/Ellipse202.png";

const Customers = ({ darkTheme, toggleTheme, openSidebar }) => {
  const customers = [
    {
      img: Ellipse1,
      name: "Ruben Navas",
      email: "orgabin534@gmail.com",
      phone: "+234 901445 5287",
      created: "9 Jun 2022",
    },
    {
      img: Ellipse2,
      name: "Fred Julion",
      email: "juliana654@gmail.com",
      phone: "+234 901445 54311",
      created: "9 Jun 2022",
    },
    {
      img: Ellipse3,
      name: "Chidi Arise",
      email: "orgabin534@gmail.com",
      phone: "+234 901445 5287",
      created: "9 Jun 2022",
    },
    {
      img: Ellipse,
      name: "Amanda Lucy",
      email: "orgabin534@gmail.com",
      phone: "+234 901445 5287",
      created: "9 Jun 2022",
    },
    {
      img: Ellipse,
      name: "Amanda Lucy",
      email: "orgabin534@gmail.com",
      phone: "+234 901445 5287",
      created: "9 Jun 2022",
    },
    {
      img: Ellipse,
      name: "Amanda Lucy",
      email: "orgabin534@gmail.com",
      phone: "+234 901445 5287",
      created: "9 Jun 2022",
    },
    {
      img: Ellipse,
      name: "Amanda Lucy",
      email: "orgabin534@gmail.com",
      phone: "+234 901445 5287",
      created: "9 Jun 2022",
    },
  ];

  return (
    <div
      className={
        openSidebar
          ? "md:ml-[18.125rem] p-[2rem] bg-accent dark:bg-dark-background min-h-screen"
          : "md:ml-[8.125rem] p-[2rem] bg-accent dark:bg-dark-background min-h-screen"
      }
    >
      <hgroup className="title-container flex items-center justify-between mb-[3rem] mr-[4rem]">
        <h1 className="font-medium dark:text-white md:text-[2rem]">
          Customers
        </h1>
        <div className="flex items-center justify-center gap-[1.5rem]">
          <div className="theme cursor-pointer" onClick={toggleTheme}>
            {darkTheme ? <Sun /> : <Moon />}
          </div>
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

      {/* search */}
      <div className="search relative mb-[1.3rem]">
        <input
          type="text"
          className="dark:bg-dark-primary dark:text-accent-4 rounded-[1.875rem] py-[.75rem] pr-[10.6875rem] pl-[3.2rem] outline-none"
          placeholder="Search..."
        />
        <Search className="absolute top-[28%] left-[2%] h-[1.367673rem] w-[1.367673rem]" />
      </div>

      {/* table */}

      <div className="bg-white dark:bg-dark-primary">
        <table className="w-full dark:text-white">
          <thead>
            <tr className="border-b-2 border-accent-3 text-left text-[1rem] font-semibold text-darkest dark:text-white">
              <th className="h-[4rem] px-[2rem]">NAME</th>
              <th>PHONE NUMBERS</th>
              <th>CREATED</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr className="border-b-2 border-accent-3" key={customer.name}>
                <td className="px-[2rem] text-[.875rem] font-light h-[5rem] flex items-center gap-[.5rem]">
                  <img src={customer.img} alt="customer image" />
                  <div className="name_flex flex flex-col gap-[.3rem]">
                    <span className="block text-[.875rem] font-light text-black dark:text-white">
                      {customer.name}
                    </span>
                    <span className="block text-[.75rem] font-light text-gray">
                      {customer.email}
                    </span>
                  </div>
                </td>
                <td className="text-[.875rem] font-light">{customer.phone}</td>
                <td className="text-[.875rem] font-light">
                  {customer.created}
                </td>
                <td>
                  <div className="action flex items-center gap-[.5rem]">
                    {darkTheme ? <EditDark /> : <Edit />}
                    {darkTheme ? <LockDark /> : <Lock />}
                    {darkTheme ? <RecycleDark /> : <Recycle />}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="container flex items-center justify-between mt-[2rem] pb-[2rem] px-[2rem]">
          <div className="numbers-flex flex items-center gap-[.6rem]">
            <label
              htmlFor="number"
              className="text-[.9375rem] font-semibold dark:text-gray"
            >
              Showing
            </label>
            <div className="outline-none w-[2rem] dark:bg-transparent flex border-solid border-gray dark:border-brown-secondary dark:text-brown-secondary border-[1px] rounded-[.25rem] py-[.25rem] px-[.5rem]">
              {customers.length}
            </div>
            <span className="block text-gray text-[.9375rem] font-semibold">
              of 50
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
