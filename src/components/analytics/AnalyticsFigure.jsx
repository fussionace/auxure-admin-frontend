import React from 'react'
import { CustomersGold, Divide, GoldBag, ProjectionDown, ProjectionUp, Visitors } from '../../assets/svgs/svg-icons'

const AnalyticsFigure = () => {
  return (
    <section className="cards mt-[2rem] flex items-center justify-center gap-[1.5rem]">
        <div className="card w-full flex items-center bg-white rounded-[.625rem] justify-end flex-col gap-[.8125rem] pt-[1.375rem] pb-[.9375rem] pl-[1.25rem]">
          <span className="flex w-full items-center gap-[.875rem] justify-start text-[1rem] font-light">
            <div className="circle h-[1.75rem] w-[1.75rem] rounded-full bg-cream flex items-center justify-center">
              <Divide />
            </div>
            Total sales
          </span>
          <span className="block w-full text-[1.5rem] font-medium">N4.6M</span>
          <span className="flex items-start w-full gap-[.625rem]">
            <ProjectionUp />
            <span className="block text-pending text-[.75rem] text-light">
              19.4%
            </span>
            <span className="block text-pending text-[.75rem] text-light">
              +48k this week
            </span>
          </span>
        </div>

        <div className="card w-full flex items-center bg-white rounded-[.625rem] justify-end flex-col gap-[.8125rem] pt-[1.375rem] pb-[.9375rem] pl-[1.25rem]">
          <span className="flex w-full items-center gap-[.875rem] justify-start text-[1rem] font-light">
            <div className="circle h-[1.75rem] w-[1.75rem] rounded-full bg-cream flex items-center justify-center">
              <GoldBag />
            </div>
            Orders
          </span>
          <span className="block w-full text-[1.5rem] font-medium">
            12,030.6
          </span>
          <span className="flex items-start w-full gap-[.625rem]">
            <ProjectionDown />
            <span className="block text-red-down text-[.75rem] text-light">
              19.4%
            </span>
            <span className="block text-red-down text-[.75rem] text-light">
              +48k this week
            </span>
          </span>
        </div>

        <div className="card w-full flex items-center bg-white rounded-[.625rem] justify-end flex-col gap-[.8125rem] pt-[1.375rem] pb-[.9375rem] pl-[1.25rem]">
          <span className="flex w-full items-center gap-[.875rem] justify-start text-[1rem] font-light">
            <div className="circle h-[1.75rem] w-[1.75rem] rounded-full bg-cream flex items-center justify-center">
              <CustomersGold />
            </div>
            Customers
          </span>
          <span className="block w-full text-[1.5rem] font-medium">
            30,580.42
          </span>
          <span className="flex items-start w-full gap-[.625rem]">
            <ProjectionUp />
            <span className="block text-pending text-[.75rem] text-light">
              10.8%
            </span>
            <span className="block text-pending text-[.75rem] text-light">
              +5k this week
            </span>
          </span>
        </div>

        <div className="card w-full flex items-center bg-white rounded-[.625rem] justify-end flex-col gap-[.8125rem] pt-[1.375rem] pb-[.9375rem] pl-[1.25rem]">
          <span className="flex w-full items-center gap-[.875rem] justify-start text-[1rem] font-light">
            <div className="circle h-[1.75rem] w-[1.75rem] rounded-full bg-cream flex items-center justify-center">
              <Visitors />
            </div>
            Visitors
          </span>
          <span className="block w-full text-[1.5rem] font-medium">2,034</span>
          <span className="flex items-start w-full gap-[.625rem]">
            <ProjectionUp />
            <span className="block text-pending text-[.75rem] text-light">
              2.8%
            </span>
            <span className="block text-pending text-[.75rem] text-light">
              +1k this week
            </span>
          </span>
        </div>
      </section>
  )
}

export default AnalyticsFigure