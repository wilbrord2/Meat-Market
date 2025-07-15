"use client";
import Recommandation from "@/app/components/recommendation/recommandation";
import ReviewsSection from "@/app/components/reviews/reviews";
import HomeTemplate from "@/app/components/templates";
import React, { use, useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import image1 from "@/public/images/bestSeller.png";
import image2 from "@/public/images/meat.jpg";
import image3 from "@/public/images/hero-meat.jpg";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { useAppContext } from "@/app/context";

const product = {
  title: "Beef Rib eye",
  description: "A well-marbled, tender cut with rich flavor",
  priceOptions: [
    { label: "1kg - RF 10,000", value: 10000, serves: "5-6" },
    { label: "1.5kg - RF 15,000", value: 15000, serves: "7-8" },
  ],
  images: [image1, image2, image3],
};

const ProductDetailsPage = ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = use(params);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantities, setQuantities] = useState([1, 2]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [like, setLike] = useState(false);
  const { setActiveModalId } = useAppContext();

  const toggleSection = (key: string) =>
    setExpanded(expanded === key ? null : key);

  const total = product.priceOptions.reduce(
    (sum, option, index) => sum + option.value * quantities[index],
    0
  );

  return (
    <HomeTemplate>
      <div className="w-full px-4 md:px-8 lg:px-16 py-8 flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="flex-1 space-y-4">
          <div className="w-full relative h-[500px] rounded">
            <Image
              src={selectedImage}
              alt="Selected"
              fill
              className="rounded w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4">
            {product.images.map((img, i) => (
              <div className="w-full h-40 relative" key={i}>
                <Image
                  src={img}
                  alt={`Thumbnail ${i}`}
                  fill
                  onClick={() => setSelectedImage(img)}
                  className={`cursor-pointer  object-cover w-full h-full rounded border-2 ${
                    selectedImage === img
                      ? "border-default-red"
                      : "border-gray-200"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <div className="flex text-black">
            ★★★★☆ <span className="text-sm text-gray-500 ml-2">(4.5)</span>
          </div>
          <p className="text-gray-500">
            {product.description}{" "}
            <span className="text-gray-700 underline cursor-pointer">
              Read more
            </span>
          </p>
          <p className="text-default-red font-semibold">From RF 10,000</p>

          <p className="text-gray-700">Pick your size</p>
          <div className="space-y-4 border-y border-gray-300 py-4">
            {product.priceOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3"
              >
                <div>
                  <p className="font-semibold">{option.label}</p>
                  <p className="text-xs text-gray-500">
                    Serves {option.serves}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-2 border border-gray-300 rounded-lg px-4 py-2 min-w-30">
                  <button
                    className=""
                    onClick={() =>
                      setQuantities((q) =>
                        q.map((val, i) =>
                          i === index && val > 0 ? val - 1 : val
                        )
                      )
                    }
                  >
                    −
                  </button>
                  <span>{quantities[index]}</span>
                  <button
                    className=""
                    onClick={() =>
                      setQuantities((q) =>
                        q.map((val, i) => (i === index ? val + 1 : val))
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4 mt-4">
            {!like ? (
              <CiHeart onClick={() => setLike(!like)} size={50} />
            ) : (
              <FaHeart
                onClick={() => setLike(!like)}
                size={50}
                className="text-default-red"
              />
            )}
            <button
              onClick={() => setActiveModalId("box")}
              className="w-3/4 border rounded-full py-2 px-6 flex justify-center items-center hover:bg-gray-800 hover:text-white transition"
            >
              RF {total.toLocaleString()} - Add to Box
            </button>
          </div>

          {/* Accordion Sections */}
          {["Product Details", "How to Store", "Delivery", "Review ★★★★☆"].map(
            (section) => (
              <div key={section}>
                <button
                  onClick={() => toggleSection(section)}
                  className="w-full flex justify-between items-center py-3 border-b border-gray-300"
                >
                  <span className="font-medium">{section}</span>
                  {expanded === section ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {expanded === section && (
                  <div className="p-2 text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>

      <div className="bg-gray-100 w-full px-4 md:px-8 lg:px-16 ">
        <Recommandation title="You might also like" />
      </div>

      <div className="w-full px-4 md:px-8 lg:px-16 ">
        <Recommandation title="Recently Viewed" />
      </div>

      <div className="bg-gray-100 w-full px-4 md:px-8 lg:px-16 pb-16 ">
        <ReviewsSection />
      </div>
    </HomeTemplate>
  );
};

export default ProductDetailsPage;
