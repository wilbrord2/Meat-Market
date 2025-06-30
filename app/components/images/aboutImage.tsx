import React from "react";
import Image from "next/image";

const AboutImage = ({ image }: { image: string }) => {
  return (
    <div className="w-full h-[200px] md:h-[300px] lg:h-[350px] relative">
      <Image
        src={image}
        fill
        alt="About Us"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default AboutImage;
