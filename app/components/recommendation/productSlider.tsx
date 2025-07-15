"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import beefimage from "@/public/images/bestSeller.png";
import RecomCard from "../cards/recomCard";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const products = new Array(10).fill({
  name: "Beef Sirloin",
  price: "RF 10,000",
  image: beefimage,
});

const ProductSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop:false });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8 py-4">
          {products.map((item, idx) => (
            <div key={idx} className="w-full min-w-[250px] max-w-[350px]">
              <RecomCard
                image={item.image}
                title={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button onClick={scrollPrev} className="absolute left-10 -bottom-5  ">
        <CiCircleChevLeft
          size={40}
          className="hover:text-default-red hover:cursor-pointer hover:font-bold"
        />
      </button>
      <button onClick={scrollNext} className="absolute right-10 -bottom-5  ">
        <CiCircleChevRight
          size={40}
          className="hover:text-default-red hover:cursor-pointer hover:font-bold"
        />
      </button>
    </div>
  );
};

export default ProductSlider;
