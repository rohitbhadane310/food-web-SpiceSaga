import React from "react";

const Banner = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center bg-[url('/src/assets/img/banner1.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full md:w-2/4 bg-black/50 text-white text-center p-5 mx-5 space-y-5 rounded-md">
        <h1 className=" text-4xl font-bold">Spicing Up Every Dish</h1>
        <p className=" text-sm font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quo
          voluptatibus quaerat iste ab eius pariatur natus ea accusantium
          labore? Voluptatibus sit facilis quisquam possimus.
        </p>
        <button className="bg-orange-500 px-2 py-1 rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out cursor-pointer">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
