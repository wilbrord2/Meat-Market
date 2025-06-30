import React from "react";
import Titles from "../title/titles";
import { Reviews } from "@/app/costants";
import ReviewCard from "../cards/reviewCard";

const ReviewsSection = () => {
  return (
    <div className="pt-12">
      <Titles name="Reviews" />
      {/* <div className="flex flex-wrap gap-8 justify-center lg:justify-between items-stretch pt-8"> */}
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 pt-8">
        {Reviews.map((rev, idx) => (
          <div
            key={idx}
            className="w-full max-w-sm shadow-sm bg-gray-100 p-6 rounded-lg"
          >
            <ReviewCard
              rating={rev.rating}
              date={rev.date}
              message={rev.message}
              name={rev.name}
              status={rev.status}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
