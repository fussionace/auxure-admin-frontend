import React from 'react'
import image3 from '../../assets/images/Image3.jpg'
import { Stars } from '../../assets/svgs/svg-icons'

const Products = () => {
  const topSelling = [
    {
      img: image3,
      name: 'Enchanted Elixir',
      price: '$987'
    },
    {
      img: image3,
      name: 'Enchanted Elixir',
      price: '$987'
    },
  ]

  const orders = [
    {
      id: '#14327A',
      name: 'Enchanted Elixir',
      price: 'N100,000',
      status: 'Delivered',
      date: '31/06/2023'
    },
    {
      id: '#14357C',
      name: 'Enchanted Elixir',
      price: 'N90,000',
      status: 'Canceled',
      date: '01/07/2023'
    },
    {
      id: '#14476C',
      name: 'Enchanted Elixir',
      price: 'N55,000',
      status: 'Delivered',
      date: '01/07/2023'
    },
    {
      id: '#14761D',
      name: 'Enchanted Elixir',
      price: 'N120,000',
      status: 'Pending',
      date: '01/07/2023'
    }
  ]

  return (
    <section className='flex items-center justify-between gap-[2rem] mt-[2rem] max-w-[63rem] w-full'>
        {/* table */}
        <div className="order_table w-[41.125rem] h-[20rem] bg-white dark:bg-dark-primary rounded-[.625rem]">
            <div className="title px-[1.7rem] pt-[1rem]">
              <h1 className='text-[1.125rem] font-semibold dark:text-white'>Latest Orders</h1>
            </div>
            
            <div className="container flex items-center justify-center px-[2rem]">
              <table className='w-full dark:text-white'>
                  <tr className='border-b-2 border-light-gray text-left'>
                    <th className='h-[3.3125rem]'>TRACKING ID</th>
                    <th>PRODUCT NAME</th>
                    <th>PRICE</th>
                    <th>STATUS</th>
                    <th>DATE</th>
                  </tr>
                  {
                    orders.map((order) => (
                      <tr className=' odd:bg-cream last:pl-[2rem]' key={order.id}>
                        <td className='text-[.75rem] font-light h-[3.3125rem]'>{ order.id }</td>
                        <td className='text-[.75rem] font-light'>{ order.name }</td>
                        <td className='text-[.75rem] font-light'>{ order.price }</td>
                        <td className={order.status ===  'Canceled' ? 'text-[.75rem] font-light w-[4.67331rem] flex items-center justify-center px-[.5rem] gap-[.625rem] mt-[.9rem] rounded-[1.25rem] bg-btn-canceled text-canceled h-[1.5rem]' : order.status === 'Pending' ? 'text-[.75rem] font-light w-[4.67331rem] flex items-center justify-center px-[.5rem] gap-[.625rem] mt-[.9rem] rounded-[1.25rem] bg-btn-pending text-pending opacity-10 h-[1.5rem]': order.status === 'Delivered' ? 'text-[.75rem] font-light w-[4.67331rem] flex items-center justify-center px-[.5rem] gap-[.625rem] mt-[.9rem] rounded-[1.25rem] bg-btn-delivered text-delivered h-[1.5rem]' : ''}>{ order.status }</td>
                        <td className='text-[.75rem] font-light'>{ order.date }</td>
                      </tr>
                    ))
                  } 
              </table>
            </div>
        </div>

        {/* products */}
        <div className="selling_products w-[24.75rem] h-[19.875rem] bg-white dark:bg-dark-primary rounded-[.625rem] p-[2rem]">
          <span className="title block text-[1.125rem] font-bold mb-[1rem] dark:text-white">Top selling Products</span>
           {
            topSelling.map((product) => (
                <div className="card cursor-pointer flex items-center gap-[1rem] mb-[1rem]" key={Math.random()}>
                   <div className="product-image w-[7.07519rem] h-[6.25rem] rounded-[.31538rem] border-solid border-brown-secondary border-[1px]">
                      <img src={ product.img } alt= { product.name } className='w-full h-full object-cover'/>
                   </div> 
                    <div className="product_details">
                      <h1 className='text-[1rem] font-light dark:text-white'>{ product.name }</h1>
                      <Stars className='my-[.2rem]' />
                      <span className='block text-[1rem] font-medium dark:text-white'>{ product.price }</span>
                    </div>
                </div>
            ))
           } 
        </div>
    </section>
  )
}

export default Products