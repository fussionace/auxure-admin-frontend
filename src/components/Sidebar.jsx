import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Auxure,
  AuxureDark,
  HamburgerDark,
  Hamburger,
  AnalyticsLight,
  BagLight,
  CartLight,
  CustomersLight,
  DashboardLight,
  TransactionsLight,
  Stats,
  Reviews,
  NewMessage,
  Messages,
  Settings,
  Logout,
  SidebarDrop,
  DashboardInactive,
  DashboardDark,
  DashboardBagDark,
  DropdownDark,
  CartDark,
  CustomersDark,
  StatsDark,
  ReviewsDark,
  TransactionsDark,
  AnalyticsDark,
  MessagesDark,
  SettingsDark,
  LogoutDark,
} from "../assets/svgs/svg-icons";


const Sidebar = ({ darkTheme, openSidebar, setOpenSidebar }) => {
  
  const [place, setPlace] = useState(false);
  
  
  return (
    <div
      className={
        openSidebar
          ? "bg-white dark:bg-dark-primary overflow-y-scroll fixed top-0 left-0 w-[18.125rem] h-screen flex flex-col items-start justify-between p-[2rem] py-[2.8rem]"
          : "bg-white dark:bg-dark-primary overflow-y-scroll fixed top-0 left-0 w-[8.125rem] h-screen flex flex-col items-center justify-between py-[2.8rem]"
      }
    >
      <div className="group">
        <hgroup className="flex items-center justify-between gap-[2rem] mb-[3.8rem]">
          <Link to="/admin/">
            {darkTheme ? (
              <AuxureDark
                className={openSidebar ? "w-[7.76425rem]" : "w-[7rem]"}
              />
            ) : (
              <Auxure className={openSidebar ? "w-[7.76425rem]" : "w-[7rem]"} />
            )}
          </Link>
          {openSidebar && (
            <div
              className="burger-container cursor-pointer"
              onClick={() => setOpenSidebar(false)}
            >
              {darkTheme ? <HamburgerDark /> : <Hamburger />}
            </div>
          )}
        </hgroup>

        <div className="links flex flex-col gap-[1.25rem] mb-[6rem]">
          <NavLink
            exact
            to="/admin/"
            className={({ isActive }) =>
              darkTheme && isActive
                ? "flex items-center justify-left gap-[.5rem] px-[1rem] py-[.5rem] bg-dark-hover"
                : isActive
                ? "flex items-center justify-left gap-[.5rem] px-[1rem] py-[.5rem] bg-lightbrown"
                : "flex items-center justify-left gap-[.5rem] px-[1rem] py-[.5rem]"
            }
            isActive={(match, location) => {
              if (match) {
                setPlace(true);
                console.log(location)
              }
              return match;
            }}
          >
            
            {/* {darkTheme ? <DashboardDark /> : <DashboardInactive />} */}
            {place ? <DashboardInactive /> : <DashboardLight />}
            {openSidebar && (
              <span className="text-coffee-brown dark:text-white dark:opacity-50 text-[1rem]">
                Dasboard
              </span>
            )}
          </NavLink>
          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              darkTheme && isActive
                ? "flex items-center justify-between gap-[2rem] px-[1rem] py-[.5rem] bg-dark-hover"
                : isActive
                ? "flex items-center justify-between gap-[2rem] px-[1rem] py-[.5rem] bg-lightbrown"
                : "flex items-center justify-between gap-[2rem] px-[1rem] py-[.5rem]"
            }
          >
            <div className="flex items-center justify-center gap-[.5rem]">
              {darkTheme ? <DashboardBagDark /> : <BagLight />}
              {openSidebar && (
                <span className="text-coffee-brown dark:text-white dark:opacity-50 text-[1rem]">
                  Products
                </span>
              )}
            </div>
            {darkTheme ? <DropdownDark /> : <SidebarDrop />}
          </NavLink>
          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              darkTheme && isActive
                ? "flex items-center justify-between gap-[2rem] px-[1rem] py-[.5rem] bg-dark-hover"
                : isActive
                ? "flex items-center justify-between gap-[2rem] px-[1rem] py-[.5rem] bg-lightbrown"
                : "flex items-center justify-between gap-[2rem] px-[1rem] py-[.5rem]"
            }
          >
            <div className="flex items-center justify-center gap-[.5rem]">
              {darkTheme ? <CartDark /> : <CartLight />}
              {openSidebar && (
                <span className="text-coffee-brown dark:text-white dark:opacity-50 text-[1rem]">
                  Orders
                </span>
              )}
            </div>
            {darkTheme ? <DropdownDark /> : <SidebarDrop />}
          </NavLink>
          <NavLink
            to="/admin/customers"
            className={({ isActive }) =>
              darkTheme && isActive
                ? "flex items-center justify-between gap-[1rem] px-[1rem] py-[.5rem] bg-dark-hover"
                : isActive
                ? "flex items-center justify-between gap-[1rem] px-[1rem] py-[.5rem] bg-lightbrown"
                : "flex items-center justify-between gap-[1rem] px-[1rem] py-[.5rem]"
            }
          >
            <div className="flex items-center justify-center gap-[.5rem]">
              {darkTheme ? <CustomersDark /> : <CustomersLight />}
              {openSidebar && (
                <span className="text-coffee-brown dark:text-white dark:opacity-50 text-[1rem]">
                  Customers
                </span>
              )}
            </div>
            {darkTheme ? <DropdownDark /> : <SidebarDrop />}
          </NavLink>
          <NavLink
            to="/admin/statistics"
            className={({ isActive }) =>
              darkTheme && isActive
                ? "flex items-center justify-left gap-[.5rem] px-[1rem] py-[.5rem] bg-dark-hover"
                : isActive
                ? "flex items-center justify-left gap-[.5rem] px-[1rem] py-[.5rem] bg-lightbrown"
                : "flex items-center justify-left gap-[.5rem] px-[1rem] py-[.5rem]"
            }
          >
            {darkTheme ? <StatsDark /> : <Stats />}
            {openSidebar && (
              <span className="text-coffee-brown dark:text-white dark:opacity-50 text-[1rem]">
                Statistics
              </span>
            )}
          </NavLink>
          <NavLink
            to="/admin/reviews"
            className={({ isActive }) =>
              darkTheme && isActive
                ? "flex items-center justify-left gap-[.5rem] px-[1rem] py-[.5rem] bg-dark-hover"
                : isActive
                ? "flex items-center justify-left gap-[.5rem] px-[1rem] py-[.5rem] bg-lightbrown"
                : "flex items-center justify-left gap-[.5rem] px-[1rem] py-[.5rem]"
            }
          >
            {darkTheme ? <ReviewsDark /> : <Reviews />}
            {openSidebar && (
              <span className="text-coffee-brown dark:text-white dark:opacity-50 text-[1rem]">
                Reviews
              </span>
            )}
          </NavLink>
          <NavLink
            to="/admin/transactions"
            className={({ isActive }) =>
              darkTheme && isActive
                ? "flex items-center justify-left gap-[.5rem] px-[1rem] py-[.5rem] bg-dark-hover"
                : isActive
                ? "flex items-center justify-left gap-[.5rem] px-[1rem] py-[.5rem] bg-lightbrown"
                : "flex items-center justify-left gap-[.5rem] px-[1rem] py-[.5rem]"
            }
          >
            {darkTheme ? <TransactionsDark /> : <TransactionsLight />}
            {openSidebar && (
              <span className="text-coffee-brown dark:text-white dark:opacity-50 text-[1rem]">
                Transactions
              </span>
            )}
          </NavLink>
          <NavLink
            to="/admin/analytics"
            className={({ isActive }) =>
              darkTheme && isActive
                ? "flex items-center justify-left gap-[.5rem] px-[1rem] py-[.5rem] bg-dark-hover"
                : isActive
                ? "flex items-center justify-left gap-[.5rem] px-[1rem] py-[.5rem] bg-lightbrown"
                : "flex items-center justify-left gap-[.5rem] px-[1rem] py-[.5rem]"
            }
          >
            {darkTheme ? <AnalyticsDark /> : <AnalyticsLight />}

            {openSidebar && (
              <span className="text-coffee-brown dark:text-white dark:opacity-50 text-[1rem]">
                Analytics
              </span>
            )}
          </NavLink>
          <NavLink
            to="/admin/messages"
            className={({ isActive }) =>
              darkTheme && isActive
                ? "flex items-center justify-between gap-[.5rem] px-[1rem] py-[.5rem] bg-dark-hover"
                : isActive
                ? "flex items-center justify-between gap-[.5rem] px-[1rem] py-[.5rem] bg-lightbrown"
                : "flex items-center justify-between gap-[.5rem] px-[1rem] py-[.5rem]"
            }
          >
            <div className="flex items-center justify-center gap-[.5rem]">
              {darkTheme ? <MessagesDark /> : <Messages />}
              {openSidebar && (
                <span className="text-coffee-brown dark:text-white dark:opacity-50 text-[1rem]">
                  Messages
                </span>
              )}
            </div>
            <div className="message-number h-[1.4rem] px-[.375rem] bg-light-gray dark:bg-white rounded-full flex items-center justify-center">
              <span className="number text-[.875rem] font-light">3</span>
            </div>
          </NavLink>
        </div>
      </div>

      <div
        className={
          openSidebar
            ? "settings-logout flex flex-col gap-[1.25rem] ml-[1rem] "
            : " settings-logout justify-start w-full flex flex-col gap-[1.25rem] px-[1rem]"
        }
      >
        <div className="settings flex items-center gap-[1rem]">
          {darkTheme ? <SettingsDark /> : <Settings />}
          {openSidebar && (
            <p className="text-[1rem] font-medium dark:text-white">Settings</p>
          )}
        </div>
        <div className="logout flex items-center gap-[1rem]">
          {darkTheme ? <LogoutDark /> : <Logout />}
          {openSidebar && (
            <p className="text-[1rem] font-medium dark:text-white">Logout</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
