import { cn } from "@/helpers/cn";
import Link from "next/link";

interface NavBarItemProps {
  link: string;
  label: string;
  isActive: boolean;
}

export const NavBarItem: React.FC<NavBarItemProps> = ({
  link,
  label,
  isActive,
}) => {
  return (
    <Link
      href={link}
      className={cn(
        "flex justify-center items-center px-3 py-[11px] rounded-full text-[#AEB0B1]",
        {
          "bg-[#383838] text-[#FBFBFC]": isActive,
        }
      )}
    >
      <span className="text-[13px] leading-4 font-medium text-center ">
        {label}
      </span>
    </Link>
  );
};
