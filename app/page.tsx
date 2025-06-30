import HeroSection from "./components/hero/hero";
import HomeTemplate from "./components/templates";
import meatImage from "@/public/images/hero-meat.jpg";
import Titles from "./components/title/titles";
import { BestSeller, MeatCategory, Reviews } from "./costants";
import BestSellerCard from "./components/cards/bestSellerCard";
import PointCard from "./components/cards/pointCard";
import CategoryCard from "./components/cards/categoryCard";
import ReviewCard from "./components/cards/reviewCard";
import ReviewsSection from "./components/reviews/reviews";

export default function Home() {
  return (
    <HomeTemplate>
      <HeroSection
        title="Premium Sustainably-Sourced Meat Delivered Fresh To Your Door"
        buttonText="Shop"
        backgroundImage={meatImage.src}
      />
      <div className="w-full  space-y-12">
        <div className="w-full pt-12 px-4 md:px-8 lg:px-16">
          <Titles name="Bests-Sellers" />
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

        <div className="w-full bg-default-grey/10 rounded-lg py-16 flex flex-col gap-4 justify-center px-4 md:px-8 lg:px-16">
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

        <div className="w-full px-4 md:px-8 lg:px-16">
          <Titles name="Explore by Category" />

          <div className="flex flex-wrap gap-8 justify-center lg:justify-between items-center pt-12">
            {MeatCategory.map((cat, idx) => (
              <div key={idx} className="w-full max-w-[200px]">
                <CategoryCard image={meatImage.src} name={cat.title} />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full bg-default-grey/10 rounded-lg py-16 flex flex-col gap-4 justify-center px-4 md:px-8 lg:px-16">
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
          <ReviewsSection />
        </div>
      </div>
    </HomeTemplate>
  );
}
