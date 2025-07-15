"use client";

import React, { useState } from "react";
import HomeTemplate from "@/app/components/templates";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { cartItems } from "@/app/costants";
import Link from "next/link";
import { GoCreditCard } from "react-icons/go";
import { CiMobile1, CiMoneyCheck1 } from "react-icons/ci";
import mtn from "@/public/images/mtn.jpg";
import airtel from "@/public/images/airtel.png";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    district: "",
    phone: "",
    deliveryMethod: "standard",
    paymentMethod: "card",
    paymentservice: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
  });
  const [service, setService] = useState("mtn");

  const subtotal = cartItems.reduce((acc, p) => acc + p.price * p.quantity, 0);
  const deliveryFee = formData.deliveryMethod === "express" ? 3000 : 1500;
  const total = subtotal + deliveryFee;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Checkout Data:", {
      ...formData,
      subtotal,
      deliveryFee,
      total,
    });
  };

  return (
    <HomeTemplate>
      <form
        onSubmit={handleSubmit}
        className="max-w-[1562px] mx-auto p-12 grid lg:grid-cols-2 gap-12 bg-gray-50"
      >
        {/* Left Side */}
        <div className="space-y-6">
          <Link
            href="/boxes"
            className="hover:underline text-gray-500 hover:text-gray-800 "
          >
            <button
              type="button"
              className="flex items-center gap-2 text-sm cursor-pointer mb-4"
            >
              <FaArrowLeft /> Back to box
            </button>
          </Link>
          {/* Account */}
          <div className="space-y-2">
            <h3 className="font-semibold">Your details</h3>
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <span className="text-default-red underline">Sign in</span>
            </p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border rounded-md border-gray-300 p-2"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border rounded-md border-gray-300 p-2"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <p className="text-xs text-gray-500">
              Use 8+ characters with a mix of letters, numbers and symbols.
              <br />
              Must not contain your name or username.
            </p>
          </div>

          {/* Product Review */}
          <div>
            <h3 className="font-semibold mb-2">Product Detail & Review</h3>
            <p className="text-sm text-gray-500 mb-4">
              By completing your purchase, you agree to Meat Market’s Privacy
              Policy and Terms.
            </p>
            <div className="space-y-3">
              {cartItems.map((product, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 shadow bg-white rounded-lg p-4"
                >
                  <div className="relative w-54 h-32">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="rounded-2xl object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col text-sm gap-1">
                    <span className="font-semibold">{product.name}</span>
                    <span className="text-gray-400 text-sm font-light">
                      {product.size} - {product.category}
                    </span>
                    <span className="text-sm text-gray-400 font-light">
                      Qty:{" "}
                      <span className="text-default-black">
                        {product.quantity}
                      </span>
                    </span>
                    <span className="text-default-red font-semibold">
                      RF {product.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Delivery Information</h3>
            <p className="text-gray-400">Enter your Delivery details</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="border rounded-md border-gray-300 p-2"
                onChange={handleChange}
                value={formData.firstName}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="border rounded-md border-gray-300 p-2"
                onChange={handleChange}
                value={formData.lastName}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="border rounded-md border-gray-300 p-2 col-span-2"
                onChange={handleChange}
                value={formData.address}
                required
              />
              <input
                type="text"
                name="apartment"
                placeholder="Apartment, suite, etc. (optional)"
                className="border rounded-md border-gray-300 p-2 col-span-2"
                onChange={handleChange}
                value={formData.apartment}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="border rounded-md border-gray-300 p-2"
                onChange={handleChange}
                value={formData.city}
                required
              />
              <input
                type="text"
                name="district"
                placeholder="District"
                className="border rounded-md border-gray-300 p-2"
                onChange={handleChange}
                value={formData.district}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="border rounded-md border-gray-300 p-2 col-span-2"
                onChange={handleChange}
                value={formData.phone}
                required
              />
            </div>

            {/* Delivery Method */}
            <div className="space-y-4">
              <h4 className="font-semibold">Select your delivery date</h4>
              <label className="flex justify-between items-center shadow rounded-md p-8 cursor-pointer">
                <div className="flex items-center gap-8">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="standard"
                    checked={formData.deliveryMethod === "standard"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="font-bold">Standard Delivery </span>

                    <span className="text-gray-500 text-sm">
                      Delivered Monday to Friday, 9am to 7pm
                    </span>
                  </div>
                </div>
                <span className="font-bold">RF 1,500</span>
              </label>
              <label className="flex justify-between items-center shadow rounded-md p-8 cursor-pointer">
                <div className="flex items-center gap-8">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="express"
                    checked={formData.deliveryMethod === "express"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">Expressed Delivery </span>
                    <span className="text-gray-500 text-sm">
                      Delivered Monday to Friday, 9am to 12pm
                    </span>
                  </div>
                </div>
                <span className="font-bold">RF 3,000</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          <h3 className="font-semibold">Payment Method</h3>
          <p className="text-sm text-gray-500">
            All transactions are secure and encrypted
          </p>
          <h3 className="font-semibold">Select Your Payment Method</h3>
          {/* Payment Method Options */}
          <div className="grid grid-cols-3 gap-2">
            {["card", "mobile", "paypal"].map((method) => (
              <label
                key={method}
                className={`border rounded-md  text-sm p-3 space-y-4 cursor-pointer ${
                  formData.paymentMethod === method
                    ? "border-default-black border bg-gray-100"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  className="hidden"
                  onChange={handleChange}
                  checked={formData.paymentMethod === method}
                />
                <div>
                  {method === "card" ? (
                    <GoCreditCard size={30} />
                  ) : method === "mobile" ? (
                    <CiMobile1 size={30} />
                  ) : (
                    <CiMoneyCheck1 size={30} />
                  )}
                </div>
                <span>
                  {method === "card"
                    ? "Debit/Credit Card"
                    : method === "mobile"
                    ? "Mobile Money"
                    : "PayPal"}
                </span>
              </label>
            ))}
          </div>

          {/* Card Inputs */}
          {formData.paymentMethod === "card" ? (
            <div className="space-y-2">
              <input
                type="text"
                name="cardName"
                placeholder="Name on card"
                className="w-full border rounded-md border-gray-300 p-2"
                onChange={handleChange}
                value={formData.cardName}
              />
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                className="w-full border rounded-md border-gray-300 p-2"
                onChange={handleChange}
                value={formData.cardNumber}
              />
              <input
                type="text"
                name="expiry"
                placeholder="Expiration date (MM/YY)"
                className="w-full border rounded-md border-gray-300 p-2"
                onChange={handleChange}
                value={formData.expiry}
              />
            </div>
          ) : formData.paymentMethod === "mobile" ? (
            <div className="space-y-2">
              <div className="flex justify-start gap-6 items-center mb-2">
                {["mtn", "airtel"].map((provider) => (
                  <span
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        paymentservice: provider,
                      }));
                      setService(provider);
                    }}
                    className={`flex flex-col items-center gap-2 text-xs border  rounded-lg min-w-[100px]  px-4 py-2 cursor-pointer ${
                      service === provider
                        ? " border-default-black  bg-gray-100"
                        : "border-gray-300"
                    }`}
                    key={provider}
                  >
                    <img
                      src={provider === "mtn" ? mtn.src : airtel.src}
                      alt="mobile money service"
                      className="w-8 h-8  object-cover"
                    />
                    <h1>
                      {provider === "mtn" ? "MTN Mobile Money" : "Airtel Money"}
                    </h1>
                  </span>
                ))}
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full border rounded-md border-gray-300 p-2"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>
          ) : null}

          {/* Summary */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>RF {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>RF {deliveryFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>RF {total.toLocaleString()}</span>
            </div>
          </div>

          {formData.paymentMethod !== "paypal" ? (
            <button
              type="submit"
              className="w-full py-3 border border-black rounded-md hover:bg-default-blue hover:text-white transition"
            >
              Pay now
            </button>
          ) : (
            <button
              type="submit"
              className="w-full py-3 border border-black rounded-md hover:bg-default-blue hover:text-white transition"
            >
              <Link
                href={"https://www.paypal.com/rw/home"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Continue with PayPal
              </Link>
            </button>
          )}
        </div>
      </form>
    </HomeTemplate>
  );
};

export default CheckoutPage;
