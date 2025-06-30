import React from "react";
import HeroSection from "@/app/components/hero/hero";
import HomeTemplate from "@/app/components/templates";

import meatImage from "@/public/images/cows.jpg";
import Button from "@/app/components/button/button";
import FAQSection from "@/app/components/faqs/faqsSection";
const Faqs = () => {
  return (
    <HomeTemplate>
      <HeroSection title="FAQs" backgroundImage={meatImage.src} />
      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 lg:px-32 py-12 space-y-12">
        <div className="text-center flex flex-col items-center gap-4">
          <p className="w-1/2 text-sm">
            Looking for answers? <br /> Check out the common questions below.
            Still need help? <br /> Feel free to reach out.
          </p>
          <Button link="/contact" title="Contact Us" />
        </div>
        <FAQSection />
      </div>
    </HomeTemplate>
  );
};

export default Faqs;
