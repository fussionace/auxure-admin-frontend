import React from 'react'
import { Alert, AlertDark, ArrowdownDark, NewMessage, ArrowDown, Calendar, Divide, ProjectionUp, GoldBag, ProjectionDown, CustomersGold, Visitors, Stars, BiroRed, DeleteRed } from '../assets/svgs/svg-icons'
import Ellipse from '../assets/images/Ellipse.png'
import perf221 from '../assets/images/image9.png'

const Analytics = ({ darkTheme }) => {
  const products =  [
    {
      name:'Enchanted Elixir',
      price:'N125,000',
      img: perf221,
    },
    {
      name:'Enchanted Elixir',
      price:'N125,000',
      img: perf221,
    },

  ]


  return (
    <div className='ml-[18.125rem] p-[2rem] min-h-screen bg-accent dark:bg-dark-secondary'>
      <hgroup className="title-container flex items-center justify-between mb-[3rem] mr-[4rem]">
        <h1 className='font-medium dark:text-white md:text-[2rem]'>Analytics</h1>        
        <div className='flex items-center justify-center gap-[1.5rem]'>
          {/* <div className="theme cursor-pointer" onClick={ toggleTheme }>
            { darkTheme ?  <Sun /> : <Moon /> }
          </div> */}
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

      <section className="flex items-center justify-between">
        <span className="block text-[1rem] font-light dark:text-gray">Activity</span>
        <div className="innter-flex flex items-center justify-center gap-[3.1875rem]">
          <div className="calendar flex items-center justify-center gap-[.5rem]">
            <Calendar />
            <span className='block text-[1rem] text-accent-6 font-light'>9 May - 16 May</span>
          </div>

          <div className="dropdown flex items-center justify-center gap-[.5rem]">
             <span className="block text-[1rem] font-light dark:text-white">Week</span>
             <ArrowDown /> 
          </div>
        </div>  
      </section>

        {/* cards */}
      <section className="cards mt-[2rem] flex items-center justify-center gap-[1.5rem]">
         <div className="card flex items-center bg-white rounded-[.625rem] justify-end flex-col gap-[.8125rem] pt-[1.375rem] pr-[4rem] pb-[.9375rem] pl-[1.25rem]">
            <span className='flex w-full items-center gap-[.875rem] justify-start text-[1rem] font-light'>
              <div className="circle h-[1.75rem] w-[1.75rem] rounded-full bg-cream flex items-center justify-center">
                <Divide />
              </div>
              Total sales
            </span>
            <span className='block w-full text-[1.5rem] font-medium'>N4.6M</span>
            <span className='flex items-center gap-[.625rem]'>
              <ProjectionUp />
              <span className="block text-pending text-[.75rem] text-light">19.4%</span>
              <span className="block text-pending text-[.75rem] text-light">+48k this week</span>
            </span>  
         </div>

         <div className="card flex items-center bg-white rounded-[.625rem] justify-end flex-col gap-[.8125rem] pt-[1.375rem] pr-[4rem] pb-[.9375rem] pl-[1.25rem]">
            <span className='flex w-full items-center gap-[.875rem] justify-start text-[1rem] font-light'>
              <div className="circle h-[1.75rem] w-[1.75rem] rounded-full bg-cream flex items-center justify-center">
                <GoldBag />
              </div>
              Orders
            </span>
            <span className='block w-full text-[1.5rem] font-medium'>12,030.6</span>
            <span className='flex items-center gap-[.625rem]'>
              <ProjectionDown />
              <span className="block text-red-down text-[.75rem] text-light">19.4%</span>
              <span className="block text-red-down text-[.75rem] text-light">+48k this week</span>
            </span>  
         </div>

         <div className="card flex items-center bg-white rounded-[.625rem] justify-end flex-col gap-[.8125rem] pt-[1.375rem] pr-[4rem] pb-[.9375rem] pl-[1.25rem]">
            <span className='flex w-full items-center gap-[.875rem] justify-start text-[1rem] font-light'>
              <div className="circle h-[1.75rem] w-[1.75rem] rounded-full bg-cream flex items-center justify-center">
                <CustomersGold />
              </div>
              Customers
            </span>
            <span className='block w-full text-[1.5rem] font-medium'>30,580.42</span>
            <span className='flex items-center gap-[.625rem]'>
              <ProjectionUp />
              <span className="block text-pending text-[.75rem] text-light">10.8%</span>
              <span className="block text-pending text-[.75rem] text-light">+5k this week</span>
            </span>  
         </div>

         <div className="card flex items-center bg-white rounded-[.625rem] justify-end flex-col gap-[.8125rem] pt-[1.375rem] pr-[4rem] pb-[.9375rem] pl-[1.25rem]">
            <span className='flex w-full items-center gap-[.875rem] justify-start text-[1rem] font-light'>
              <div className="circle h-[1.75rem] w-[1.75rem] rounded-full bg-cream flex items-center justify-center">
                <Visitors />
              </div>
              Visitors
            </span>
            <span className='block w-full text-[1.5rem] font-medium'>2,034</span>
            <span className='flex items-center gap-[.625rem]'>
              <ProjectionUp />
              <span className="block text-pending text-[.75rem] text-light">2.8%</span>
              <span className="block text-pending text-[.75rem] text-light">+1k this week</span>
            </span>  
         </div>     
      </section>

      <section className="charts my-[1.5rem] flex items-center gap-[2rem]">
         <div className="graph w-[39.0626rem] h-[24.75rem] bg-white rounded-[.625rem]"></div>   
          <div className="pie-chart w-[25.562rem] h-[24.75rem] bg-white rounded-[.625rem]">
          </div>
      </section>

      <section className="products flex items-center justify-end">
        <div className="card bg-white w-[25.562rem] rounded-[.625rem] min-[10rem] pt-[1.4375rem] pr-[2.125rem] pb-[2.8125rem] pl-[1.25rem]">
          <div className="title flex items-center justify-between">
            <span className="block text-[1rem] font-medium">Top Selling Product</span>
            <small className="text-[.75rem] text-lightbrown">See all</small>
          </div>

          <div className="products-card-container flex flex-col gap-[1.5rem] mt-[2rem]">
            {
              products.map((product) => (

                <div className="card flex items-center justify-between" key={ product.price}>
                  <div className="name flex gap-[.5rem]">
                    <img src={ product.img } alt={ product.name } classNamew='w-[5rem] h-[5rem] rounded-[.3125rem]'/>
                    <div className="product_details flex flex-col gap-[.5rem]">
                      <span className='block text-[1rem] font-medium'>{ product.name }</span>
                      <Stars />
                      <span className='block text-[1rem] font-medium'>{ product.price }</span>
                    </div>
                  </div>

                  <div className="svgs flex flex-col gap-[1.125rem] items-center justify-center">
                    <BiroRed />
                    <DeleteRed />
                  </div>
                </div>
              ))
            }  
          </div>
        </div>
      </section>
    </div>
  )
}

export default Analytics