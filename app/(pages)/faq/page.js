"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React, { useState } from "react";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faq1 = [
    {
      question: "What is scuba diving?",
      answer:
        "Scuba diving is an underwater diving activity where divers use a self-contained breathing apparatus (scuba) to explore underwater environments, such as coral reefs, shipwrecks, and marine life.",
    },
    {
      question: "Do I need to know swimming to try scuba diving?",
      answer:
        "While swimming skills are helpful, many beginner-friendly scuba diving programs allow non-swimmers to experience scuba diving in shallow and controlled environments.",
    },
    {
      question: "Is scuba diving safe for beginners?",
      answer:
        "Yes, scuba diving is safe for beginners when proper training is provided by certified instructors, and safety protocols are followed.",
    },
    {
      question: "What should I wear for scuba diving?",
      answer:
        "You'll typically wear a wetsuit or drysuit, fins, a mask, and a buoyancy control device. These items are usually provided by dive centers or can be rented.",
    },
  ];

  const faq2 = [
    {
      question: "What is the minimum age to try scuba diving?",
      answer:
        "The minimum age for scuba diving varies by country, but it is generally 10 years old for introductory programs like Discover Scuba Diving.",
    },
    {
      question: "How deep can I dive as a beginner?",
      answer:
        "Beginners typically dive to a maximum depth of 12 meters (40 feet) under the supervision of a certified instructor.",
    },
    {
      question: "What marine life can I expect to see while diving?",
      answer:
        "Depending on the location, you might see colorful coral reefs, tropical fish, turtles, rays, and even sharks in some areas.",
    },
    {
      question: "How can I get certified for scuba diving?",
      answer:
        "To get certified, you can enroll in an open water diver course provided by organizations like PADI, SSI, or NAUI. Certification includes theoretical learning, confined water training, and open water dives.",
    },
  ];

  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="FAQ">
        <div>
          {/*FAQ One Start*/}
          <section className="faq-page">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="faq-page__left">
                    <div
                      className="accrodion-grp faq-one-accrodion"
                      data-grp-name="faq-one-accrodion-1"
                    >
                      {faq1?.map((item, index) => (
                        <div
                          className={`accrodion ${
                            activeIndex === index ? "active" : ""
                          }`}
                          key={index}
                        >
                          <div
                            className="accrodion-title"
                            onClick={() => toggleAccordion(index)}
                          >
                            <h4>{item.question}</h4>
                            <div className="faq-one-accrodion__count"></div>
                          </div>
                          {activeIndex === index && (
                            <div className="accrodion-content">
                              <div className="inner">
                                <p>{item.answer}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="faq-page__right">
                    <div
                      className="accrodion-grp faq-one-accrodion"
                      data-grp-name="faq-one-accrodion-2"
                    >
                      {faq2?.map((item, index) => (
                        <div
                          className={`accrodion ${
                            activeIndex === index + 4 ? "active" : ""
                          }`}
                          key={index + 4}
                        >
                          <div
                            className="accrodion-title"
                            onClick={() => toggleAccordion(index + 4)}
                          >
                            <h4>{item.question}</h4>
                            <div className="faq-one-accrodion__count"></div>
                          </div>
                          {activeIndex === index + 4 && (
                            <div className="accrodion-content">
                              <div className="inner">
                                <p>{item.answer}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*FAQ One End*/}

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
