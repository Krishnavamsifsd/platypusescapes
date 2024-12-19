"use client"; // Ensures the component runs on the client side

import Link from "next/link";
import { useState } from "react";
import { FaRocket, FaRegHeart, FaWrench, FaFish } from "react-icons/fa"; // New icons from React Icons

export default function ServicesOne() {
  // State for dynamic data (e.g., dynamic images, text, links)
  const [servicesContent, setServicesContent] = useState({
    sectionTagline: "event benefits",
    sectionTitle: "Professional Courses Chart",
    services: [
      {
        id: 1,
        title: "Rescue Diver Course",
        description:
          "During the Rescue Diver course, you will learn to broaden your horizon away from yourself.",
        icon: FaRocket, // Updated React icon for Rescue Diver
        link: "/rescue-diver-course",
      },
      {
        id: 2,
        title: "Emergency First Aid",
        description:
          "Emergency First Response gives you the confidence to respond to medical emergencies.",
        icon: FaRegHeart, // Updated React icon for First Aid Response
        link: "/emergency-first-aid-response",
      },
      {
        id: 3,
        title: "SSI Specialty Courses",
        description:
          "SSI Specialty Courses are perfect for all divers no matter what skill level, to expand their skills.",
        icon: FaWrench, // Updated React icon for SSI Specialty
        link: "/ssi-specialty-courses",
      },
      {
        id: 4,
        title: "SSI Open Water Diver Course",
        description:
          "Now is the time to dive in! SSI Open Water Diver course is the most popular dive program.",
        icon: FaFish, // Updated React icon for Open Water Diver
        link: "/ssi-open-water-diver-course",
      },
    ],
  });

  return (
    <>
      {/* Services One Start */}
      <section className="services-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">
                {servicesContent.sectionTagline}
              </span>
            </div>
            <h2 className="section-title__title">
              {servicesContent.sectionTitle}
            </h2>
          </div>
          <div className="row">
            {servicesContent.services.map((service) => (
              <div
                key={service.id}
                className="col-xl-6 col-lg-6 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <service.icon size={24} /> {/* Reduced icon size */}
                  </div>
                  <h3 className="services-one__title">
                    <Link href={service.link}>{service.title}</Link>
                  </h3>
                  <p className="services-one__text">{service.description}</p>
                  <Link href={service.link} className="services-one__read-more">
                    Read More <span className="icon-arrow-right"></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services One End */}
    </>
  );
}
