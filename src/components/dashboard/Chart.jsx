import React from 'react'
import { Analytics, Graph } from '../../assets/svgs/svg-icons'

const Chart = () => {
  return (
    <div className='mt-[2rem] bg-black flex items-center justify-between w-full gap-[2rem]'>
        <div className="reports w-[60%] h-[25.5rem] bg-white">
           {/* <Graph />      */}
        </div>
        <div className="analytics w-[30%] h-[25.5rem] bg-white">
            {/* <Analytics /> */}
        </div>   
    </div>
  )
}

export default Chart