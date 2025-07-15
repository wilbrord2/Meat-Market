import HeroSection from "@/app/components/hero/hero";
import HomeTemplate from "@/app/components/templates";
import React from "react";
import meatImage from "@/public/images/hero-meat.jpg";
import ReviewsSection from "@/app/components/reviews/reviews";
import Titles from "@/app/components/title/titles";
import { BestSeller, MeatCategory } from "@/app/costants";
import BestSellerCard from "@/app/components/cards/bestSellerCard";
import CategoryCard from "@/app/components/cards/categoryCard";
import ProductList from "@/app/components/products/productList";
import Link from "next/link";

const ShoppingPage = () => {
  return (
    <HomeTemplate>
      <HeroSection title="Meat Market" backgroundImage={meatImage.src} />
      <div className="w-full px-4 md:px-8 lg:px-16 space-y-12 py-12">
        <ProductList />
        <div className="w-full ">
          <Titles name="Explore by popular Categories" />

          <div className="flex flex-wrap gap-8 justify-center lg:justify-between items-center pt-12">
            {MeatCategory.map((cat, idx) => (
              <Link href={`/category/${cat.link}`} key={idx}>
                <div className="w-full max-w-[200px]">
                  <CategoryCard image={meatImage.src} name={cat.title} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full ">
          <Titles name="Today's deals" />
          <div className="flex flex-wrap gap-8 justify-center lg:justify-between items-center pt-12">
            {BestSeller.map((item, idx) => (
              <div key={idx} className="w-full min-w-[200px] max-w-[300px]">
                <BestSellerCard
                  placeholder={item.placeholder}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
        <ReviewsSection />
      </div>
    </HomeTemplate>
  );
};

export default ShoppingPage;
