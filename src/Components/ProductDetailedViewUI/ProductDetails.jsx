import React from "react";
import { productDetails } from "../GenericComponents/DataArray";
import ProductFullImages from "./ProductFullImages";
import Carousel from "../GenericComponents/Carousel";
import ProductDescription from "./ProductDescription";

function ProductDetails() {
  const [imagesArray] = productDetails.map((imageDetails) => {
    return imageDetails.image.map((imgSrc) => {
      return imgSrc;
    });
  });

  return (
    <div className="flex flex-col gap-10 md:flex-row justify-between w-full xl:max-w-[85vw] mt-8 p-8 font-mono">
      <div className="w-full hidden md:flex">
        <ProductFullImages images={productDetails} />
      </div>
      <div className="w-full flex md:hidden">
        <Carousel images={imagesArray} />
      </div>

      <div className="w-full">
        <ProductDescription description={productDetails} />
      </div>
    </div>
  );
}

export default ProductDetails;
