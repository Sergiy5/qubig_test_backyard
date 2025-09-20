"use client";

import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation"; // <-- change here
import { NavBarItem } from "./NavBarItem";

const navLinksArray = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/how_it_works", label: "How it works" },
  { link: "/token_design", label: "Token Design" },
  { link: "/yard_flywheel", label: "YARD flywheel" },
];

export const NavBar: React.FC = () => {
const pathname = usePathname();

  return (
    <nav className="hidden md:flex h-11 p-[1px] mx-auto rounded-full bg-[#E1E1E2]/46">
      <ul className="flex items-center h-full gap-[7px] p-[3px] rounded-full bg-[#F3F4F6]">
        {navLinksArray.map((item) => {
          const isActive =
            pathname.replace(/\/$/, "") === item.link.replace(/\/$/, "");
         
          return (
            <NavBarItem
              key={item.link}
              isActive={isActive}
              link={item.link}
              label={item.label}
            />
          );
        })}
      </ul>
    </nav>
  );
};
