import React from 'react'
import Chart from '../components/dashboard/Chart'
import Numbers from '../components/dashboard/Numbers'
import { Moon, Alert, AlertDark, NewMessage, ArrowDown, Sun, ArrowdownDark,  } from '../assets/svgs/svg-icons'
import Ellipse from '../assets/images/Ellipse.png'
import Products from '../components/dashboard/Products'

const Dashboard = ({ toggleTheme, darkTheme, openSidebar }) => {
  return (
    <div className={ openSidebar  ? 'font-primary p-[2rem] ml-[18.125rem] bg-light-gray dark:bg-dark-background min-h-screen mx-auto' : 'font-primary p-[2rem] ml-[8.125rem] bg-light-gray dark:bg-dark-background min-h-screen mx-auto'}>
      {/* nav */}
      <hgroup className="title-container flex items-center justify-between mb-[3rem] mr-[4rem] w-full">
        <h1 className='font-medium dark:text-white md:text-[2rem]'>Dashboard</h1>        
        <div className='flex items-center justify-center gap-[1.5rem]'>
          <div className="theme cursor-pointer" onClick={ toggleTheme }>
            { darkTheme ?  <Sun /> : <Moon /> }
          </div>
          <div className="alert relative cursor-pointer">
            { darkTheme ? <AlertDark /> : <Alert /> }
            <NewMessage className='absolute top-0 right-0'/>
          </div>
          <div className="flex items-center justify-items-center gap-[.4rem] cursor-pointer">
            <div className="image h-[2.5rem] w-[2.5rem] rounded-full">
              <img src={ Ellipse } alt="user-image" className='w-full h-full object-cover'/>  
            </div>
            { darkTheme ? <ArrowdownDark /> : <ArrowDown /> }
          </div>
        </div> 
      </hgroup>
      {/* first section */}
      <Numbers darkTheme={ darkTheme }/>
      <Chart />
      <Products darkTheme={darkTheme}/> 
    </div>
  )
}

export default Dashboard