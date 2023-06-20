import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

function Project() {
    return (
        <>
            <Header />
            <div className="container-fluid projects-container">
                <div className="row">
                    <div className="col-12">
                        <div className="project-text services-text">
                            <h2>Our Recent Projects</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, soluta. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Temporibus, fuga! </p>
                        </div>
                    </div>

                    <div className="col-12 ">
                        <div className="img-text-parent-container">

                            <div className="img-and-text-container">
                                <div className="img-parent-container">
                                    <div className="img-container">
                                        <img src="./assets/images/project-1.jpg" alt="Projects Image1" />
                                    </div>
                                </div>

                                <div className="img-text">
                                    <p>SEO Optimization</p>
                                    <h4>Designing a better cinema experience</h4>
                                    <div><a href="*" className="hero-btn img-text-btn">View Details</a></div>
                                </div>
                            </div>


                            <div className="img-and-text-container">
                                <div className="img-parent-container">
                                    <div className="img-container">
                                        <img src="./assets/images/project-2.jpg" alt="Projects Image2" />
                                    </div>
                                </div>

                                <div className="img-text">
                                    <p>Digital Marketing</p>
                                    <h4>Building design process within teams</h4>
                                    <div><a href="*" className="hero-btn img-text-btn">View Details</a></div>
                                </div>
                            </div>


                            <div className="img-and-text-container">

                                <div className="img-parent-container">
                                    <div className="img-container">
                                        <img src="./assets/images/project-3.jpg" alt="Projects Image3" />
                                    </div>
                                </div>

                                <div className="img-text">
                                    <p>Keyword Targeting</p>
                                    <h4>How intercom brings play into their design process</h4>
                                    <div><a href="*" className="hero-btn img-text-btn">View Details</a></div>
                                </div>
                            </div>

                            <div className="img-and-text-container">

                                <div className="img-parent-container">
                                    <div className="img-container">
                                        <img src="./assets/images/project-4.jpg" alt="Projects Image4" />
                                    </div>
                                </div>
                                <div className="img-text">
                                    <p>Email Marketing</p>
                                    <h4>Stuck with to-do list, I created a new app for</h4>
                                    <div><a href="*" className="hero-btn img-text-btn">View Details</a></div>
                                </div>
                            </div>

                            <div className="img-and-text-container">
                                <div className="img-parent-container">
                                    <div className="img-container">
                                        <img src="./assets/images/project-5.jpg" alt="Projects Image5" />
                                    </div>
                                </div>
                                <div className="img-text">
                                    <p>Marketing & Reporting</p>
                                    <h4>Examples of different types of sprints</h4>
                                    <div><a href="*" className="hero-btn img-text-btn">View Details</a></div>
                                </div>
                            </div>


                            <div className="img-and-text-container">
                                <div className="img-parent-container">
                                    <div className="img-container">
                                        <img src="./assets/images/project-6.jpg" alt="Projects Image6" />
                                    </div>
                                </div>
                                <div className="img-text">
                                    <p>Development</p>
                                    <h4>Redesining the New York times app</h4>
                                    <div><a href="*" className="hero-btn img-text-btn">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Project;