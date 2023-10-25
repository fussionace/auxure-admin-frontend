import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowdownDark,
  Back,
  Bag,
  BagDark,
  File,
} from "../../assets/svgs/svg-icons";

const AddProducts = ({ setOpenPage, darkTheme }) => {
  return (
    <section>
      <hgroup className="flex items-center justify-between">
        <div className="title">
          <Link
            to={"/admin/"}
            className="flex items-center gap-[.5rem] mb-[1rem]"
          >
            <Back />
            <span className="block text-gray text-[.875rem] font-light">
              Back to Product list
            </span>
          </Link>
          <h1 className="font-medium dark:text-white md:text-[2rem]">
            New Product
          </h1>
        </div>

        <button
          onClick={() => setOpenPage(true)}
          className="flex items-center justify-center gap-[.625rem] p-[.625rem] rounded-[.5rem] outline-none border-solid border-black dark:border-accent-4 border-[.5px]"
        >
          {darkTheme ? <BagDark /> : <Bag />}
          <span className="block dark:text-accent-4">View Shop</span>
        </button>
      </hgroup>

      <div className="content-container mt-[4rem] gap-[2rem] flex items-start justify-between md:w-[90%]">
        <section className="left_container w-full">
          {/* description */}
          <div className="description-card">
            <h1 className="title md:text-[1.25rem] font-medium mb-[1rem] dark:text-accent-4">
              Description
            </h1>
            <div className="desc_card pt-[1.375rem] pr-[1.8125rem] pb-[1.25rem] pl-[1.75rem] rounded-[.375rem] border-solid border-gray border-[.5px]">
              <div className="product mb-[1rem]">
                <label
                  htmlFor="product name"
                  className="product_name dark:text-accent-4 text-[.85rem] font-light block mb-[.5rem]"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  className="w-full h-[2.375rem] rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown bg-transparent dark:text-accent-5 border-[1px] text-[16px] outline-none"
                />
              </div>

              <div className="caption">
                <label
                  htmlFor="caption name"
                  className="caption_name text-[.85rem] font-light block mb-[.5rem]"
                >
                  Caption
                </label>
                <textarea
                  name="caption"
                  cols="30"
                  rows="10"
                  className="w-full min-h-[2.375rem] bg-transparent dark:text-accent-5 rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown border-[1px] text-[16px] outline-none"
                ></textarea>
              </div>
            </div>
          </div>

          {/* category */}
          <div className="category-card my-[2rem]">
            <h1 className="title md:text-[1.25rem] dark:text-accent-4 font-medium mb-[1rem]">
              Category
            </h1>
            <div className="desc_card relative pt-[1.375rem] pr-[1.8125rem] pb-[1.25rem] pl-[1.75rem] rounded-[.375rem] border-solid border-gray border-[.5px]">
              <label
                htmlFor="product name"
                className="product_name dark:text-accent-4 text-[.85rem] font-light block mb-[.5rem]"
              >
                Product Name
              </label>
              {darkTheme ? (
                <ArrowdownDark className="absolute right-[10%] top-[42%]" />
              ) : (
                <ArrowDown className="absolute right-[10%] top-[42%]" />
              )}
              <select
                name=""
                id=""
                className="w-full appearance-none h-[2.375rem] dark:text-accent-5 bg-transparent rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown border-[1px] text-[16px] outline-none"
              >
                <option value="" hidden selected></option>
                <option value="male" className="dark:bg-dark-secondary">
                  Male
                </option>
                <option value="female" className="dark:bg-dark-secondary">
                  Female
                </option>
              </select>
              <div className="block text-right text-[.75rem] font-light mt-[.5rem] text-gray">
                Add Category
              </div>
            </div>
          </div>

          {/* inventory */}
          <div className="description-card">
            <h1 className="title dark:text-accent-4 md:text-[1.25rem] font-medium mb-[1rem]">
              Inventory
            </h1>
            <div className="desc_card flex items-center justify-between gap-[1rem] pt-[1.375rem] pr-[1.8125rem] pb-[1.25rem] pl-[1.75rem] rounded-[.375rem] border-solid border-gray border-[.5px]">
              <div className="product w-[37%]">
                <label
                  htmlFor="quantity"
                  className="text-[.85rem] dark:text-accent-4 font-light block mb-[.5rem]"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  className="w-full bg-transparent dark:text-accent-5 h-[2.375rem] rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown border-[1px] text-[16px] outline-none"
                />
              </div>

              <div className="caption w-[55%]">
                <label
                  htmlFor="sku"
                  className="text-[.85rem] dark:text-accent-4 font-light block mb-[.5rem]"
                >
                  SKU(Optional)
                </label>
                <input
                  type="number"
                  className="w-full h-[2.375rem] bg-transparent dark:text-accent-5 rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown border-[1px] text-[16px] outline-none"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="right_container w-full">
          {/* product Images */}
          <div className="description-card relative">
            <h1 className="title dark:text-accent-4 md:text-[1.25rem] font-medium mb-[1rem]">
              Product Images
            </h1>
            <div className="flex items-center justify-between gap-[1rem] pt-[1.375rem] pr-[1.8125rem] pb-[1.25rem] pl-[1.75rem] rounded-[.375rem] border-solid border-gray border-[.5px]">
              <label
                htmlFor="userImage"
                className="text-[.75rem] w-full h-[8.75rem] bg-blueish-gray dark:bg-gray border-dashed border-card-blue border-[1px] rounded-[.5rem] flex flex-col gap-[.3rem] items-center justify-center text-center"
              >
                <File />
                <input type="file" id="userImage" className="hidden" />
                <span className="block mr-[.2rem] text-blue-700 underline text-[.75rem]">
                  Click to upload
                </span>
                or Drag and Drop
              </label>
            </div>
          </div>

          {/* delivery */}
          <div className="category-card my-[2rem]">
            <h1 className="title dark:text-accent-4 md:text-[1.25rem] font-medium mb-[1rem]">
              Shipping and Delivery
            </h1>
            <div className="desc_card relative pt-[1.375rem] pr-[1.8125rem] pb-[1.25rem] pl-[1.75rem] rounded-[.375rem] border-solid border-gray border-[.5px]">
              <label
                htmlFor="product name"
                className="product_name dark:text-accent-4 text-[.85rem] font-light block mb-[.5rem]"
              >
                Weight
              </label>
              {darkTheme ? (
                <ArrowdownDark className="absolute right-[10%] top-[26%]" />
              ) : (
                <ArrowDown className="absolute right-[10%] top-[26%]" />
              )}
              <select className="w-full appearance-none bg-transparent dark:text-white h-[2.375rem] rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown border-[1px] text-[16px] outline-none">
                <option value="" hidden selected></option>
                <option value="0.5" className="dark:bg-dark-secondary">
                  0.5
                </option>
                <option value="1.0" className="dark:bg-dark-secondary">
                  1.0
                </option>
              </select>
              <div className="mt-[1.5rem]">
                <span className="title block mb-[.5rem] dark:text-accent-4">
                  Packaging Size
                </span>
                <div className="items-container flex items-center justify-between gap-[1rem]">
                  <div>
                    <label
                      htmlFor="quantity"
                      className="text-[.75rem] dark:text-accent-4 font-light block mb-[.5rem] text-gray"
                    >
                      Length
                    </label>
                    <input
                      type="number"
                      min={0}
                      className="w-full bg-transparent dark:text-accent-5 h-[2.375rem] rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown border-[1px] text-[16px] outline-none placeholder:text-right"
                      placeholder="in"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="sku"
                      className="text-[.75rem] dark:text-accent-5 font-light block mb-[.5rem] text-gray"
                    >
                      Breadth
                    </label>
                    <input
                      type="number"
                      min={0}
                      className="w-full bg-transparent dark:text-accent-5 h-[2.375rem] rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown border-[1px] text-[16px] outline-none placeholder:text-right"
                      placeholder="in"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="sku"
                      className="text-[.75rem] dark:text-accent-4 font-light block mb-[.5rem] text-gray"
                    >
                      Width
                    </label>
                    <input
                      type="number"
                      min={0}
                      className="w-full bg-transparent dark:text-accent-5 h-[2.375rem] rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown border-[1px] text-[16px] outline-none placeholder:text-right"
                      placeholder="in"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* pricing */}
          <div className="category-card my-[2rem]">
            <h1 className="title md:text-[1.25rem] dark:text-accent-4 font-medium mb-[1rem]">
              Pricing
            </h1>
            <div className="desc_card relative pt-[1.375rem] pr-[1.8125rem] pb-[1.25rem] pl-[1.75rem] rounded-[.375rem] border-solid border-gray border-[.5px]">
              <label
                htmlFor="product name"
                className="product_name dark:text-accent-5 text-[.85rem] font-light block mb-[.5rem]"
              >
                Price
              </label>
              {darkTheme ? (
                <ArrowdownDark className="absolute right-[10%] top-[55%]" />
              ) : (
                <ArrowDown className="absolute right-[10%] top-[55%]" />
              )}
              <select className="w-full appearance-none bg-transparent dark:text-accent-5 h-[2.375rem] rounded-[.5rem] py-[.5rem] px-[.5rem] border-solid border-lightbrown border-[1px] text-[16px] outline-none">
                <option value="" disabled selected hidden></option>
                <option value="male" className="dark:bg-dark-secondary">
                  NGN20,000.00 - NGN40,000.00
                </option>
                <option value="female" className="dark:bg-dark-secondary">
                  NGN40,000.00 - NGN80,000.00
                </option>
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
  );
};

export default AddProducts;
