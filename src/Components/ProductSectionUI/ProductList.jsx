import React from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const bootsCollection = [
    {
      id: 1,
      image: "src/assets/Boots/boots_brown.jpg",
      title: "BROWN//ANKLE",
      price: "RS.2,500",
      rating: 4,
      size: ["SM/28", "M/32", "L/36"],
    },
    {
      id: 2,
      image: "src/assets/Boots/boots_beige.jpg",
      title: "BEIGE//UNISEX",
      price: "RS.3,999",
      rating: 3,
      size: ["SM/28", "L/36"],
    },
    {
      id: 3,
      image: "src/assets/Boots/boots_men.jpg",
      title: "BROWN//UNISEX",
      price: "RS.1,899",
      rating: 5,
      size: ["SM/28", "M/32"],
    },
    {
      id: 4,
      image: "src/assets/Boots/boots_women.jpg",
      title: "BLACK//WOMEN",
      price: "RS.2,999",
      rating: 4,
      size: ["SM/28"],
    },

    // Separate array for separate category of products?

    {
      id: 5,
      image: "src/assets/Caps/cap_brown.jpg",
      title: "CAP//BROWNIE",
      price: "RS.599",
      rating: 3,
      size: ["SM/28"]
    },
    {
      id: 6,
      image: "src/assets/TShirts/t_shirt_set.jpg",
      title: "T-SHIRT SET//UNISEX",
      price: "RS.2,999",
      rating: 5,
      size: ["M/32","L/36"],
    },
    {
      id: 7,
      image: "src/assets/Jeans/baggy_jeans.jpg",
      title: "MOM FIT//WOMEN",
      price: "RS.2,599",
      rating: 2,
      size: ["SM/28"],
    },
    {
      id: 8,
      image: "src/assets/TShirts/t_shirt_writing.jpg",
      title: "T-SHIRT//WRITINGS",
      price: "RS.2,399",
      rating: 5,
      size: ["SM/28", "M/32", "L/36"],
    }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 p-2 mt-4">
      {bootsCollection.map((product, idx) => {
          return (
            <ProductCard
              key={`${idx}_${product.title}`}
              productDetails={product}
            />
          );
        })}
    </div>
  );
}

export default ProductList;
