"use client";
import { useAppContext } from "@/app/context";
import { ReactNode } from "react";
import { FaX } from "react-icons/fa6";

const CenterModal = ({
  children,
  id,
}: {
  children: ReactNode;
  id: string | null | undefined;
}) => {
  const { activeModalId, setActiveModalId } = useAppContext();

  const closeModal = () => {
    if (id !== "not-found") {
      setActiveModalId(null);
    }
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={`${activeModalId ? "block absolute" : "hidden"}`}>
      {activeModalId === id && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center max-md:items-end items-center z-50"
          onClick={closeModal}
        >
          <div
            className={`bg-white rounded-lg shadow-lg p-4 sm:p-8 max-md:h-fit overflow-y-scroll hide-scrollbar md:max-w-fit w-full transform transition-all duration-500 ease-out ${
              activeModalId === id ? "animate-slideUp" : "animate-slideDown"
            }`}
            onClick={handleModalClick}
          >
            {id !== "not-found" && (
              <div className="text-end w-full flex items-end justify-end">
                <FaX
                  onClick={closeModal}
                  height={25}
                  width={25}
                  color="#3f6db0"
                />
              </div>
            )}
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default CenterModal;
