import React from "react";

const ReviewCard = ({ img, title }) => {
  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-2xl transition-transform transform hover:scale-95 duration-300">
      <img src={img} alt="" className=" rounded-2xl" />
      <h3 className=" text-lg font-semibold mt-3 text-center">{title}</h3>
      <p className=" font-light text-sm mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
        necessitatibus nobis molestiae, placeat est quas soluta minima quis
        distinctio nesciunt.
      </p>
    </div>
  );
};

export default ReviewCard;
