import Layout from "@/components/layout/Layout"
import Link from "next/link"

// Define cause data
const causesData = {
  1: {
    title: "Plantation & Aforestation Initiative",
    category: "environment",
    description: "Your donation plants trees and you receive monthly updates on their growth",
    mainImage: "/ecosystem.jpg",
    secondaryImages: ["/ecosystem2.jpg", "/ecosystem.jpg"],
    raised: "₹8,500",
    goal: "₹15,000",
    percentage: "57%",
    longDescription: "Every rupee you donate goes directly towards planting more trees in areas that need reforestation the most. When you contribute to our plantation initiative, you're not just making a donation - you're adopting trees that will grow and thrive for generations to come.",
    detailedText: "Here's what makes our program special: After you donate, we plant native trees in your name and provide you with regular monthly updates about your trees' progress. You'll receive photos, growth measurements, and health reports showing exactly how your contribution is making a real environmental impact. Watch your trees grow from saplings to mature forest guardians!",
    goals: [
      "Monthly photo updates of your planted trees",
      "Growth progress reports every 30 days",
      "GPS location tracking of your trees",
      "Certificate with your tree plantation details"
    ]
  },
  2: {
    title: "Clean Water & Healthy Food",
    category: "health",
    description: "Providing clean drinking water and nutritious meals to children in underserved communities",
    mainImage: "/clean-water.webp",
    secondaryImages: ["/healthy-food.png", "/clean-water.webp"],
    raised: "₹4,090",
    goal: "₹6,090",
    percentage: "67%",
    longDescription: "Access to clean water and nutritious food is a basic human right. Our program ensures that children in underserved communities receive safe drinking water and balanced meals for healthy development.",
    detailedText: "Many children around the world lack access to clean water and proper nutrition. Every day, waterborne diseases affect thousands of children, while malnutrition stunts their growth and development.",
    goals: [
      "Provide clean water to 500 families",
      "Serve 1,000 nutritious meals daily",
      "Install water purification systems",
      "Educate families about nutrition"
    ]
  },
  3: {
    title: "Education For Kids",
    category: "education",
    description: "Providing quality education and learning resources to underprivileged children across India",
    mainImage: "/education.jpg",
    secondaryImages: ["/education2.jpg", "/education.jpg"],
    raised: "₹9,090",
    goal: "₹11,090",
    percentage: "82%",
    longDescription: "We provide quality education and learning resources to underprivileged children across India. Our mission is to ensure that every child has access to basic education and the opportunity for a brighter future.",
    detailedText: "Education is the foundation of progress and development. Many children in rural and underserved areas lack access to quality education due to poverty, lack of infrastructure, and inadequate resources. We bridge this gap by building schools, training teachers, and providing educational materials.",
    goals: [
      "Build 50 new schools in rural areas",
      "Train 500 qualified teachers",
      "Provide educational materials to 10,000 students",
      "Establish digital learning centers"
    ]
  }
};

export default function CauseDetails({ params }) {
  const { id } = params;
  const cause = causesData[id];

  if (!cause) {
    return (
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Cause Not Found">
        <section className="cause-details">
          <div className="container">
            <div className="text-center">
              <h2>Cause Not Found</h2>
              <p>The cause you're looking for doesn't exist.</p>
              <Link href="/" className="thm-btn">Go Back Home</Link>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Cause details">
        {/*Cause Details Start*/}
        <section className="cause-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="cause-details__left">
                  <div className="cause-details__img-box">
                    <div className="cause-details__img">
                      <img src={cause.mainImage} alt={cause.title}/>
                    </div>
                  </div>
                  <div className="cause-details__meta list-unstyled">
                    <Link href="#"><span className="fas fa-heart"></span>{cause.category}</Link>
                  </div>
                  <h2 className="cause-details__title">{cause.title}</h2>
                  <div className="cause-details__progress-box">
                    <div className="cause-details__progress">
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent={cause.percentage} style={{ width: cause.percentage }}>
                        </div>
                      </div>
                    </div>
                    <div className="cause-details__goals">
                      <div className="cause-details__raised">
                        <p><i className="fal fa-donate"></i>{cause.percentage} <span>Raised</span></p>
                      </div>
                      <div className="cause-details__raised">
                        <p><i className="far fa-analytics"></i> {cause.goal}<span>Goal</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="cause-details__donation-amout-list">
                    <span>5</span>
                    <span>10</span>
                    <span>20</span>
                    <span>50</span>
                    <span>100</span>
                    <span>custom</span>
                  </div>
                  <div className="cause-details__pament-box">
                    <h2 className="cause-details__pament-title">Select Payment Method</h2>
                    <div className="cause-details__quote-radio">
                      <label className="custom-radio">
                        <input type="radio" name="myRadios" defaultChecked />
                        <span className="radio-dot"></span>
                        <span className="radio-text">Test Donation</span>
                      </label>
                      <label className="custom-radio">
                        <input type="radio" name="myRadios" />
                        <span className="radio-dot"></span>
                        <span className="radio-text">Offline Donation</span>
                      </label>
                      <label className="custom-radio">
                        <input type="radio" name="myRadios" />
                        <span className="radio-dot"></span>
                        <span className="radio-text">Credit Card</span>
                      </label>
                    </div>
                  </div>
                  <div className="cause-details__form-box">
                    <form className="contact-form-validated cause-details__form" method="post">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6">
                          <h4 className="cause-details__input-title">First Name</h4>
                          <div className="cause-details__input-box">
                            <input type="text" name="firstName" placeholder="First Name" required=""/>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <h4 className="cause-details__input-title">Last Name</h4>
                          <div className="cause-details__input-box">
                            <input type="text" name="lastName" placeholder="Last Name" required=""/>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <h4 className="cause-details__input-title">Email Address</h4>
                          <div className="cause-details__input-box">
                            <input type="email" name="email" placeholder="Email Address" required=""/>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="result"></div>
                  </div>
                  <div className="cause-details__donate-and-btn">
                    <h4 className="cause-details__donate-title">Donation Total:</h4>
                    <div className="cause-details__donate-box">
                      <div className="cause-details__donate">
                        <p>₹10</p>
                      </div>
                      <div className="cause-details__donate-btn">
                        <button type="submit"><span className="fas fa-heart"></span>Donate Now</button>
                      </div>
                    </div>
                  </div>
                  <p className="cause-details__text-1">{cause.longDescription}</p>
                  <p className="cause-details__text-2">{cause.detailedText}</p>
                  <p className="cause-details__text-3">Join us in making a difference. Your contribution, no matter how small, helps us achieve our mission and create lasting positive impact in communities that need it most.</p>
                  <div className="cause-details__img-box-2">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="cause-details__img-box-img">
                          <img src={cause.secondaryImages[0]} alt={cause.title}/>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="cause-details__img-box-img">
                          <img src={cause.secondaryImages[1]} alt={cause.title}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="cause-details__title-1">Our Goals</h2>
                  <p className="cause-details__text-4">We believe in creating sustainable change through targeted interventions. <span className="color-black">Together we can make a difference.</span> If you can contribute <span className="color-base">any amount in rupees</span>, it will help us reach our goals.</p>
                  <p className="cause-details__text-5">Our comprehensive approach ensures that every donation creates maximum impact. We work directly with communities to understand their needs and implement solutions that create lasting change.</p>
                  <div className="cause-details__points-box">
                    <ul className="cause-details__points-list list-unstyled">
                      {cause.goals.slice(0, 2).map((goal, index) => (
                        <li key={index}>
                          <div className="icon">
                            <span className="fas fa-check"></span>
                          </div>
                          <p>{goal}</p>
                        </li>
                      ))}
                    </ul>
                    <ul className="cause-details__points-list list-unstyled">
                      {cause.goals.slice(2, 4).map((goal, index) => (
                        <li key={index + 2}>
                          <div className="icon">
                            <span className="fas fa-check"></span>
                          </div>
                          <p>{goal}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="sidebar">
                  <div className="sidebar__single sidebar__category">
                    <div className="sidebar__title-box">
                      <h3 className="sidebar__title">Categories</h3>
                    </div>
                    <ul className="sidebar__category-list list-unstyled">
                      <li>
                        <Link href="/cause-details/1">Plantation & Environment<span>25</span></Link>
                      </li>
                      <li>
                        <Link href="/cause-details/2">Clean Water & Food<span>35</span></Link>
                      </li>
                      <li>
                        <Link href="/cause-details/3">Education & Learning<span>42</span></Link>
                      </li>
                      <li>
                        <Link href="/donation">Fundraising Events<span>18</span></Link>
                      </li>
                      <li>
                        <Link href="/volunteer">Volunteer Programs<span>28</span></Link>
                      </li>
                      <li>
                        <Link href="/about">Community Outreach<span>33</span></Link>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar__single sidebar__gallery">
                    <div className="sidebar__title-box">
                      <h3 className="sidebar__title">Gallery</h3>
                    </div>
                    <div className="sidebar__gallery-img">
                      <img src="assets/images/project/sidebar-gallery-img-1.jpg" alt=""/>
                    </div>
                    <div className="sidebar__gallery-img">
                      <img src="assets/images/project/sidebar-gallery-img-2.jpg" alt=""/>
                    </div>
                    <div className="sidebar__gallery-img">
                      <img src="assets/images/project/sidebar-gallery-img-3.jpg" alt=""/>
                    </div>
                    <div className="sidebar__gallery-img">
                      <img src="assets/images/project/sidebar-gallery-img-4.jpg" alt=""/>
                    </div>
                  </div>
                  <div className="sidebar__single sidebar__call-to-action">
                    <div className="sidebar__call-to-action-bg"
                         style={{ backgroundImage: ' url(assets/images/project/sidebar-call-to-action-bg.jpg)' }}>
                    </div>
                    <span className="sidebar__call-to-action-sub-title">Call To Action</span>
                    <h3 className="sidebar__call-to-action-title">Together we can make a difference</h3>
                    <div className="sidebar__call-to-action-btn-box">
                      <Link href="/contact" className="sidebar__call-to-action-btn thm-btn">Get in touch<span><i
                        className="icon-arrow-right"></i></span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Cause Details End*/}
      </Layout>
    </>
  )
}