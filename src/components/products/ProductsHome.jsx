import React, { useState } from 'react'
import TabContent from '../order/TabContent';
import TabNavItem from '../order/TabNavItem';
import ProductsTable from './ProductsTable';

const ProductsHome = ({ setOpenPage, darkTheme }) => {
  
  const [ activeButton, setActiveButton ] = useState(false);
  const [ activeTab, setActiveTab ] = useState('tab1')
  
  return (
    <section>
      <hgroup className="title-container flex items-center justify-between mb-[3rem]">
        <div className="flex-container flex items-center gap-[2.5rem]">
          <h1 className='font-medium dark:text-white md:text-[2rem]'>Products</h1>        
          <span className="quantity w-[4.4375rem] h-[1.75rem] rounded-[.3125rem] bg-accent-2 dark:bg-dark-primary dark:text-accent-4 flex items-center justify-center">5,300</span>
        </div>
        <button className='w-[9.25rem] h-[3.375rem] py-[1rem] rounded-[.25rem] bg-accent-yellow text-[1rem] font-bold border-solid border-black border-[1px]' onClick={() => setOpenPage(false)}>
          ADD PRODUCT
        </button>
      </hgroup>

      <section className="tabs mt-[3rem] after:block after:h-[.125rem] after:w-full after:bg-gray">
        <ul className='flex gap-[3.375rem]'>
          <TabNavItem title='All Products' id='tab1' activeTab={activeTab} setActiveTab={ setActiveTab }/>
          <TabNavItem title='Published' id='tab2' activeTab={activeTab} setActiveTab={ setActiveTab }/>
          <TabNavItem title='Unpublished' id='tab3' activeTab={activeTab} setActiveTab={ setActiveTab }/>
          <TabNavItem title='Archived' id='tab4' activeTab={activeTab} setActiveTab={ setActiveTab }/>
        </ul>
      </section>

      <div className="tab_pages">
        <TabContent id='tab1' activeTab={ activeTab }>
          <ProductsTable darkTheme={ darkTheme }/>
        </TabContent>
        <TabContent id='tab2' activeTab={ activeTab }>
        </TabContent>
        <TabContent id='tab3' activeTab={ activeTab }>
        </TabContent>
        <TabContent id='tab4' activeTab={ activeTab }>
        </TabContent>
      </div>      
    </section>
  )
}

export default ProductsHome