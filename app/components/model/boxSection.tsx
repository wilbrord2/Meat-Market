"use client";

import { useAppContext } from "@/app/context";
import { cartItems, suggestedItems } from "@/app/costants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Box = () => {
  const [items, setItems] = useState(cartItems);
  const { setActiveModalId } = useAppContext();

  const updateQuantity = (index: number, delta: number) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: Math.max(0, item.quantity + delta),
            }
          : item
      )
    );
  };

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="sticky top-0 z-30 left-0 bg-gray-100 p-4 flex items-center justify-between">
        <h1>Your Box</h1>
        <IoMdClose size={20} onClick={() => setActiveModalId(null)} />
      </div>
      <div className="w-full py-10 space-y-8 ">
        {/* Cart Items */}
        <div className="space-y-8 p-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border-b border-gray-300 pb-6"
            >
              <div className="relative w-52 h-34 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="rounded object-cover"
                />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  {item.size} - RF {item.price.toLocaleString()}
                </p>
                <p className="text-red-600 font-semibold">
                  RF {item.price.toLocaleString()}
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded px-2">
                    <button
                      onClick={() => updateQuantity(index, -1)}
                      className="px-2 py-1"
                    >
                      −
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(index, 1)}
                      className="px-2 py-1"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(index)}
                  className="text-sm text-gray-500 underline hover:text-gray-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Suggested Section */}
        <div className="bg-gray-100 p-6">
          <h2 className="text-lg font-light mb-4">
            You might like these too..
          </h2>
          <div className="grid gap-4">
            {suggestedItems.map((item, i) => (
              <div key={i} className="flex items-center gap-4  rounded p-4 ">
                <div className="relative w-52 h-34 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded"
                  />
                </div>
                <div className="text-sm">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-red-600">
                    RF {item.price.toLocaleString()}
                  </p>
                  <button className="mt-2 px-3 py-1 border border-default-blue rounded-full text-sm hover:bg-default-blue hover:text-white transition">
                    + Add to box
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <div className="pt-4 space-y-4 px-4">
          <div className="flex justify-between font-semibold text-lg">
            <span>Subtotal</span>
            <span>RF {subtotal.toLocaleString()}</span>
          </div>
          <div className="space-y-2">
            <button
              onClick={() => setActiveModalId(null)}
              className="w-full border border-default-blue rounded py-2 hover:bg-default-blue hover:text-white transition"
            >
              <Link href="/checkout" className="w-full">
                Proceed to Checkout
              </Link>
            </button>
            <button
              onClick={() => setActiveModalId(null)}
              className="w-full border border-default-blue rounded py-2 hover:bg-gray-300 transition"
            >
              <Link href="/market" className="w-full">
                Continue shopping
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;
