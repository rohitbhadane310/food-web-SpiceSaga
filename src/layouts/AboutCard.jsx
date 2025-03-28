import React from "react";

const AboutCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center gap-2 text-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-2xl hover:bg-black hover:text-orange-400 transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300">
      <span>{icon}</span>
      <h3 className=" text-lg font-semibold">{title}</h3>
      <p className=" text-sm font-light">
        At SpiceSaga, we bring you the finest, handpicked spices sourced
        directly from trusted farms. Each carefully processed to retain its
        natural.
      </p>
    </div>
  );
};

export default AboutCard;
