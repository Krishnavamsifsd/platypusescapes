"use client";
import React from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";

export default function RescueDiverCourse() {
  return (
    <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="RESCUE DIVER">
      <div className="ocean-course-main-container">
        <div className="ocean-course-content">
          <div className="ocean-course-header">
            <Image
              src="/assets/images/backgrounds/rescueDive.jpg"
              alt="Rescue Diver"
              className="ocean-course-header-image"
              width={800}
              height={450}
              layout="intrusive"
            />
            <h1 className="ocean-course-title" style={{ marginTop: "10px" }}>
              RESCUE DIVER
            </h1>
            <p className="ocean-course-price-info">
              Price Per Person:{" "}
              <span className="ocean-course-price">₹19500/-</span> (Excluding
              18% GST)
            </p>
          </div>

          <div className="ocean-course-cards-container">
            <div className="ocean-course-card">
              <h2 className="ocean-course-card-title">
                Who Should Do This Course?
              </h2>
              <p className="ocean-course-card-text">
                Are you an experienced diver who’s looking to take the next
                step? Do you feel that you could help another diver in case of a
                panic diver in an emergency? If you answered yes, then the
                Rescue Diver course is for you. It’s designed to prepare you to
                manage emergencies and assist other divers in distress
                situations.
              </p>
            </div>

            <div className="ocean-course-card">
              <h2 className="ocean-course-card-title">Course Flow</h2>
              <p className="ocean-course-card-text">
                During the Rescue Diver course, you will learn to become a
                better buddy by practicing problem-solving skills until they
                become second nature. You’ll learn how to prevent and manage
                problems in the water and become more confident in your skills
                as a diver. You’ll know that you can help others if needed.
                Plus, the course is just fun – it’s serious, but still allows
                for lots of laughter in between the focused learning.
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
