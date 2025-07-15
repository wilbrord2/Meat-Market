"use client";
import React from "react";
import ButtonIcon from "../button/buttonIcon";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import { renderStars } from "./reviewCard";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  id?: number;
  image: string;
  title: string;
  price: number;
  description?: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id = 1,
  image,
  title,
  price,
  description,
  rating,
}) => {
  const router = useRouter();
  return (
    <div className="w-full h-full rounded-lg duration-500 flex flex-col gap-4 justify-between">
      <div
        onClick={() => router.push(`/product/${id}`)}
        className="w-full h-64 relative overflow-hidden cursor-pointer"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-bold">{title}</span>
        <div className="flex space-x-1">{renderStars(rating)}</div>

        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>

        <span className="text-default-red font-semibold">
          {price.toLocaleString()} RWF
        </span>
        <div className="w-full lg:w-1/2">
          <ButtonIcon icon={<FaPlus />} title="Add to box" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
