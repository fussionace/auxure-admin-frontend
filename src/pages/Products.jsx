import React from 'react'

const Products = () => {
  return (
    <div className='ml-[18.125rem] p-[2rem] min-h-screen bg-accent'>
      <hgroup className="title-container flex items-center justify-between mb-[3rem] w-full max-w-[65.6875rem]">
        <div className="flex-container flex items-center gap-[2.5rem]">
          <h1 className='font-medium dark:text-white md:text-[2rem]'>Products</h1>        
          <span className="quantity w-[4.4375rem] h-[1.75rem] rounded-[.3125rem] bg-accent-2 flex items-center justify-center">5,300</span>
        </div>
        <button className='w-[9.25rem] h-[3.375rem] py-[1rem] rounded-[.25rem] bg-accent-yellow text-[1rem] font-bold border-solid border-black border-[1px]'>
          ADD PRODUCT
        </button>
      </hgroup>
    </div>
  )
}

export default Products