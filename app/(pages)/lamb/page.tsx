import React from "react";
import meatImage from "@/public/images/hero-meat.jpg";
import HeroSection from "@/app/components/hero/hero";
import ReviewsSection from "@/app/components/reviews/reviews";
import HomeTemplate from "@/app/components/templates";
import ProductList from "@/app/components/products/productList";
import { TypesOfMeat } from "@/app/costants";
import Link from "next/link";

const LambPage = () => {
  return (
    <HomeTemplate>
      <HeroSection title="Lamb" backgroundImage={meatImage.src} />
      <div className="w-full px-4 md:px-8 lg:px-16 space-y-12 py-6">
        <div className="space-y-4">
          <div className="flex flex-row flex-wrap lg:items-center md:justify-center gap-4 lg:gap-6">
            {TypesOfMeat.map((link, idx) => (
              <Link
                key={idx}
                href={link.link}
                className="hover:text-default-red max-lg:hover:bg-default-grey/30 font-semibold px-3 py-2 rounded transition-colors duration-300"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <ProductList />
        </div>
        <ReviewsSection />
      </div>
    </HomeTemplate>
  );
};

export default LambPage;
