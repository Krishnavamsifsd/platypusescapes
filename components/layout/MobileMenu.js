"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
  return (
    <>
      {/*End Mobile Menu */}
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        />
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <Link href="/" aria-label="logo image">
              <Image
                src="/assets/images/resources/logo-1.png"
                alt="Logo"
                width={150}
                height={65}
                layout="intrinsic"
                ratio
              />{" "}
            </Link>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li
                className={isActive.key == 1 ? "dropdown current" : "dropdown"}
              >
                <Link href="/" onClick={handleMobileMenu}>
                  Home{" "}
                </Link>
              </li>

              <li
                className={isActive.key == 2 ? "dropdown current" : "dropdown"}
              >
                <Link href="#" onClick={handleMobileMenu}>
                  About
                </Link>
                <ul
                  style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
                >
                  <li>
                    <Link href="/about" onClick={handleMobileMenu}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" onClick={handleMobileMenu}>
                      Team
                    </Link>
                  </li>

                  <li>
                    <Link href="/testimonials" onClick={handleMobileMenu}>
                      Testimonials
                    </Link>
                  </li>

                  <li>
                    <Link href="/gallery" onClick={handleMobileMenu}>
                      Gallery
                    </Link>
                  </li>

                  <li>
                    <Link href="/faq" onClick={handleMobileMenu}>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.platypusfoundation.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleMobileMenu}
                    >
                      Marine conversion
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/404" onClick={handleMobileMenu}>
                      404 Error
                    </Link>
                  </li> */}
                </ul>
                <div
                  className={
                    isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"
                  }
                  onClick={() => handleToggle(2)}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              <li
                className={isActive.key == 3 ? "dropdown current" : "dropdown"}
              >
                <Link href="#" onClick={handleMobileMenu}>
                  Activities
                </Link>

                <ul
                  style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}
                >
                  <li>
                    <Link href="/snorkelling" onClick={handleMobileMenu}>
                      Snorkelling
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/beginner-scuba-shore-Dive/"
                      onClick={handleMobileMenu}
                    >
                      Beginner Scuba (Shore Dive)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/beginner-scuba-boat-Dive/"
                      onClick={handleMobileMenu}
                    >
                      Beginner Scuba (Boat Dive)
                    </Link>
                  </li>
                </ul>

                <div
                  className={
                    isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"
                  }
                  onClick={() => handleToggle(3)}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              <li
                className={isActive.key == 4 ? "dropdown current" : "dropdown"}
              >
                <Link href="#" onClick={handleMobileMenu}>
                  Courses
                </Link>
                <ul
                  style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}
                >
                  {" "}
                  <li>
                    <Link href="/ocean-swiming" onClick={handleMobileMenu}>
                      Open Water Swimming Course
                    </Link>
                  </li>
                  <li>
                    <Link href="/open-water-diver" onClick={handleMobileMenu}>
                      Open Water Scuba Diver
                    </Link>
                  </li>
                  <li>
                    <Link href="/advanced-diver" onClick={handleMobileMenu}>
                      Advanced diver
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/emergency-first-aid-response"
                      onClick={handleMobileMenu}
                    >
                      Emergency First Aid Response
                    </Link>
                  </li>
                  <li>
                    <Link href="/rescue-diver" onClick={handleMobileMenu}>
                      Rescue diver
                    </Link>
                  </li>
                </ul>

                <div
                  className={
                    isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"
                  }
                  onClick={() => handleToggle(4)}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              <li>
                <Link href="/contact" onClick={handleMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:needhelp@packageName__.com">
                help@platypusescapes.co
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:">+91 76228 93711 </a>
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-facebook-square" />
              <a href="#" className="fab fa-pinterest-p" />
              <a href="#" className="fab fa-instagram" />
            </div>
            {/* /.mobile-nav__social */}
          </div>
          {/* /.mobile-nav__top */}
        </div>
        {/* /.mobile-nav__content */}
      </div>

      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
};
export default MobileMenu;
