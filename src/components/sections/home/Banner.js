import React from 'react';
import { Link } from 'gatsby';
import Slider from 'react-slick';

import img1 from '../../../assets/img/banner/fast-slider-2.jpg';
import img2 from '../../../assets/img/banner/fast-slider-1.jpg';
import img3 from '../../../assets/img/banner/fast-slider-3.jpg';

const bannerpost = [
  {
    img: img1,
    tag: 'Expedited Delivery',
    title: 'Delivering The Best Logistics Solutions Nationwide.',
    btntext: 'Get Started Now',
    btntext1: 'Our Services',
  },
  {
    img: img2,
    tag: 'Fastlane Final Mile',
    title: 'We Offer A Variety of Residential Delivery Options.',
    btntext: 'Get Started Now',
    btntext1: 'Our Services',
  },
  {
    img: img3,
    tag: 'Long Haul Transport',
    title: 'Fast Delivery For Regional and Cross-Country Distances',
    btntext: 'Get Started Now',
    btntext1: 'Our Services',
  },
];

export default () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    arrows: false,
    fade: false,
    dots: false,
    swipe: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="banner-section">
      <Slider className="banner-slider" id="bannerSlider" {...settings}>
        {bannerpost.map((item, i) => (
          <div key={i}>
            <div
              className="single-banner"
              style={{ backgroundImage: 'url(' + item.img + ')' }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-10">
                    <div className="banner-content">
                      <span
                        className="promo-text"
                        data-animation="fadeInDown"
                        data-delay="0.8s"
                      >
                        {item.tag}
                      </span>
                      <h1 data-animation="fadeInUp" data-delay="1s">
                        {item.title}
                      </h1>
                      <ul className="btn-wrap">
                        <li data-animation="fadeInLeft" data-delay="1.2s">
                          <Link to="/careers" className="main-btn main-btn-4">
                            {item.btntext}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner-shapes">
                <div className="one" />
                <div className="two" />
                <div className="three" />
                <div className="four" />
              </div>
            
            </div>
            Hello
          </div>
        ))}
      </Slider>
      
      <div className="search-wrap"></div>
  
    </section>
  );
};
