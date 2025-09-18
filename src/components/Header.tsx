"use client";

import { NavBar } from "./navBar/NavBar";
import { Logo } from "./Logo";
import Link from "next/link";
// import IconConnect from "@/assets/icons/connetc.svg";

export const Header: React.FC = () => {
    return (
      <div className="fixed top-0 z-50 w-full section">
        <div className="relative section flex justify-center items-center gap-[231px] w-full pt-5">
          {/* Image */}
          <Link
            href="/"
            className="absolute left-0 flex justify-start items-center gap-[7px] rounded-full pl-[11px] pr-[14px] py-2 bg-[#efeff2]"
          >
            <Logo className=" w-[26px] h-[28px]" />

            <p className="text-[16px] font-semibold font-third text-center text-[#333]/95">
              Backyard
            </p>
          </Link>
          <NavBar />
          {/* <IconConnect className="w-[24px] h-[24px] cursor-pointer" /> */}
        </div>
      </div>
    );
};
