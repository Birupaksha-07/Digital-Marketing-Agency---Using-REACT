/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';

function Home() {
  return (
    <>
      <div className="main-container">

      {/* Header  */}
      <Header/>
      

        {/* <!-- Hero Section With Slider --> */}

        <div className="slider-container">

          <div className="container-fluid slide slide-1">
            <div className="row hero-section-container">
              <div className="col">
                <div className="hero-banner-text">
                  <h6>Digital Marketting Agency</h6>
                  <h1>We are available for marketing</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                    doloremque vero ea quibusdam temporibus Lorem
                  </p>
                  <div><a href="*" className="hero-btn">Get Started</a></div>
                </div>
              </div>
              <div className="col">
                <div className="hero-banner-img">
                  <img src="./assets/images/hero-banner.png" alt="Hero Banner" />
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid slide">
            <div className="row hero-section-container">
              <div className="col">
                <div className="hero-banner-text">
                  <h6>Digital Marketting Agency</h6>
                  <h1>We are available for marketing</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                    doloremque vero ea quibusdam temporibus Lorem
                  </p>
                  <div><a href="*" className="hero-btn">Get Started</a></div>
                </div>
              </div>
              <div className="col">
                <div className="hero-banner-img">
                  <img src="./assets/images/Hero-image2.jpg" alt="Hero Banner" />
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid slide">
            <div className="row hero-section-container">
              <div className="col">
                <div className="hero-banner-text">
                  <h6>Digital Marketting Agency</h6>
                  <h1>We are available for marketing</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                    doloremque vero ea quibusdam temporibus Lorem
                  </p>
                  <div><a href="*" className="hero-btn">Get Started</a></div>
                </div>
              </div>
              <div className="col">
                <div className="hero-banner-img">
                  <img src="./assets/images/Hero image3.png" alt="Hero Banner" />
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid slide">
            <div className="row hero-section-container">
              <div className="col">
                <div className="hero-banner-text">
                  <h6>Digital Marketting Agency</h6>
                  <h1>We are available for marketing</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                    doloremque vero ea quibusdam temporibus Lorem
                  </p>
                  <div><a href="*" className="hero-btn">Get Started</a></div>
                </div>
              </div>
              <div className="col">
                <div className="hero-banner-img">
                  <img src="./assets/images/Hero_image_4.png" alt="Hero Banner" />
                </div>
              </div>
            </div>
          </div>

          <div className="arrow left" onclick="controller(-1)"><ion-icon name="chevron-back-outline"></ion-icon></div>
          <div className="arrow right" onclick="controller(+1)"><ion-icon name="chevron-forward-outline"></ion-icon></div>
        </div>


        {/* <!-- Services  --> */}

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


        {/* <!-- Projects --> */}

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


        {/* <!-- About --> */}

        {/* <div className="container-fluid about-container">
          <div className="row">
            <div className="col-sm-6 col-12  about-img-container">
              <img src="./assets/images/about-banner.jpg" alt="About us images" />
            </div>
            <div className="col-sm-6 col-12">
              <div className="about-text-container">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque quia, nam nihil odit asperiores velit
                  Lorem, ipsum dolor.</p>
                <h3>Who We Are</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quis accusantium! Facilis nobis
                  veniam,
                  deserunt fuga voluptates nostrum dignissimos, ex ratione facere debitis est odit. Lorem ipsum dolor sit
                  amet
                  consectetur.</p>
                <h3>Our Success</h3>
                <ul>
                  <li>
                    <span><i className="fa-sharp fa-solid fa-circle-check"></i></span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, eius. Lorem ipsum dolor sit amet.</p>
                  </li>
                  <li>
                    <span><i className="fa-sharp fa-solid fa-circle-check"></i></span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, eius. Lorem ipsum dolor sit amet.</p>
                  </li>
                  <li>
                    <span><i className="fa-sharp fa-solid fa-circle-check"></i></span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, eius. Lorem ipsum dolor sit amet.</p>
                  </li>

                </ul>
                <h3>Our Mission</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed suscipit doloribus inventore similique
                  nihil,
                  obcaecati officia laudantium? Eaque omnis cupiditate et laudantium necessitatibus Lorem ipsum dolor sit
                  amet
                  consectetur adipisicing elit. Voluptatum, error?</p>
              </div>
            </div>
          </div>
        </div> */}
        <About/>


        {/* <!--Question section --> */}

        <div className="container-fluid question-container">
          <div className="row">
            <div className="col questions">
              <p>So What is Next?</p>
              <h2>Are You Ready? Let's Get to Work!</h2>
              <div><a href="*" className="ques-btn">Get Started</a></div>
            </div>
          </div>
        </div>


        {/* <!-- Blog section  --> */}

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


        {/* <!-- Contact section  --> */}

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


        {/* Footer Section  */}
        <Footer/>

      </div>


    </>
  )
}

export default Home;