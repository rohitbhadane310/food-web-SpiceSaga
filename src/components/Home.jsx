import React from "react";
import video from "../assets/video/Hero.mp4";
import img from "../assets/img/Hero2.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-20">
        <Navbar />
      </div>

      <div className=" min-h-screen relative z-10 flex flex-row items-center justify-between px-5 md:px-14 bg-black/50 text-white">
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl font-semibold">
            True Flavors, No Compromise
          </h3>
          <h1 className="text-5xl font-bold">Unfiltered Authenticity</h1>
          <p className=" w-full md:w-3/4">
            Experience flavors the way they were meant to be—rich, bold, and
            absolutely real.
          </p>
          <p className="w-full lg:w-3/4">
            Crafted with passion, made with authenticity—every spice tells a
            story of purity and tradition. Elevate your cooking with ingredients
            that matter.
          </p>
          <button className="w-3/4 md:w-1/4 py-1 bg-orange-500 text-lg rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out cursor-pointer">
            Explore Now
          </button>
        </div>
        <div className="hidden lg:flex w-3/4 rounded-full">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
