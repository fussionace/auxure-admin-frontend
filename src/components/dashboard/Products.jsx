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

  return (
    <section className='flex items-center justify-between gap-[2rem] mt-[2rem] max-w-[63rem] w-full'>
        <div className="order_table w-[46.8125rem] h-[20rem] bg-white rounded-[.625rem]">
            
        </div>
        <div className="selling_products w-[28.9375rem] h-[19.875rem] bg-white rounded-[.625rem] p-[2rem]">
          <span className="title block text-[1.125rem] font-bold mb-[1rem]">Top selling Products</span>
           {
            topSelling.map((product) => (
                <div className="card flex items-center gap-[1rem] mb-[1rem]" key={Math.random()}>
                   <div className="product-image w-[7.07519rem] h-[6.25rem] rounded-[.31538rem]">
                      <img src={ product.img } alt= { product.name } />
                   </div> 
                    <div className="product_details">
                      <h1 className='text-[1rem] font-light'>{ product.name }</h1>
                      <Stars className='my-[.2rem]' />
                      <span className='block text-[1rem] font-medium'>{ product.price }</span>
                    </div>
                </div>
            ))
           } 
        </div>
    </section>
  )
}

export default Products