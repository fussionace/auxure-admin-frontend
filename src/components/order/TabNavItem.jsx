import React, { useState } from 'react'

const TabNavItem = ({ id, title, activeTab, setActiveTab}) => {
    const handleClick = () => {
        setActiveTab(id)
    }
    return (
    <li onClick={ handleClick } className={ activeTab === id ? 'text-[1.25rem] text-darkest dark:text-white font-medium cursor-pointer after:block after:h-[.125rem] after:w-full after:bg-brown-secondary after:mt-[1.1rem]' : 'text-[1.25rem] text-gray font-medium cursor-pointer'}>
        { title }
    </li>
  )
}

export default TabNavItem