import React from "react";
import ProductCard from "./ProductCard";
import { productDetails } from "../../assets/DataCollection/DataArray"; 

function ProductList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 p-2 mt-4 xl:max-w-[85vw]">
      {productDetails.map((product) => {
          return (
            <ProductCard
              key={`${product?.id}`}
              productDetails={product}
            />
          );
        })}
    </div>
  );
}

export default ProductList;
