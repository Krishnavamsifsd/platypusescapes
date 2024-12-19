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
    <section className="main-slider relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          background:
            "url('https://video.wixstatic.com/video/7b96ec_7d00b01b84184d6f946b3713cad198b2/720p/mp4/file.mp4') no-repeat center center",
          backgroundSize: "cover",
        }}
      >
        <video
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src="https://video.wixstatic.com/video/7b96ec_7d00b01b84184d6f946b3713cad198b2/720p/mp4/file.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))",
          zIndex: 10,
        }}
      ></div>

      {/* Swiper */}
      <Swiper
        {...swiperOptions}
        className="swiper-container relative z-20 flex items-center justify-center"
      >
        {carouselData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                color: "white",
                zIndex: 30,
              }}
            >
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="max-w-xl space-y-6 text-center z-30"
              >
                {/* Title */}
                <h1
                  style={{
                    fontSize: "3rem",
                    fontWeight: "800",
                    lineHeight: "1.2",
                    background:
                      "linear-gradient(to right, #4fd1c5, #00bcd4, #2196f3)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    fontFamily: "'Eczar', sans-serif",
                  }}
                >
                  {item.title}
                </h1>

                {/* Description */}
                <p
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "300",
                    lineHeight: "1.8",
                    color: "#B2F1F5",
                    fontFamily: "'Eczar', sans-serif",
                  }}
                >
                  {item.description}
                </p>

                {/* Call to Action */}
                <Link
                  href="#book-now"
                  style={{
                    display: "inline-block",
                    padding: "1rem 2rem",
                    background: "linear-gradient(to right, #00bcd4, #4fd1c5)",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "1.125rem",
                    borderRadius: "1rem",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    textDecoration: "none",
                    transition: "all 0.3s ease-in-out",
                  }}
                  className="hover:bg-teal-500 focus:outline-none"
                >
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
