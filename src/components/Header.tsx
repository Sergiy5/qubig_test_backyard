"use client";

import { NavBar } from "./navBar/NavBar";
import { Logo } from "./Logo";
import Link from "next/link";
import { BurgerMenuButton } from "./mobileMenu/BurgerMenuButton";

export const Header: React.FC = () => {
    return (
      <div className="fixed top-0 z-50 w-full max-w-[1920px]">
        <div className="flex justify-between md:justify-start items-center pt-5 section">
          {/* Image */}
          <Link
            href="/"
            className="flex justify-start items-center gap-[7px] rounded-full pl-[11px] pr-[14px] py-2 bg-[#efeff2]"
          >
            <Logo className=" w-[26px] h-[28px]" />

            <p className="text-[16px] font-semibold font-third text-center text-[#333]/95">
              Backyard
            </p>
          </Link>
          <NavBar />
          <BurgerMenuButton />

          {/* <button
            className={
              "flex items-center justify-center md:hidden w-[75px] h-[31px] text-[11px] text-[#FBFBFC] bg-[#303030] rounded-full cursor-pointer hover:bg-[#3B3B3B]/80 hover:text-[#D1D1D2] active:bg-[#2D2D2D] transition-all duration-200 easy-in-out"
            }
          >
            Connect
          </button> */}
        </div>
      </div>
    );
};
