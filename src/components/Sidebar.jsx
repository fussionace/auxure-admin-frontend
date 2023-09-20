import React from 'react'
import { NavLink } from 'react-router-dom'
import { DashboardLight } from '../assets/svgs/svg-icons'
const Sidebar = () => {
  return (
    <div className='bg-white dark:bg-dark-primary w-[16.6857rem] min-h-screen fixed left-0 shadow-custom'>
      <div className="aside-container">
        
        <div className="links">
          <div className="dash-board">
            <NavLink to='/admin/dashboard'>
              <DashboardLight />
              <span>Dasboard</span>
            </NavLink>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar