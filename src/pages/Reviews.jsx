import React from 'react'
import { Alert, AlertDark, ArrowDown, ArrowdownDark, ArrowGrowth, Bag, Moon, NewMessage, Stars, Sun } from '../assets/svgs/svg-icons'
import Ellipse from '../assets/images/Ellipse.png';
import ReviewTable from '../components/review/ReviewTable';

const Reviews = ({ darkTheme, toggleTheme }) => {

  const items = [
    {
      percentage: '76',
      star:5
    },
    {
      percentage: '14',
      star:4
    },
    {
      percentage: '8',
      star:3
    },
    {
      percentage: '1',
      star:2
    },
    {
      percentage: '1',
      star:1
    },
  ]

  return (
    <div className='ml-[18.125rem] p-[2rem] min-h-screen bg-accent'>
      <hgroup className="title-container flex items-center justify-between mb-[3rem]">
        <div className="name-flex flex items-center justify-center gap-[2rem]">
          <h1 className='font-medium dark:text-white md:text-[2rem]'>Reviews</h1>        
          <div className="text-[1rem] font-medium flex items-center justify-center px-[.5rem] py-[1rem] rounded-[.3125rem] border-solid border-[.5px] border-gray">
            July 2022 - August 2023
          </div>
        </div>
        <div className='flex items-center justify-center gap-[1.5rem]'>
          <div className="theme cursor-pointer" onClick={ toggleTheme }>
            { darkTheme ?  <Sun /> : <Moon /> }
          </div>
          <div className="alert relative cursor-pointer">
            { darkTheme ? <AlertDark /> : <Alert /> }
            <NewMessage className='absolute top-0 right-0'/>
          </div>
          <button className='flex items-center justify-center gap-[.625rem] p-[.625rem] rounded-[.5rem] outline-none border-solid border-brown-secondary border-[.5px]'>
            <Bag />
            <span className="block text-[1rem] font-light">
              View Shop
            </span>
          </button>
        </div> 
      </hgroup>

      <section className="ratings flex items-center gap-[2rem]">
        <div className=" w-full total_reviews border-r-[.0625rem] border-accent-5 flex flex-col gap-[1.5rem] items-start">
          <h1 className="title text-[1rem] font-medium">Total Reviews</h1>
          <span className="flex items-center gap-[1rem]">
            <div className="text-[2rem] font-medium">10.0k</div>
            <button className='text-delivered text-[.875rem] font-light bg-btn-delivered flex items-center gap-[.25rem] px-[.5rem] py-[0rem] rounded-[1.25rem]'> 
              22%
              <ArrowGrowth />
            </button>
          </span>
          <span className="block text-[1rem] font-medium text-accent-7">Yearly growth in review</span>
        </div>

        <div className="avegrage_ratings w-full flex flex-col gap-[1.5rem] items-start border-r-[.0625rem] border-accent-5">
          <h1 className="title text-[1rem] font-medium">Average Ratings</h1>  
          <span className="flex items-center gap-[1rem]">
            <div className="text-[2rem] font-medium">4.0</div>
            <Stars />
          </span>
          <span className="block text-[1rem] font-medium text-accent-7">Yearly average rating in review</span>
        </div>

        <div className="range w-full flex flex-col gap-[.5rem] items-start">
          {
            items.map((item) => (
              <div className="first_review flex items-center justify-start gap-[.5rem]" key={Math.random()}>
                <span className="block text-[1rem] font-light">{ item.star } star</span>
                
                <div className="range_indicator w-[11.6875rem] rounded-[2rem] h-[.5rem] bg-gray">
                  <span className={`block bg-pending w-[${item.percentage}%] h-full rounded-[2rem] text-[4rem]`}></span>
                </div>
                
                <span className="block text-[1rem] font-light">{item.percentage}%</span>
              </div>
            ))
          }
        </div> 
      </section>
      <section className="review_table">
        <ReviewTable />
      </section>
    </div>
  )
}

export default Reviews