import React from "react";
import HeroSection from "@/app/components/hero/hero";
import HomeTemplate from "@/app/components/templates";

import meatImage from "@/public/images/cows.jpg";
import Titles from "@/app/components/title/titles";
import { BestSeller } from "@/app/costants";
import PointCard from "@/app/components/cards/pointCard";
import AboutImage from "@/app/components/images/aboutImage";
import goat from "@/public/images/sheep.jpg";
import pig from "@/public/images/pigs.jpg";
import chicken from "@/public/images/chicken.jpeg";

const AbboutUsPage = () => {
  return (
    <HomeTemplate>
      <HeroSection title="About Us" backgroundImage={meatImage.src} />
      <div className=" w-full py-12 space-y-12">
        <div className="max-w-7xl w-full mx-auto rounded-lg flex flex-col gap-4 justify-center px-4 md:px-8 lg:px-16">
          <Titles name="Meat Market - Your Trusted Online Butcher" />
          <p className=" text-default-black">
            Bringing the traditional meat counter experience online, Meat Market
            connects you with responsibly sourced, premium-quality meats from
            trusted farmers and fisheries. Whether you're building your own
            custom box or choosing from expertly curated selections, we deliver
            restaurant-grade cuts—frozen for freshness, packed sustainably, and
            brought straight to your door. With full transparency, unbeatable
            value, and flexible options, Meat Market makes it easy to shop
            consciously and cook confidently.
          </p>
          <h2 className="font-bold text-default-blacks">Why Choose Us</h2>

          <div className="flex flex-wrap gap-8 justify-center lg:justify-between items-center ">
            {BestSeller.map((item, idx) => (
              <div key={idx} className="w-full max-w-[200px]">
                <PointCard
                  description="We source our meat from local"
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>

        <AboutImage image={chicken.src} />
        <div className="max-w-7xl w-full mx-auto rounded-lg grid grid-cols-1 md:grid-cols-2  gap-8  px-4 md:px-8 lg:px-16">
          <div className="space-y-4">
            <h2 className="font-bold text-default-blacks">Vision</h2>
            <p className="text-sm font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              perspiciatis consectetur nesciunt aliquam nihil repellendus fuga
              voluptatum mollitia repellat asperiores dolorum totam earum
              laboriosam praesentium culpa, alias est voluptas obcaecati quia
              accusamus veritatis adipisci ea unde nisi! Repudiandae praesentium
              earum, deleniti voluptate saepe itaque, hic fuga, ullam reiciendis
              aliquid placeat.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="font-bold text-default-blacks">Mission</h2>
            <p className="text-sm font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              perspiciatis consectetur nesciunt aliquam nihil repellendus fuga
              voluptatum mollitia repellat asperiores dolorum totam earum
              laboriosam praesentium culpa, alias est voluptas obcaecati quia
              accusamus veritatis adipisci ea unde nisi! Repudiandae praesentium
              earum, deleniti voluptate saepe itaque, hic fuga, ullam reiciendis
              aliquid placeat.
            </p>
          </div>
        </div>
        <AboutImage image={goat.src} />
        <div className="max-w-7xl w-full mx-auto bg-white px-4 md:px-8 lg:px-16 space-y-8">
          <h2 className="text-lg md:text-3xl font-bold ">Our Core Process</h2>

          <div className=" grid md:grid-cols-3 gap-8  border-gray-200">
            {/* Column 1 */}

            <div className="md:border-r pr-6 border-gray-300">
              <h3 className="font-semibold mb-2">We Source:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
                <li>
                  Partner with suppliers who maintain the highest standards for
                  quality in meat and seafood production.
                </li>
                <li>
                  Sustainably sourced from small, independent farms and
                  fisheries.
                </li>
                <li>
                  Prioritize animal welfare and environmental sustainability.
                </li>
              </ul>
            </div>

            <div className="md:border-r pr-6 border-gray-300">
              <h3 className="font-semibold">Transparency & Traceability:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
                <li>
                  Provide detailed information about each product’s origins.
                </li>
                <li>
                  Ensure customers know and trust the source of their food.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Exclusive, Premium Quality</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
                <li>
                  Offer unique selections like Japanese A5 Wagyu and
                  pasture-raised beef.
                </li>
                <li>
                  Deliver restaurant-quality meats that elevate home dining
                  experiences.
                </li>
              </ul>
            </div>

            {/* row */}
            <div className="md:border-r pr-6 border-gray-300">
              <h3 className="font-semibold mb-2">We Deliver:</h3>
              <p className="text-sm text-gray-800">
                Ship orders for free, frozen for freshness, and packed in
                eco-friendly boxes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold ">You Enjoy:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
                <li>
                  Simplify meal preparation with convenient, high-quality meat
                  delivered directly to the customer’s door.
                </li>
                <li>
                  Enable more time for memorable meals and shared moments.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <AboutImage image={pig.src} />

        <div className="max-w-7xl w-full mx-auto rounded-lg flex flex-col gap-4 justify-center px-4 md:px-8 lg:px-16">
          <Titles name="How Meat Market Works Online" />

          <div className="flex flex-wrap gap-8 justify-center lg:justify-between items-center pt-8 ">
            {BestSeller.map((item, idx) => (
              <div key={idx} className="w-full max-w-[200px]">
                <PointCard
                  description="We source our meat from local"
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </HomeTemplate>
  );
};

export default AbboutUsPage;
