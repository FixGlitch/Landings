"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const CarouselEcommerce = () => {
  return (
    <div className="relative w-full">
      <div className="absolute z-50 top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-white text-7xl font-bold">Shop with elegance</h2>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <SwiperSlide key={num}>
            <div className="relative w-3/5 mx-auto h-[50vh] md:h-[50vh]">
              <Image
                src={`/ecommerce/landing/banner-${num}.jpg`}
                alt={`banner ${num}`}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselEcommerce;
