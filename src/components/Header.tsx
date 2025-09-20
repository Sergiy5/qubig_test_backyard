"use client";

import { NavBar } from "./navBar/NavBar";
import { Logo } from "./Logo";
import Link from "next/link";
import { BurgerMenuButton } from "./mobileMenu/BurgerMenuButton";

export const Header: React.FC = () => {
    return (
      <div className="fixed top-0 z-50 w-full max-w-[1920px]">
        <div className="flex justify-between md:justify-start items-center pt-5 xl:pt-[37px] section">
          {/* Image */}
          <Link
            href="/"
            className="flex justify-start items-center gap-[7px] -mr-9 3xl:-mr-[130px] rounded-full pl-[11px] pr-[14px] py-2 bg-[#efeff2]"
          >
            <Logo className="w-[26px] h-[28px]" />

            <p className="text-[16px] font-semibold font-third text-center text-[#333]/95">
              Backyard
            </p>
          </Link>
          <NavBar />
          <BurgerMenuButton />

        </div>
      </div>
    );
};
