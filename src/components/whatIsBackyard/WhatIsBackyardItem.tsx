import Image from "next/image";
import { Feature } from "./WhatIsBackyard";
import classNames from "classnames";

export const WhatIsBackyardItem: React.FC<{ feature: Feature; index: number }> = ({
  feature,
}) => {
    return (
      <div
        className={`flex flex-col sm:flex-row-reverse xl:flex-col flex-grow items-center justify-between lg:gap-32 xl:gap-0 w-full xl:max-w-[344px]`}
        key={feature.id}
      >
        <Image
          src={feature.imageSrc}
          alt={feature.title}
          width={80}
          height={80}
          className={classNames(
            " relative -z-10 size-[179px] sm:size-[220px] xl:size-[179px] -mb-6",
            {
              "-left-3 sm:-left-0  xl:-left-3": feature.id === 1,
              "left-3  sm:left-0 xl:left-3": feature.id === 2,
              "left-5  sm:left-0 xl:left-5 top-1": feature.id === 3,
            }
          )}
        />
        <div
          className={`flex flex-col gap-4 w-full sm:max-w-1/2 xl:max-w-full`}
        >
          {/* Header */}
          <div className="flex justify-start w-full gap-2 px-3 py-3 rounded-full bg-gray-50">
            <div className="flex items-start justify-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-sm font-semibold text-white">
                  {feature.id}
                </span>
              </div>
              <p className="text-xl font-semibold text-gray-800 font-third">
                {feature.title}
              </p>
            </div>
          </div>
          {/* Content */}
          <div className="flex flex-col w-full h-36 gap-3 px-[30px] py-7 rounded-3xl bg-gray-50">
            <p className="text-lg font-extrabold text-[#2D322F] font-family">
              {feature.heading}
            </p>
            <p className="text-sm font-medium text-[#787878] leading-[120%] font-third">
              {feature.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
