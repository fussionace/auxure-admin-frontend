import React from 'react'
import { Link } from 'react-router-dom';
import { Back, Bag, File } from '../../assets/svgs/svg-icons';

const AddProducts = ({ setOpenPage }) => {
  return (
    <section>
       <hgroup className='flex items-center justify-between'>
          <div className="title">
            <Link to={'/admin/'} className='flex items-center gap-[.5rem] mb-[1rem]'>
              <Back />
              <span className="block text-gray text-[.875rem] font-light">Back to Product list</span>
            </Link>
            <h1 className='font-medium dark:text-white md:text-[2rem]'>New Product</h1>        
          </div>
          
          <button onClick={ () => setOpenPage(true)} className='flex items-center justify-center gap-[.625rem] p-[.625rem] rounded-[.5rem] outline-none border-solid border-black border-[.5px]'>
            <Bag />
            <span className="block">
              View Shop
            </span>
          </button>
       </hgroup>

       <div className="content-container mt-[4rem] gap-[2rem] flex items-start justify-between w-[90%]">
          <section className="left_container">
            {/* description */}
            <div className="description-card">
              <h1 className="title md:text-[1.25rem] font-medium mb-[1rem]">
                Description
              </h1>
              <div className="desc_card w-[24.125rem] pt-[1.375rem] pr-[1.8125rem] pb-[1.25rem] pl-[1.75rem] rounded-[.375rem] border-solid border-gray border-[.5px]">
                  <div className="product mb-[1rem]">
                    <label htmlFor="product name" className="product_name text-[.85rem] font-light block mb-[.5rem]">Product Name</label>
                    <input type="text" className='w-full h-[2.375rem] rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown border-[1px] text-[16px] outline-none'/>
                  </div>

                  <div className="caption">
                    <label htmlFor="caption name" className="caption_name text-[.85rem] font-light block mb-[.5rem]">Caption</label>
                    <textarea name="caption" cols="30" rows="10" className='w-full min-h-[2.375rem] rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown border-[1px] text-[16px] outline-none'></textarea>
                  </div>
              </div>
            </div>

          {/* category */}
          <div className="category-card my-[2rem]">
            <h1 className="title md:text-[1.25rem] font-medium mb-[1rem]">
              Category
            </h1>
            <div className="desc_card w-[24.125rem] pt-[1.375rem] pr-[1.8125rem] pb-[1.25rem] pl-[1.75rem] rounded-[.375rem] border-solid border-gray border-[.5px]">
              <label htmlFor="product name" className="product_name text-[.85rem] font-light block mb-[.5rem]">Product Name</label>
                <select name="" id="" className='w-full h-[2.375rem] rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown border-[1px] text-[16px] outline-none'>
                  <option value="" hidden selected></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>                                          
              <div className="block text-right text-[.75rem] font-light mt-[.5rem] text-gray">Add Category</div>
            </div>
          </div>

          {/* inventory */}
          <div className="description-card">
            <h1 className="title md:text-[1.25rem] font-medium mb-[1rem]">
              Inventory
            </h1>
            <div className="desc_card w-[24.125rem] flex items-center justify-between gap-[1rem] pt-[1.375rem] pr-[1.8125rem] pb-[1.25rem] pl-[1.75rem] rounded-[.375rem] border-solid border-gray border-[.5px]">
              <div className="product w-[37%]">
                <label htmlFor="quantity" className="text-[.85rem] font-light block mb-[.5rem]">Quantity</label>
                <input type="text" className='w-full h-[2.375rem] rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown border-[1px] text-[16px] outline-none'/>
              </div>

              <div className="caption w-[55%]">
                <label htmlFor="sku" className="text-[.85rem] font-light block mb-[.5rem]">SKU(Optional)</label>
                <input type="text" className='w-full h-[2.375rem] rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown border-[1px] text-[16px] outline-none'/>
              </div>
            </div>
          </div>
        </section>

        <section className="right_container">
          {/* product Images */}
          <div className="description-card relative">
            <h1 className="title md:text-[1.25rem] font-medium mb-[1rem]">
              Product Images
            </h1>
            <div className="w-[24.125rem] flex items-center justify-between gap-[1rem] pt-[1.375rem] pr-[1.8125rem] pb-[1.25rem] pl-[1.75rem] rounded-[.375rem] border-solid border-gray border-[.5px]">
              <label htmlFor='userImage' className="text-[.75rem] w-[20.8125rem] h-[8.75rem] bg-blueish-gray border-solid border-card-blue border-[1px] rounded-[.5rem] flex flex-col gap-[.3rem] items-center justify-center text-center">                      
                <File />
                <input type="file" id="userImage" className='hidden'/>                  
                <span className="block mr-[.2rem] text-blue-700 underline text-[.75rem]">Click to upload</span>         
                or Drag and Drop
              </label>
            </div>
          </div>

          {/* delivery */}
          <div className="category-card my-[2rem]">
            <h1 className="title md:text-[1.25rem] font-medium mb-[1rem]">
              Shipping and Delivery
            </h1>  
            <div className="desc_card w-[24.125rem] pt-[1.375rem] pr-[1.8125rem] pb-[1.25rem] pl-[1.75rem] rounded-[.375rem] border-solid border-gray border-[.5px]">
              <label htmlFor="product name" className="product_name text-[.85rem] font-light block mb-[.5rem]">Weight</label>
              <select className='w-full h-[2.375rem] rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown border-[1px] text-[16px] outline-none'>
                <option value="" hidden selected></option>
                <option value="0.5">0.5</option>
                <option value="1.0">1.0</option>
              </select>                                          
              <div className="mt-[1.5rem]">
                <span className="title block mb-[.5rem]">Packaging Size</span>
                <div className="items-container flex items-center justify-between gap-[1rem]">
                  <div>
                    <label htmlFor="quantity" className="text-[.75rem] font-light block mb-[.5rem] text-gray">Length</label>
                    <input type="number" min={0}  className='w-full h-[2.375rem] rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown border-[1px] text-[16px] outline-none placeholder:text-right' placeholder='in'/>
                  </div>

                  <div>
                    <label htmlFor="sku" className="text-[.75rem] font-light block mb-[.5rem] text-gray">Breadth</label>
                    <input type="number" min={0}  className='w-full h-[2.375rem] rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown border-[1px] text-[16px] outline-none placeholder:text-right' placeholder='in'/>
                  </div>

                  <div>
                    <label htmlFor="sku" className="text-[.75rem] font-light block mb-[.5rem] text-gray">Width</label>
                    <input type="number" min={0}  className='w-full h-[2.375rem] rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown border-[1px] text-[16px] outline-none placeholder:text-right' placeholder='in'/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* pricing */}
          <div className="category-card my-[2rem]">
            <h1 className="title md:text-[1.25rem] font-medium mb-[1rem]">
              Pricing
            </h1>
            <div className="desc_card w-[24.125rem] pt-[1.375rem] pr-[1.8125rem] pb-[1.25rem] pl-[1.75rem] rounded-[.375rem] border-solid border-gray border-[.5px]">
              <label htmlFor="product name" className="product_name text-[.85rem] font-light block mb-[.5rem]">Price</label>
                <select className='w-full h-[2.375rem] rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown border-[1px] text-[16px] outline-none'>
                  <option value="" disabled selected hidden></option>
                  <option value="male">NGN20,000.00 - NGN40,000.00</option>
                  <option value="female">NGN40,000.00 - NGN80,000.00</option>
                </select>                                          
            </div>
          </div>


          <div className="button_flex flex items-end justify-end gap-[3rem]">
            <button className="border-solid border-black border-[.5px] h-[2.25rem] bg-blueish-gray text-[.75rem] p-[.625rem] flex items-center justify-center rounded-[.25rem]">
              SCHEDULE
            </button>
            <button className="border-solid border-black border-[.348px] bg-accent-yellow text-[.69594rem] w-[6.4375rem] h-[2.25rem] flex items-center justify-center rounded-[.25rem]">
              ADD PRODUCT
            </button>
          </div>
        </section>
          
      </div>     
    </section>
  )
}

export default AddProducts