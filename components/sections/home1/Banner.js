"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const carouselData = [
  {
    id: 1,
    title: "Dive Into the Heart of the Ocean",
    description:
      "Explore vibrant corals, shipwrecks, and marine life with crystal-clear visibility beneath the waves. Your underwater adventure awaits.",
  },
  {
    id: 2,
    title: "Discover Hidden Shipwrecks",
    description:
      "Uncover the mysteries of shipwrecks that have been lost for centuries, teeming with marine life and history.",
  },
  {
    id: 3,
    title: "Swim with Exotic Marine Life",
    description:
      "Experience close encounters with schools of colorful fish, graceful sea turtles, and majestic manta rays.",
  },
];

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  pagination: {
    el: "#main-slider-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
};

export default function Banner() {
  return (
    <section className="creative-slider-section">
      {/* Background Video */}
      <div className="creative-background-video">
        <video
          className="creative-background-video-element"
          src="https://video.wixstatic.com/video/7b96ec_7d00b01b84184d6f946b3713cad198b2/720p/mp4/file.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>

      {/* Overlay */}
      <div className="creative-overlay"></div>

      {/* Swiper */}
      <Swiper {...swiperOptions} className="creative-swiper-container">
        {carouselData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="creative-swiper-slide-content">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="creative-slide-text-box"
              >
                {/* Title */}
                <h1 className="creative-slide-title">{item.title}</h1>

                {/* Description */}
                <p className="creative-slide-description">{item.description}</p>

                {/* Call to Action */}
                <Link href="#book-now" className="creative-cta-button">
                  Book Your Dive Adventure
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
