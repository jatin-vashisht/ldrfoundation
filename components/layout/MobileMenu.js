'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
    return (
        <>
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu} ></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu} ><i className="fa fa-times"></i></span>

                    <div className="logo-box">
                        <Link href="/" aria-label="logo image" onClick={handleMobileMenu}><img src="assets/images/resources/logo-2.png" width="150" alt="" /></Link>
                    </div>

                    <div className="mobile-nav__container">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="main-menu__list">
                                <li><Link href="/" onClick={handleMobileMenu}>Home</Link></li>
                                <li><Link href="/about" onClick={handleMobileMenu}>About</Link></li>
                                <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
                                <li><Link href="/blog" onClick={handleMobileMenu}>Blog</Link></li>
                                <li><Link href="/donation" onClick={handleMobileMenu}>Donation</Link></li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">More</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li><Link href="/testimonials" onClick={handleMobileMenu}>Testimonials</Link></li>
                                        <li><Link href="/events" onClick={handleMobileMenu}>Events</Link></li>
                                        <li><Link href="/volunteer" onClick={handleMobileMenu}>Volunteer</Link></li>
                                        <li><Link href="/faq" onClick={handleMobileMenu}>FAQs</Link></li>
                                    </ul>
                                    <button className={isActive.key == 2 ? "expanded open" : ""} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Mobile-specific elements - shown below 1200px */}
                    <div className="mobile-nav__actions">
                        <div className="mobile-nav__call">
                            <div className="mobile-nav__call-content">
                                <p className="mobile-nav__call-sub-title">Call Anytime</p>
                                <h5 className="mobile-nav__call-number">
                                    <Link href="tel:9911314655">+91 99-1131-4655</Link>
                                </h5>
                            </div>
                        </div>
                        <div className="mobile-nav__btn-box">
                            <Link href="/donation-details" className="mobile-nav__btn thm-btn" style={{color: 'white', textWrap: 'nowrap'}} onClick={handleMobileMenu}>
                                Donate Now
                                <span><i className="icon-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                    
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <Link href="mailto:info@ldrfoundation.com">info@ldrfoundation.com</Link>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <Link href="tel:9911314655">+91 99-1131-4655</Link>
                        </li>
                    </ul>
                    <div className="mobile-nav__top">
                        <div className="mobile-nav__social">
                            <Link href="#" className="fab fa-twitter"></Link>
                            <Link href="https://www.facebook.com/people/LDR-Foundation/100080596929053/?_rdr" className="fab fa-facebook-square"></Link>
                            <Link href="#" className="fab fa-pinterest-p"></Link>
                            <Link href="#" className="fab fa-instagram"></Link>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .mobile-nav__actions {
                    padding: 20px 30px;
                    border-top: 1px solid #e8e8e8;
                    margin-top: 20px;
                }
                
                .mobile-nav__call {
                    margin-bottom: 20px;
                }
                
                .mobile-nav__call-content {
                    text-align: center;
                }
                
                .mobile-nav__call-sub-title {
                    color: #666;
                    font-size: 14px;
                    margin-bottom: 5px;
                }
                
                .mobile-nav__call-number {
                    color: #ff6b35;
                    font-size: 18px;
                    font-weight: 600;
                    margin: 0;
                }
                
                .mobile-nav__call-number a {
                    color: inherit;
                    text-decoration: none;
                }
                
                .mobile-nav__btn-box {
                    text-align: center;
                }
                
                .mobile-nav__btn {
                    display: inline-block;
                    background: #ff6b35;
                    color: #fff;
                    padding: 12px 25px;
                    border-radius: 5px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }
                
                .mobile-nav__btn:hover {
                    background: #e55a2b;
                    color: #fff;
                }
                
                .mobile-nav__btn span {
                    margin-left: 8px;
                }
                
                @media (min-width: 1200px) {
                    .mobile-nav__actions {
                        display: none !important;
                    }
                }
            `}</style>

        </>
    )
}
export default MobileMenu;
