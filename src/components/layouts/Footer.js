import React from 'react';
import { Link } from 'gatsby';

import logo from '../../assets/img/fast-logo-white.png';
import shape1 from '../../assets/img/lines/01.png';
import shape2 from '../../assets/img/lines/02.png';

import img1 from '../../assets/img/instagram/01.jpg';
import img2 from '../../assets/img/instagram/02.jpg';
import img3 from '../../assets/img/instagram/03.jpg';
import img4 from '../../assets/img/instagram/04.jpg';
import img5 from '../../assets/img/instagram/05.jpg';
import img6 from '../../assets/img/instagram/06.jpg';

const instapost = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
];

export default () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-widget">
          <div className="row">
            <div className="col-lg-3 col-sm-6 order-3">
              <div className="widget nav-widget">
                <h4 className="widget-title">Quick Links</h4>
                <ul>
                  <li>
                    <Link to="#">Company History</Link>
                  </li>
                  <li>
                    <Link to="#">Latest News &amp; Blog</Link>
                  </li>
                  <li>
                    <Link to="#">Popular Services</Link>
                  </li>
                  <li>
                    <Link to="#">Business &amp; Consulting</Link>
                  </li>
                  <li>
                    <Link to="#">Financial Planning</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 order-lg-4 order-4">
              <div className="widget contact-widget">
                <h4 className="widget-title">Contact Us</h4>
                <p>Fastlane Logistics LLC</p>
                <ul className="contact-infos">
                  <li>
                    <Link to="tel:+0123456789">
                      <i className="far fa-phone" />
                      314-422-1550
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:support@gmail.com">
                      <i className="far fa-envelope-open" />
                      office@fastlane-logistics.com
                    </Link>
                  </li>
                  <li>
                    {' '}
                    <i className="far fa-map-marker-alt" /> PO Box 2477 St.
                    Louis MO 63032 suite 106
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-lg-5 order-5">
              <div className="widget site-info-widget">
                <div className="footer-logo">
                  <img src={logo} alt="" width={250} />
                </div>
                <p>Fastlane - Always ahead of the Situation</p>
                <ul className="social-links">
                  <li>
                    <Link to="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-behance" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-dribbble" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p className="copyright-text">
            <span>Fastlane Logistics 2021</span>
            <span>All Rights Reserved.</span>
          </p>
          <Link to="#" className="back-to-top" onClick={scrollToTop}>
            <i className="far fa-angle-up" />
          </Link>
        </div>
      </div>
      {/* Lines */}
      <img src={shape1} alt="line" className="line-one" />
      <img src={shape2} alt="line" className="line-two" />
    </footer>
  );
};
