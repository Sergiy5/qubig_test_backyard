import { cn } from "@/helpers/cn";

interface ButtonProps {
  label: string;
  style?: "primary" | "secondary";
  isNoise?: boolean;
  width?: string;
}
export const Button: React.FC<ButtonProps> = ({
  label = "Join Whitelist",
  style = "primary",
  isNoise = true,
  width = 'w-full'
}) => {
  return (
    <button
      className={cn(
        `flex justify-center items-center h-[57px] relative py-[17px] rounded-full overflow-hidden ${width}`,
        {
          "bg-[#2D2D2D]": style === "primary",
          "bg-[#E6E8EC]": style === "secondary",
        }
      )}
    >
      <span className="relative z-10 text-base font-semibold text-center text-[#f7f7f7]">
        {label}
      </span>
      {isNoise && (
        <div
          className={cn("absolute inset-0 bg-no-repeat bg-[length:100%_100%]", {
            "bg-[url('/images/button/button_bg_primary.webp')]":
              style === "primary",
            "bg-[url('/images/button/button_bg_secondary.webp')]":
              style === "secondary",
          })}
        />
      )}
    </button>
  );
};
