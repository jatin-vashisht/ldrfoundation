import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Testimonials">
        {/*Testimonial Page Start */}
        <section className="testimonial-page">
          <div className="container">
            <div className="row">
              {/*Testimonial One Single Start */}
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="testimonial-one__single">
                  <div className="testimonial-one__rating">
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                  </div>
                  <p className="testimonial-one__text" style={{textAlign: 'justify'}}>
                    This organization saved my daughter's life when she needed
                    urgent medical treatment. Their compassionate care and
                    support helped our entire family through the most difficult
                    time. We are forever grateful.
                  </p>
                  <div className="testimonial-one__client-info">
                    <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-1-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-one__client-content">
                      <h3 className="testimonial-one__client-name">
                        <Link href="testimonials">Priya Sharma</Link>
                      </h3>
                      <p className="testimonial-one__client-sub-title">
                        Mother of Beneficiary
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*Testimonial One Single End */}
              {/*Testimonial One Single Start */}
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="testimonial-one__single">
                  <div className="testimonial-one__rating">
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                  </div>
                  <p className="testimonial-one__text" style={{textAlign: 'justify'}}>
                    Working with this NGO as a volunteer has been incredibly
                    rewarding. Seeing the direct impact on children's lives and
                    being part of their educational programs fills my heart with
                    joy every day.
                  </p>
                  <div className="testimonial-one__client-info">
                    <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-1-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-one__client-content">
                      <h3 className="testimonial-one__client-name">
                        <Link href="testimonials">Dr. Rajesh Kumar</Link>
                      </h3>
                      <p className="testimonial-one__client-sub-title">
                        Volunteer Doctor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*Testimonial One Single End */}
              {/*Testimonial One Single Start */}
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="testimonial-one__single">
                  <div className="testimonial-one__rating">
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                  </div>
                  <p className="testimonial-one__text" style={{textAlign: 'justify'}}>
                    The scholarship program helped me complete my education when
                    my family couldn't afford it. Now I'm studying to become a
                    teacher so I can give back to other children in need.
                  </p>
                  <div className="testimonial-one__client-info">
                    <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-1-3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-one__client-content">
                      <h3 className="testimonial-one__client-name">
                        <Link href="testimonials">Anita Patel</Link>
                      </h3>
                      <p className="testimonial-one__client-sub-title">
                        Scholarship Recipient
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*Testimonial One Single End */}
              {/*Testimonial One Single Start */}
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="testimonial-one__single">
                  <div className="testimonial-one__rating">
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                  </div>
                  <p className="testimonial-one__text" style={{textAlign: 'justify'}}>
                    As a corporate partner, we've seen firsthand how efficiently
                    this organization uses donations. Their transparency and
                    dedication to children's welfare makes them our preferred
                    charity partner.
                  </p>
                  <div className="testimonial-one__client-info">
                    <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-1-4.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-one__client-content">
                      <h3 className="testimonial-one__client-name">
                        <Link href="testimonials">Suresh Gupta</Link>
                      </h3>
                      <p className="testimonial-one__client-sub-title">
                        Corporate Donor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*Testimonial One Single End */}
              {/*Testimonial One Single Start */}
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="testimonial-one__single">
                  <div className="testimonial-one__rating">
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                  </div>
                  <p className="testimonial-one__text" style={{textAlign: 'justify'}}>
                    The nutrition program transformed my son's health
                    completely. He was severely malnourished, but with their
                    support and care, he's now a healthy, active child who loves
                    going to school.
                  </p>
                  <div className="testimonial-one__client-info">
                    <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-1-5.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-one__client-content">
                      <h3 className="testimonial-one__client-name">
                        <Link href="testimonials">Meera Singh</Link>
                      </h3>
                      <p className="testimonial-one__client-sub-title">
                        Grateful Parent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*Testimonial One Single End */}
              {/*Testimonial One Single Start */}
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="testimonial-one__single">
                  <div className="testimonial-one__rating">
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                  </div>
                  <p className="testimonial-one__text" style={{textAlign: 'justify'}}>
                    Their vaccination camps in our village have protected
                    hundreds of children from diseases. The medical team is
                    professional, caring, and truly committed to children's
                    health and wellbeing.
                  </p>
                  <div className="testimonial-one__client-info">
                    <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-1-6.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-one__client-content">
                      <h3 className="testimonial-one__client-name">
                        <Link href="testimonials">Ramesh Yadav</Link>
                      </h3>
                      <p className="testimonial-one__client-sub-title">
                        Village Leader
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*Testimonial One Single End */}
            </div>
          </div>
        </section>
        {/*Testimonial Page End */}
      </Layout>
    </>
  );
}
