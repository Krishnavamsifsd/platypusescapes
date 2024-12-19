"use client";

import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 100,
  slidesPerView: 5,
  loop: true,
  navigation: {
    nextEl: "#brand-one__swiper-button-next",
    prevEl: "#brand-one__swiper-button-prev",
  },
  autoplay: { delay: 5000 },

  breakpoints: {
    0: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    375: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    575: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    767: {
      spaceBetween: 50,
      slidesPerView: 3,
    },
    991: {
      spaceBetween: 50,
      slidesPerView: 4,
    },
    1199: {
      spaceBetween: 100,
      slidesPerView: 5,
    },
  },
};

export default function BrandSlider1() {
  const imagePaths = [
    "/assets/images/brand/brand-1-1.png",
    "/assets/images/brand/brand-1-2.png",
    "/assets/images/brand/brand-1-3.png",
    "/assets/images/brand/brand-1-4.png",
    "/assets/images/brand/brand-1-1.png",
    "/assets/images/brand/brand-1-2.png",
    "/assets/images/brand/brand-1-3.png",
    "/assets/images/brand/brand-1-4.png",
  ];

  return (
    <>
      <Swiper
        {...swiperOptions}
        className="thm-swiper__slider swiper-container"
      >
        {imagePaths?.map((src, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <Image
              src={src}
              alt={`Brand ${index + 1}`}
              width={65} // Define exact width for layout="intrinsic"
              height={80} // Define exact height for layout="intrinsic"
              layout="intrinsic" // Allows the image to maintain aspect ratio and scale properly
              priority={index === 0} // Load the first image eagerly
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
