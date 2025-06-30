"use client";
import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

interface PointCardProps {
  description: string;
  title: string;
}
const PointCard: React.FC<PointCardProps> = ({ title, description }) => {
  const [hoverCard, setHoverCard] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHoverCard(true)}
      onMouseLeave={() => setHoverCard(false)}
      className="w-full h-42 rounded-lg"
    >
      <div
        className={`transition-transform duration-300 ${
          hoverCard ? "bg-default-blue/80" : ""
        } border border-b-default-blue rounded p-4 h-full flex items-center justify-center text-center`}
      >
        {hoverCard ? (
          <p className=" text-default-white text-sm">{description}</p>
        ) : (
          <div className="flex flex-col gap-4 items-center justify-center">
            <span>
              <IoCheckmarkOutline size={50} />
            </span>
            <p className="text-default-blue font-bold text-lg ">{title}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PointCard;
