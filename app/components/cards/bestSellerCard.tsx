"use client";
import React from "react";
import ButtonIcon from "../button/buttonIcon";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";

interface BestSellerCardProps {
  placeholder: string;
  image: string;
  title: string;
  price: number;
}

const BestSellerCard: React.FC<BestSellerCardProps> = ({
  placeholder,
  image,
  title,
  price,
}) => {
  const [hoverCard, setHoverCard] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHoverCard(true)}
      onMouseLeave={() => setHoverCard(false)}
      className="w-full h-full rounded-lg hover:shadow-md duration-500 flex flex-col justify-between"
    >
      <div className="w-full h-80 relative mb-4 overflow-hidden rounded-lg flex items-center justify-center">
        <Image
          src={hoverCard ? image : placeholder}
          alt={title}
          fill
          className={`object-contain transition-transform duration-1000 ${
            hoverCard ? "scale-130" : "scale-100"
          }`}
        />
      </div>
      <div className="flex flex-col gap-2 px-6 py-4">
        <span className="font-bold">{title}</span>
        <span className="text-default-red font-semibold">
          {price.toLocaleString()} RWF
        </span>
        <ButtonIcon icon={<FaPlus />} title="Add to box" />
      </div>
    </div>
  );
};

export default BestSellerCard;
