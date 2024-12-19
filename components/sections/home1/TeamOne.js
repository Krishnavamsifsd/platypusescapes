"use client"; // Ensures the component runs on the client side

import { useState } from "react";
import Link from "next/link";

export default function TeamOne() {
  // State for dynamic content
  const [teamContent, setTeamContent] = useState({
    tagline: "Our Dive Experts",
    title: "Meet Our Amazing Team",
    members: [
      {
        id: 1,
        name: "Subhash",
        role: "Founder/Professional Trainer",
        image: "/assets/images/team/team-1-1.jpg",
        hoverText:
          "With years of experience, Subhash ensures every dive is safe, fun, and unforgettable for divers of all skill levels.",
        link: "/team-details",
      },
      {
        id: 2,
        name: "Cinderella Christian",
        role: "Manager/Assistant Dive",
        image: "/assets/images/team/team-1-2.jpg",
        hoverText:
          "Cinderella oversees operations and ensures every diving adventure is seamless and enjoyable for our clients.",
        link: "/team-details",
      },
      {
        id: 3,
        name: "Sekhar",
        role: "Manager/Assistant Diver",
        image: "/assets/images/team/team-1-2.jpg",
        hoverText:
          "Sekhar is passionate about guiding divers through breathtaking underwater journeys and promoting marine conservation.",
        link: "/team-details",
      },
      // {
      //   id: 3,
      //   name: "Praveen",
      //   role: "Manager/Assistant Diver",
      //   image: "/assets/images/team/team-1-2.jpg",
      //   hoverText:
      //     "Sekhar is passionate about guiding divers through breathtaking underwater journeys and promoting marine conservation.",
      //   link: "/team-details",
      // },
    ],
  });

  return (
    <>
      {/* Team One Start */}
      <section className="team-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">
                {teamContent.tagline}
              </span>
            </div>
            <h2 className="section-title__title">
              {teamContent.title.split(" & ").map((text, index) => (
                <span key={index}>
                  {text}
                  <br />
                </span>
              ))}
            </h2>
          </div>
          <div className="row">
            {teamContent.members.map((member, index) => (
              <div
                key={member.id}
                className={`col-xl-4 col-lg-6 wow fadeIn${
                  index === 0 ? "Left" : index === 1 ? "Up" : "Right"
                }`}
                data-wow-delay={`${(index + 1) * 100}ms`}
              >
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src={member.image} alt={member.name} />
                      <div className="team-one__content">
                        <h4 className="team-one__name">
                          <Link href={member.link}>{member.name}</Link>
                        </h4>
                        <p className="team-one__sub-title">{member.role}</p>
                      </div>
                      <div className="team-one__content-hover">
                        <h4 className="team-one__name-hover">
                          <Link href={member.link}>{member.name}</Link>
                        </h4>
                        <p className="team-one__sub-title-hover">
                          {member.role}
                        </p>
                        <p className="team-one__text-hover">
                          {member.hoverText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team One End */}
    </>
  );
}
