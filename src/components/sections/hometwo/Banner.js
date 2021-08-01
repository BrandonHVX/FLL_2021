import React from 'react';
import { Link } from 'gatsby';
import Slider from 'react-slick';

import img1 from '../../../assets/img/banner/fast-slider-2.jpg';
import img2 from '../../../assets/img/banner/fast-slider-1.jpg';
import img3 from '../../../assets/img/banner/fast-slider-3.jpg';

const bannerslide = [
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
const SampleNextArrow = props => {
  const { onClick } = props;
  return (
    <button className="slick-arrow next-arrow" onClick={onClick}>
      <i className="fal fa-long-arrow-right" />
    </button>
  );
};

const SamplePrevArrow = props => {
  const { onClick } = props;
  return (
    <button className="slick-arrow prev-arrow" onClick={onClick}>
      <i className="fal fa-long-arrow-left" />
    </button>
  );
};

export default () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    arrows: true,
    fade: false,
    dots: false,
    swipe: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <section className="banner-section banner-section-two">
      <Slider className="banner-slider" id="bannerSlider" {...settings}>
        {bannerslide.map((item, i) => (
          <div key={i}>
            <div
              className="single-banner"
              style={{ backgroundImage: 'url(' + item.img + ')' }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="banner-content text-center">
                      <h1 data-animation="fadeInDown" data-delay="0.8s">
                        {item.title}
                      </h1>
                      <p data-animation="fadeInUp" data-delay="1s">
                        {item.text}{' '}
                      </p>
                      <ul className="btn-wrap">
                        <li data-animation="fadeInLeft" data-delay="1.2s">
                          <Link to="/careers" className="main-btn main-btn-4">
                            {item.btntext}
                          </Link>
                        </li>
                        <li data-animation="fadeInRight" data-delay="1.4s">
                          <Link to="/service" className="main-btn main-btn-2">
                            {item.btntext1}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
    </section>
  );
};
