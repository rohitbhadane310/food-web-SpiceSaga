import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">SpiceSaga</h1>
          <p className=" text-sm">
            Bringing you the finest and purest Indian spices!Our handcrafted
            masalas add authentic flavors to every dish.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className="hover:text-orange-400 transition-all cursor-pointer"
              href="/"
            >
              Home
            </a>
            <a
              className="hover:text-orange-400 transition-all cursor-pointer"
              href="/"
            >
              About Us
            </a>
            <a
              className="hover:text-orange-400 transition-all cursor-pointer"
              href="/"
            >
              Products
            </a>
            <a
              className="hover:text-orange-400 transition-all cursor-pointer"
              href="/"
            >
              Contact Us
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
            Our Specialties
          </h1>
          <nav className=" flex flex-col gap-2">
            <a
              className="hover:text-orange-400 transition-all cursor-pointer"
              href="/"
            >
              Premium Quality
            </a>
            <a
              className="hover:text-orange-400 transition-all cursor-pointer"
              href="/"
            >
              Exotic Flavors
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className="hover:text-orange-400 transition-all cursor-pointer"
              href="/"
            >
              SpiceSaga@email.com
            </a>
            <a
              className="hover:text-orange-400 transition-all cursor-pointer"
              href="/"
            >
              +64 958 248 966
            </a>
            <a
              className="hover:text-orange-400 transition-all cursor-pointer"
              href="/"
            >
              Social media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          @copyright developed by
          <span className="text-orange-600"> champion programmers </span> | All
          rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
