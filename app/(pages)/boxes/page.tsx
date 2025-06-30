import React from "react";
import meatImage from "@/public/images/hero-meat.jpg";
import HeroSection from "@/app/components/hero/hero";
import ReviewsSection from "@/app/components/reviews/reviews";
import HomeTemplate from "@/app/components/templates";
import ProductList from "@/app/components/products/productList";

const BoxesPage = () => {
  return (
    <HomeTemplate>
      <HeroSection title="Boxes" backgroundImage={meatImage.src} />
      <div className="w-full px-4 md:px-8 lg:px-16 space-y-12 py-12">
        <ProductList />
        <ReviewsSection />
      </div>
    </HomeTemplate>
  );
};

export default BoxesPage;
