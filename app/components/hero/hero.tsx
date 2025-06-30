"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText,
  backgroundImage,
}) => {
  const router = useRouter();
  return (
    <div
      className="w-full h-[30vh] lg:h-[50vh] bg-cover bg-no-repeat bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-default-blue/55 inset-0 h-full w-full flex flex-col justify-center items-center p-6 text-white">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold w-full md:w-3/4 lg:w-2/3 mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6">
            {subtitle}
          </p>
        )}
        {buttonText && (
          <button
            onClick={() => router.push("/market")}
            className="border border-white px-8 py-2 text-sm rounded-full hover:bg-hover-color hover:border-default-red hover:text-default-red cursor-pointer transition"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
