import React from "react";
import Image from "next/image";

interface CategoryProps {
  image: string;
  name: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ image, name }) => {
  return (
    <div>
      <div className="relative w-full h-62 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-lg shadow-md"
        />
      </div>
      <h3 className="text-sm font-semibold mt-4 ">{name}</h3>
    </div>
  );
};

export default CategoryCard;
