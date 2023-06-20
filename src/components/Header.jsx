import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {

    const [show, setShow] = useState(false);

    const hide = () => {
        setShow(!show);
    }
    const showNav = () => {
        setShow(!show);

    }

    let toggleClass = show ? 'active1' : null;


    return (
        <>
            <header>
                <div className="container-fluid header-parent">
                    <div className="row header-container">
                        <div className="col">
                            <div className="nav-left">
                                <h3>B - <span style={{ color: "#a19905" }}>Agency</span></h3>
                            </div>
                        </div>
                        <div className="col-8 nav-right-container">
                            <div className="nav-right">
                                <ul>
                                    <li><NavLink className="a" to="/" >Home</NavLink></li>
                                    <li><NavLink className="a" to="/services">Services</NavLink></li>
                                    <li><NavLink className="a" to="/project">Project</NavLink></li>
                                    <li><NavLink className="a" to="/about">About</NavLink></li>
                                    <li><NavLink className="a" to="/blog">Blog</NavLink></li>
                                    <li><NavLink className="a" to="/contact">Contact</NavLink></li>
                                    <li className="nav-btn">GetStarted</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="mobile-menu-btn-div" onClick={showNav}>
                                <span className="mobile-menu-btn" id="menu"><i className="fa-solid fa-bars"></i></span>
                            </div>
                        </div>

                    </div>
                </div>
            </header>


            {/* <!-- Navbar for Mobile --> */}

            <div id="side-nav" className={toggleClass}>
                <div className="mobile-nav-container">
                    <div className="nav-top">
                        <div className="logo">
                            <h3>B - <span style={{ color: "#a19905" }}>Agency</span></h3>
                            <div className="nav-close-btn" id="close" onClick={hide}><i className="fa-solid fa-xmark"></i></div>
                        </div>
                        <div className="nav-items">
                            <ul>
                                <li><Link className="a" to="/" >Home</Link></li>
                                <li><Link className="a" to="/services">Services</Link></li>
                                <li><Link className="a" to="/project">Project</Link></li>
                                <li><Link className="a" to="/about">About</Link></li>
                                <li><Link className="a" to="/blog">Blog</Link></li>
                                <li><Link className="a" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="contact-info-container">
                            <div className="phn">
                                <div className="icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="contact-info">
                                    <h5>Call Now</h5>
                                    <p>+91-7384690448</p>
                                </div>
                            </div>
                            <div className="email">
                                <div className="icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="contact-info">
                                    <h5>Send Email</h5>
                                    <p>help@gmail.com</p>
                                </div>
                            </div>
                            <div className="timing">
                                <div className="icon">
                                    <i className="fa-solid fa-clock"></i>
                                </div>
                                <div className="contact-info">
                                    <h5>Mon-Sat 8:00 - 6:30</h5>
                                    <p>Sunday - CLOSED</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="nav-button">
                        <a href="facebook.com"><span><i className="fa-brands fa-facebook"></i></span></a>
                        <a href="twitter.com"><span><i className="fa-brands fa-twitter"></i></span></a>
                        <a href="instagram.com"><span><i className="fa-brands fa-instagram"></i></span></a>
                        <a href="snapchat.com"><span><i className="fa-brands fa-snapchat"></i></span></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;