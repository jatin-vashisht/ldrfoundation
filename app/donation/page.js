"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Donation">
        {/*Donation Page Start*/}
        <section className="donation-page">
          <div className="container">
            <div className="row">
              {/*Donate Three Single Start*/}
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="donate-three__single">
                  <div className="donate-three__img-box">
                    <div className="donate-three__img">
                      <img src="/ecosystem.jpg" alt="" />
                      <img src="/ecosystem2.jpg" alt="" />
                    </div>
                  </div>
                  <div className="donate-three__content">
                    <h3 className="donate-three__title">
                      <Link href="cause-details/1">
                        Plantation & Aforestation Initiative
                      </Link>
                    </h3>
                    <p className="donate-three__text">
                      Creating green spaces and restoring forests to combat
                      climate change. We plant native trees, restore degraded
                      lands, and educate communities about environmental
                      conservation for a sustainable future.
                    </p>
                    <div className="donate-three__goals">
                      <div className="donate-three__raised">
                        <p>Raised:</p>
                        <span>₹5,090</span>
                      </div>
                      <div className="donate-three__raised">
                        <p>Goal:</p>
                        <span>₹9,090</span>
                      </div>
                    </div>
                    <div className="donate-three__progress">
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="75%"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div
                      className="donate-three__btn-box-2"
                      style={{ marginTop: "20px", textAlign: "center" }}
                    >
                      <Link
                        href="donation-details"
                        className="donate-three__btn-2 thm-btn"
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
              {/*Donate Three Single End*/}
              {/*Donate Three Single Start*/}
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="donate-three__single donate-three__single-2">
                  <div className="donate-three__img-box">
                    <div className="donate-three__img">
                      <img
                        src="/clean-water.webp"
                        alt=""
                        // style={{ height: "220px" }}
                      />
                      <img src="/healthy-food.png" alt="" />
                    </div>
                  </div>
                  <div className="donate-three__content">
                    <h3 className="donate-three__title">
                      <Link href="cause-details/2">
                        Clean Water & Healthy Food
                      </Link>
                    </h3>
                    <p className="donate-three__text">
                      Providing clean drinking water and nutritious meals to
                      children in underserved communities. Your support ensures
                      healthy growth and development for vulnerable children.
                    </p>
                    <div className="donate-three__goals">
                      <div className="donate-three__raised">
                        <p>Raised:</p>
                        <span>₹4,090</span>
                      </div>
                      <div className="donate-three__raised">
                        <p>Goal:</p>
                        <span>₹6,090</span>
                      </div>
                    </div>
                    <div className="donate-three__progress">
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="75%"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div
                      className="donate-three__btn-box-2"
                      style={{ marginTop: "20px", textAlign: "center" }}
                    >
                      <Link
                        href="donation-details"
                        className="donate-three__btn-2 thm-btn"
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
              {/*Donate Three Single End*/}
              {/*Donate Three Single Start*/}
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="donate-three__single donate-three__single-3">
                  <div className="donate-three__img-box">
                    <div className="donate-three__img">
                      <img src="/education.jpg" alt="" />
                      <img src="/education2.jpg" alt="" />
                    </div>
                  </div>
                  <div className="donate-three__content">
                    <h3 className="donate-three__title">
                      <Link href="cause-details/3">Education For Kids</Link>
                    </h3>
                    <p className="donate-three__text">
                      Providing quality education and learning resources to
                      underprivileged children across India. We build schools,
                      train teachers, and supply educational materials to ensure
                      every child has access to basic education and a brighter
                      future.
                    </p>
                    <div className="donate-three__goals">
                      <div className="donate-three__raised">
                        <p>Raised:</p>
                        <span>₹9,090</span>
                      </div>
                      <div className="donate-three__raised">
                        <p>Goal:</p>
                        <span>₹11,090</span>
                      </div>
                    </div>
                    <div className="donate-three__progress">
                      <div className="bar">
                        <div
                          className="bar-inner count-bar"
                          data-percent="75%"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div
                      className="donate-three__btn-box-2"
                      style={{ marginTop: "20px", textAlign: "center" }}
                    >
                      <Link
                        href="donation-details"
                        className="donate-three__btn-2 thm-btn"
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
            </div>
          </div>
        </section>
        {/*Donation Page End*/}
      </Layout>
    </>
  );
}
