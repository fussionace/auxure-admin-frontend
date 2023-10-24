import React from "react";
import { BiroRed, DeleteRed, Stars } from "../../assets/svgs/svg-icons";
import image from "../../assets/images/image.png";

const Analyticsproducts = () => {
  const products = [
    {
      name: "Enchanted Elixir",
      price: "N125,000",
      img: image,
    },
    {
      name: "Enchanted Elixir",
      price: "N125,000",
      img: image,
    },
  ];
  return (
    <section className="products flex items-center justify-end">
      <div className="card bg-white w-[40%] rounded-[.625rem] min-[10rem] pt-[1.4375rem] pr-[2.125rem] pb-[2.8125rem] pl-[1.25rem]">
        <div className="title flex items-center justify-between">
          <span className="block text-[1rem] font-medium">
            Top Selling Product
          </span>
          <small className="text-[.75rem] text-lightbrown">See all</small>
        </div>

        <div className="products-card-container flex flex-col gap-[1.5rem] mt-[2rem]">
          {products.map((product) => (
            <div
              className="card flex items-center justify-between"
              key={product.price}
            >
              <div className="name flex gap-[.5rem] w-full">
                <img
                  src={product.img}
                  alt={product.name}
                  classNamew="w-[5rem] object-cover h-[5rem] rounded-[.3125rem]"
                />
                <div className="product_details flex flex-col gap-[.5rem]">
                  <span className="block text-[1rem] font-medium">
                    {product.name}
                  </span>
                  <Stars />
                  <span className="block text-[1rem] font-medium">
                    {product.price}
                  </span>
                </div>
              </div>
              <div className="svgs flex flex-col gap-[1.125rem] items-center justify-center">
                <BiroRed />
                <DeleteRed />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analyticsproducts;
