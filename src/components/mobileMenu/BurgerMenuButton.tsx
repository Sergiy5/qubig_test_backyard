"use client";

import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

export const BurgerMenuButton=()=> {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center justify-center md:hidden">
      <button
        onClick={toggleMenu}
        className="w-10 h-10 bg-[#F6F7F8] rounded-lg border border-[#DEDEE373] focus:outline-none focus:ring-gray-500"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col justify-center items-center space-y-1">
          {/* Top line */}
          <span
            className={`block w-[17px] h-0.5 bg-[#525352] rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1.5" : "rotate-0 translate-y-0"
            }`}
          />

          {/* Middle line */}
          <span
            className={`block w-[11px] h-0.5 bg-[#525352] rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
            }`}
          />

          {/* Bottom line */}
          <span
            className={`block w-[17px] h-0.5 bg-[#525352] rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-1.5" : "rotate-0 translate-y-0"
            }`}
          />
        </div>
      </button>
      <MobileMenu isOpen={isOpen} />
    </div>
  );
}
