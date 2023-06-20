import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

function Services() {
    return (
        <>
        <Header/>
            <div className="container-fluid services-container">
                <div className="row">
                    <div className="col-12">
                        <div className="services-text">
                            <h2>Services We Provided</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi similique voluptatibus repellat
                                explicabo velit optio expedita nihil dolore ad!</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="service-items">

                            <div className="service-item">
                                <div className="card-icon" style={{ backgroundColor: "#13c4a1" }} >
                                    <ion-icon name="chatbox"></ion-icon>
                                </div>
                                <h3>SEO Optimization</h3>
                                <p>Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                                    esse aut, tempora nihil alias vel.</p>
                            </div>

                            <div className="service-item">
                                <div className="card-icon" style={{ backgroundColor: "#6610f2" }}>
                                    <ion-icon name="desktop"></ion-icon>
                                </div>
                                <h3>Digital Marketing</h3>
                                <p>Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                                    esse aut, tempora nihil alias vel.</p>
                            </div>

                            <div className="service-item">
                                <div className="card-icon" style={{ backgroundColor: "#ffb700" }}>
                                    <ion-icon name="bulb"></ion-icon>
                                </div>
                                <h3>Market Research</h3>
                                <p>Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                                    esse aut, tempora nihil alias vel.</p>
                            </div>

                            <div className="service-item">
                                <div className="card-icon" style={{ backgroundColor: "#fc3549" }}>
                                    <ion-icon name="phone-portrait"></ion-icon>
                                </div>
                                <h3>Keyword Targeting</h3>
                                <p>Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                                    esse aut, tempora nihil alias vel.</p>
                            </div>

                            <div className="service-item">
                                <div className="card-icon" style={{ backgroundColor: "#00d280" }}>
                                    <ion-icon name="archive"></ion-icon>
                                </div>
                                <h3>Email Marketing</h3>
                                <p>Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                                    esse aut, tempora nihil alias vel.</p>
                            </div>

                            <div className="service-item">
                                <div className="card-icon" style={{ backgroundColor: "#ff612f" }}>
                                    <ion-icon name="build"></ion-icon>
                                </div>
                                <h3>Marketing & Reporting</h3>
                                <p>Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                                    esse aut, tempora nihil alias vel.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Services;