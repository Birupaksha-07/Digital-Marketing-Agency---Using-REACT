import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';

function Contact() {
    return (
        <>
            <Header />

            <div className="container-fluid contact-parent-container">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <div className="services-text">
                                <h2>Let's Contact With Us</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi similique voluptatibus repellat
                                    explicabo velit optio expedita nihil dolore ad!</p>
                            </div>
                        </div>

                        <form action="">
                            <div className="col-12 contact-child-container">
                                <div className="row">

                                    <div className="col-sm-6 col-12 ">
                                        <div className="input-field">
                                            <input type="text" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 ">
                                        <div className="input-field">
                                            <input type="text" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 ">
                                        <div className="input-field">
                                            <input type="text" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 ">
                                        <div className="input-field">
                                            <input type="text" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-12 ">
                                        <div className="input-field">
                                            <textarea name="Message" placeholder="Meassge" cols="30" rows="6"></textarea>
                                        </div>
                                    </div>


                                    <div className="col-12">
                                        <div className="term-text">
                                            <input type="checkbox" />
                                            <p> Accept Terms of Services and Privacy Policy</p>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="contact-btn">
                                            <a href="*" className="nav-btn">Send Message</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;