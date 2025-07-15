"use client";

import Footer from "@/app/components/footer/footer";
import Image from "next/image";
import logo from "@/public/images/logo/meat-market-log.png";
import bgImage from "@/public/images/hero-meat.jpg";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const SignUpPage = () => {
  return (
    <>
      {/* Top Nav */}
      <div className="bg-white sticky top-0 left-0 flex items-center justify-between px-4 py-3 lg:px-24">
        <div className="w-32 flex items-center gap-2">
          <Link href="/">
            <Image src={logo} alt="meat market" className="object-cover" />
          </Link>
        </div>
        <Link href="/signin">
          <h2 className="font-bold">Sign In</h2>
        </Link>
      </div>

      {/* Auth Section */}
      <div
        className="w-full  bg-cover bg-no-repeat bg-center flex items-center justify-center "
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className=" bg-default-blue/55 max-lg:py-8 inset-0 w-full h-full flex max-lg:flex-wrap items-center justify-center lg:justify-around">
          <h1 className=" text-white text-3xl lg:text-5xl font-bold  px-4">
            Tap in,{" "}
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            checkout fast.
          </h1>
          {/* Sign In Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-16">
            <div className="w-full max-w-md space-y-4 bg-white shadow-lg rounded-xl p-8">
              <h2 className="text-xl font-bold text-center">Create Account</h2>

              {/* Social Buttons */}
              <div className="space-y-3 font-semibold">
                <button className="flex items-center justify-center w-full border rounded-md py-2 hover:bg-gray-100 cursor-pointer">
                  <FcGoogle className="mr-2" size={20} /> Continue with Google
                </button>
                <button className="flex items-center justify-center w-full border rounded-md py-2 hover:bg-gray-100 cursor-pointer">
                  <FaApple className="mr-2" size={20} /> Continue with Apple
                </button>
                <button className="flex items-center justify-center w-full border rounded-md py-2 hover:bg-gray-100 cursor-pointer">
                  <FaFacebook className="mr-2 text-blue-600" size={20} />{" "}
                  Continue with Facebook
                </button>
                <button className="flex items-center justify-center w-full border rounded-md py-2 hover:bg-gray-100 cursor-pointer">
                  <AiOutlineMail className="mr-2 " size={20} /> Continue with
                  email
                </button>
              </div>

              {/* Footer Link */}
              <p className="text-sm text-gray-400 text-center">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="font-semibold text-default-black underline"
                >
                  Sign In here.
                </Link>
              </p>

              {/* Legal Notice */}
              <p className="text-xs text-gray-400  border-t pt-4 border-gray-200">
                By continuing, you confirm you are 18 or over and agree to our{" "}
                <Link href="#" className="underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline">
                  Terms of Use
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignUpPage;
