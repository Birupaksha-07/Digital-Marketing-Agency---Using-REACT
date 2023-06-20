import React from 'react';


function Footer() {
    return (
        <>
            <div className="container-fluid contact-card-p-div">
                <div className="row">

                    <div className="col-sm-4 col-12 contact-card-p">
                        <div className="contact-card">
                            <div className="card-icon-contact">
                                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                            </div>
                            <div className="card-content-contact">
                                <h3>Mail Here</h3>
                                <a href="mailto:hello@luaz.com">hello@luaz.com</a>
                                <a href="mailto:info@luaz.com">info@luaz.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-12 contact-card-p">
                        <div className="contact-card">

                            <div className="card-icon-contact">
                                <ion-icon name="map-outline" aria-hidden="true"></ion-icon>
                            </div>

                            <div className="card-content-contact">
                                <h3>Visit Here</h3>
                                <address>
                                    27 Division St, New York,<br />
                                    NY 10002, USA
                                </address>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-12 contact-card-p">
                        <div className="contact-card">

                            <div className="card-icon-contact">
                                <ion-icon name="headset-outline" aria-hidden="true"></ion-icon>
                            </div>

                            <div className="card-content-contact">
                                <h3>Call Here</h3>
                                <a href="tel:+1234567890">+123 456 7890</a>
                                <a href="tel:+2414524526">+241 452 4526</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <footer className="bg-dark text-center text-white">
                {/* <!-- Grid container --> */}
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                            className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-google"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                            className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github"></i></a>
                    </section>
                </div>

                {/* <!-- Copyright --> */}
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2023 Copyright:
                    <a className="text-white" href="*"> Birupaksha Dey</a>
                </div>
            </footer>
        </>
    )
}

export default Footer;