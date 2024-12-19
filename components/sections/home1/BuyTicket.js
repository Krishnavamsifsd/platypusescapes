"use client"; // Ensures the component runs on the client side

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BuyTicket() {
  // State for dynamic content
  const [ticketContent, setTicketContent] = useState({
    address: "Visakhapatnam, Andhra Pradesh, India",
    timing: "Year-Round | 9 AM - 6 PM",
    title: "Dive into Adventure in Vizag!",
    description:
      "Explore Vizag’s vibrant marine life and historic shipwrecks beneath the Bay of Bengal’s crystal-clear waters. Discover the thrill of scuba diving with Platypus, your gateway to an unforgettable underwater adventure!",
    buttons: [
      {
        id: 1,
        text: "Book Your Dive",
        link: "/book",
        class: "book-dive__btn-1",
      },
      {
        id: 2,
        text: "Learn More",
        link: "/about",
        class: "book-dive__btn-2",
      },
    ],
    ticketImage: "/assets/images/resources/buy-ticket-img.jpg",
  });

  return (
    <>
      {/* Buy Ticket Start */}
      <section className="buy-ticket">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="buy-ticket__left wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <ul className="buy-ticket__address list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-clock"></span>
                    </div>
                    <div className="text">
                      <p>{ticketContent.address}</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-pin"></span>
                    </div>
                    <div className="text">
                      <p>{ticketContent.timing}</p>
                    </div>
                  </li>
                </ul>
                <h3 className="buy-ticket__title">{ticketContent.title}</h3>
                <p className="buy-ticket__text">{ticketContent.description}</p>
                <div className="buy-ticket__btn-box">
                  {ticketContent.buttons.map((button) => (
                    <Link
                      key={button.id}
                      href={button.link}
                      className={`${button.class} thm-btn`}
                    >
                      {button.text}
                      <span className="icon-arrow-right"></span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="buy-ticket__right wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="buy-ticket__img">
                  <Image
                    src={ticketContent.ticketImage}
                    width={65} // Define exact width for layout="intrinsic"
                    height={80} // Define exact height for layout="intrinsic"
                    layout="responsive"
                    alt="Ticket Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Buy Ticket End */}
    </>
  );
}
