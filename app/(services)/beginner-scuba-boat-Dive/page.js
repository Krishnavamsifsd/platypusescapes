"use client";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const serviceCategories = [
  { name: "Snorkelling", link: "/snorkelling", count: 2 },
  {
    name: "Beginner Scuba (Shore Dive)",
    link: "/beginner-scuba-shore-Dive",
    count: 4,
  },
  {
    name: "Beginner Scuba (Boat Dive)",
    link: "/beginner-scuba-boat-Dive",
    count: 1,
    active: true,
  },
];

const serviceDetails = {
  title: "Explore the Ocean with Beginner Scuba (Boat Dive)",
  description:
    "Are you interested to go scuba diving but a bit hesitant because you don’t know swimming? Do you have just half a day and not really interested in taking a certification course? Are you reasonably healthy, with no previous medical problems? If this is more or less you, then come and experience a BOAT DIVE with us. Platypus Escapes invites you, come scuba dive in Vizag and explore the beautiful colourful waters, with wide range of marine life and reef on beautiful dive sites around.",
  images: [
    "/assets/images/services/boat-scuba-main.jpg",
    "/assets/images/services/boat-scuba-training.jpg",
    "/assets/images/services/boat-scuba-dive.jpg",
  ],
  additionalText: ["Discover the Thrill of Beginner Scuba Diving"],
  description2: [
    "Our trainers (Instructor / Dive Master) will brief you about the equipment and basic techniques, followed by a practice session in shallow waters. After your initiation, you will sail with us to some of the most spectacular and breathtaking dive sites and for those Instagram moments, photographs & videos of your underwater adventures are on us!",
  ],
  description3: [
    "Note: Need more than 3 members for a boat dive. The total duration of the activity is a minimum of 3 hours to a maximum of a full day depending on the chosen package or the number of dives. The maximum safest depth is 12 meters (as per international standards). Participants must be medically fit (contact us before booking if you have any health concerns).",
  ],
  servicecard: [
    {
      question: "What is the price for Beginner Scuba (Boat Dive)?",
      answer: "The price per person is ₹5500 (excluding 18% GST).",
    },
    {
      question: "Is swimming required for scuba diving?",
      answer: "No, swimming skills are not required for this activity.",
    },
    {
      question: "How long does the scuba diving program last?",
      answer:
        "The program duration is a minimum of 3 hours, including training and activity time.",
    },
  ],
  faq: [
    {
      question: "What does the scuba diving package include?",
      answer:
        "The package includes all scuba gear, briefing and training, up to 45 minutes of diving, 10 photos & 4 videos, drinking water, and shower facilities.",
    },
    {
      question: "What are the prerequisites for scuba diving?",
      answer:
        "There are no prerequisites. Anyone aged 8 years and above can join, regardless of swimming skills.",
    },
    {
      question: "What should I bring for the scuba diving activity?",
      answer:
        "Bring a towel, an extra pair of clothes, sunglasses, and a cap. You can also bring your own swimwear or use the half wetsuit provided by us.",
    },
  ],
  priceDetails: {
    pricePerPerson: "₹5500 (Excluding 18% GST)",
    duration: "3 hours minimum",
    minAge: "8+ years",
  },
  packageInclusions: [
    "All scuba gear",
    "Briefing & Training",
    "Activity experience (Max. 45 minutes)",
    "Diving 10 photos & 4 videos",
    "Drinking water",
    "Shower facilities",
  ],
  thingsToBring: [
    "Towel",
    "Extra pair of undergarments and clothes",
    "Phone or pen-drive to get videos",
    "Sunglasses & cap for sun protection",
    "Optional: Your own swimwear or clothes (e.g., shorts and t-shirt)",
  ],
  notes: ["Have a light breakfast like fruits or snacks before the activity."],
  cancellationPolicy: [
    "Full refund if the activity is canceled by the center due to weather conditions.",
    "50% of the total amount will be charged if canceled by the client before entering the ocean.",
    "No refund if the activity is discontinued by the client during training or the experience.",
  ],
  equipmentPolicy:
    "Participants are responsible for the equipment provided. Any loss or damage will be charged.",
  personalBelongingsPolicy:
    "The company and its staff are not responsible for the loss or damage of personal belongings.",
  weatherPolicy:
    "Activities are subject to weather conditions. Refunds or alternate dates will be offered for cancellations due to weather.",
  callToAction: "Book Beginner Scuba (Boat Dive) Now",
};

export default function Home() {
  const [isActive, setIsActive] = useState({ status: false, key: 1 });

  const handleToggle = (key) => {
    setIsActive({
      status: isActive.key === key ? false : true,
      key: isActive.key === key ? null : key,
    });
  };

  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Snorkelling">
        <div>
          {/* Service Details Start */}
          <section className="service-details">
            <div className="container">
              <div className="service-details__top">
                <div className="row">
                  <div className="col-xl-4 col-lg-5">
                    <div className="service-details__top-left">
                      <div className="service-details__all-category">
                        <h3 className="service-details__category-title">
                          Category
                        </h3>
                        <ul className="service-details__all-category-list list-unstyled">
                          {serviceCategories.map((category, index) => (
                            <li
                              key={index}
                              className={category.active ? "active" : ""}
                            >
                              <Link href={category.link}>
                                <i className="icon-double-angle"></i>
                                {category.name}
                                {/* <span>({category.count})</span> */}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="service-details__get-touch">
                        <div
                          className="service-details__get-touch-bg"
                          style={{
                            backgroundImage:
                              "url(assets/images/backgrounds/service-details-get-touch-bg.jpg)",
                          }}
                        ></div>
                        <div className="service-details__get-touch-inner">
                          <h3 className="service-details__get-touch-title">
                            GET TOUCH
                          </h3>
                          <p className="service-details__get-touch-sub-title">
                            For fast service
                          </p>
                          <div className="service-details__get-touch-icon">
                            <span className="icon-call"></span>
                          </div>
                          <h4 className="service-details__get-touch-number">
                            <a href="tel:7622893711">+91 76228 93711 </a>
                          </h4>
                        </div>
                      </div>
                      <div className="service-details__download-box">
                        <ul className="service-details__download-list list-unstyled">
                          <li>
                            <a href="#">
                              Information<span className="icon-download"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Terms & Conditions
                              <span className="icon-download"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-7">
                    <div className="service-details__top-right">
                      <div className="service-details__img-1">
                        <Image
                          src="/assets/images/backgrounds/boatDive.webp"
                          alt="Service Detail"
                          width={850}
                          height={440}
                          layout="responsive"
                        />
                      </div>
                      <h3 className="service-details__title-1">
                        {serviceDetails.title}
                      </h3>
                      <p className="service-details__text-1">
                        {serviceDetails.description}
                      </p>
                      <div className="service-details__img-box">
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="service-details__img-box-img">
                              <img
                                src={serviceDetails.images[1]}
                                alt="Service Detail"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="service-details__img-box-img">
                              <img
                                src={serviceDetails.images[2]}
                                alt="Service Detail"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {serviceDetails.additionalText.map((text, index) => (
                        <div key={index}>
                          <h3 className="service-details__title-2">{text}</h3>
                          <p className="service-details__text-2">
                            {serviceDetails.description2}
                          </p>
                          <p className="service-details__text-3">
                            {serviceDetails.description3}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="service-details__bottom"
                style={{
                  padding: "20px",
                  background: "linear-gradient(145deg, #0e0a17, #212529)",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                  margin: "20px 0",
                  fontFamily: "'Roboto', sans-serif",
                  color: "#e0e0e0",
                }}
              >
                <h3
                  className="service-details__title"
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#f8f9fa",
                    marginBottom: "20px",
                    textAlign: "center",
                  }}
                >
                  Package Inclusions
                </h3>
                <div
                  className="service-details__price"
                  style={{
                    marginBottom: "20px",
                    padding: "15px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    background: "#0e0a17",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "18px",
                      color: "#ced4da",
                      marginBottom: "10px",
                    }}
                  >
                    Price Per Person
                  </h4>
                  <p
                    className="price-amount"
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#4caf50",
                      marginBottom: "8px",
                    }}
                  >
                    {serviceDetails.priceDetails.pricePerPerson}
                  </p>
                  <p
                    className="service-details__duration"
                    style={{
                      fontSize: "16px",
                      color: "#adb5bd",
                      marginBottom: "4px",
                    }}
                  >
                    Duration: {serviceDetails.priceDetails.duration}
                  </p>
                  <p
                    className="service-details__min-age"
                    style={{ fontSize: "16px", color: "#adb5bd" }}
                  >
                    Min Age: {serviceDetails.priceDetails.minAge}
                  </p>
                </div>

                <div
                  className="service-details__inclusions"
                  style={{
                    marginBottom: "20px",
                    padding: "15px",
                    background: "#0e0a17",
                    borderRadius: "8px",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "18px",
                      color: "#ced4da",
                      marginBottom: "10px",
                    }}
                  >
                    Package Includes
                  </h4>
                  <ul
                    className="inclusions-list"
                    style={{
                      listStyleType: "disc",
                      paddingLeft: "20px",
                      color: "#dee2e6",
                    }}
                  >
                    {serviceDetails.packageInclusions.map((item, index) => (
                      <li key={index} style={{ marginBottom: "6px" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="service-details__bring"
                  style={{
                    marginBottom: "20px",
                    padding: "15px",
                    background: "#0e0a17",
                    borderRadius: "8px",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "18px",
                      color: "#ced4da",
                      marginBottom: "10px",
                    }}
                  >
                    Things to Bring
                  </h4>
                  <ul
                    style={{
                      listStyleType: "circle",
                      paddingLeft: "20px",
                      color: "#dee2e6",
                    }}
                  >
                    {serviceDetails.thingsToBring.map((item, index) => (
                      <li key={index} style={{ marginBottom: "6px" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="service-details__notes"
                  style={{
                    padding: "15px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    background: "#0e0a17",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "18px",
                      color: "#ced4da",
                      marginBottom: "10px",
                    }}
                  >
                    Important Notes
                  </h4>
                  <ul
                    style={{
                      listStyleType: "square",
                      paddingLeft: "20px",
                      color: "#dee2e6",
                    }}
                  >
                    {serviceDetails.notes.map((item, index) => (
                      <li key={index} style={{ marginBottom: "6px" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="service-details__bottom">
                <div className="row">
                  {/* Services Details */}
                  {serviceDetails.servicecard.map((item, index) => (
                    <div key={index} className="col-xl-4 col-lg-4">
                      <div className="service-details__single">
                        <div className="service-details__icon">
                          <span className="icon-theater"></span>
                        </div>
                        <h3 className="service-details__title">
                          <a href="#">{item.question}</a>
                        </h3>
                        <p className="service-details__text">{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* Service Details End */}
        </div>
      </Layout>
    </>
  );
}
