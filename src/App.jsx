import React, { useState, useEffect } from 'react'
import Dashboard from './pages/Dashboard';
import './index.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Customers from './pages/Customers';

function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    localStorage.setItem('theme', JSON.stringify(darkTheme))
  }
  
  useEffect(() => {

    const recoverTheme = !JSON.parse(localStorage.getItem('theme'));

    setDarkTheme(recoverTheme);

  }, []);

  return (
    <div className={ darkTheme ? 'dark' : '' }>
      {/* <NavBar darkTheme={ darkTheme } toggleTheme={ toggleTheme }/> */}
      <Sidebar darkTheme={ darkTheme } />
      <Routes>
        <Route path='/admin/' element={ <Dashboard  darkTheme={ darkTheme } toggleTheme={ toggleTheme }/> } />
        <Route path='/admin/products' element={ <Products /> } />
        <Route path='/admin/orders' element={ <Orders /> } />
        <Route path='/admin/customers' element={ <Customers /> } />
      </Routes>
    </div>
  )
}

export default App
