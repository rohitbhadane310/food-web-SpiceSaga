import React from "react";
import img1 from "../assets/img/prod1.jpg";

const ProductCard = ({ img, title }) => {
  return (
    <div className="bg-gray-100 p-3.5 rounded-lg text-center space-y-2 group hover:cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-300 ease-in-out">
      <img src={img} alt="img" className="rounded-2xl" />
      <h3 className="font-semibold text-lg">{title}</h3>

      <div className="flex items-center justify-center">
        <p className="text-sm font-light group-hover:opacity-0 transition-opacity duration-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          voluptatem voluptatibus numquam molestiae et amet.
        </p>

        <button className="opacity-0 group-hover:opacity-100 bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold transition-opacity duration-300 absolute">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
