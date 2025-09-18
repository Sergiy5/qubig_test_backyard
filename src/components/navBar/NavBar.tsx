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
    <nav className="flex">
      <ul className="flex items-center h-11 gap-[7px] p-[3px] rounded-full bg-[#E6E9EC52] border border-[#E1E1E275]">
        {navLinksArray.map((item) => {
          const isActive = pathname === item.link;

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
