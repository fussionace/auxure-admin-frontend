import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Auxure, AuxureDark, HamburgerDark, Hamburger, AnalyticsLight, BagLight, CartLight, CustomersLight, DashboardLight, TransactionsLight, Stats, Reviews, NewMessage, Messages, Settings, Logout, SidebarDrop, DashboardInactive } from '../assets/svgs/svg-icons'

const Sidebar = ({ darkTheme }) => {
  return (
    <div className='bg-white dark:bg-dark-primary overflow-y-scroll fixed top-0 left-0 w-[18.125rem] h-screen flex flex-col items-start justify-between p-[2rem] pt-[2.8rem]'>
        <div className="group">
          <hgroup className='flex items-center w-[12.125rem] justify-between mb-[3.8rem]'>
            <Link to='/admin/'>
              { darkTheme? <AuxureDark /> : <Auxure /> }
            </Link>
            <div className="burger-container cursor-pointer">
              {darkTheme ? <HamburgerDark /> : <Hamburger />}
            </div>
          </hgroup>
          
          <div className="links flex flex-col gap-[.8rem] mb-[6rem]">
            <NavLink to='/admin/' className= { ({isActive}) => isActive ? 'flex items-center justify-left gap-[.5rem] w-[12.125rem] px-[1rem] py-[.5rem] bg-lightbrown' : 'flex items-center justify-left gap-[.5rem] w-[12.125rem] px-[1rem] py-[.5rem]'}>
              <DashboardLight />
              <span className='text-coffee-brown dark:text-white dark:opacity-50 text-[1rem]'>Dasboard</span>
            </NavLink>
            <NavLink to='/admin/products' className= { ({isActive}) => isActive ? 'flex items-center justify-between gap-[2rem] w-[12.125rem] px-[1rem] py-[.5rem] bg-lightbrown' : 'flex items-center justify-between w-[12.125rem] px-[1rem] py-[.5rem]'}>
              <div className="flex items-center justify-center gap-[1rem]">
                <BagLight />
                <span className='text-coffee-brown dark:text-white dark:opacity-50 text-[1rem]'>Products</span>
              </div>
              <SidebarDrop />
            </NavLink>
            <NavLink to='/admin/orders' className= { ({isActive}) => isActive ? 'flex items-center justify-between gap-[2rem] w-[12.125rem] px-[1rem] py-[.5rem] bg-lightbrown' : 'flex items-center justify-between w-[12.125rem] px-[1rem] py-[.5rem]'}>
              <div className="flex items-center justify-center gap-[1rem]">
                <CartLight />
                <span className='text-coffee-brown dark:text-white dark:opacity-50 text-[1rem]'>Orders</span>
              </div>
              <SidebarDrop />
            </NavLink>
            <NavLink to='/admin/customers' className= { ({isActive}) => isActive ? 'flex items-center justify-between w-[12.125rem] px-[1rem] py-[.5rem] bg-lightbrown' : 'flex items-center justify-between w-[12.125rem] px-[1rem] py-[.5rem]'}>
              <div className="flex items-center justify-center gap-[1rem]">
                <CustomersLight />
                <span className='text-coffee-brown dark:text-white dark:opacity-50 text-[1rem]'>Customers</span>
              </div>
              <SidebarDrop />
            </NavLink>
            <NavLink to='/admin/statistics' className= { ({isActive}) => isActive ? 'flex items-center justify-left gap-[.5rem] w-[12.125rem] px-[1rem] py-[.5rem] bg-lightbrown' : 'flex items-center justify-left gap-[.5rem] w-[12.125rem] px-[1rem] py-[.5rem]'}>
              <Stats />
              <span className='text-coffee-brown dark:text-white dark:opacity-50 text-[1rem]'>Statistics</span>
            </NavLink>
            <NavLink to='/admin/reviews' className= { ({isActive}) => isActive ? 'flex items-center justify-left gap-[.5rem] w-[12.125rem] px-[1rem] py-[.5rem] bg-lightbrown' : 'flex items-center justify-left gap-[.5rem] w-[12.125rem] px-[1rem] py-[.5rem]'}>
              <Reviews />
              <span className='text-coffee-brown dark:text-white dark:opacity-50 text-[1rem]'>Reviews</span>
            </NavLink>
            <NavLink to='/admin/transactions' className= { ({isActive}) => isActive ? 'flex items-center justify-left gap-[.5rem] w-[12.125rem] px-[1rem] py-[.5rem] bg-lightbrown' : 'flex items-center justify-left gap-[.5rem] w-[12.125rem] px-[1rem] py-[.5rem]'}>
              <TransactionsLight />
              <span className='text-coffee-brown dark:text-white dark:opacity-50 text-[1rem]'>Transactions</span>
            </NavLink>
            <NavLink to='/admin/analytics' className= { ({isActive}) => isActive ? 'flex items-center justify-left gap-[.5rem] w-[12.125rem] px-[1rem] py-[.5rem] bg-lightbrown' : 'flex items-center justify-left gap-[.5rem] w-[12.125rem] px-[1rem] py-[.5rem]'}>
              <AnalyticsLight />
              <span className='text-coffee-brown dark:text-white dark:opacity-50 text-[1rem]'>Analytics</span>
            </NavLink>
            <NavLink to='/admin/messages' className= { ({isActive}) => isActive ? 'flex items-center justify-between gap-[2rem] w-[12.125rem] px-[1rem] py-[.5rem] bg-lightbrown' : 'flex items-center justify-between w-[12.125rem] px-[1rem] py-[.5rem]'}>
              <div className="flex items-center justify-center gap-[.5rem]">    
                <Messages />
                <span className='text-coffee-brown dark:text-white dark:opacity-50 text-[1rem]'>Messages</span>
              </div>
              <div className="message-number h-[1.4rem] px-[.375rem] bg-light-gray dark:bg-white rounded-full flex items-center justify-center">
                <span className="number text-[.875rem] font-light">3</span>
              </div>
            </NavLink>
          </div>
        </div>

        
        <div className="settings-logout flex flex-col gap-[1.25rem] ml-[1rem]">
          <div className="settings flex items-center gap-[1rem]">
              <Settings />
              <p className='text-[1rem] font-medium dark:text-white'>Settings</p>
          </div>
          <div className="logout flex items-center gap-[1rem]">
              <Logout />
              <p className='text-[1rem] font-medium dark:text-white'>Logout</p>
          </div>
        </div>
    </div>
  )
}

export default Sidebar