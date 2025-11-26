
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, handlePopup, handleSidebar, handleMobileMenu }) {
    return (
        <>

        <header className="main-header-two">
            <nav className="main-menu main-menu-two">
                <div className="main-menu-two__wrapper">
                    <div className="main-menu-two__wrapper-inner">
                        <div className="main-menu-two__left">
                            <div className="main-menu-two__logo">
                                <Link href="/"><img src="assets/images/resources/logo-1.png" alt=""/></Link>
                            </div>
                            <div className="main-menu-two__main-menu-box">
                                <Menu/>
                            </div>
                        </div>
                        <div className="main-menu-two__right">
                            <div className="main-menu-two__call desktop-large-only">
                                <div className="main-menu-two__call-icon">
                                    <i className="icon-call"></i>
                                </div>
                                <div className="main-menu-two__call-content">
                                    <p className="main-menu-two__call-sub-title">Call Anytime</p>
                                    <h5 className="main-menu-two__call-number"><Link href="tel:9288006780">+91 99-1131-4655</Link></h5>
                                </div>
                            </div>
                            {/* <div className="main-menu-two__search-box">
                                <Link href="#" className="main-menu-two__search search-toggler icon-search" onClick={handlePopup}></Link>
                            </div> */}
                            <div className="main-menu-two__btn-box desktop-large-only">
                                <Link href="donation-details" className="main-menu-two__btn thm-btn">Donate Now<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                            <Link href="#" className="mobile-nav__toggler mobile-only" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <div className={`stricky-header stricked-menu main-menu main-menu-two ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu main-menu-two">
                    <div className="main-menu-two__wrapper">
                        <div className="main-menu-two__wrapper-inner">
                            <div className="main-menu-two__left">
                                <div className="main-menu-two__logo">
                                    <Link href="/"><img src="assets/images/resources/logo-1.png" alt=""/></Link>
                                </div>
                                <div className="main-menu-two__main-menu-box">
                                    <Menu/>
                                </div>
                            </div>
                            <div className="main-menu-two__right">
                                <div className="main-menu-two__call desktop-large-only">
                                    <div className="main-menu-two__call-icon">
                                        <i className="icon-call"></i>
                                    </div>
                                    <div className="main-menu-two__call-content">
                                        <p className="main-menu-two__call-sub-title">Call Anytime</p>
                                        <h5 className="main-menu-two__call-number"><Link href="tel:9288006780">+91 99-1131-4655</Link></h5>
                                    </div>
                                </div>
                                {/* <div className="main-menu-two__search-box">
                                    <Link href="#" className="main-menu-two__search search-toggler icon-search" onClick={handlePopup}></Link>
                                </div> */}
                                <div className="main-menu-two__btn-box desktop-large-only">
                                    <Link href="donation-details" className="main-menu-two__btn thm-btn">Donate Now<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                                <Link href="#" className="mobile-nav__toggler mobile-only" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>{/*.sticky-header__content */}
        </div>{/*.stricky-header */}
        <MobileMenu handleMobileMenu={handleMobileMenu} />
        
        <style jsx global>{`
            .mobile-only {
                display: none;
            }
            
            @media (max-width: 1199px) {
                .desktop-large-only {
                    display: none !important;
                }
                
                .main-menu-two__main-menu-box .main-menu {
                    display: none !important;
                }
                
                .mobile-only {
                    display: block !important;
                }
                
                .main-menu-two__right {
                    display: flex !important;
                    align-items: center !important;
                }
            }
            
            @media (max-width: 767px) {
                .mobile-only {
                    display: block !important;
                }
            }
            
            @media (min-width: 1200px) {
                .mobile-nav__actions {
                    display: none !important;
                }
                
                .mobile-only {
                    display: none !important;
                }
                
                .main-menu-two__main-menu-box .main-menu {
                    display: block !important;
                }
            }
        `}</style>

        </>
    )
}
