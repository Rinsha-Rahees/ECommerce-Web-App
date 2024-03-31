import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../../Firebase/FirebaseDBCollection";
import NotFoundPage from "../GenericComponents/NotFoundPage";

function ProductList() {
  
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    products();
  }, []);

  const products = async () => {
    const result = await getAllProducts();
    if(!result) return <NotFoundPage/>
    setProductDetails(result);
  };


  return productDetails.length === 0 ? <NotFoundPage/> :(
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 p-2 mt-4 xl:max-w-[85vw]">
      {productDetails.map((product) => {
        return <ProductCard key={`${product?.id}`} productDetails={product} />;
      })}
    </div>
  );
}

export default ProductList;
