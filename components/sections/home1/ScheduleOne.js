"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ScheduleOne = () => {
  const [activeTab, setActiveTab] = useState("1st-day");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="schedule-one">
      <div className="container">
        <div className="schedule-one__inner">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">
                {" "}
                Scuba Diving Activities
              </span>
            </div>
            <h2 className="section-title__title">
              {" "}
              Snorkeling & Beginner Dives
            </h2>
          </div>
          <div className="schedule-one__main-tab-box tabs-box">
            <ul className="tab-buttons clearfix list-unstyled">
              {/* <li
                className={`tab-btn ${
                  activeTab === "1st-day" ? "active-btn" : ""
                }`}
                onClick={() => handleTabClick("1st-day")}
              >
                <h3>Day 01</h3>
                <p>16 April 2024</p>
              </li>
              <li
                className={`tab-btn ${
                  activeTab === "2nd-day" ? "active-btn" : ""
                }`}
                onClick={() => handleTabClick("2nd-day")}
              >
                <h3>Day 02</h3>
                <p>18 April 2024</p>
              </li>
              <li
                className={`tab-btn ${
                  activeTab === "3rd-day" ? "active-btn" : ""
                }`}
                onClick={() => handleTabClick("3rd-day")}
              >
                <h3>Day 03</h3>
                <p>24 April 2024</p>
              </li> */}
            </ul>
            <div className="tabs-content">
              <div
                className={`tab ${activeTab === "1st-day" ? "active-tab" : ""}`}
                id="1st-day"
              >
                <div className="schedule-one__tab-content-box">
                  <div className="schedule-one__single">
                    <div className="schedule-one__left">
                      <h3 className="schedule-one__title">
                        <Link href="/event-details">Snorkelling</Link>
                      </h3>
                      <p className="schedule-one__text">
                        A personal portfolio is a curated collection of <br />{" "}
                        an individual's professional work
                      </p>
                    </div>
                    <div className="schedule-one__img">
                      <Image
                        src="/assets/images/resources/schedule-one-1-1.jpg"
                        alt="Dive Schedule"
                        width={309}
                        height={166}
                        layout="intrusive"
                      />
                    </div>
                    <div className="schedule-one__address-and-btn-box">
                      <ul className="list-unstyled schedule-one__address">
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <div className="text">
                            <p>
                              6 Am To 8 Pm <br /> Mon - Sat
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-pin"></span>
                          </div>
                          <div className="text">
                            <p>
                              Thimmapuram Beach Road, <br />
                              After Vizag Film Nagar
                              <br /> Cultural Center, Visakhapatnam 530048
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="schedule-one__btn-box">
                        <Link
                          href="/contact"
                          className="schedule-one__btn thm-btn"
                        >
                          Buy Ticket
                          <span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="schedule-one__single">
                    <div className="schedule-one__left">
                      <h3 className="schedule-one__title">
                        <Link href="/event-details">
                          Beginner Scuba (Shore Dive)
                        </Link>
                      </h3>
                      <p className="schedule-one__text">
                        A personal portfolio is a curated collection of <br />{" "}
                        an individual's professional work
                      </p>
                    </div>
                    <div className="schedule-one__img">
                      <Image
                        src="/assets/images/resources/schedule-one-1-2.jpg"
                        alt="Dive Schedule"
                        width={309}
                        height={166}
                        layout="intrusive"
                      />
                    </div>
                    <div className="schedule-one__address-and-btn-box">
                      <ul className="list-unstyled schedule-one__address">
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <div className="text">
                            <p>
                              6 Am To 8 Pm <br /> Mon - Sat
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-pin"></span>
                          </div>
                          <div className="text">
                            <p>
                              Thimmapuram Beach Road, <br />
                              After Vizag Film Nagar
                              <br /> Cultural Center, Visakhapatnam 530048
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="schedule-one__btn-box">
                        <Link
                          href="/contact"
                          className="schedule-one__btn thm-btn"
                        >
                          Buy Ticket
                          <span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="schedule-one__single">
                    <div className="schedule-one__left">
                      <h3 className="schedule-one__title">
                        <Link href="/event-details">
                          Beginner Scuba (Boat Dive){" "}
                        </Link>
                      </h3>
                      <p className="schedule-one__text">
                        A personal portfolio is a curated collection of <br />{" "}
                        an individual's professional work
                      </p>
                    </div>
                    <div className="schedule-one__img">
                      <Image
                        src="/assets/images/resources/schedule-one-1-3.jpg"
                        alt="Dive Schedule"
                        width={309}
                        height={166}
                        layout="intrusive"
                      />
                    </div>
                    <div className="schedule-one__address-and-btn-box">
                      <ul className="list-unstyled schedule-one__address">
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <div className="text">
                            <p>
                              6 Am To 8 Pm <br /> Mon - Sat
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-pin"></span>
                          </div>
                          <div className="text">
                            <p>
                              Thimmapuram Beach Road, <br />
                              After Vizag Film Nagar
                              <br /> Cultural Center, Visakhapatnam 530048
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="schedule-one__btn-box">
                        <Link
                          href="/contact"
                          className="schedule-one__btn thm-btn"
                        >
                          Buy Ticket
                          <span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleOne;
