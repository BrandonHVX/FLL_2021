import React, { useState } from 'react';
import { Link } from 'gatsby';
import CountUp from 'react-countup';
import Scroll from '../../layouts/Scroll';
import Masonry from 'react-masonry-component';
import VisibilitySensor from 'react-visibility-sensor';

const factlist = [
  {
    icon: 'fas fa-check',
    text: 'Dedicated drivers and skilled personal to ensure quality service.',
  },
  {
    icon: 'fas fa-check',
    text:
      'Leading provider of freight transportation and supply chain management nationwide.',
  },
  {
    icon: 'fas fa-check',
    text: ' Endless adaptability and consistency in company growth.',
  },
];

const counterblock = [
  {
    icon: 'flaticon-teamwork',
    count: '10',
    title: 'Years of Experience',
    mtclass: 'mt-30',
  },
  { icon: 'flaticon-graphic', count: '5568', title: 'Miles Driven' },
  {
    icon: 'flaticon-plan',
    count: '259',
    title: 'Satisfied Clients',
    mtclass: 'mt-30',
  },
  {
    icon: 'flaticon-target-1',
    count: '10352',
    title: 'Packages Delivered',
    mtclass: 'mt-30',
  },
];

export default () => {
  const [focus, setFocus] = useState(false);
  const imagesLoadedOptions = {
    itemSelector: '.col-tiny-12',
    percentPosition: false,
    resize: true,
    fitWidth: true,
  };
  return (
    <section className="fact-section-three section-gap" id="profile">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-10 order-2 order-lg-1">
            <div className="fact-text">
              <div className="section-title left-border mb-40">
                <span className="title-tag">Company Profile</span>
                <h2 className="title">Why Fastlane Logistics?</h2>
              </div>
              <ul className="fact-list">
                {factlist.map((item, i) => (
                  <li key={i}>
                    {' '}
                    <i className={item.icon} /> {item.text}
                  </li>
                ))}
              </ul>
              <Scroll type="id" element="contact">
                <a className="main-btn" href="#features">
                  Contact Us
                </a>
              </Scroll>
            </div>
          </div>
          <div className="col-lg-6 col-md-10 order-1 order-lg-2">
            <Masonry
              className="fact-boxes row"
              id="factIsotpe"
              imagesLoadedOptions={imagesLoadedOptions}
            >
              {counterblock.map((item, i) => (
                <div key={i} className="col-6 col-tiny-12">
                  <div
                    className={
                      'fact-box fact-box-three text-center ' + item.mtclass + ''
                    }
                  >
                    <div className="icon">
                      <i className={item.icon} />
                    </div>
                    <CountUp
                      start={focus ? 0 : null}
                      end={parseInt(item.count)}
                      duration={5}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span className="counter" ref={countUpRef} />
                          <VisibilitySensor
                            onChange={isVisible => {
                              if (isVisible) {
                                setFocus(true);
                              }
                            }}
                          >
                            <span className="plus-icon">+</span>
                          </VisibilitySensor>
                        </div>
                      )}
                    </CountUp>
                    <p className="title">{item.title}</p>
                  </div>
                </div>
              ))}
            </Masonry>
          </div>
        </div>
      </div>
    </section>
  );
};
