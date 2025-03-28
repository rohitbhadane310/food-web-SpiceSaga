import React from "react";
import img1 from "../assets/img/prod1.jpg";
import img2 from "../assets/img/prod2.jpg"
import img3 from "../assets/img/prod3.jpg"
import img4 from "../assets/img/prod4.jpg"
import img5 from "../assets/img/prod5.jpg"
import img6 from "../assets/img/prod6.jpg"
import ProductCard from "../layouts/ProductCard"

const Product = () => {
  return (
    <div className="min-h-screen px-5 md:px-14 py-8">
      <h1 className="text-center text-4xl font-bold py-5">
        Our Best-Selling Product
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-2">
        <ProductCard img={img1} title ="Turmeric"/>
        <ProductCard img={img2} title ="Cinnamon"/>
        <ProductCard img={img3} title ="Ginger Powder"/>
        <ProductCard img={img4} title ="Star Anise"/>
        <ProductCard img={img5} title ="Black Pepper"/>
        <ProductCard img={img6} title ="Clove"/>
      </div>
    </div>
  );
};

export default Product;
