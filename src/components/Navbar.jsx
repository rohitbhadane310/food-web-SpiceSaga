import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className=" flex justify-between px-5 py-5 lg:px-14 md:px-10 bg-black text-white">
        <div className="flex items-center gap-4">
          <span className=" text-xl font-bold">SpiceSaga</span>
        </div>
        <nav className=" hidden lg:flex items-center gap-8 px-20">
          <a
            href="/"
            className=" hover:text-orange-400 transition duration-300 ease-linear"
          >
            Home
          </a>
          <a
            href="/"
            className=" hover:text-orange-400 transition duration-300 ease-linear"
          >
            About Us
          </a>
          <a
            href="/"
            className=" hover:text-orange-400 transition duration-300 ease-linear"
          >
            Products
          </a>
          <a
            href="/"
            className=" hover:text-orange-400 transition duration-300 ease-linear"
          >
            Contact Us
          </a>
        </nav>
        <div className=" hidden md:flex items-center gap-4">
          <FaShoppingCart className=" hidden md:flex" size={20} />
          <button className="bg-orange-500 px-2 py-1 rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out cursor-pointer">
            Sign in
          </button>
        </div>

        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <a
          href="/"
          className=" hover:text-orange-400 transition duration-300 ease-linear"
        >
          Home
        </a>
        <a
          href="/"
          className=" hover:text-orange-400 transition duration-300 ease-linear"
        >
          About Us
        </a>
        <a
          href="/"
          className=" hover:text-orange-400 transition duration-300 ease-linear"
        >
          Products
        </a>
        <a
          href="/"
          className=" hover:text-orange-400 transition duration-300 ease-linear"
        >
          Contact Us
        </a>
      </div>
    </>
  );
};

export default Navbar;
