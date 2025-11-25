"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="About Us">
        {/*About One Start */}
        <section className="about-One">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div
                  className="about-One__left  wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="about-One__img-box">
                    <div className="about-One__img">
                      <img
                        src="medical-support.jpg"
                        alt=""
                      />
                    </div>
                    <div className="about-One__img-2">
                      <img
                        src="poor.jpg"
                        alt=""
                        style={{
                          height: '376px',
                          width: '420px'
                        }}
                      />
                    </div>
                    <div
                      className="about-One__provide-box wow zoomIn animated animated"
                      data-wow-delay="500ms"
                      data-wow-duration="2500ms"
                    >
                      <div className="about-One__provide-icon">
                        <span className="icon-pet-care"></span>
                      </div>
                      <div className="about-One__provide-content">
                        <div className="about-One__provide-count count-box">
                          <h3 className="count-text">250</h3>
                          <span>+</span>
                        </div>
                        <p className="about-One__provide-count-text">
                          Services we provide
                        </p>
                      </div>
                    </div>
                    <div className="about-One__shape-1"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="about-One__right wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">About Us</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                      Empowering Children
                      <br /> Building Futures
                    </h2>
                  </div>
                  <div className="about-One__vission-mission">
                    <div className="about-One__tab-box tabs-box">
                      <ul className="tab-buttons clearfix list-unstyled">
                        <li
                          className={
                            activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"
                          }
                          onClick={() => handleOnClick(1)}
                        >
                          <span>Our Mission</span>
                        </li>
                        <li
                          className={
                            activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"
                          }
                          onClick={() => handleOnClick(2)}
                        >
                          <span>Our Vision</span>
                        </li>
                        <li
                          className={
                            activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"
                          }
                          onClick={() => handleOnClick(3)}
                        >
                          <span>Our Goal</span>
                        </li>
                      </ul>
                      <div className="tabs-content">
                        {/*tab*/}
                        <div
                          className={
                            activeIndex == 1
                              ? "tab fadeInUp animated show active-tab"
                              : "tab fadeInUp animated"
                          }
                        >
                          <div className="tabs-content__inner">
                            <p style={{textAlign: 'justify'}}>
                              To provide comprehensive healthcare, education,
                              and support services to children in need, ensuring
                              every child has access to quality medical care,
                              nutritional support, and educational opportunities
                              for a brighter future.
                            </p>
                          </div>
                        </div>
                        {/*tab*/}
                        {/*tab*/}
                        <div
                          className={
                            activeIndex == 2
                              ? "tab fadeInUp animated show active-tab"
                              : "tab fadeInUp animated"
                          }
                        >
                          <div className="tabs-content__inner">
                            <p>
                              A world where every child, regardless of their
                              circumstances, has the opportunity to grow up
                              healthy, educated, and empowered to reach their
                              full potential and contribute positively to
                              society.
                            </p>
                          </div>
                        </div>
                        {/*tab*/}
                        {/*tab*/}
                        <div
                          className={
                            activeIndex == 3
                              ? "tab fadeInUp animated show active-tab"
                              : "tab fadeInUp animated"
                          }
                        >
                          <div className="tabs-content__inner">
                            <p>
                              To transform the lives of 100,000 children by 2030
                              through sustainable healthcare programs, quality
                              education initiatives, and community support
                              systems that create lasting positive change.
                            </p>
                          </div>
                        </div>
                        {/*tab*/}
                      </div>
                    </div>
                  </div>
                  <div className="about-One__btn-and-need-help">
                    <div className="about-One__btn-box">
                      <Link
                        href="donation-details"
                        className="about-One__btn thm-btn"
                      >
                        Donate Now
                        <span>
                          <i className="icon-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                    <div className="about-One__need-help">
                      <div className="icon">
                        <span className="icon-phone-call"></span>
                      </div>
                      <div className="content">
                        <p>Need help?</p>
                        <h4>
                          <Link href="tel:3195550115">(319) 555-0115</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*About One End */}

        {/*Found One Start */}
        <section className="found-one">
          <div className="found-one__bg">
            <div className="found-one__shape-1 float-bob-y">
              {/* <img src="assets/images/shapes/found-one-shape-1.png" alt="" /> */}
            </div>
          </div>
          <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">Charity Fund</span>
              </div>
              <h2 className="section-title__title title-animation">
                Together We Can <br /> <span>Make</span> a Difference
              </h2>
            </div>
            <div className="row">
              {/*Found One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="found-one__single">
                  <div className="found-one__img-box">
                    <div className="found-one__img">
                      <img
                        src="/ecosystem.jpg"
                        alt=""
                        style={{ height: "210px" }}
                      />
                      <img
                        src="/ecosystem2.jpg"
                        alt=""
                        style={{ height: "210px" }}
                      />
                    </div>
                  </div>
                  <div className="found-one__content">
                    <h4 className="found-one__title">
                      <Link href="donation-details">Help For Ecosystem</Link>
                    </h4>
                    <p className="found-one__text">
                      Supporting environmental conservation and sustainable
                      practices for children's future.
                    </p>
                    <div className="found-one__goals">
                      <div className="found-one__raised">
                        <p>Raised</p>
                        <span>₹40,802</span>
                      </div>
                      <div className="found-one__raised">
                        <p>Goal</p>
                        <span>₹100,000</span>
                      </div>
                    </div>
                    <div className="found-one__progress">
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="75%"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="found-one__btn-box">
                      <Link
                        href="donation-details"
                        className="found-one__btn thm-btn"
                      >
                        Donate Now
                        <span>
                          <i className="icon-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*Found One Single End*/}
              {/*Found One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="found-one__single">
                  <div className="found-one__img-box">
                    <div className="found-one__img">
                      <img src="water.jpg" alt="" />
                      <img src="water2.png" alt="" />
                    </div>
                  </div>
                  <div className="found-one__content">
                    <h4 className="found-one__title">
                      <Link href="donation-details">Water For All</Link>
                    </h4>
                    <p className="found-one__text">
                      Providing clean drinking water access to children in
                      underserved communities.
                    </p>
                    <div className="found-one__goals">
                      <div className="found-one__raised">
                        <p>Raised</p>
                        <span>₹40,802</span>
                      </div>
                      <div className="found-one__raised">
                        <p>Goal</p>
                        <span>₹100,000</span>
                      </div>
                    </div>
                    <div className="found-one__progress">
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="75%"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="found-one__btn-box">
                      <Link
                        href="donation-details"
                        className="found-one__btn thm-btn"
                      >
                        Donate Now
                        <span>
                          <i className="icon-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*Found One Single End*/}
              {/*Found One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="found-one__single">
                  <div className="found-one__img-box">
                    <div className="found-one__img">
                      <img src="vaccine.jpg" alt="" />
                      <img src="vaccine.avif" alt="" />
                    </div>
                  </div>
                  <div className="found-one__content">
                    <h4 className="found-one__title">
                      <Link href="donation-details">Vaccine Aid Camp</Link>
                    </h4>
                    <p className="found-one__text">
                      Organizing vaccination camps to protect children from
                      preventable diseases.
                    </p>
                    <div className="found-one__goals">
                      <div className="found-one__raised">
                        <p>Raised</p>
                        <span>₹40,802</span>
                      </div>
                      <div className="found-one__raised">
                        <p>Goal</p>
                        <span>₹100,000</span>
                      </div>
                    </div>
                    <div className="found-one__progress">
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="75%"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="found-one__btn-box">
                      <Link
                        href="donation-details"
                        className="found-one__btn thm-btn"
                      >
                        Donate Now
                        <span>
                          <i className="icon-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*Found One Single End*/}
            </div>
          </div>
        </section>
        {/*Found One End */}

        {/*Donate One Start */}
        <section className="donate-one">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-6 col-lg-6 wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="donate-one__single">
                  <div
                    className="donate-one__single-bg"
                    // style={{
                    //   backgroundImage:
                    //     " url(assets/images/backgrounds/donate-one-single-bg.jpg)",
                    // }}
                  ></div>
                  <h3 className="donate-one__title">
                    <Link href="donation-details">Help Them With Donation</Link>
                  </h3>
                  <p className="donate-one__text">
                    Your donation directly supports children's healthcare,
                    <br /> education, and essential services. Every contribution
                    <br /> makes a meaningful difference in a child's life and
                    future.
                  </p>
                  <div className="donate-one__btn-box">
                    <Link
                      href="donation-details"
                      className="donate-one__btn thm-btn"
                    >
                      Donate Now
                      <span>
                        <i className="icon-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow slideInRight"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="donate-one__single donate-one__single-2">
                  <div
                    className="donate-one__single-bg"
                    // style={{
                    //   backgroundImage:
                    //     " url(assets/images/backgrounds/donate-one-single-bg-two.jpg)",
                    // }}
                  ></div>
                  <h3 className="donate-one__title">
                    <Link href="become-volunteer">
                      Join With Us To Serve As Volenteer
                    </Link>
                  </h3>
                  <p className="donate-one__text">
                    Join our mission to help children in need. Volunteer
                    <br /> your time and skills to make a direct impact on
                    <br /> young lives and create lasting positive change.
                  </p>
                  <div className="donate-one__btn-box">
                    <Link
                      href="become-volunteer"
                      className="donate-one__btn thm-btn"
                    >
                      Join Now
                      <span>
                        <i className="icon-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Donate One End */}

        {/*Who We Are Start */}
        <section className="who-we-are">
          <div className="who-we-are__shape-3 float-bob-y">
            <img src="assets/images/shapes/who-we-are-shape-3.png" alt="" />
          </div>
          <div className="who-we-are__shape-4 float-bob-x">
            <img src="assets/images/shapes/who-we-are-shape-4.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 wow fadeInLeft" data-wow-delay="300ms">
                <div className="who-we-are__left">
                  <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">Who We Are</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                      Supporting Dreams Changing Lives
                    </h2>
                  </div>
                  <p className="who-we-are__text" style={{textAlign: 'justify'}}>
                    We are a dedicated NGO committed to transforming children's
                    lives through comprehensive healthcare, education, and
                    support services, creating opportunities for every child to
                    thrive.
                  </p>
                  <div className="who-we-are__progress-box">
                    <ul className="who-we-are__progress-list list-unstyled">
                      <li>
                        <div className="who-we-are__progress-single">
                          <p>
                            Total Fund Worth: <span>450,896,070</span>
                          </p>
                          <div className="who-we-are__progress">
                            <div className="bar">
                              <div
                                className="bar-inner count-bar"
                                data-percent="75%"
                                style={{ width: "75%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="who-we-are__progress-single">
                          <p>
                            Total Cases Helped: <span>200+</span>
                          </p>
                          <div className="who-we-are__progress">
                            <div className="bar">
                              <div
                                className="bar-inner count-bar"
                                data-percent="80%"
                                style={{ width: "80%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="who-we-are__btn-box">
                    <Link
                      href="donation-details"
                      className="who-we-are__btn thm-btn"
                    >
                      Donate Now
                      <span>
                        <i className="icon-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 wow slideInRight"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="who-we-are__right">
                  <div className="who-we-are__img-box">
                    <div className="who-we-are__img">
                      <img
                        src="win.jpg"
                        alt=""
                      />
                    </div>
                    <div className="who-we-are__img-2">
                      <img
                        src="/water.jpg"
                        alt=""
                      />
                    </div>
                    <div className="who-we-are__shape-1 img-bounce"></div>
                    <div className="who-we-are__shape-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Who We Are End */}

        {/**Event One Start */}
        <section className="event-one pdb">
          <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">Our Events</span>
              </div>
              <h2 className="section-title__title title-animation">
                Join Us in the Fight <br />
                Against Poverty
              </h2>
            </div>
            <div className="row">
              {/**Event One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="event-one__single">
                  <div className="event-one__img-box">
                    <div className="event-one__img">
                      <img src="/donation.jpg" alt="" />
                    </div>
                    {/* <div className="event-one__date">
                                    <p><span className="icon-clock"></span>20th Dec, 2024</p>
                                </div> */}
                  </div>
                  <div className="event-one__content">
                    <h4 className="event-one__title">
                      <>Donation Drive</>
                    </h4>
                    <p className="event-one__text" style={{textAlign: 'justify'}}>
                      Join our community donation drive to collect essential
                      supplies and funds for children's healthcare and education
                      programs.
                    </p>
                    {/* <p className="event-one__location"><span className="icon-pin"></span>6391 Elgin St. Celina,
                                    10299</p> */}
                    <div className="event-one__btn-box">
                      <Link
                        href="donation-details"
                        className="event-one__btn thm-btn"
                      >
                        Donate Now
                        <span>
                          <i className="icon-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/**Event One Single End*/}
              {/**Event One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="event-one__single">
                  <div className="event-one__img-box">
                    <div className="event-one__img">
                      <img src="/win.jpg" alt="" />
                    </div>
                    {/* <div className="event-one__date">
                                    <p><span className="icon-clock"></span>15th nov, 2023</p>
                                </div> */}
                  </div>
                  <div className="event-one__content">
                    <h4 className="event-one__title">
                      <>win-win survival</>
                    </h4>
                    <p className="event-one__text" style={{textAlign: 'justify'}}>
                      Collaborative survival skills workshop helping children
                      and families build resilience and self-reliance in
                      challenging situations.
                    </p>
                    {/* <p className="event-one__location"><span className="icon-pin"></span>6391 Elgin St. Celina,
                                    10299</p> */}
                    <div className="event-one__btn-box">
                      <Link
                        href="donation-details"
                        className="event-one__btn thm-btn"
                      >
                        Donate Now
                        <span>
                          <i className="icon-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/**Event One Single End*/}
              {/**Event One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay="100ms"
              >
                <div className="event-one__single">
                  <div className="event-one__img-box">
                    <div className="event-one__img">
                      <img
                        src="/education.jpg"
                        alt=""
                        style={{ height: "210px" }}
                      />
                    </div>
                    {/* <div className="event-one__date">
                                    <p><span className="icon-clock"></span>19th Feb, 2024</p>
                                </div> */}
                  </div>
                  <div className="event-one__content">
                    <h4 className="event-one__title">
                      <>Children Education.</>
                    </h4>
                    <p className="event-one__text" style={{textAlign: 'justify'}}>
                      Educational outreach program providing quality learning
                      opportunities and resources to children in underserved
                      communities.
                    </p>
                    {/* <p className="event-one__location"><span className="icon-pin"></span>6391 Elgin St. Celina,
                                    10299</p> */}
                    <div className="event-one__btn-box">
                      <Link
                        href="donation-details"
                        className="event-one__btn thm-btn"
                      >
                        Donate Now
                        <span>
                          <i className="icon-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/**Event One Single End*/}
            </div>
          </div>
        </section>
        {/**Event One End */}
      </Layout>
    </>
  );
}
