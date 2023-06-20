import React from 'react'

function About() {
  return (
    <>
          <div className="container-fluid about-container">
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
        </div>
    </>
  )
}

export default About