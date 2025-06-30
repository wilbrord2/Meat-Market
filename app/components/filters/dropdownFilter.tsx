"use client";
import React, { useState } from "react";
import { FaSliders } from "react-icons/fa6";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

interface FilterItem {
  label: string;
  content: React.ReactNode;
}

interface FilterPanelProps {
  filters: FilterItem[];
  onClear: () => void;
  onApply: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onClear,
  onApply,
}) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <div className="relative cursor-pointer border border-gray-200 bg-gray-100 rounded-xl px-4 w-full max-w-xs">
      {/* Top Toggle */}
      <button
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        className="flex items-center  justify-between w-full px-0 py-3 "
      >
        <span className="flex items-center gap-2 font-semibold text-sm">
          <FaSliders className="text-gray-600" /> Filters
        </span>
        {isPanelOpen ? <IoChevronUp /> : <IoChevronDown />}
      </button>

      {/* Filters Section */}
      {isPanelOpen && (
        <div className="absolute top-12 left-0 w-full bg-gray-100 shadow-lg rounded-lg z-10">
          <div className="p-4 cursor-pointer">
            {filters.map(({ label, content }) => (
              <div
                key={label}
                className="border-b cursor-pointer px-2 rounded pt-2 pb-3 border-gray-300 last:border-0 hover:bg-gray-300"
              >
                <button
                  onClick={() => toggleSection(label)}
                  className="flex justify-between items-center w-full font-medium text-gray-700   text-left"
                >
                  {label}
                  {openSections[label] ? (
                    <IoChevronUp size={14} />
                  ) : (
                    <IoChevronDown size={14} />
                  )}
                </button>
                {openSections[label] && (
                  <div className="text-sm my-2 grid gap-2">{content}</div>
                )}
              </div>
            ))}

            {/* Buttons */}
            <div className="flex justify-between gap-3 pt-2">
              <button
                onClick={() => {
                  onClear;
                  setOpenSections({});
                  setIsPanelOpen(false);
                }}
                className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium w-full hover:bg-gray-50 transition-colors"
              >
                Clear All
              </button>
              <button
                onClick={() => {
                  onApply;
                  setOpenSections({});
                  setIsPanelOpen(false);
                }}
                className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium w-full hover:bg-gray-800 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;
