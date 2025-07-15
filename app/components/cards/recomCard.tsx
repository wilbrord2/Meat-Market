"use client";
import React from "react";
import ButtonIcon from "../button/buttonIcon";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";

interface RecomCardCardProps {
  image: string;
  title: string;
  price: number;
}

const RecomCard: React.FC<RecomCardCardProps> = ({ image, title, price }) => {
  return (
    <div className="w-full h-full rounded-lg duration-500 flex flex-col justify-between">
      <div className="w-full h-60 relative mb-4 overflow-hidden rounded-lg flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-1000 `}
        />
      </div>
      <div className="flex flex-col gap-2  py-4">
        <span className="font-bold">{title}</span>
        <span className="text-default-red font-semibold">
          {price.toLocaleString()} RWF
        </span>
        <div className="flex items-center justify-between w-1/2">

        <ButtonIcon icon={<FaPlus />} title="Add to box" />
        </div>
      </div>
    </div>
  );
};

export default RecomCard;
