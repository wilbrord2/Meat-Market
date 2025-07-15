"use client";

import Footer from "@/app/components/footer/footer";
import Image from "next/image";
import logo from "@/public/images/logo/meat-market-log.png";
import bgImage from "@/public/images/hero-meat.jpg";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";

const SigninPage = () => {
  return (
    <>
      {/* Top Nav */}
      <div className="bg-white sticky top-0 left-0 flex items-center justify-between px-4 py-3 lg:px-24">
        <div className="w-32 flex items-center gap-2">
          <Link href="/">
            <Image src={logo} alt="meat market" className="object-cover" />
          </Link>
        </div>
        <Link href="/signup">
          <h2 className="font-bold">Sign Up</h2>
        </Link>
      </div>

      {/* Auth Section */}
      <div
        className="w-full  bg-cover bg-no-repeat bg-center flex items-center justify-center "
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className=" bg-default-blue/55 inset-0 max-lg:py-8 w-full h-full flex max-lg:flex-wrap items-center justify-center lg:justify-around">
          <h1 className=" text-white text-3xl lg:text-5xl font-bold text-center px-4">
            Welcome Back to{" "}
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            Meat Market.
          </h1>
          {/* Sign In Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-16">
            <div className="w-full max-w-md space-y-4 bg-white shadow-lg rounded-xl p-8">
              <h2 className="text-xl font-bold text-center">Sign In</h2>

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
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center ">
                <div className="flex items-center justify-center gap-4 w-3/4 ">
                  <hr className="flex-1 border-gray-300" />
                  <span className="text-gray-500 text-sm">or</span>
                  <hr className="flex-1 border-gray-300" />
                </div>
              </div>

              {/* Form */}
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Username or Email"
                    className="w-full border rounded-md px-4 py-2 outline-none"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border rounded-md px-4 py-2 outline-none"
                  />
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <label>
                    <input type="checkbox" className="mr-1" />
                    Remind me
                  </label>
                  <Link href="#" className="underline">
                    Forgot
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full text-black border py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                >
                  Sign in
                </button>
              </form>

              {/* Footer Link */}
              <p className="text-sm text-gray-400 text-center">
                New here?{" "}
                <Link
                  href="/signup"
                  className="font-semibold text-default-black underline"
                >
                  Create Account
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

export default SigninPage;
