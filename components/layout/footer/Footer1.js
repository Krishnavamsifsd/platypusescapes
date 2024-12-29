import Image from "next/image";
import Link from "next/link";

export default function Footer1() {
  return (
    <>
      {/* Site Footer Start */}
      <footer className="site-footer">
        <div className="site-footer__shape-1 float-bob-y">
          <img src="/assets/images/shapes/site-footer-shape-2.png" alt="" />
        </div>
        <div className="site-footer__top">
          <div className="container">
            <div className="site-footer__top-inner">
              <div className="site-footer__logo">
                <Link href="/">
                  <Image
                    src="/assets/images/resources/logo-1.png" // Path to the image
                    alt="Logo" // Alternative text for the image
                    width={150} // Further reduced width (in pixels)
                    height={65} // Further reduced height (in pixels)
                    layout="intrinsic" // Layout that adjusts to the natural aspect ratio
                  />
                </Link>
              </div>
              <div className="site-footer__social">
                <Link href="#">
                  <i className="icon-facebook"></i>
                </Link>
                <Link href="#">
                  <i className="icon-fi"></i>
                </Link>
                <Link href="#">
                  <i className="icon-instagram"></i>
                </Link>
                <Link href="#">
                  <i className="icon-pinterest"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__middle">
          <div className="container">
            <div className="site-footer__middle-inner">
              <div className="row" style={{ justifyContent: "space-between" }}>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="footer-widget__column footer-widget__events">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Platypus Escapes</h3>
                    </div>
                    <ul className="footer-widget__events-list list-unstyled">
                      <li>
                        <p>
                          Thinking about giving scuba diving a try? Have you
                          always wondered what it looks like underwater? Have a
                          look on our social media{" "}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="footer-widget__column footer-widget__link">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Quick links</h3>
                    </div>
                    <ul className="footer-widget__link-list list-unstyled">
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/beginner-scuba-boat-Dive">
                          Beginner squba
                        </Link>
                      </li>
                      <li>
                        <Link href="/open-water-diver">
                          Open water squba dive
                        </Link>
                      </li>

                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="footer-widget__column footer-widget__our-company">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Our Company</h3>
                    </div>
                    <ul className="footer-widget__link-list list-unstyled">
                      <li>
                        <Link href="/schedule-list-2">Jubilee Events</Link>
                      </li>
                      <li>
                        <Link href="/about">Gala Affairs</Link>
                      </li>
                      <li>
                        <Link href="/about">Inspire and Delight Events</Link>
                      </li>
                      <li>
                        <Link href="/about">Enchanted Gatherings</Link>
                      </li>
                      <li>
                        <Link href="/about">Eventful Ventures</Link>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="footer-widget__column footer-widget__contact">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Contact</h3>
                    </div>
                    <div className="footer-widget__contact-inner">
                      <ul className="footer-widget__contact-list list-unstyled">
                        <li>
                          <div className="icon">
                            <span className="icon-envelop"></span>
                          </div>
                          <div className="text">
                            <p>
                              <a href="mailto:help@platypusescapes.co">
                                help@platypusescapes.co
                              </a>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-pin"></span>
                          </div>
                          <div className="text">
                            <p>
                              {" "}
                              Thimmapuram Beach Road, After Vizag Film Nagar
                              Cultural Center, Visakhapatnam 530048
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-call"></span>
                          </div>
                          <div className="text">
                            <p>
                              <a href="tel:+917622893711">
                                +91 76228 93711
                                <br />
                                +91 94342 61503
                              </a>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-inner">
              <p className="site-footer__bottom-text">
                {" "}
                © PlatypusEscapes 2024 | All Rights Reserved
              </p>
              <ul className="list-unstyled site-footer__bottom-menu">
                <li>
                  <Link href="/about">Terms & Condition</Link>
                </li>
                <li>
                  <Link href="/about">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/about">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Site Footer End */}
    </>
  );
}
