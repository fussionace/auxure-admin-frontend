import React, { useState } from "react";
import AddProducts from "../components/products/AddProducts";
import ProductsHome from "../components/products/ProductsHome";
const Products = ({ darkTheme }) => {
  const [openPage, setOpenPage] = useState(true);

  return (
    <div className="ml-[18.125rem] p-[2rem] min-h-screen bg-accent dark:bg-dark-secondary">
      {openPage ? (
        <ProductsHome darkTheme={darkTheme} setOpenPage={setOpenPage} />
      ) : (
        <AddProducts setOpenPage={setOpenPage} />
      )}
    </div>
  );
};

export default Products;
