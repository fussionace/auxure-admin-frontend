import React, { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Statistics from "./pages/Statistics";
import Reviews from "./pages/Reviews";
import Transaction from "./pages/Transaction";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    localStorage.setItem("theme", JSON.stringify(darkTheme));
  };

  useEffect(() => {
    const recoverTheme = !JSON.parse(localStorage.getItem("theme"));

    setDarkTheme(recoverTheme);
  }, []);

  // sidebar toggle

  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <div className={darkTheme ? "dark" : ""}>
      {/* <NavBar darkTheme={ darkTheme } toggleTheme={ toggleTheme }/> */}
      <Sidebar
        darkTheme={darkTheme}
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />
      <Routes>
        <Route
          path="/admin/"
          element={
            <Dashboard
              openSidebar={openSidebar}
              darkTheme={darkTheme}
              toggleTheme={toggleTheme}
            />
          }
        />
        <Route
          path="/admin/products"
          element={<Products openSidebar={openSidebar} darkTheme={darkTheme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/admin/orders"
          element={<Orders openSidebar={openSidebar} darkTheme={darkTheme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/admin/customers"
          element={
            <Customers openSidebar={openSidebar}  darkTheme={darkTheme} toggleTheme={toggleTheme} />
          }
        />
        <Route
          path="/admin/statistics"
          element={
            <Statistics openSidebar={openSidebar} darkTheme={darkTheme} toggleTheme={toggleTheme} />
          }
        />
        <Route
          path="/admin/reviews"
          element={<Reviews openSidebar={openSidebar} darkTheme={darkTheme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/admin/transactions"
          element={
            <Transaction openSidebar={openSidebar} darkTheme={darkTheme} toggleTheme={toggleTheme} />
          }
        />
        <Route
          path="/admin/analytics"
          element={
            <Analytics openSidebar={openSidebar} darkTheme={darkTheme} toggleTheme={toggleTheme} />
          }
        />
        <Route
          path="/admin/messages"
          element={<Messages openSidebar={openSidebar} darkTheme={darkTheme} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </div>
  );
}

export default App;
