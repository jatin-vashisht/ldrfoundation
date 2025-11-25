"use client";
import CounterUp from "@/components/elements/CounterUp";
import Link from "next/link";
export default function About() {
  return (
    <>
      {/*About Two Start */}
      <section className="about-two">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 wow slideInLeft"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <div className="about-two__left">
                <div className="about-two__img" style={{ height: "600px" }}>
                  <img src="/about.jpg" alt="" style={{ height: "600px" }} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
              <div className="about-two__right">
                <div className="section-title-two text-left sec-title-animation animation-style2">
                  <div className="section-title-two__tagline-box">
                    <span className="section-title-two__tagline">About Us</span>
                  </div>
                  <h2
                    className="section-title-two__title title-animation"
                    style={{ lineHeight: "4rem" }}
                  >
                    Helping To Make Our World&nbsp;
                    <span>
                      Better
                      <img
                        src="assets/images/shapes/section-title-shape.png"
                        alt=""
                      />
                    </span>{" "}
                    Living{" "}
                  </h2>
                </div>
                <p className="about-two__text" style={{textAlign: 'justify'}}>
                  We are dedicated to providing comprehensive healthcare,
                  education, and support services to children in need. Our
                  mission is to ensure every child has access to quality medical
                  care, nutritional support, educational opportunities, and a
                  safe environment where they can grow and thrive.
                </p>
                <div className="about-two__counter-box">
                  <div className="row">
                    {/*About Two Counter Single Start*/}
                    <div
                      className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp"
                      data-wow-delay="100ms"
                    >
                      <div className="about-two__counter-single">
                        <div className="about-two__icon">
                          <span className="icon-hand"></span>
                        </div>
                        <h4 className="about-two__title">
                          <Link href="#">Children Helped</Link>
                        </h4>
                        <div className="about-two__count count-box">
                          <h2>
                            {" "}
                            <CounterUp end={40000} />{" "}
                          </h2>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                    {/*About Two Counter Single End*/}
                    {/*About Two Counter Single Start*/}
                    <div
                      className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp"
                      data-wow-delay="200ms"
                    >
                      <div className="about-two__counter-single about-two__counter-single-2">
                        <div className="about-two__icon">
                          <span className="icon-love"></span>
                        </div>
                        <h4 className="about-two__title">
                          <Link href="#">Medical Treatments</Link>
                        </h4>
                        <div className="about-two__count count-box">
                          <p>₹</p>
                          <h2>
                            {" "}
                            <CounterUp end={509953} />{" "}
                          </h2>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                    {/*About Two Counter Single End*/}
                    {/*About Two Counter Single Start*/}
                    <div
                      className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp"
                      data-wow-delay="300ms"
                    >
                      <div className="about-two__counter-single about-two__counter-single-3">
                        <div className="about-two__icon">
                          <span className="icon-dolor"></span>
                        </div>
                        <h4 className="about-two__title">
                          <Link href="#">Educational Programs</Link>
                        </h4>
                        <div className="about-two__count count-box">
                          <h2>
                            {" "}
                            <CounterUp end={4442471} />{" "}
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/*About Two Counter Single End*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Two End */}
    </>
  );
}
