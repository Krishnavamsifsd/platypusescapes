"use client";
import React from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";

export default function OpenWaterCourse() {
  return (
    <Layout
      headerStyle={4}
      footerStyle={1}
      breadcrumbTitle="OPEN WATER SCUBA DIVER"
    >
      <div className="ocean-course-main-container">
        <div className="ocean-course-content">
          <div className="ocean-course-header">
            <Image
              src="/assets/images/backgrounds/openWaterDiver.jpg"
              alt="Open Water Swimming"
              className="ocean-course-header-image"
              width={800}
              height={450}
              layout="intrusive"
            />
            <h1 className="ocean-course-title" style={{ marginTop: "10px" }}>
              OPEN WATER SCUBA DIVER
            </h1>
            <p className="ocean-course-price-info">
              Price Per Person:{" "}
              <span className="ocean-course-price">₹27500/-</span> (Excluding
              18% GST)
            </p>
            <p className="ocean-course-description">
              Discover the Thrill of Scuba Diving: Your Gateway to the
              Underwater World
            </p>
          </div>

          <div className="ocean-course-cards-container">
            <div className="ocean-course-card">
              <h2 className="ocean-course-card-title">
                Who Takes This Course?
              </h2>
              <p className="ocean-course-card-text">
                Curious about exploring the depths of the ocean? Our Open Water
                Scuba Diver course is the perfect introduction to the wonders of
                the undersea world. This course is designed for individuals who
                want to dive into the ocean, regardless of their prior
                experience.
              </p>
              <ul className="ocean-course-requirements">
                <li>Age: Minimum 8 years</li>
                <li>Health: Good overall health</li>
                <li>Swimming Skills: Basic swimming ability required</li>
                <li>No prior scuba diving experience needed</li>
              </ul>
            </div>

            <div className="ocean-course-card">
              <h2 className="ocean-course-card-title">Course Structure</h2>
              <p className="ocean-course-card-text">
                Our scuba diving course spans 4 days, combining theory and
                hands-on training to prepare you for diving in open waters.
              </p>
              <h6>1st Day:</h6>
              <ul className="ocean-course-requirements">
                <li>
                  Ocean Swimming Test: 200 meters (without fins), 400 meters
                  Snorkelling
                </li>
                <li>
                  Form Filling & Theory Session (Classroom): 2 - 5 hours at our
                  Thimmapuram office
                </li>
              </ul>
              <h6>2nd Day:</h6>
              <ul className="ocean-course-requirements">
                <li>
                  Confined Water Pool Training: 2 - 3 hours of diving practice
                  at Sai Priya Resort, Rushikonda
                </li>
              </ul>
              <h6>3rd Day:</h6>
              <ul className="ocean-course-requirements">
                <li>
                  Two Shore Dives Training in the Ocean: Depth 4 to 8 meters at
                  Thimmapuram Beach
                </li>
                <li>Total dive training time: 4 to 6 hours</li>
              </ul>
              <h6>4th Day:</h6>
              <ul className="ocean-course-requirements">
                <li>
                  Two Completion Boat Dives in the Ocean: Depth 12 to 18 meters
                  at Mangamaripetta or Thimmapuram Beach
                </li>
                <li>Total boat dive training time: 6 to 7 hours</li>
              </ul>
              <p>
                Bonus Dive (5th Dive): A complimentary dive for ocean clean-up
                with Platypus Escapes as part of our commitment to marine
                conservation.
              </p>
            </div>

            <div className="ocean-course-card">
              <h2 className="ocean-course-card-title">What You Will Learn</h2>
              <p className="ocean-course-card-text">
                You’ll be trained to use essential scuba diving equipment,
                including:
              </p>
              <ul className="ocean-course-requirements">
                <li>Mask, snorkel, fins</li>
                <li>Buoyancy Control Device (BCD)</li>
                <li>Regulator</li>
                <li>Air tank</li>
              </ul>
              <p>
                Your equipment will be suited to the type of water you dive
                in—whether tropical, temperate, or cold.
              </p>
              <p>
                Upon successful completion of your dives, you will receive an
                internationally recognized SDI / SSI certification, giving you
                the freedom to dive anywhere in the world.
              </p>
            </div>

            <div className="ocean-course-card">
              <h2 className="ocean-course-card-title">Why Dive with Us?</h2>
              <p className="ocean-course-card-text">
                Explore the vibrant marine life of Visakhapatnam with our
                certified instructors. We offer competitive pricing to ensure
                the best value for your experience.
              </p>
              <p>
                This course is your passport to a lifetime of adventure with SDI
                / SSI, a renowned organization that sets the standards in the
                global diving community.
              </p>
            </div>
          </div>

          <div className="ocean-course-cta-container">
            <button className="ocean-course-cta-button">Book Now</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
