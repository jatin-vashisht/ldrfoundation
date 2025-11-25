"use client";
import Link from "next/link";
export default function Donate() {
  return (
    <>
      {/*Donate Two Start */}
      <section className="donate-two">
        <div className="donate-two__bg-box">
          <div
            className="donate-two__bg-shape"
            style={{
              backgroundImage:
                " url(assets/images/shapes/donate-two-bg-shape.png)",
            }}
          ></div>
        </div>
        <div className="container">
          <div className="donate-two__top">
            <div className="section-title-two text-left sec-title-animation animation-style2">
              <div className="section-title-two__tagline-box">
                <span className="section-title-two__tagline">
                  Featured Causes
                </span>
              </div>
              <h2
                className="section-title-two__title title-animation"
                style={{ lineHeight: "4rem" }}
              >
                Together We Can <br />
                <span>
                  Make
                  <img
                    src="assets/images/shapes/section-title-shape.png"
                    alt=""
                  />
                </span>{" "}
                Difference{" "}
              </h2>
            </div>
            <div className="donate-two__btn-box">
              <Link href="about" className="donate-two__btn thm-btn">
                Discover more
                <span>
                  <i className="icon-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="row">
            {/*Donate Two Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="donate-two__single">
                <div className="donate-two__img-box">
                  <div className="donate-two__img">
                    <img src="/ecosystem.jpg" alt="" />
                    <img src="/ecosystem2.jpg" alt="" />
                  </div>
                </div>
                <div className="donate-two__content">
                  <h3 className="donate-two__title">
                    <Link href="cause-details/1">Plantation & Aforestation Initiative</Link>
                  </h3>
                  <p className="donate-two__text">
                    Creating green spaces and restoring forests to combat climate change.
                    We plant native trees, restore degraded lands, and educate communities
                    about environmental conservation for a sustainable future.
                  </p>
                  <div className="donate-two__goals">
                    <div className="donate-two__raised">
                      <p>Raised:</p>
                      <span>₹5,090</span>
                    </div>
                    <div className="donate-two__raised">
                      <p>Goal:</p>
                      <span>₹9,090</span>
                    </div>
                  </div>
                  <div className="donate-two__progress">
                    <div className="bar">
                      <div
                        className="bar-inner count-bar"
                        data-percent="75%"
                      ></div>
                    </div>
                  </div>
                  <div className="donate-two__btn-box-2">
                    <Link
                      href="donation-details"
                      className="donate-two__btn-2 thm-btn"
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
            {/*Donate Two Single End*/}
            {/*Donate Two Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInDown"
              data-wow-delay="200ms"
            >
              <div className="donate-two__single donate-two__single-2">
                <div className="donate-two__img-box">
                  <div className="donate-two__img">
                    <img
                      src="/clean-water.webp"
                      alt=""
                      // style={{ height: "200px" }}
                    />
                    <img src="/healthy-food.png" alt="" />
                  </div>
                </div>
                <div className="donate-two__content">
                  <h3 className="donate-two__title">
                    <Link href="cause-details/2">Clean Water & Healthy Food</Link>
                  </h3>
                  <p className="donate-two__text">
                    Providing clean drinking water and nutritious meals to
                    children in underserved communities. Your support ensures
                    healthy growth and development for vulnerable children.
                  </p>
                  <div className="donate-two__goals">
                    <div className="donate-two__raised">
                      <p>Raised:</p>
                      <span>₹4,090</span>
                    </div>
                    <div className="donate-two__raised">
                      <p>Goal:</p>
                      <span>₹6,090</span>
                    </div>
                  </div>
                  <div className="donate-two__progress">
                    <div className="bar">
                      <div
                        className="bar-inner count-bar"
                        data-percent="75%"
                      ></div>
                    </div>
                  </div>
                  <div className="donate-two__btn-box-2">
                    <Link
                      href="donation-details"
                      className="donate-two__btn-2 thm-btn"
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
            {/*Donate Two Single End*/}
            {/*Donate Two Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="donate-two__single donate-two__single-3">
                <div className="donate-two__img-box">
                  <div className="donate-two__img">
                    <img src="/education.jpg" alt="" />
                    <img src="/education2.jpg" alt="" />
                  </div>
                </div>
                <div className="donate-two__content">
                  <h3 className="donate-two__title">
                    <Link href="cause-details/3">Education For Kids</Link>
                  </h3>
                  <p className="donate-two__text">
                    Providing quality education and learning resources to
                    underprivileged children across India. We build schools,
                    train teachers, and supply educational materials to ensure
                    every child has access to basic education and a brighter future.
                  </p>
                  <div className="donate-two__goals">
                    <div className="donate-two__raised">
                      <p>Raised:</p>
                      <span>₹9,090</span>
                    </div>
                    <div className="donate-two__raised">
                      <p>Goal:</p>
                      <span>₹11,090</span>
                    </div>
                  </div>
                  <div className="donate-two__progress">
                    <div className="bar">
                      <div
                        className="bar-inner count-bar"
                        data-percent="75%"
                      ></div>
                    </div>
                  </div>
                  <div className="donate-two__btn-box-2">
                    <Link
                      href="donation-details"
                      className="donate-two__btn-2 thm-btn"
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
            {/*Donate Two Single End*/}
          </div>
        </div>
      </section>
      {/*Donate Two End */}
    </>
  );
}
