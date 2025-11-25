'use client'
import Link from "next/link"
import { useState } from "react"

export default function Services() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
        
        {/*Services One Start */}
        <section className="services-one">
            <div className="services-one__shape-1 float-bob-x">
                <img src="assets/images/shapes/services-one-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="services-one__inner">
                    <div className="services-one__tab-box tabs-box">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4">
                                <ul className="tab-buttons clearfix list-unstyled">
                                    
                                    <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}><span>Plantation</span></li>
                                    <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}><span>Education</span></li>
                                    <li className={activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}><span>Support</span></li>
                                    
                                </ul>
                            </div>
                            <div className="col-xl-9 col-lg-8">
                                <div className="tabs-content">
                                    {/*tab*/}
                                    <div className={activeIndex == 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="tabs-content__inner">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single">
                                                        <div className="services-one__icon">
                                                            <span className="icon-hand"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="cause-details/1">Tree Plantation</Link></h3>
                                                        <p className="services-one__text" style={{textAlign: 'justify'}}>Large-scale tree plantation drives to restore forest cover, combat climate change, and create sustainable green spaces for future generations.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single services-one__single-2">
                                                        <div className="services-one__icon">
                                                            <span className="icon-love"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="cause-details/1">Forest Restoration</Link></h3>
                                                        <p className="services-one__text" style={{textAlign: 'justify'}}>Comprehensive forest restoration programs to rehabilitate degraded lands and restore natural ecosystems for biodiversity conservation.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single">
                                                        <div className="services-one__icon">
                                                            <span className="icon-help"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="cause-details/1">Community Gardens</Link>
                                                        </h3>
                                                        <p className="services-one__text" style={{textAlign: 'justify'}}>Creating community gardens and urban green spaces to promote environmental awareness and provide fresh produce to local communities.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single services-one__single-4">
                                                        <div className="services-one__icon">
                                                            <span className="icon-dolor"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="cause-details/1">Environmental Education</Link>
                                                        </h3>
                                                        <p className="services-one__text" style={{textAlign: 'justify'}}>Educational programs to raise awareness about environmental conservation and teach communities sustainable practices for a greener future.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*tab*/}
                                    {/*tab*/}
                                    <div className={activeIndex == 2 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="tabs-content__inner">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single">
                                                        <div className="services-one__icon">
                                                            <span className="icon-hand"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="become-volunteer">School Programs</Link></h3>
                                                        <p className="services-one__text" style={{textAlign: 'justify'}}>Quality education programs designed to give children the knowledge and skills they need for a brighter future and better opportunities.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single services-one__single-2">
                                                        <div className="services-one__icon">
                                                            <span className="icon-love"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="cause-details">Learning Resources</Link></h3>
                                                        <p className="services-one__text" style={{textAlign: 'justify'}}>Providing books, educational materials, and digital learning tools to ensure children have access to quality educational resources.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single">
                                                        <div className="services-one__icon">
                                                            <span className="icon-help"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="donation">Skill Development</Link>
                                                        </h3>
                                                        <p className="services-one__text" style={{textAlign: 'justify'}}>Vocational training and skill development programs to prepare children and youth for future employment and self-reliance.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single services-one__single-4">
                                                        <div className="services-one__icon">
                                                            <span className="icon-dolor"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="donation-details">Scholarships</Link>
                                                        </h3>
                                                        <p className="services-one__text" style={{textAlign: 'justify'}}>Educational scholarships and financial assistance to help deserving children continue their studies and achieve their academic goals.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*tab*/}
                                    {/*tab*/}
                                    <div className={activeIndex == 3 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="tabs-content__inner">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single">
                                                        <div className="services-one__icon">
                                                            <span className="icon-hand"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="become-volunteer">Family Counseling</Link></h3>
                                                        <p className="services-one__text" style={{textAlign: 'justify'}}>Professional counseling and guidance services for families to help them navigate challenges and create supportive environments for children.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single services-one__single-2">
                                                        <div className="services-one__icon">
                                                            <span className="icon-love"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="cause-details">Child Protection</Link></h3>
                                                        <p className="services-one__text" style={{textAlign: 'justify'}}>Comprehensive child protection services ensuring safety, security, and well-being of vulnerable children in challenging circumstances.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single">
                                                        <div className="services-one__icon">
                                                            <span className="icon-help"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="donation">Community Outreach</Link>
                                                        </h3>
                                                        <p className="services-one__text" style={{textAlign: 'justify'}}>Community-based programs that bring essential services directly to children and families in remote and underserved areas.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single services-one__single-4">
                                                        <div className="services-one__icon">
                                                            <span className="icon-dolor"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="donation-details">Volunteer Programs</Link>
                                                        </h3>
                                                        <p className="services-one__text" style={{textAlign: 'justify'}}>Opportunities for individuals to volunteer and make a direct impact in children's lives through various support and mentorship programs.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*tab*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Services One End */}
        
        </>
    )
}