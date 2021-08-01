import React from 'react';
import { Link } from 'gatsby';

import illustration from '../../../assets/img/illustration/01.png';

export default () => {
  return (
    <section
      className="about-section about-illustration-img section-gap"
      id="about"
    >
      <div className="container">
        <div className="illustration-img">
          <img src={illustration} alt="" />
        </div>
        <div className="row no-gutters justify-content-lg-end justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="about-text">
              <div className="section-title left-border mb-40">
                <span className="title-tag">Fastlane Logistics</span>
                <h2 className="title">
                  Flexible Pricing
                  <br /> Years of Experience{' '}
                </h2>
              </div>
              <p className="mb-25">
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
                  <i className="far fa-check" /> Business &amp; Consulting
                  Agency
                </li>
                <li>
                  {' '}
                  <i className="far fa-check" /> Awards Winning Business Comapny
                </li>
              </ul>
              <Link to="/about" className="main-btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
