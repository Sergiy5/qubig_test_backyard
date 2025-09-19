"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface Feature {
  id: number;
  title: string;
  heading: string;
  description: string;
  containerHeight?: string;
  topPosition?: string;
}

const featuresData: Feature[] = [
  {
    id: 1,
    title: "Yield Aggregator",
    heading: "One-click yield aggregation",
    description:
      "Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity",
    containerHeight: "h-80",
    topPosition: "top-24",
  },
  {
    id: 2,
    title: "Yield-backed Stablecoin",
    heading: "Unlock liquidity with BYD",
    description:
      "Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time",
    containerHeight: "h-96",
    topPosition: "top-40",
  },
  {
    id: 3,
    title: "Boost DeFi Liquidity",
    heading: "Boost protocols, earn more",
    description:
      "Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards.",
    containerHeight: "h-96",
    topPosition: "top-44",
  },
];

const FeatureCard: React.FC<{ feature: Feature; isDesktop?: boolean }> = ({
  feature,
  isDesktop = true,
}) => {
  if (isDesktop) {
    return (
      <div
        className={`flex-shrink-0 w-80 ${feature.containerHeight} relative`}
        key={feature.id}
      >
        <div
          className={`flex flex-col absolute left-0 ${feature.topPosition} gap-4`}
        >
          {/* Header */}
          <div className="flex flex-col w-80 gap-2 pl-3 pr-16 py-3 rounded-full bg-gray-50">
            <div className="flex gap-14">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-sm font-semibold text-white">
                  {feature.id}
                </span>
              </div>
              <p className="text-lg text-gray-800">{feature.title}</p>
            </div>
          </div>
          {/* Content */}
          <div className="flex flex-col w-80 h-36 gap-3 pl-6 pr-7 py-7 rounded-3xl bg-gray-50">
            <p className="text-lg font-bold text-gray-800">{feature.heading}</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full max-w-sm mx-auto gap-4 px-4">
      {/* Header */}
      <div className="flex flex-col w-full gap-2 pl-3 pr-8 py-3 rounded-full bg-gray-50">
        <div className="flex gap-8">
          <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
            <span className="text-sm font-semibold text-white">
              {feature.id}
            </span>
          </div>
          <p className="text-lg text-gray-800">{feature.title}</p>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col w-full gap-3 pl-6 pr-6 py-7 rounded-3xl bg-gray-50">
        <p className="text-lg font-bold text-gray-800">{feature.heading}</p>
        <p className="text-sm text-gray-600 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Desktop Grid */}
      <div className="hidden md:flex justify-start items-end gap-8 xl:gap-36 pl-8">
        {featuresData.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} isDesktop />
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden">
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
          className="featuresSwiper"
        >
          {featuresData.map((feature) => (
            <SwiperSlide key={feature.id}>
              <FeatureCard feature={feature} isDesktop={false} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturesSection;
