"use client";
import React from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";

export default function OpenWaterCourse() {
  return (
    <Layout
      headerStyle={4}
      footerStyle={1}
      breadcrumbTitle="OPEN WATER (OCEAN) SWIMMING COURSE"
    >
      <div className="ocean-course-main-container">
        <div className="ocean-course-content">
          <div className="ocean-course-header">
            <Image
              src="/assets/images/backgrounds/oceanSwiming.jpg"
              alt="Open Water Swimming"
              className="ocean-course-header-image"
              width={800}
              height={450}
              layout="intrusive"
              // style={{ borderRadius: "10px" }} // Add border-radius directly
            />
            <h1 className="ocean-course-title" style={{ marginTop: "10px" }}>
              OPEN WATER (OCEAN) SWIMMING COURSE
            </h1>
            <p className="ocean-course-price-info">
              Price Per Person:{" "}
              <span className="ocean-course-price">₹5000/-</span> (Excluding 18%
              GST)
            </p>
          </div>

          <div className="ocean-course-cards-container">
            <div className="ocean-course-card">
              <h2 className="ocean-course-card-title">
                Who Takes This Course?
              </h2>
              <p className="ocean-course-card-text">
                This course is designed for anyone who wants to gain confidence
                in the ocean environment, whether you're a beginner or looking
                to improve your ocean swimming skills.
              </p>
              <ul className="ocean-course-requirements">
                <li>No pre-requisites required</li>
                <li>Basic swimming is not required</li>
                <li>Min. Age: 08+ years</li>
              </ul>
            </div>

            <div className="ocean-course-card">
              <h2 className="ocean-course-card-title">What Is the Course?</h2>
              <p className="ocean-course-card-text">
                Learn to navigate the ocean with confidence. This course covers
                the basics of ocean swimming, safety measures, and using
                equipment like masks, snorkels, and fins.
              </p>
            </div>

            <div className="ocean-course-card">
              <h2 className="ocean-course-card-title">Where, When and How?</h2>
              <p className="ocean-course-card-text">
                <strong>Location:</strong> Visakhapatnam, AP - Thimmapuram Beach
                & Rushikonda Beach
              </p>
              <p className="ocean-course-card-text">
                <strong>Duration:</strong> 10 days. <br />
                Day 1: Pool Training (08 am - 10 am) <br />
                Day 2 to 10: Ocean Training (06 am - 07 am)
              </p>
              <p className="ocean-course-card-text">
                Receive an internationally recognized Snorkel Diver
                Certification upon course completion.
              </p>
            </div>

            <div className="ocean-course-card">
              <h2 className="ocean-course-card-title">What to Bring?</h2>
              <ul className="ocean-course-requirements">
                <li>Own Mask, Snorkel, Fins</li>
                <li>Extra clothes and towel</li>
                <li>Reusable water bottle</li>
                <li>Swimwear (full top and bottom)</li>
              </ul>
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
