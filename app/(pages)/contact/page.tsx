"use client";

import HeroSection from "@/app/components/hero/hero";
import HomeTemplate from "@/app/components/templates";
import React from "react";
import meatImage from "@/public/images/cows.jpg";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  orderNumber?: string;
  reason?: string;
  message: string;
};

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Submitted Data:", data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <HomeTemplate>
      <HeroSection title="Contact Us" backgroundImage={meatImage.src} />
      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 lg:px-32 py-12 space-y-12">
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Email enquiries</h2>
          <p>
            Need assistance? Email us and our support team will be glad to help
            with your order.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 divider-gray-200 divide-y md:divide-y-0 md:divide-x border-x  border-gray-200  overflow-hidden text-sm">
            <div className="p-4">
              <strong className="block font-semibold">
                Customer Enquiries
              </strong>
              <span>support@meatmarket.com</span>
            </div>
            <div className="p-4">
              <strong className="block font-semibold">Phone number</strong>
              <span>+250785656474</span>
            </div>
            <div className="p-4">
              <strong className="block font-semibold">Operating hours</strong>
              <span>Monday - Friday, 9:00-17:00</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Or fill out our form</h2>
          <p className="text-sm text-gray-700">
            All enquiries are answered within two working days.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 w-full max-w-full"
        >
          {/* Input Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First Name */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                First name*
              </label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="First name"
              />
              {errors.firstName && (
                <p className="text-default-red text-xs mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Last name*
              </label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="text-default-red text-xs mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium">Email*</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-default-red text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Phone number
              </label>
              <input
                {...register("phone")}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Phone Number"
              />
            </div>

            {/* Order Number */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Order number (if you have one)
              </label>
              <input
                {...register("orderNumber")}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Order Number"
              />
            </div>

            {/* Reason */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Reason for contacting
              </label>
              <select
                {...register("reason")}
                className="w-full border border-gray-300 p-2 rounded bg-default-white"
              >
                <option value="">Select</option>
                <option value="general">General enquiry</option>
                <option value="order">Order issue</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-sm font-medium">Message*</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows={5}
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="Message"
            />
            {errors.message && (
              <p className="text-default-red text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="text-center w-full">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 w-full border border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-all"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </HomeTemplate>
  );
};

export default ContactUsForm;
