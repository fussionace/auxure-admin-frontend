import React from 'react'
import { MoneyLight, OrderLight, ProductsLight } from '../../assets/svgs/svg-icons'

const Numbers = () => {
  return (
      <section className="cards flex items-center justify-between gap-[2rem] max-w-[63rem] w-full">
         <div className="total_sales w-[22.4375rem] h-[7.25rem] rounded-[.625rem] bg-white dark:bg-dark-primary flex items-center jusitfy-start gap-[1.25rem] p-[1.5rem]">
            <MoneyLight /> 
            <div className="group">
               <h1 className='font-semibold text-[1.5rem] dark:text-white'>N34,060,000</h1> 
               <span className='block text-[.875rem] font-light text-gray'>Total sales</span>
            </div>
         </div>
         <div className="total_order w-[22.4375rem] h-[7.25rem] rounded-[.625rem] bg-white dark:bg-dark-primary flex items-center jusitfy-start gap-[1.25rem] p-[1.5rem]">
            <OrderLight />
            <div className="group">
               <h1 className='font-semibold text-[1.5rem] dark:text-white'>2472</h1> 
               <span className='block text-[.875rem] font-light text-gray'>Total Order</span>
            </div>
         </div>
         <div className="total_products w-[22.4375rem] h-[7.25rem] rounded-[.625rem] bg-white dark:bg-dark-primary flex items-center jusitfy-start gap-[1.25rem] p-[1.5rem]">
            <ProductsLight /> 
            <div className="group">
               <h1 className='font-semibold text-[1.5rem] dark:text-white'>764</h1> 
               <span className='block text-[.875rem] font-light text-gray'>Total Products</span>
            </div>
         </div>
      </section>
)
}

export default Numbers