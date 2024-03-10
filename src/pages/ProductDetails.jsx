import React, { useEffect, useState } from "react";
import ProductFullImages from "../Components/ProductDetailedViewUI/ProductFullImages";
import Carousel from "../Components/GenericComponents/Carousel";
import ProductDescription from "../Components/ProductDetailedViewUI/ProductDescription";
import NavBarUI from "../Components/NavigationBarUI/NavBarUI";
import TopBar from "../Components/TopBar";
import Footer from "../Components/FooterUI/Footer";
import CategoryBar from "../Components/CategoryBarUI/CategoryBar";
import { useParams } from "react-router-dom";
import { getIndividualProduct } from "../Firebase/FirebaseDBCollection";
import ShimmerUI from '../Components/GenericComponents/ShimmerUI'

function ProductDetails() {
  const params = useParams();
  const productId = params.productId;
  const [prodDesc, setProdDesc] = useState(null)
  
  useEffect(() => {
    product()
  }, []);

  const product = async () => {
    const result = await getIndividualProduct(productId);
    setProdDesc(result);
  };


  return (
    <>
      <TopBar />
      <NavBarUI />
      <CategoryBar />
      {prodDesc? (
        <div className="flex flex-col gap-6 md:flex-row justify-between w-full xl:max-w-[85vw] mt-4 p-4 font-mono">
          <div className="w-full h-fit hidden md:flex">
            <ProductFullImages images={prodDesc?.images} />
          </div>
          <div className="w-full h-fit flex md:hidden">
            <Carousel images={prodDesc?.images} />
          </div>

          <div className="w-full">
            <ProductDescription description={prodDesc} />
          </div>
        </div>
      ) : (
        <ShimmerUI/>
      )}
      <Footer />
    </>
  );
}

export default ProductDetails;
