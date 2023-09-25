import React from 'react'
import { MoneyLight, OrderLight, ProductsLight } from '../../assets/svgs/svg-icons'

const Numbers = () => {
  return (
    <div>
        <div className="cards flex items-center gap-[2rem]">
            <div className="sales w-[22.4375rem] h-[7.25rem] rounded-[.625rem] bg-white flex items-center jusitfy-start gap-[1.25rem] p-[1.5rem]">
               <MoneyLight /> 
               <div className="group">
                    <h1 className='font-semibold text-[1.5rem]'>N34,060,000</h1> 
                    <span className='block text-[.875rem] font-light text-gray'>Total sales</span>
               </div>
            </div>
            <div className="total_order w-[22.4375rem] h-[7.25rem] rounded-[.625rem] bg-white flex items-center jusitfy-start gap-[1.25rem] p-[1.5rem]">
               <OrderLight />
               <div className="group">
                    <h1 className='font-semibold text-[1.5rem]'>2472</h1> 
                    <span className='block text-[.875rem] font-light text-gray'>Total sales</span>
               </div>
            </div>
            <div className="total_products w-[22.4375rem] h-[7.25rem] rounded-[.625rem] bg-white flex items-center jusitfy-start gap-[1.25rem] p-[1.5rem]">
               <ProductsLight /> 
               <div className="group">
                    <h1 className='font-semibold text-[1.5rem]'>764</h1> 
                    <span className='block text-[.875rem] font-light text-gray'>Total sales</span>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Numbers