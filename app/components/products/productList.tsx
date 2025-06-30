"use client";
import React, { useState } from "react";
import FilterPanel from "../filters/dropdownFilter";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaSearch,
} from "react-icons/fa";
import { ProductData } from "@/app/costants";
import ProductCard from "../cards/productCard";

const ITEMS_PER_PAGE = 8;

const filters = [
  {
    label: "Price",
    content: (
      <div className="space-y-2">
        <label className="flex items-center gap-2">
          <input type="radio" name="price" className="h-4 w-4" />
          <span>Under RF 15,000</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="price" className="h-4 w-4" />
          <span>Over RF 100,000</span>
        </label>
      </div>
    ),
  },
  {
    label: "Type of meat",
    content: (
      <div className="grid grid-cols-2 gap-2">
        {[
          "Beef",
          "Lamb",
          "Chicken",
          "Fish & Seafood",
          "Pork",
          "Mixed boxes",
        ].map((type) => (
          <label key={type} className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4" />
            <span>{type}</span>
          </label>
        ))}
      </div>
    ),
  },
  {
    label: "Cut type",
    content: (
      <div className="grid grid-cols-2 gap-2">
        {["Steaks", "Filets", "Ground Meat", "Whole", "Ribs", "Chops"].map(
          (type) => (
            <label key={type} className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              <span>{type}</span>
            </label>
          )
        )}
      </div>
    ),
  },
  {
    label: "ProductLists",
    content: (
      <div className="space-y-2">
        {["ProductLists", "New Arrivals", "Chef's Picks"].map((type) => (
          <label key={type} className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4" />
            <span>{type}</span>
          </label>
        ))}
      </div>
    ),
  },
  {
    label: "Dietary",
    content: (
      <div className="grid grid-cols-2 gap-2">
        {["Organic", "Halal", "Grass-fed", "Sustainable", "Free Range"].map(
          (type) => (
            <label key={type} className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              <span>{type}</span>
            </label>
          )
        )}
      </div>
    ),
  },
  {
    label: "Alphabetical",
    content: (
      <div className="space-y-2">
        <label className="flex items-center gap-2">
          <input type="radio" name="alphabetical" className="h-4 w-4" />
          <span>A-Z</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="alphabetical" className="h-4 w-4" />
          <span>Z-A</span>
        </label>
      </div>
    ),
  },
];

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleClear = () => {
    console.log("Filters cleared");
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handleApply = () => {
    console.log("Filters applied");
  };

  const handleSearchChange = () => {
    setCurrentPage(1);
  };

  const filteredProducts = ProductData.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentItems = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="space-y-10">
      {/* Top section */}
      <div className="flex items-center justify-between gap-8">
        <div className="relative w-3/4">
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSearchChange();
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

        <FilterPanel
          filters={filters}
          onClear={handleClear}
          onApply={handleApply}
        />
      </div>

      {/* Product Grid */}
      <div className="pt-8 flex flex-wrap gap-8 justify-center ">
        {currentItems.length > 0 ? (
          currentItems.map((item, idx) => (
            <div key={idx} className="w-full max-w-[300px]">
              <ProductCard
                image={item.image}
                title={item.title}
                price={item.price}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                rating={4.5}
              />
            </div>
          ))
        ) : (
          <div className="text-center col-span-full text-gray-600">
            No products found.
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="flex justify-center pt-8">
          <ul className="flex items-center justify-center gap-3 cursor-pointer">
            <li>
              <button
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <FaRegArrowAltCircleLeft size={35} className="mt-2" />
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i}>
                <button
                  onClick={() => changePage(i + 1)}
                  className={` px-3 py-1 rounded-full ${
                    currentPage === i + 1
                      ? "border-default-blue border  rounded-full text-default-blue"
                      : "text-default-blue"
                  }`}
                >
                  {i + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <FaRegArrowAltCircleRight size={35} className="mt-2" />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default ProductList;
