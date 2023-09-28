import React from 'react'
import { Alert, AlertDark, ArrowDown, ArrowdownDark, Moon, NewMessage, Sun } from '../assets/svgs/svg-icons'
import Ellipse from '../assets/images/Ellipse.png'

const Orders = ({ toggleTheme, darkTheme }) => {
  return (
    <div className='ml-[18.125rem] p-[2rem] bg-light-gray dark:bg-dark-background min-h-screen'>
      <hgroup className="title-container flex items-center justify-between mb-[3rem] mr-[4rem]">
        <h1 className='font-medium dark:text-white md:text-[2rem]'>Order History</h1>        
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
    </div>
  )
}

export default Orders