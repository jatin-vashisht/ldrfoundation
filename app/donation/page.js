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
                      <img src="/cancer.webp" alt="" />
                      <img src="/child-cancer.jpg" alt="" />
                    </div>
                  </div>
                  <div className="donate-three__content">
                    <h3 className="donate-three__title">
                      <Link href="donation-details">
                        Children Cancer Help Fund
                      </Link>
                    </h3>
                    <p className="donate-three__text">
                      Helping children with cancer access treatment, medicines,
                      and care to bring them hope and healing.
                    </p>
                    <div className="donate-three__goals">
                      <div className="donate-three__raised">
                        <p>Raised:</p>
                        <span>₹50,090</span>
                      </div>
                      <div className="donate-three__raised">
                        <p>Goal:</p>
                        <span>₹90,090</span>
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
                        style={{ height: "220px" }}
                      />
                      <img src="/healthy-food.png" alt="" />
                    </div>
                  </div>
                  <div className="donate-three__content">
                    <h3 className="donate-three__title">
                      <Link href="donation-details">
                        Clean Water & Health Food
                      </Link>
                    </h3>
                    <p className="donate-three__text">
                      Providing safe drinking water and nutritious meals to
                      prevent disease and hunger in poor communities.
                    </p>
                    <div className="donate-three__goals">
                      <div className="donate-three__raised">
                        <p>Raised:</p>
                        <span>₹40,090</span>
                      </div>
                      <div className="donate-three__raised">
                        <p>Goal:</p>
                        <span>₹60,090</span>
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
                      <img src="/medical-support.jpg" alt="" />
                      <img src="/medicine.jpg" alt="" />
                    </div>
                  </div>
                  <div className="donate-three__content">
                    <h3 className="donate-three__title">
                      <Link href="donation-details">Medicine For Indians</Link>
                    </h3>
                    <p className="donate-three__text">
                      Delivering life-saving medicines and healthcare support to
                      families with limited medical access.
                    </p>
                    <div className="donate-three__goals">
                      <div className="donate-three__raised">
                        <p>Raised:</p>
                        <span>₹90,090</span>
                      </div>
                      <div className="donate-three__raised">
                        <p>Goal:</p>
                        <span>₹1,10,090</span>
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
