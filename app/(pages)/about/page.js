"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import Layout from "@/components/layout/Layout";
import BrandSlider1 from "@/components/slider/BrandSlider1";
import EventOne from "@/components/common/EventOne";
import Image from "next/image";
import TeamOne from "@/components/sections/home1/TeamOne";
import OceanAdventureCard from "@/components/OceanAdventureCard";
// Example usage of the component with dynamic content
const points = [
  {
    icon: "icon-air-horn",
    heading: "Artists & bands",
    description:
      "Events bring people together for a shared experience celebration. From weddings and birthdays to conferences.",
  },
  {
    icon: "icon-party-blower",
    heading: "Audience Event Planner",
    description:
      "Events bring people together for a shared experience celebration. From weddings and birthdays to conferences.",
  },
];

export default function Home() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="About US">
        <div>
          <section
            style={{
              background: "rgb(4, 0, 10)",
              // padding: "3rem 0",
              marginTop: "50px",
              color: "#e5e7eb",
            }}
          >
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              {/* Hero Section */}
              <div
                style={{
                  position: "relative",
                  background: "#16161d",
                  boxShadow: "0 8px 12px rgba(0, 0, 0, 0.7)",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  marginBottom: "3rem",
                }}
              >
                <Image
                  src={"/assets/images/team/aboutus.jpg"}
                  alt="About Us"
                  width={1200}
                  height={600}
                  layout="responsive"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "300px",
                    filter: "brightness(0.8)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#e5e7eb",
                    textAlign: "center",
                    padding: "2rem",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                      margin: "0",
                    }}
                  >
                    Unleash the Ocean Explorer in You
                  </h1>
                  <p
                    style={{
                      marginTop: "1rem",
                      fontSize: "1.125rem",
                      maxWidth: "600px",
                    }}
                  >
                    Experience breathtaking underwater adventures, guided by
                    professionals who prioritize safety, quality, and marine
                    conservation.
                  </p>
                </div>
              </div>

              {/* Main Content Section */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto", // Adjusts column width for main and CTA
                  gap: "2rem",
                  alignItems: "start", // Align items to the top
                }}
              >
                {/* About Content */}
                <div>
                  <div
                    style={{
                      background: "#0e0a17",
                      padding: "1.5rem",
                      borderRadius: "1rem",
                      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: "bold",
                        color: "#3b82f6",
                        marginBottom: "1rem",
                      }}
                    >
                      Why Choose Platypus Escapes?
                    </h2>
                    <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
                      At Platypus Escapes, we turn your diving dreams into
                      reality with world-class training, top-tier equipment, and
                      stunning underwater locations in Visakhapatnam.
                    </p>
                    <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
                      Whether you’re a first-time snorkeler or a seasoned diver,
                      our SSI-certified courses and eco-conscious approach make
                      us the premier choice for ocean enthusiasts.
                    </p>
                    <p style={{ lineHeight: "1.8" }}>
                      As recognized by Hon’ble Prime Minister Shri Narendra Modi
                      in
                      <em> Mann Ki Baat</em>, we are committed to marine
                      conservation and empowering communities through
                      sustainable tourism.
                    </p>
                  </div>
                  {/* Vision & Mission */}
                  <div
                    style={{
                      marginTop: "3rem",
                      background: "#0e0a17",
                      padding: "2rem",
                      borderRadius: "1rem",
                      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: "bold",
                        color: "#3b82f6",
                        marginBottom: "1.5rem",
                        textAlign: "center",
                      }}
                    >
                      Our Vision & Mission
                    </h3>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "1.5rem",
                      }}
                    >
                      <div
                        style={{
                          background: "#1f1f29",
                          padding: "1.5rem",
                          borderRadius: "1rem",
                          boxShadow: "0 6px 10px rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "1.25rem",
                            color: "#3b82f6",
                            marginBottom: "1rem",
                          }}
                        >
                          Our Vision
                        </h4>
                        <p style={{ lineHeight: "1.8" }}>
                          To become a global leader in marine conservation and
                          sustainable tourism, fostering a love for the oceans
                          and preserving marine ecosystems for future
                          generations.
                        </p>
                      </div>
                      <div
                        style={{
                          background: "#1f1f29",
                          padding: "1.5rem",
                          borderRadius: "1rem",
                          boxShadow: "0 6px 10px rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "1.25rem",
                            color: "#3b82f6",
                            marginBottom: "1rem",
                          }}
                        >
                          Our Mission
                        </h4>
                        <p style={{ lineHeight: "1.8" }}>
                          To inspire, educate, and empower individuals to
                          protect and cherish marine life through unparalleled
                          diving experiences and eco-conscious practices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call-to-Action Section */}
                <OceanAdventureCard />
              </div>
            </div>
          </section>

          <TeamOne />

          <section className="buy-ticket">
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div
                    className="buy-ticket__left wow fadeInLeft"
                    data-wow-delay="100ms"
                  >
                    <ul className="buy-ticket__address list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-clock"></span>
                        </div>
                        <div className="text">
                          <p>Visakhapatnam, India</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-pin"></span>
                        </div>
                        <div className="text">
                          <p>
                            6 AM to 8 PM |{" "}
                            {new Date().toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="buy-ticket__title">
                      Dive Into Adventure and Discover the Underwater World
                    </h3>
                    <p className="buy-ticket__text">
                      Experience the thrill of scuba diving in the crystal-clear
                      waters of the Indian Ocean. <br />
                      Whether you're a beginner or a pro, our guided dives offer
                      breathtaking views of marine life and coral reefs.
                    </p>
                    <div className="buy-ticket__btn-box">
                      <a href="/contact" className="buy-ticket__btn-1 thm-btn">
                        Book Your Dive
                        <span className="icon-arrow-right"></span>
                      </a>
                      <a href="/contact" className="buy-ticket__btn-2 thm-btn">
                        Contact Us<span className="icon-arrow-right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div
                    className="buy-ticket__right wow fadeInRight"
                    data-wow-delay="300ms"
                  >
                    <div className="buy-ticket__img">
                      <img
                        src="/assets/images/resources/buy-ticket-img.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sliding Text Start */}
          <section className="sliding-text-one">
            <div className="sliding-text-one__wrap">
              <ul className="sliding-text__list marquee_mode">
                <li>
                  <h2
                    data-hover="Explore the Deep"
                    className="sliding-text__title"
                  >
                    Explore the Deep
                    <Image
                      src="/assets/images/icon/star-icon.png"
                      alt="Star Icon"
                      width={50}
                      height={50}
                      priority
                    />
                  </h2>
                </li>
                <li>
                  <h2
                    data-hover="Dive into Adventure"
                    className="sliding-text__title"
                  >
                    Dive into Adventure
                    <Image
                      src="/assets/images/icon/star-icon.png"
                      alt="Star Icon"
                      width={50}
                      height={50}
                      priority
                    />
                  </h2>
                </li>
                <li>
                  <h2
                    data-hover="Underwater Wonders"
                    className="sliding-text__title"
                  >
                    Underwater Wonders
                    <Image
                      src="/assets/images/icon/star-icon.png"
                      alt="Star Icon"
                      width={50}
                      height={50}
                      priority
                    />
                  </h2>
                </li>
                <li>
                  <h2
                    data-hover="Discover Marine Life"
                    className="sliding-text__title"
                  >
                    Discover Marine Life
                    <Image
                      src="/assets/images/icon/star-icon.png"
                      alt="Star Icon"
                      width={50}
                      height={50}
                      priority
                    />
                  </h2>
                </li>
                <li>
                  <h2
                    data-hover="Explore the Deep"
                    className="sliding-text__title"
                  >
                    Explore the Deep
                    <Image
                      src="/assets/images/icon/star-icon.png"
                      alt="Star Icon"
                      width={50}
                      height={50}
                      priority
                    />
                  </h2>
                </li>
                <li>
                  <h2
                    data-hover="Dive into Adventure"
                    className="sliding-text__title"
                  >
                    Dive into Adventure
                    <Image
                      src="/assets/images/icon/star-icon.png"
                      alt="Star Icon"
                      width={50}
                      height={50}
                      priority
                    />
                  </h2>
                </li>
              </ul>
            </div>
          </section>
          {/* Sliding Text End */}
          {/*Brand One Start*/}
          <section className="brand-one">
            <div className="container">
              <BrandSlider1 />
            </div>
          </section>
          {/*Brand One End*/}
          {/* CTA One Start */}
          <section className="cta-one">
            <div className="container">
              <div className="cta-one__inner">
                <h3 className="cta-one__title">
                  Get Latest Updates Subscribe <br /> to Our Newsletter
                </h3>
                <form
                  className="cta-one__form mc-form"
                  data-url="MC_FORM_URL"
                  noValidate
                >
                  <div className="cta-one__form-input-box">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="EMAIL"
                    />
                    <button type="submit" className="cta-one__btn">
                      <span className="icon-paper-plan"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
          {/* CTA One End */}
        </div>
      </Layout>
    </>
  );
}
