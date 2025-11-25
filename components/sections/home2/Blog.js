import Link from "next/link";
export default function Blog() {
  return (
    <>
      {/*Blog Two Start */}
      <section className="blog-two">
        <div className="container">
          <div className="section-title-two text-center sec-title-animation animation-style1">
            <div className="section-title-two__tagline-box">
              <span className="section-title-two__tagline">News And Blogs</span>
            </div>
            <h2 className="section-title-two__title title-animation">
              Recent{" "}
              <span>
                News
                <img
                  src="assets/images/shapes/section-title-shape.png"
                  alt=""
                />
              </span>{" "}
              And Articles{" "}
            </h2>
          </div>
          <div className="row">
            {/*Blog Two Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="blog-two__single">
                <div className="blog-two__img-box">
                  <div className="blog-two__img">
                    <img src="/elder-care.png" alt="@@title" />
                    <img src="/elder-care2.png" alt="@@title" />
                    <p className="blog-two__link">
                      <span className="sr-only"></span>
                    </p>
                  </div>
                </div>
                <div className="blog-two__content">
                  <ul className="blog-two__meta list-unstyled">
                    <li>
                      <p>
                        <span className="icon-user"></span>Admin
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="icon-comment"></span>Comment
                      </p>
                    </li>
                  </ul>
                  <h3 className="blog-two__title">
                    <p>Caring for the Elderly and Vulnerable Strategy </p>
                  </h3>
                  <p className="blog-two__text" style={{textAlign: 'justify'}}>
                    Comprehensive care strategies for elderly community members
                    and vulnerable populations in need of support. Our dedicated
                    programs ensure dignity.
                  </p>
                  <div className="blog-two__btn-box">
                    <Link
                      href="donation-details"
                      className="blog-two__btn thm-btn"
                    >
                      Read More
                      <span>
                        <i className="icon-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Blog Two Single End*/}
            {/*Blog Two Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInDown"
              data-wow-delay="200ms"
            >
              <div className="blog-two__single">
                <div className="blog-two__img-box">
                  <div className="blog-two__img">
                    <img
                      src="/poor.jpg"
                      alt="@@title"
                      style={{ height: "230px" }}
                    />
                    <img
                      src="/poor2.jpg"
                      alt="@@title"
                      style={{ height: "230px" }}
                    />
                    <p className="blog-two__link">
                      <span className="sr-only"></span>
                    </p>
                  </div>
                </div>
                <div className="blog-two__content">
                  <ul className="blog-two__meta list-unstyled">
                    <li>
                      <p>
                        <span className="icon-user"></span>Admin
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="icon-comment"></span>Comment
                      </p>
                    </li>
                  </ul>
                  <h3 className="blog-two__title">
                    <p>Our Goal Is Help The Poor Child Around The World</p>
                  </h3>
                  <p className="blog-two__text" style={{textAlign: 'justify'}}>
                    Our mission to provide healthcare, education, and essential
                    support to underprivileged children worldwide.
                  </p>
                  <div className="blog-two__btn-box">
                    <Link
                      href="donation-details"
                      className="blog-two__btn thm-btn"
                    >
                      Read More
                      <span>
                        <i className="icon-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Blog Two Single End*/}
            {/*Blog Two Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="blog-two__single">
                <div className="blog-two__img-box">
                  <div className="blog-two__img">
                    <img
                      src="education.jpg"
                      alt="@@title"
                      style={{ height: "230px" }}
                    />
                    <img
                      src="education2.jpg"
                      alt="@@title"
                      style={{ height: "230px" }}
                    />
                    <p className="blog-two__link">
                      <span className="sr-only"></span>
                    </p>
                  </div>
                </div>
                <div className="blog-two__content">
                  <ul className="blog-two__meta list-unstyled">
                    <li>
                      <p>
                        <span className="icon-user"></span>Admin
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="icon-comment"></span>Comment
                      </p>
                    </li>
                  </ul>
                  <h3 className="blog-two__title">
                    <p>Education For Poor Children Is A Must Now</p>
                  </h3>
                  <p className="blog-two__text" style={{textAlign: 'justify'}}>
                    Breaking barriers to education and creating opportunities
                    for children from disadvantaged backgrounds to learn and
                    thrive.
                  </p>
                  <div className="blog-two__btn-box">
                    <Link
                      href="donation-details"
                      className="blog-two__btn thm-btn"
                    >
                      Read More
                      <span>
                        <i className="icon-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Blog Two Single End*/}
          </div>
        </div>
      </section>
      {/*Blog Two End */}
    </>
  );
}
