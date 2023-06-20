import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';

function Blog() {
    return (
        <>
            <Header />
            <div className="container-fluid blog-parent-container">
                <div className="row">
                    <div className="col-12">
                        <div className="blog-head-text">
                            <h2>Latest Articles Updated Weekly</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deserunt quibusdam cum facere rerum tempora.
                            </p>
                        </div>
                    </div>

                    <div className="col-12">

                        <div className="blog-card">

                            <div className="blog-card-left">
                                <img src="./assets/images/blog-1.jpg" alt="Blog" />
                                <div className="blog-left-text">
                                    <p>June 7, 2023</p>
                                    <h4>How to Become a Successful Entry Level UX Designer</h4>
                                </div>
                            </div>

                            <div className="blog-card-right">

                                <div className="blog-card-items">
                                    <div className="blog-card-img">
                                        <img src="./assets/images/blog-2.jpg" alt="Blogs" />
                                    </div>
                                    <div className="blog-card-texts">
                                        <p>March 10, 2023</p>
                                        <h5>2022 Local SEO Success: The Year of Everywhere</h5>
                                    </div>
                                </div>

                                <div className="blog-card-items margin-top">
                                    <div className="blog-card-img">
                                        <img src="./assets/images/blog-3.jpg" alt="Blogs" />
                                    </div>
                                    <div className="blog-card-texts">
                                        <p>June 22, 2023</p>
                                        <h5>The Guide to Running a Client Discovery Process</h5>
                                    </div>
                                </div>

                                <div className="blog-card-items margin-top">
                                    <div className="blog-card-img">
                                        <img src="./assets/images/blog-4.jpg" alt="Blogs" />
                                    </div>
                                    <div className="blog-card-texts">
                                        <p>April 18, 2023</p>
                                        <h5>3 Ways to Get Client Approval for Scope Changes</h5>
                                    </div>
                                </div>

                                <div className="blog-card-items margin-top">
                                    <div className="blog-card-img">
                                        <img src="./assets/images/blog-5.jpg" alt="Blogs" />
                                    </div>
                                    <div className="blog-card-texts">
                                        <p>March 17, 2023</p>
                                        <h5>Top 21 Must-Read Blogs For Creative Agencies</h5>
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

export default Blog;