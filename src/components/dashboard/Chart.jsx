import React from 'react'
import { Analytics, Graph } from '../../assets/svgs/svg-icons'

const Chart = () => {
  return (
    <section className='mt-[2rem] flex items-center justify-between gap-[2rem] max-w-[63rem] w-full'>
        <div className="reports w-[46.8125rem] h-[25.5rem] bg-white rounded-[.625rem]">
           {/* <Graph />      */}
        </div>
        <div className="analytics w-[28.9375rem] h-[25.5rem] bg-white rounded-[.625rem]">
            {/* <Analytics /> */}
        </div>   
    </section>
  )
}

export default Chart