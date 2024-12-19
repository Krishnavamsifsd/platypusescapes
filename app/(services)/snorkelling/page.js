"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

const serviceCategories = [
  { name: "Snorkelling", link: "/snorkelling", count: 2, active: true },
  {
    name: "Beginner Scuba (Shore Dive)",
    link: "/beginner-scuba-shore-Dive",
    count: 4,
  },
  {
    name: "Beginner Scuba (Boat Dive)",
    link: "/beginner-scuba-boat-Dive",
    count: 1,
  },
];

const serviceDetails = {
  title: "Dive into Fun with Snorkelling Adventures!",
  description:
    "Looking to have a great time together as a family with members of all ages who are hesitant to take a dive? Platypus Escapes invites everyone to experience a fun and relaxing snorkeling activity at our legally owned beach and special snorkeling sites around Visakhapatnam.",
  images: [
    "/assets/images/services/snorkelling-main.jpg",
    "/assets/images/services/snorkelling-site.jpg",
    "/assets/images/services/snorkelling-gear.jpg",
  ],
  additionalText: ["Experience the Magic of Underwater Adventures"],
  description2: [
    "Whether you're with a baby or an 80-year-old elder, snorkeling is safe and enjoyable for everyone. Accompanied by our certified instructor, you'll explore the wonders beneath the waves with top-quality gear, safety measures, and unforgettable Instagram-worthy moments captured in photographs and videos!",
  ],
  description3: [
    "No prior experience or swimming skills are required for this exciting activity. Enjoy 60 minutes of snorkeling fun, including training, underwater exploration, and access to our shower facilities. Special programs are also available for kids, ensuring everyone in the family has a memorable time.",
  ],
  servicecard: [
    {
      question: "What is the price for snorkeling?",
      answer: "The price per person is ₹2000 (excluding 18% GST).",
    },
    {
      question: "Is swimming required for snorkeling?",
      answer: "No, swimming skills are not required for this activity.",
    },
    {
      question: "How long does the snorkeling program last?",
      answer: "The entire program duration is 60 minutes, including training and activity time.",
    },
  ],
  faq: [
    {
      question: "What does the snorkeling package include?",
      answer:
        "The package includes snorkeling gear, briefing and training, 30 minutes of snorkeling, photos & videos, drinking water, and shower facilities.",
    },
    {
      question: "What are the prerequisites for snorkeling?",
      answer: "There are no prerequisites. Anyone can join, regardless of swimming skills or age.",
    },
    {
      question: "What should I bring for the snorkeling activity?",
      answer:
        "Bring a towel, an extra pair of clothes, sunglasses, and a cap. You can also bring your own swimwear or use the half wetsuit provided by us.",
    },
  ],
  priceDetails: {
    pricePerPerson: "₹2000 (Excluding 18% GST)",
    duration: "60 minutes",
    minAge: "Not Applicable",
  },
  packageInclusions: [
    "All snorkeling gear",
    "Briefing & Training",
    "30 minutes of activity experience",
    "Photos & Videos",
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
  notes: [
    "Have a light breakfast like fruits or snacks before the activity.",
  ],
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
  callToAction: "Book SNORKELLING Now",
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
                        <img
                          src={"assets/images/backgrounds/snorkeling.jpg"}
                          alt="Service Detail"
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
                        <a href="#" className="service-details__btn">
                          Read More <span className="icon-arrow-right"></span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="service-details__text-4">
                  {serviceDetails.additionalText[1]}
                </p>
                <div className="service-details__faq-box">
                  <h3 className="service-details__faq-title">
                    Creating Memories One Event at a Time
                  </h3>
                  <div
                    className="accrodion-grp faq-one-accrodion"
                    data-grp-name="faq-one-accrodion-1"
                  >
                    {serviceDetails.faq.map((faq, index) => (
                      <div
                        className={`accrodion ${index === 0 ? "active" : ""}`}
                        key={index}
                      >
                        <div
                          className="accrodion-title"
                          onClick={() => handleToggle(index)}
                        >
                          <h4>{faq.question}</h4>
                          <div className="faq-one-accrodion__count"></div>
                        </div>
                        {isActive.key === index && (
                          <div className="accrodion-content">
                            <div className="inner">
                              <p>{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Service Details End */}
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