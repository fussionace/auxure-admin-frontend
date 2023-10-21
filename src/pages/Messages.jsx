import React from 'react'
import { Back } from '../assets/svgs/svg-icons'
import { Link } from 'react-router-dom'

const Messages = () => {
  return (
    <div className='ml-[18.125rem] p-[2rem] dark:bg-dark-primary min-h-screen'>
      <Link to={'/admin/'} className='flex items-center gap-[.5rem] mb-[1rem]'>
        <Back />
        <span className="block text-gray text-[.875rem] font-light">Back to Dashboard</span>
      </Link>
      <div className="message_flex flex items-center gap-[1.3rem]">
        <h1 className='text-[2rem] font-medium dark:text-white'>Messages</h1>
        <div className="message_number w-[2.25rem] h-[1.75rem] rounded-[.3125rem] bg-accent-2 flex items-center justify-center text-[.875rem]">
          83
        </div>
      </div>
    </div>
  )
}

export default Messages