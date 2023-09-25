import React from 'react'
import { Auxure, AuxureDark, Hamburger, Moon, Alert, AlertDark, NewMessage, ArrowDown, Sun, ArrowdownDark, HamburgerDark } from '../assets/svgs/svg-icons'
import { Link } from 'react-router-dom';
import Ellipse from '../assets/images/Ellipse.png'

const NavBar = ({ toggleTheme, darkTheme }) => {
  return (
    <div className='bg-white dark:bg-dark-primary h-[4.875rem] px-[1.85rem] flex items-center justify-between border-b-2 border-gray'>
      <hgroup className='flex items-center w-[12rem] justify-between'>
          <Link to='/admin'>
            { darkTheme? <AuxureDark /> : <Auxure /> }
          </Link>
          <div className="burger-container cursor-pointer">
            {darkTheme ? <HamburgerDark /> : <Hamburger className='cursor-pointer'/>}
          </div>
      </hgroup>

      <hgroup className='flex items-center justify-center gap-[1.5rem]'>
        <div className="theme cursor-pointer" onClick={ toggleTheme }>
          { darkTheme ?  <Sun /> : <Moon /> }
        </div>
        <div className="alert relative cursor-pointer">
          { darkTheme ? <AlertDark /> : <Alert /> }
          <NewMessage className='absolute top-0 right-0'/>
        </div>
        <div className="image-container flex items-center justify-items-center gap-[.4rem] cursor-pointer">
          <div className="image h-[2.5rem] w-[2.5rem] rounded-full">
            <img src={ Ellipse } alt="user-image" className='w-full h-full object-cover'/>  
          </div>
          { darkTheme ? <ArrowdownDark /> : <ArrowDown /> }
        </div>
      </hgroup> 
    </div>
  )
}

export default NavBar