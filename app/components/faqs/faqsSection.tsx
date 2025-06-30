"use client";
import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const faqData: FAQCategory[] = [
    {
      title: "Order",
      items: [
        {
          question: "How do I order?",
          answer:
            "You can order through our website or mobile app by selecting your desired products and proceeding to checkout.",
        },
        {
          question: "Is there a minimum order?",
          answer:
            "Yes, we have a minimum order requirement of $50 for delivery.",
        },
        {
          question: "When do I need to place my order by?",
          answer: "Orders must be placed by 5pm for next-day delivery.",
        },
        {
          question: "Can I change my delivery address or delivery date?",
          answer:
            "Yes, you can modify your delivery details up until your order is processed for shipping.",
        },
        {
          question: "Can I add to my order once it has been placed?",
          answer:
            "You can add items to your order within 1 hour of placing it by contacting our customer service.",
        },
      ],
    },
    {
      title: "Payment",
      items: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and Apple Pay.",
        },
        {
          question: "Is my payment information secure?",
          answer:
            "Yes, we use industry-standard encryption to protect your payment information.",
        },
        {
          question: "When will my card be charged?",
          answer: "Your card will be charged when your order is shipped.",
        },
      ],
    },
    {
      title: "Delivery",
      items: [
        {
          question: "Will my meat arrive fresh or frozen?",
          answer:
            "All our meat is delivered fresh, vacuum-sealed for maximum freshness.",
        },
        {
          question: "How long can I keep my meat in the fridge?",
          answer: "Our fresh meat stays good for 3-5 days in the refrigerator.",
        },
        {
          question: "How will my meat be packaged?",
          answer:
            "Meat is packed in insulated boxes with ice packs to maintain temperature during transit.",
        },
      ],
    },
    {
      title: "Storage",
      items: [
        {
          question: "Is your meat safe to refreeze?",
          answer:
            "We don't recommend refreezing previously frozen meat for quality reasons.",
        },
        {
          question: "How long can I keep my meat in the freezer?",
          answer:
            "For best quality, use within 3-6 months when stored properly in the freezer.",
        },
      ],
    },
    {
      title: "Ingredients & Allergens",
      items: [
        {
          question: "Do your products contain allergens?",
          answer:
            "Some products may contain allergens. Please check individual product descriptions for details.",
        },
        {
          question: "Are your products gluten-free?",
          answer:
            "Most of our fresh meats are naturally gluten-free, but check labels for processed items.",
        },
      ],
    },
  ];

  const toggleQuestion = (categoryTitle: string, index: number) => {
    if (activeCategory === categoryTitle && activeIndex === index) {
      setActiveIndex(null);
      setActiveCategory(null);
    } else {
      setActiveIndex(index);
      setActiveCategory(categoryTitle);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      {faqData.map((category) => (
        <div key={category.title} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 pb-2">
            {category.title}
          </h2>

          <div className="space-y-2">
            {category.items.map((item, index) => (
              <div key={index} className="border-b border-gray-200  overflow-hidden">
                <button
                  className={`flex cursor-pointer  justify-between items-center w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                    activeCategory === category.title && activeIndex === index
                      ? "bg-default-white"
                      : ""
                  }`}
                  onClick={() => toggleQuestion(category.title, index)}
                >
                  <span className="font-medium">{item.question}</span>
                  {activeCategory === category.title &&
                  activeIndex === index ? (
                    <IoChevronUp className="text-gray-500" />
                  ) : (
                    <IoChevronDown className="text-gray-500" />
                  )}
                </button>

                {activeCategory === category.title && activeIndex === index && (
                  <div className="p-4  rounded-lg">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
