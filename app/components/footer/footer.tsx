import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

// ✅ Move arrays outside of component scope
const exploreLinks = [
  { title: "Best-Sellers", link: "/best-sellers" },
  { title: "Deals", link: "/deals" },
  { title: "Delivery", link: "/delivery" },
  { title: "Reviews", link: "#" },
  { title: "Boxes", link: "/boxes" },
];

const companyLinks = [
  { title: "About Us", link: "/about" },
  { title: "Why Meat Market", link: "/about" },
  { title: "Careers", link: "/careers" },
  { title: "FAQ", link: "/faq" },
  { title: "Contact Us", link: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#070D25] text-white px-6 md:px-20 py-10">
      <div className="flex flex-col-reverse md:flex-row gap-10 border-b border-white pb-10">
        {/* Left Section */}
        <div>
          <p className="text-sm mb-6">
            Our mission is to revolutionize the meat commodity system by
            creating a meaningful connection between farmers and customers. We
            aim to foster an appreciation for the origins of food while
            maintaining taste, transparency, and convenience.
          </p>

          <h4 className="text-xl font-semibold mb-3">Be the first to know!</h4>

          {/* Social Icons */}
          <div className="flex gap-4 mb-4 text-xl">
            <FaXTwitter className="hover:text-hover-color hover:scale-110 cursor-pointer" />
            <FaInstagram className="hover:text-hover-color hover:scale-110 cursor-pointer" />
            <FaLinkedinIn className="hover:text-hover-color hover:scale-110 cursor-pointer" />
            <FaTiktok className="hover:text-hover-color hover:scale-110 cursor-pointer" />
          </div>

          {/* Newsletter */}
          <form className="flex flex-col w-full gap-3 ">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-4/5 px-4 py-2 rounded-md text-black outline-none focus:outline-none bg-white  flex-grow"
            />
            <button
              type="submit"
              className="bg-white text-default-blue border text-sm px-6 py-2 rounded-full hoverStyle w-fit"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Explore + Company Links */}
        <div className="flex flex-row justify-between w-full gap-10">
          {/* Explore */}
          <div className="flex-1 flex md:justify-center">
            <div className="text-sm space-y-4">
              {exploreLinks.map(({ title, link }) => (
                <Link
                  href={link}
                  key={title}
                  className="block hover:underline hover:text-hover-color"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="text-sm space-y-4">
            {companyLinks.map(({ title, link }) => (
              <Link
                href={link}
                key={title}
                className="block hover:underline hover:text-hover-color"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
        <p>© 2025 Meat Market</p>
        <div className="flex gap-8 text-default-white">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Cookie Statement</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
