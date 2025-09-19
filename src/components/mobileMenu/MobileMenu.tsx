import IconConnect from "@/assets/icons/connetc.svg";

interface MobileMenuProps {
    isOpen: boolean
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {

    const navLinks = [
      { label: "Home", link: "/", active: true },
      { label: "About", link: "/about", active: false },
      { label: "Roadmap", link: "/roadmap", active: false },
      { label: "Team", link: "/team", active: false },
      { label: "FAQ", link: "/faq", active: false },
    ]

  return (
    <div
      className={`absolute z-1000 top-12 right-0 bg-opacity-50 transition-all duration-300 ${
        isOpen
          ? "opacity-100 visible max-w-44 max-h-52"
          : "opacity-0 invisible max-w-0 max-h-0"
      }`}
    >
      <div
        className={`flex flex-col justify-start items-start gap-3 w-full h-full px-[9px] py-[13px] bg-[#e8e9ed] border border-[#e4e4e9] rounded-[19px]  top-20 left-20 transition-all duration-300 transform ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        {/* Navigation Links */}
        <div className="flex flex-col justify-start items-start w-[103px] px-1 left-[15px] top-[13px] gap-[7px]">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className="self-stretch flex-grow-0 flex-shrink-0 h-[19px] relative overflow-hidden"
            >
              <p
                className={` left-0 top-px text-sm font-medium text-left cursor-pointer hover:opacity-80 transition-opacity ${
                  link.active
                    ? "text-[#303030]"
                    : "text-[#7a7a7a] opacity-[0.56]"
                }`}
              >
                {link.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center w-[157px]  left-[9px] top-[149px] pl-[26px] pr-[3px] py-[3px] rounded-[100px] bg-[#fbfbfc] border border-[#ebebed]">
          <p className="flex-grow-0 flex-shrink-0 text-[13px] font-medium text-center text-[#303030]">
            0x233...ger
          </p>
          <div className="flex justify-center items-center w-[34px] h-[34px] p-2.5 rounded-full bg-[#c4c4c4]/[0.21]">
           <IconConnect className="w-6 h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
      