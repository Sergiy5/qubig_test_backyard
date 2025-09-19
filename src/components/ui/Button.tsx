import { cn } from "@/helpers/cn";

interface ButtonProps {
  label: string;
  style?: "primary" | "secondary";
  isNoise?: boolean;
  // width?: string;
  classNames?: string;
}
export const Button: React.FC<ButtonProps> = ({
  label = "Join Whitelist",
  style = "primary",
  isNoise = true,
  // width = 'w-full'
  classNames
}) => {
  return (
    <button
      className={cn(
        `group flex justify-center items-center h-[57px] text-base font-semibold overflow-hidden relative py-[17px] rounded-full cursor-pointer disabled:cursor-default
         transition-all duration-200 easy-in-out `,
        {
          "bg-[#2D2D2D] hover:bg-[#3B3B3B]/80 active:bg-[#2D2D2D] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]":
            style === "primary",
          "bg-[#E6E8EC] hover:bg-[#F8FBFF] active:bg-[#ABACAF]":
            style === "secondary",
        },
        classNames
      )}
    >
      <span
        className={cn(
          "relative z-10 text-center transition-all duration-200 easy-in-out",
          {
            "text-[#f7f7f7] group-hover:text-[#D1D1D2] group-active:text-[#595959]":
              style === "primary",
            "text-[#2E2E2E] group-hover:text-[#2E2E2EBF]/75 group-active:text-[#2E2E2E]":
              style === "secondary",
          }
        )}
      >
        {label}
      </span>
      {isNoise && (
        <div
          className={cn(
            "absolute inset-0 bg-[length:100%_110%] opacity-80 mix-blend-soft",
            {
              "bg-[url('/images/button/button_bg_primary.webp')]":
                style === "primary",
              "bg-[url('/images/button/button_bg_secondary.webp')]":
                style === "secondary",
            }
          )}
        />
      )}
    </button>
  );
};
