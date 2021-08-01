import React, { useState } from 'react';
import { Link } from 'gatsby';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const counterblock = [
  { icon: 'flaticon-graphic', count: '3568', title: 'Project Compalte' },
  { icon: 'flaticon-plan', count: '7859', title: 'Satisfied Clients' },
  { icon: 'flaticon-target-1', count: '6352', title: 'International Awards' },
  { icon: 'flaticon-teamwork', count: '7856', title: 'Expert Team Members' },
];

export default () => {
  const [focus, setFocus] = useState(false);
  return (
    <section className="skill-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-10">
            {/* Skill Text Block */}
            <div className="skill-text">
              <div className="section-title mb-40 left-border">
                <span className="title-tag">Company Skills</span>
                <h2 className="title">
                  We Have Experience <br /> For Business Planning
                </h2>
              </div>
              <p>
                Sedut perspiciatis unde omnis iste natus error sit voluptat em
                accusantium doloremque laudantium, totam raperiaeaque ipsa quae
                ab illo inventore veritatis et quasi
              </p>
              <p>
                But I must explain to you how all this mistaken idenouncing
                pleasure and praising pain was born and I will give completey
                account of the system, and expound the actual teachings of the
                great explorer of the truth, the master-builder of human
                happiness one rejects, dislikes, or avoid
              </p>
              <Link to="/about" className="main-btn">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="container">
              <div className="fact-boxes row justify-content-between align-items-center">
                {counterblock.map((item, i) => (
                  <div key={i} className="col-lg-6 col-6">
                    <div className="fact-box text-center mb-40">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
