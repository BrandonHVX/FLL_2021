import React, { useState } from 'react';
import { Link } from 'gatsby';

import img1 from '../../../assets/img/video-bg/poster-1.jpg';
import img2 from '../../../assets/img/video-bg/poster-2.jpg';

export default () => {
  return (
    <section className="about-section section-gap" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="about-video">
              <div
                className="video-poster-one wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="400ms"
                style={{ backgroundImage: 'url(' + img1 + ')' }}
              ></div>
              <div
                className="video-poster-two wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
                style={{ backgroundImage: 'url(' + img2 + ')' }}
              >
                <span className="video-play-icon popup-video" role="button">
                  <i className="fas fa-play" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="about-text-two">
              <div className="section-title left-border mb-40">
                <span className="title-tag">About Us</span>
                <h2 className="title">
                  Delivering The Best Logistics Solutions Nationwide.
                </h2>
              </div>
              <p>
                Active member operating under USDOT 2995941 and MC 70887
                Fastlane is a licensed and bonded freight shipping and trucking
                company. Our business is located St. Louis Missouri where we are
                leaders in freight hauling. Fastlane Logistics is a DOT
                registered motor carrier providing transportation throughout the
                US.
              </p>
              <ul className="about-list">
                <li>
                  {' '}
                  <i className="fas fa-check" /> Fast & Efficient Delivery
                </li>
                <li>
                  {' '}
                  <i className="fas fa-check" /> Daily Operations
                </li>
                <li>
                  {' '}
                  <i className="fas fa-check" /> Nexy Day Lanes
                </li>
              </ul>
              {/* <Link to="/about" className="main-btn">
                Learn More
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
