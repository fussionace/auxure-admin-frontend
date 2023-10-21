import React, { useState } from 'react'
import { Alert, AlertDark, ArrowDown, ArrowdownDark, Arrowgreen, Arroworange, Moon, NewMessage, Sun } from '../assets/svgs/svg-icons'
import Ellipse from '../assets/images/Ellipse.png'
import OrderTable from '../components/order/OrderTable';
import TabNavItem from '../components/order/TabNavItem';
import TabContent from '../components/order/TabContent';

const Orders = ({ toggleTheme, darkTheme }) => {
    
    const [activeButton, setActiveButton ] = useState(false);
    const [activeTab, setActiveTab] = useState('tab1')

  return (
    <div className='ml-[18.125rem] p-[2rem] bg-light-gray dark:bg-dark-background min-h-screen'>
      <hgroup className="title-container flex items-center justify-between mb-[3rem] mr-[4rem]">
        <div className="title-container flex items-center gap-[2.5rem]">
          <h1 className='font-medium dark:text-white md:text-[2rem]'>Order History</h1>        
          <div className="switch w-[9.5625rem] h-[2.125rem] bg-white dark:bg-dark-primary dark:text-white rounded-[.3125rem] flex items-center justify-between gap-[.4rem] px-[.2rem]" >
             <button onClick={ () => setActiveButton(false) } className={ !activeButton ? 'h-[1.75rem] rounded-[.3125rem] bg-accent-2 dark:bg-dark-background dark:text-white text-[.875rem] font-light w-full' : 'text-[.875rem] font-light text-center w-full'}>Daily</button>
             <button onClick={ () => setActiveButton(true) } className={ activeButton ? 'h-[1.75rem] rounded-[.3125rem] bg-accent-2 dark:bg-dark-background dark:text-white  text-[.875rem] font-light w-full' : 'text-[.875rem] font-light w-full'}>Monthly</button> 
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
          <div className="flex items-center justify-items-center gap-[.4rem] cursor-pointer">
            <div className="image h-[2.5rem] w-[2.5rem] rounded-full">
              <img src={ Ellipse } alt="user-image" className='w-full h-full object-cover'/>  
            </div>
            { darkTheme ? <ArrowdownDark /> : <ArrowDown /> }
          </div>
        </div> 
      </hgroup>

      <div className="numbers-flex flex items-start gap-[1.6875rem]">
        <div className="card w-[21rem] h-[7.5rem] rounded-[.3125rem] bg-cream flex items-center justify-center gap-[2rem]">          
          {/* svg space */}
          <div className="ellipse flex items-center justify-center h-[4.5rem] w-[4.5rem] bg-white rounded-full">
          
          </div>          
          <div className="text flex flex-col gap-[.5rem]">
            <h1 className="text-[1rem] font-medium text-brown-secondary dark:text-gray">NEW ORDERS</h1>
            <div className="flex justify-around items-center">
              <span className="block text-[2rem] font-medium border-r-[1px] pr-[2rem] border-gray dark:text-accent-5">267</span>
              <div className=" ml-[2rem] ellipse flex items-center justify-center bg-accent h-[1.5rem] w-[1.5rem] rounded-full">
                <Arrowgreen />
              </div>
            </div>
          </div>
        </div>

        <div className="card w-[21rem] h-[7.5rem] rounded-[.3125rem] bg-cream flex items-center justify-center gap-[2rem]">          
          {/* svg space */}
          <div className="ellipse h-[4.5rem] w-[4.5rem] bg-white rounded-full"></div>          
          <div className="text flex flex-col gap-[.5rem]">
            <h1 className="text-[1rem] font-medium text-brown-secondary dark:text-gray">PENDING ORDERS</h1>
            <div className="flex justify-around items-center">
              <span className="block text-[2rem] font-medium border-r-[1px] pr-[2rem] border-gray dark:text-accent-5">102</span>
              <div className=" ml-[2rem] ellipse flex items-center justify-center bg-accent h-[1.5rem] w-[1.5rem] rounded-full">
                <Arroworange />
              </div>
            </div>
          </div>
        </div>

        <div className="card w-[21rem] h-[7.5rem] rounded-[.3125rem] bg-cream flex items-center justify-center gap-[2rem]">          
          {/* svg space */}
          <div className="ellipse h-[4.5rem] w-[4.5rem] bg-white rounded-full"></div>          
          <div className="text flex flex-col gap-[.5rem]">
            <h1 className="text-[1rem] font-medium text-brown-secondary dark:text-gray">DELIVERED ORDERS</h1>
            <div className="flex justify-around items-center">
              <span className="block text-[2rem] font-medium border-r-[1px] pr-[2rem] border-gray dark:text-accent-5">360  </span>
              <div className=" ml-[2rem] ellipse flex items-center justify-center bg-accent h-[1.5rem] w-[1.5rem] rounded-full">
                <Arrowgreen />
              </div>
            </div>
          </div>
        </div>
      </div>  

      <section className="tabs mt-[3rem] after:block after:h-[.125rem] after:w-full after:bg-gray">
        <ul className='flex gap-[3.375rem]'>
          <TabNavItem title='All Orders' id='tab1' activeTab={activeTab} setActiveTab={ setActiveTab }/>
          <TabNavItem title='Pending Orders' id='tab2' activeTab={activeTab} setActiveTab={ setActiveTab }/>
          <TabNavItem title='Delivered Orders' id='tab3' activeTab={activeTab} setActiveTab={ setActiveTab }/>
          <TabNavItem title='Booked Orders' id='tab4' activeTab={activeTab} setActiveTab={ setActiveTab }/>
          <TabNavItem title='Cancelled Orders' id='tab5' activeTab={activeTab} setActiveTab={ setActiveTab }/>
        </ul>
      </section>

      <div className="tab_pages">
        <TabContent id='tab1' activeTab={ activeTab }>
          <OrderTable />
        </TabContent>
        <TabContent id='tab2' activeTab={ activeTab }>
          {/* <OrderTable /> */}
        </TabContent>
        <TabContent id='tab3' activeTab={ activeTab }>
          {/* <OrderTable /> */}
        </TabContent>
        <TabContent id='tab4' activeTab={ activeTab }>
          {/* <OrderTable /> */}
        </TabContent>
        <TabContent id='tab5' activeTab={ activeTab }>
          {/* <OrderTable /> */}
        </TabContent>
      </div>
    </div>
  )
}

export default Orders