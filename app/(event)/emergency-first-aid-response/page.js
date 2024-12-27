"use client";
import React from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";

export default function EmergencyFirstAidResponseCourse() {
  return (
    <Layout
      headerStyle={4}
      footerStyle={1}
      breadcrumbTitle="EMERGENCY FIRST AID RESPONSE"
    >
      <div className="ocean-course-main-container">
        <div className="ocean-course-content">
          <div className="ocean-course-header">
            <Image
              src="/assets/images/backgrounds/openWaterDiver.jpg"
              alt="Emergency First Aid"
              className="ocean-course-header-image"
              width={800}
              height={450}
              layout="intrusive"
            />
            <h1 className="ocean-course-title" style={{ marginTop: "10px" }}>
              EMERGENCY FIRST AID RESPONSE
            </h1>
            <p className="ocean-course-price-info">
              Price Per Person:{" "}
              <span className="ocean-course-price">₹12500/-</span> (Excluding
              18% GST)
            </p>
            <p className="ocean-course-description">
              Emergency First Response gives you the confidence to respond to
              medical emergencies – not just in the diving world, but in your
              everyday world too. It’s a requirement for all Rescue Divers to
              have made the First Aid and CPR training. If you haven’t done a
              course lately, join one of our Emergency First Aid Response
              courses.
            </p>
          </div>

          <div className="ocean-course-cards-container">
            <div className="ocean-course-card">
              <h2 className="ocean-course-card-title">Course Overview</h2>
              <p className="ocean-course-card-text">
                The Emergency First Aid Response course equips you with the
                essential skills to respond effectively to emergencies, whether
                in the diving world or in your everyday life. This course
                focuses on First Aid and CPR, which is a must-have for any
                Rescue Diver. Whether you're preparing for a rescue diving
                course or simply want to be more prepared for emergencies, this
                course will give you the knowledge and confidence to handle any
                situation.
              </p>
            </div>

            <div className="ocean-course-card">
              <h2 className="ocean-course-card-title">
                Who Takes This Course?
              </h2>
              <p className="ocean-course-card-text">
                This course is designed for everyone, especially for those
                looking to become Rescue Divers. It’s a fundamental requirement
                for all Rescue Divers to have completed First Aid and CPR
                training. If you haven’t taken a course recently, this course is
                the perfect opportunity to refresh your skills and learn
                important emergency response techniques.
              </p>
            </div>

            <div className="ocean-course-card">
              <h2 className="ocean-course-card-title">
                Contact Us for More Details
              </h2>
              <p className="ocean-course-card-text">
                For more details on the Emergency First Aid Response Course,
                including prerequisites, duration, course overview, and pricing,
                feel free to contact us. We’ll be happy to answer your questions
                and guide you through the process.
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
