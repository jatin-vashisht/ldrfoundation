import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>
            <ul className="main-menu__list">
                <li>
                    <Link href="/">Home </Link>
                </li>
                <li>
                    <Link href="about">About</Link>
                </li>
                
                
                {/* <li className="dropdown">
                    <Link href="#">Shop</Link>
                    <ul className="shadow-box">
                        <li><Link href="products">Products</Link></li>
                        <li><Link href="product-details">Product Details</Link></li>
                        <li><Link href="cart">Cart</Link></li>
                        <li><Link href="checkout">Checkout</Link></li>
                        <li><Link href="wishlist">Wishlist</Link></li>
                        <li><Link href="account">My Account</Link></li>
                    </ul>
                </li> */}

                
                <li>
                    <Link href="contact">Contact</Link>
                </li>
                <li >
                    <Link href="blog">Blog</Link>
                </li>
                 <li >
                    <Link href="donation">Donation</Link>
                </li>
                {/* <li className="dropdown">
                    <Link href="#">Donation</Link>
                    <ul className="shadow-box">
                        <li></li>
                        <li><Link href="donation-carousel">Donation Carousel</Link></li>
                        <li><Link href="donation-details">Donation Details</Link></li>
                    </ul>
                </li> */}
                <li className="dropdown">
                    <Link href="#">More</Link>
                    <ul className="shadow-box">
                        <li ><Link href="volunteer">Volunteer</Link>
                            {/* <ul>
                                <li><Link href="volunteer">Volunteer</Link></li>
                                <li><Link href="volunteer-carousel">Volunteer Carousel</Link>
                                </li>
                                <li><Link href="become-volunteer">Become Volunteer</Link></li>
                                <li><Link href="volunteer-details">Volunteer Details</Link></li>
                            </ul> */}
                        </li>
                        <li ><Link href="#">Events</Link>
                            
                        </li>
                        {/* <li><Link href="projects">Projects</Link></li> */}
                        {/* <li><Link href="project-details">Project Details</Link></li> */}
                        {/* <li><Link href="cause-details">Cause Details</Link></li> */}
                        <li><Link href="testimonials">Testimonials</Link></li>
                        <li><Link href="faq">FAQs</Link></li>
                        {/* <li><Link href="404">404 Error</Link></li> */}
                    </ul>
                </li>
            </ul>
        </>
    )
}
