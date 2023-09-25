import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Auxure, AuxureDark, HamburgerDark, Hamburger, AnalyticsLight, BagLight, CartLight, CustomersLight, DashboardLight, TransactionsLight, Stats, Reviews, NewMessage, Messages, Settings, Logout } from '../assets/svgs/svg-icons'

const Sidebar = ({ darkTheme }) => {
  return (
    <div className='bg-white dark:bg-dark-primary overflow-y-scroll fixed top-0 left-0 w-[18.125rem] h-screen flex flex-col items-start justify-between p-[2rem] pt-[2.8rem]'>
        <div className="group">
          <hgroup className='flex items-center w-[12.125rem] justify-between mb-[3.8rem]'>
            <Link to='/admin'>
              { darkTheme? <AuxureDark /> : <Auxure /> }
            </Link>
            <div className="burger-container cursor-pointer">
              {darkTheme ? <HamburgerDark /> : <Hamburger />}
            </div>
          </hgroup>
          
          <div className="links flex flex-col gap-[.8rem]">
            <NavLink to='/admin/' className= 'flex items-center justify-left gap-[.5rem] w-[12.125rem] px-[1rem] py-[.5rem] bg-lightbrown'>
              <DashboardLight />
              <span className='text-coffee-brown text-[1rem]'>Dasboard</span>
            </NavLink>
            <NavLink to='/admin/products' className= 'flex items-center justify-left gap-[.5rem] w-[12.125rem] px-[1rem] py-[.5rem]'>
              <BagLight />
              <span className='text-coffee-brown text-[1rem]'>Products</span>
            </NavLink>
            <NavLink to='/admin/orders' className= 'flex items-center justify-left gap-[.5rem] w-[12.125rem] px-[1rem] py-[.5rem]'>
              <CartLight />
              <span className='text-coffee-brown text-[1rem]'>Orders</span>
            </NavLink>
            <NavLink to='/admin/customers' className= 'flex items-center justify-left gap-[.5rem] w-[12.125rem] px-[1rem] py-[.5rem]'>
              <CustomersLight />
              <span className='text-coffee-brown text-[1rem]'>Customers</span>
            </NavLink>
            <NavLink to='/admin/products' className= 'flex items-center justify-left gap-[.5rem] w-[12.125rem] px-[1rem] py-[.5rem]'>
              <Stats />
              <span className='text-coffee-brown text-[1rem]'>Statistics</span>
            </NavLink>
            <NavLink to='/admin/products' className= 'flex items-center justify-left gap-[.5rem] w-[12.125rem] px-[1rem] py-[.5rem]'>
              <Reviews />
              <span className='text-coffee-brown text-[1rem]'>Reviews</span>
            </NavLink>
            <NavLink to='/admin/products' className= 'flex items-center justify-left gap-[.5rem] w-[12.125rem] px-[1rem] py-[.5rem]'>
              <TransactionsLight />
              <span className='text-coffee-brown text-[1rem]'>Transactions</span>
            </NavLink>
            <NavLink to='/admin/products' className= 'flex items-center justify-left gap-[.5rem] w-[12.125rem] px-[1rem] py-[.5rem]'>
              <AnalyticsLight />
              <span className='text-coffee-brown text-[1rem]'>Analytics</span>
            </NavLink>
            <NavLink to='/admin/products' className= 'flex items-center justify-left gap-[.5rem] w-[12.125rem] px-[1rem] py-[.5rem]'>
              <Messages />
              <span className='text-coffee-brown text-[1rem]'>Messages</span>
            </NavLink>
          </div>
        </div>

        
        <div className="settings-logout">
          <div className="settings flex items-center gap-[1rem]">
              <Settings />
              <p className='text-[1rem] font-medium'>Settings</p>
          </div>
          <div className="logout flex items-center gap-[1rem]">
              <Logout />
              <p>Logout</p>
          </div>
        </div>
    </div>
  )
}

export default Sidebar