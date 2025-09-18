import Image from "next/image";
import { Button } from "./ui/Button";

export const Hero: React.FC = () => {
  return (
    <div className="section flex justify-between items-start">
      <div className="flex flex-col items-start lg:w-[740px] 2xl:w-[1027px] py-[25px]">
        <div className="flex flex-col justify-start items-start gap-4">
          <h1 className="w-full lg:text-[72px] leading-[110%] 2xl:text-[90px] font-semibold text-left text-[#303030]">
            <span className="text-left text-[#303030]">The yield-backed </span>
            <br />
            <span className="text-left text-[#303030]">
              stablecoin protocol
            </span>
            <br />
            <span className="text-left text-[#303030] whitespace-nowrap">
              boosting DeFi liquidity
            </span>
          </h1>
          <p className="flex-grow-0 text-2xl text-left text-neutral-800/[0.55]">
            Keep your yield working for you — we keep your liquidity accessible
          </p>
        </div>

        <div className="flex justify-start items-center gap-4 w-full">
          <Button label="Join Whitelist" style="primary" width="w-[329px]" />
          <Button label="Read Docs" style="secondary" width="w-[208px]"/>
        </div>
      </div>
      <div className="h-full pt-[47px] pr-[44px]">
        <Image
          src="/images/logo_hero_2x.webp"
          alt="Hero Image"
          width={212}
          height={212}
        />
      </div>
    </div>
  );
};
