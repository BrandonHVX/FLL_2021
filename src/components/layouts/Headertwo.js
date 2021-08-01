import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import Navmenu from './Navmenu';
import OffCanvas from './Offcanvas';
import classNames from 'classnames';
import Scroll from './Scroll';
import logo from '../../assets/img/fast-logo-white.png';

export default () => {
  const [classmethod, setClassmethod] = useState(false);
  const [togglemethod, setTogglemethod] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setIsMobile(window.innerWidth < 991);
      },
      false
    );
    window.addEventListener(
      'load',
      () => {
        setIsMobile(window.innerWidth < 991);
      },
      false
    );
    // Sticky header
    window.addEventListener(
      'scroll',
      () => {
        setIsTop(window.scrollY > 110);
      },
      false
    );
  }, []);

  const addClass = () => {
    setClassmethod(true);
  };

  const removeClass = () => {
    setClassmethod(false);
  };

  const toggleClass = () => {
    setTogglemethod(!togglemethod);
  };

  const mobileactive = isMobile ? 'breakpoint-on' : '';
  const stickyheader = isTop ? 'sticky-on' : '';

  return (
    <Fragment>
      <header className={`header-two sticky-header ${stickyheader}`}>
        {/* Header Topbar */}
        <div className="header-topbar">
          <div className="container-fluid container-1600">
            <div className="header-topbar-inner d-md-flex align-items-center justify-content-between">
              {/* Contact Info */}
              <ul className="contact-info">
                <li>
                  <Link to="#">
                    <i className="far fa-phone" />
                    314-422-1550
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="far fa-envelope-open" />
                    info@fastlanelogistics.com
                  </Link>
                </li>
                <li>
                  <i className="far fa-map-marker-alt" />
                  St. Louis, MO USA
                </li>
              </ul>
              {/* Social Links */}
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
        {/* Header Menu  */}
        <div className="header-nav sticky-nav">
          <div className="container-fluid container-1600">
            <div className={`nav-container ${mobileactive}`}>
              {/* Site Logo */}
              <div className="site-logo">
                <Link to="/hometwo">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
              {/* Main Menu */}
              <div
                className={classNames('nav-menu d-lg-flex align-items-center', {
                  'menu-on': togglemethod,
                })}
              >
                {/* Navbar Close Icon */}
                <div className="navbar-close" onClick={toggleClass}>
                  <div className="cross-wrap">
                    <span />
                    <span />
                  </div>
                </div>
                {/* Mneu Items */}
                <div className="menu-items">
                  <ul>
                    <li>
                      <Scroll type="id" element="about">
                        <a className="nav-link" href="#download">
                          About Us
                        </a>
                      </Scroll>
                    </li>
                    <li>
                      <Scroll type="id" element="solutions">
                        <a className="nav-link" href="#download">
                          Solutions
                        </a>
                      </Scroll>
                    </li>
                    <li>
                      <Scroll type="id" element="profile">
                        <a className="nav-link" href="#download">
                          Profile
                        </a>
                      </Scroll>
                    </li>
                    <li>
                      <Scroll type="id" element="careers">
                        <a className="nav-link" href="#download">
                          Careers
                        </a>
                      </Scroll>
                    </li>
                    <li>
                      <Scroll type="id" element="faq">
                        <a className="nav-link" href="#download">
                          FAQ
                        </a>
                      </Scroll>
                    </li>{' '}
                    <li>
                      <Scroll type="id" element="contact">
                        <a className="nav-link" href="#download">
                          Contact
                        </a>
                      </Scroll>
                    </li>
                    <li className="nav-item">
                      <Link to="/contactus/">
                        <a className="nav-link" href="#contact">
                          REQUEST A QUOTE
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Pushed Item */}
                <div className="nav-pushed-item" />
              </div>
              {/* Navbar Extra  */}
              <div className="navbar-extra d-flex align-items-center">
                {/* language selection */}
                {/* <div className="language-selection">
                  <Link className="language-btn" to="#">
                    Eng
                    <i className="far fa-angle-down" />
                  </Link>
                  <ul className="language-list">
                    <li>
                      <Link to="#">Eng</Link>
                    </li>
                    <li>
                      <Link to="#">Ban</Link>
                    </li>
                    <li>
                      <Link to="#">USA</Link>
                    </li>
                  </ul>
                </div> */}
                {/* off canvas menu toggler*/}
                {/* <div className="offcanvas-toggler" onClick={addClass}>
                  <span>
                    <span />
                    <span />
                    <span />
                  </span>
                </div> */}
                {/* Navbar Toggler */}
                <div
                  className={classNames('navbar-toggler', {
                    active: togglemethod,
                  })}
                  onClick={toggleClass}
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={classNames('offcanvas-wrapper', {
          'show-offcanvas': classmethod,
        })}
      >
        <div
          className={classNames('offcanvas-overly', {
            'show-overly': classmethod,
          })}
          onClick={removeClass}
        />
        <div className="offcanvas-widget">
          <Link to="#" className="offcanvas-close" onClick={removeClass}>
            <i className="fal fa-times" />
          </Link>
          <OffCanvas />
        </div>
      </div>
    </Fragment>
  );
};
