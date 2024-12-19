"use client"; // Ensures the component runs on the client side

import { useState } from "react";
import Link from "next/link";

export default function EventOne() {
  // State for dynamic content
  // State for dynamic content
  const [eventContent, setEventContent] = useState({
    sectionTagline: "About Our Scuba Diving Adventure",
    sectionTitle: "Explore the Depths of the Ocean",
    buttonText: "Join the Adventure",
    buttonLink: "/scuba-details",
    points: [
      {
        id: 1,
        iconClass: "icon-air-horn",
        title: "Diving Experts & Guides",
        description:
          "Join our experienced divers for an unforgettable underwater experience. Whether you're a beginner or an expert, we cater to all levels.",
        link: "/scuba",
      },
      {
        id: 2,
        iconClass: "icon-party-blower",
        title: "Explore Stunning Reefs",
        description:
          "Discover vibrant coral reefs, marine life, and crystal-clear waters. Our guided tours offer an immersive experience in some of the most beautiful dive sites.",
        link: "/scuba",
      },
    ],
    eventImage: "/assets/images/resources/event-one-img-1.png",
  });

  return (
    <>
      {/* Event One Start */}
      <section className="event-one">
        <div className="container">
          <div className="event-one__inner wow fadeInUp" data-wow-delay="300ms">
            <div className="event-one__top">
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">
                    {eventContent.sectionTagline}
                  </span>
                </div>
                <h2 className="section-title__title">
                  {eventContent.sectionTitle}
                </h2>
              </div>
              <div className="event-one__btn-box">
                <Link
                  href={eventContent.buttonLink}
                  className="event-one__btn thm-btn"
                >
                  {eventContent.buttonText}
                  <span className="icon-arrow-right"></span>
                </Link>
              </div>
            </div>

            <ul className="list-unstyled event-one__points">
              {eventContent.points.map((point) => (
                <li key={point.id}>
                  <div className="icon">
                    <span className={point.iconClass}></span>
                  </div>
                  <div className="content">
                    <h4>
                      <Link href={point.link}>{point.title}</Link>
                    </h4>
                    <p>{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="event-one__img-box">
              <img src={eventContent.eventImage} alt="Event" />
            </div>
          </div>
        </div>
      </section>
      {/* Event One End */}
    </>
  );
}
