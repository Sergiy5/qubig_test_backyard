"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// import IconEllipsBg from "@/assets/icons/ellips-top-bg.svg";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { WhatIsBackyardItem } from "./WhatIsBackyardItem";

export interface Feature {
  id: number;
  imageSrc: string;
  title: string;
  heading: string;
  description: string;
  // imagePosition?: string;
}

const featuresData: Feature[] = [
  {
    id: 1,
    imageSrc: "/images/whatIsBackyard/drop.webp",
    title: "Yield Aggregator",
    heading: "One-click yield aggregation",
    description:
      "Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity",
    // imagePosition: "left-24",
  },
  {
    id: 2,
    imageSrc: "/images/whatIsBackyard/sprout.webp",
    title: "Yield-backed Stablecoin",
    heading: "Unlock liquidity with BYD",
    description:
      "Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time",
    // imagePosition: "left-40",
  },
  {
    id: 3,
    imageSrc: "/images/whatIsBackyard/sprout_with_coins.webp",
    title: "Boost DeFi Liquidity",
    heading: "Boost protocols, earn more",
    description:
      "Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards.",
    // imagePosition: "left-44",
  },
];

export const WhatIsBackyard: React.FC = () => {
  return (
    <div className="relative flex flex-col items-start justify-start gap-2 sm:gap-9 py-8 mt-[67px] sm:mt-[119px] lg:mt-[146px] w-full section ">
      <h2 className="text-[28px] md:text-[42px] 2xl:text-5xl font-semibold font-third text-center text-[#303030]">
        What is Backyard?
      </h2>
      {/* Desktop Grid */}
      <div className="hidden xl:flex justify-between items-center w-full 2xl:pl-[30px]">
        {featuresData.map((feature, index) => (
          <WhatIsBackyardItem
            key={feature.id}
            feature={feature}
            index={index}
          />
        ))}
      </div>
      {/* Mobile Swiper */}
      <div className="xl:hidden w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass:
              "swiper-pagination-bullet !w-8 !h-1 !rounded-full !bg-gray-300 !opacity-50",
            bulletActiveClass:
              "swiper-pagination-bullet-active !bg-gray-800 !opacity-100",
          }}
          className="featuresSwiper relative h-[400px] sm:h-[258px]"
        >
          {featuresData.map((feature, index) => (
            <SwiperSlide key={feature.id}>
              <WhatIsBackyardItem feature={feature} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* blur-[125px] */}
      {/* <IconEllipsBg className=" md:hidden absolute -z-0 -top-[60%] w-full h-auto blur-[75px] left-1/2 transform -translate-x-1/2" /> */}
    </div>
  );
};
