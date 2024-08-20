import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <section className="about-us">
        <div className="wrapper-container">
          <div className="wrapper">
            <div className="banner-image-1 banner-image"></div>
            <h1>Gaurav Gupta</h1>
            <p>
              Blockchain developement <br />
Created smart contracts for ethereum transfer between metamask accounts
            </p>
          </div>
          <div className="wrapper">
            <div className="banner-image-2 banner-image"></div>
            <h1>Chirag Bansal</h1>
            <p>
              Machine Learning <br />
Added real time face authentication in the Application
            </p>
          </div>
          <div className="wrapper">
            <div className="banner-image-3 banner-image"></div>
            <h1>Naman Kumawat</h1>
            <p>
              Frontend Developement <br />
Created Home page, login page and Sign up page
            </p>
          </div>
        </div>
    </section>
  );
};

export default AboutUs;
