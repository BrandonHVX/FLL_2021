import React from 'react';
import { Link } from 'gatsby';

import Fastdriver from '../../../assets/img/fast-driver.jpg';
import line1 from '../../../assets/img/lines/03.png';
import line2 from '../../../assets/img/lines/04.png';

export default () => {
  return (
    <section className="shape-style-one wcu-section  box-style ">
      <div className="container">
        <div className="wcu-inner">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div
                className="wcu-image text-center text-lg-left wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="400ms"
              >
                <img src={Fastdriver} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="wcu-text">
                <div className="section-title left-border mb-40">
                  <span className="title-tag">Careers</span>
                  <h2 className="title">
                    Now Hiring <br /> Experienced Drivers
                  </h2>
                </div>
                <p>
                  We are currently hiring expericed drivers to join our team.
                </p>
                <ul className="wcu-list">
                  <li>
                    <i className="far fa-check-circle" /> $2,000 Sign on Bonus
                  </li>
                  <li>
                    <i className="far fa-check-circle" /> Health, vision dental
                    benefits package
                  </li>
                  <li>
                    <i className="far fa-check-circle" /> Accepting drivers with
                    all endorsements
                  </li>
                </ul>
                <Link to="/careers" className="main-btn main-btn-4">
                  Apply Today
                </Link>
              </div>
            </div>
          </div>
          <img src={line1} alt="shape" className="line-shape-one" />
          <img src={line2} alt="shape" className="line-shape-two" />
        </div>
      </div>
    </section>
  );
};
