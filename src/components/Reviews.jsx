import React from "react";
import img1 from "../assets/img/review1.jpg"
import img2 from "../assets/img/review2.jpg"
import img3 from "../assets/img/review3.jpg"
import ReviewCard from "../layouts/ReviewCard";

const Reviews = () => {
  return (
    <div className=" px-5 md:px-14">
      <h1 className="text-center text-4xl font-bold py-5">What People Say</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
        <ReviewCard img={img1} title="James Anderson" />
        <ReviewCard img={img2} title="David Thompson" />
        <ReviewCard img={img3} title="Matthew Harris" />
      </div>
    </div>
  );
};

export default Reviews;
