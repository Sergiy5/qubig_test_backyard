import Image from "next/image";
import { Button } from "./ui/Button";
import IconEllips from '@/assets/icons/icon-ellipse.svg'
import IconArrow from "@/assets/icons/arrow.svg";

export const Hero: React.FC = () => {

  return (
    <div className="section flex justify-between items-start">
      {/* Left part */}
      <div className="flex flex-col items-start gap-[33px] lg:gap-[70px] 2xl:!gap-[79px] w-full md:w-[600px] lg:w-[770px] 3xl:!w-[1027px] lg:py-[25px] 3xl:!py-0 3xl:!pt-[2.5px] ">
        <div className="flex flex-col justify-start items-start gap-4">
          <h1 className="w-full text-[58px] sm:text-5xl lg:text-[72px] 3xl:!text-[90px] leading-[110%] 3xl:!leading-[110%] font-semibold text-left text-[#303030]">
            <span className="text-left text-[#303030]">
              The yield-backed stablecoin protocol boosting <span>DeFi</span>
              <span className="md:hidden flex items-center gap-5">
                {" "}
                DeFi
                <Image
                  src="/images/logo_hero_2x.webp"
                  alt="Hero Image"
                  width={60}
                  height={60}
                  className=""
                />
              </span>{" "}
              liquidity
            </span>
          </h1>
          <p className="text-xl 2xl:text-2xl font-normal leading-[130%] 3xl:!leading-[130%] text-left text-neutral-800/[0.55]">
            Keep your yield working for you — we keep your liquidity accessible
          </p>
        </div>

        <div className="flex justify-start items-center gap-4 w-full">
          <Button
            label="Join Whitelist"
            style="primary"
            classNames="w-full md:w-[329px]"
          />
          <Button
            label="Read Docs"
            style="secondary"
            classNames=" w-full md:w-[208px]"
          >
            {" "}
            <IconArrow className="md:hidden w-4 h-auto absolute z-10 right-8 " />
          </Button>
        </div>
      </div>
      {/* Right part (Image) */}
      <div className="hidden md:flex h-full shrink-0 md:pt-2.5 lg:pt-[47px] md:pr-[17.5px] xl:pr-[44px] 2xl:pr-0 3xl:!pr-[45px] 3xl:!pt-[34px]">
        <div className="relative">
          <Image
            src="/images/logo_hero_2x.webp"
            alt="Hero Image"
            width={212}
            height={212}
            className="md:flex md:size-[152px] lg:size-[212px] 3xl:!size-[276px]"
          />
          <IconEllips className="absolute z-10 -bottom-10 left-1/2 transform -translate-x-1/2" />
        </div>
      </div>
    </div>
  );
};
