"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaSearch, FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import logo from "@/public/images/logo/meat-market-log.png";
import { LuMapPin } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { BsBasket3 } from "react-icons/bs";
import { useAppContext } from "@/app/context";
const navbarLinks = [
  { title: "Best Sellers", link: "/best-seller" },
  { title: "Deals", link: "/deals" },
  { title: "Fresh Arrivals", link: "/arrivals" },
  { title: "Beef", link: "/beef" },
  { title: "Chicken", link: "/chicken" },
  { title: "Pork", link: "/pork" },
  { title: "Lamb", link: "/lamb" },
  { title: "Seafood", link: "/seafood" },
  { title: "Boxes", link: "/boxes" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { setActiveModalId } = useAppContext();

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleSearchChange = (searchTerm: string) => {
    console.log("Search query:", searchTerm);
    setSearchQuery("");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3 lg:px-24">
        {/* Logo */}
        <div className=" w-32  flex items-center gap-2">
          <Link href="/">
            <Image src={logo} alt="meat market" className="object-cover" />
          </Link>
        </div>

        {/* Search Input */}
        <div className="hidden lg:flex  w-1/2 mx-auto">
          <div className="relative w-full">
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  setSearchQuery("");
                  handleSearchChange(searchQuery);
                }
              }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete="off"
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-gray-100 focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-3.5 text-gray-500" />
          </div>
        </div>

        {/* Icons */}
        <div className="hidden lg:flex gap-4 items-center text-xl text-gray-700">
          <LuMapPin className="hover:text-default-red" />
          <Link href="/signin" className="hover:text-default-red">
            <FaRegUser />
          </Link>
          <FaRegHeart className="hover:text-default-red" />
          <BsBasket3
            onClick={() => setActiveModalId("box")}
            className="hover:text-default-red cursor-pointer"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {mobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className={`lg:flex items-center justify-center space-x-6 text-sm text-gray-800 font-medium px-4 py-2 transition-all duration-300 ${
          mobileMenuOpen ? "block" : "hidden lg:block"
        }`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
          {navbarLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.link}
              className="hover:text-default-red max-lg:hover:bg-default-grey/30 font-semibold px-3 py-2 rounded transition-colors duration-300"
            >
              {link.title}
            </Link>
          ))}
        </div>
        {/* Icons */}
        <div className="lg:hidden gap-8 text-xl text-gray-700 my-8 flex justify-center items-center">
          <LuMapPin />
          <FaRegUser />
          <FaRegHeart />
          <BsBasket3 onClick={() => setActiveModalId("box")} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
