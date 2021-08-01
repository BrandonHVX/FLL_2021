import React, { useState } from 'react';

import processbg2 from '../../../assets/img/video-bg/fast-video-1.jpg';
import processbg1 from '../../../assets/img/video-bg/fast-video-2.jpg';

const processlist = [
  {
    icon: '',
    number: '01',
    title: 'Freight & Transportation Solutions',
    text: 'Same Day & Express Delivery Available.',
  },
  {
    icon: '',
    number: '02',
    title: 'Residential & Commercial Delivery',
    text: 'Variety of Residential and Commercial non-dock business solutions.',
  },
  {
    icon: '',
    number: '03',
    title: 'Regional & Cross-Country Hauling',
    text:
      'Logistical solutions for B2B customers who need long haul trucking options.',
  },
];

export default () => {
  const [openVideo, setOpenVideo] = useState(false);

  const openVideoModal = () => {
    setOpenVideo(true);
  };

  return (
    <section className="working-process-section white-bg" id="about">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-10 order-lg-1 order-2">
            <div className="process-text">
              {/* Section Title */}
              <div className="section-title left-border mb-30">
                <span className="title-tag">Fastlane Logistics</span>
                <h2 className="title">
                  Leading Provider of Freight Transportation{' '}
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
              {/* process-loop */}
              <div className="process-loop">
                {processlist.map((item, i) => (
                  <div
                    key={i}
                    className="single-process wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="400ms"
                  >
                    <div className="icon">
                      <i className={item.icon} />
                      <span>{item.number}</span>
                    </div>
                    <div className="content">
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10 order-lg-2 order-1">
            <div
              className="process-video bg-img-c"
              style={{ backgroundImage: 'url(' + processbg1 + ')' }}
            >
              <div
                className="video bg-img-c wow fadeInRight"
                data-wow-duration="1500ms"
                data-wow-delay="400ms"
                style={{ backgroundImage: 'url(' + processbg2 + ')' }}
              >
                <span
                  onClick={openVideoModal}
                  className="paly-icon popup-video"
                  role="button"
                >
                  <i className="fas fa-play" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="working-circle" /> */}
    </section>
  );
};
