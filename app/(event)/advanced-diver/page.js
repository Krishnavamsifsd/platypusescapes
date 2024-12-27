"use client";
import React from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";

export default function AdvancedDiverCourse() {
  return (
    <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="ADVANCED DIVER">
      <div className="ocean-course-main-container">
        <div className="ocean-course-content">
          <div className="ocean-course-header">
            <Image
              src="/assets/images/backgrounds/advancedDiver.webp"
              alt="Advanced Scuba Diving"
              className="ocean-course-header-image"
              width={800}
              height={450}
              layout="intrusive"
            />
            <h1 className="ocean-course-title" style={{ marginTop: "10px" }}>
              ADVANCED DIVER
            </h1>
            <p className="ocean-course-price-info">
              Price Per Person:{" "}
              <span className="ocean-course-price">₹31500/-</span> (Excluding
              18% GST)
            </p>
            <p className="ocean-course-description">
              Looking for the ultimate adventure? You found it!
            </p>
          </div>

          <div className="ocean-course-cards-container">
            <div className="ocean-course-card">
              <h2 className="ocean-course-card-title">Course Overview</h2>
              <p className="ocean-course-card-text">
                The Advanced Open Water Diver course fine-tunes your dive skills
                and trains you to safely deep dive – allowing you to explore
                most of the world’s top scuba diving adventures. It’s your dive
                – go for it! The AOWD course offers you a structured program
                where you gain additional experience and skills under the direct
                guidance of an SSI professional. This program is designed for
                everyone, whether you’re looking to expand your diving limits or
                focus on areas of personal interest.
              </p>
            </div>

            <div className="ocean-course-card">
              <h2 className="ocean-course-card-title">
                Who Takes This Course?
              </h2>
              <p className="ocean-course-card-text">
                The Advanced Open Water Diver course is perfect for those who
                already have a basic understanding of diving but want to take
                their skills to the next level. Whether you're looking to
                improve your navigation skills, explore deeper dive sites, or
                just enhance your overall experience, this course will help you
                become a more confident diver.
              </p>
            </div>

            <div className="ocean-course-card">
              <h2 className="ocean-course-card-title">
                Contact Us for More Details
              </h2>
              <p className="ocean-course-card-text">
                For more details on the SSI Advanced Open Water Diver Course,
                including prerequisites, duration, course overview, and pricing,
                feel free to reach out to us. We’ll be happy to answer any
                questions and help you get started on your diving adventure.
              </p>
            </div>
          </div>

          <div className="ocean-course-cta-container">
            <button className="ocean-course-cta-button">
              Book Advanced Diver Now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
