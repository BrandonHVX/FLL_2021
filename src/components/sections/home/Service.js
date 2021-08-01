import React from 'react';
import { Link } from 'gatsby';

import icon1 from '../../../assets/img/tab-block.jpg';
import icon2 from '../../../assets/img/icons/02.png';
import icon3 from '../../../assets/img/icons/03.png';
import lines from '../../../assets/img/lines/07.png';

import img1 from '../../../assets/img/fast-ed.jpg';
import img2 from '../../../assets/img/fast-fm.jpg';
import img3 from '../../../assets/img/fast-lh.jpg';
import img4 from '../../../assets/img/feature/04.jpg';
import img5 from '../../../assets/img/feature/05.jpg';
import img6 from '../../../assets/img/feature/06.jpg';
import { Tab, Nav } from 'react-bootstrap';

const expedited = [
  {
    icon: 'fas fa-check',
    text: 'Same Day & Express Delivery',
  },
  {
    icon: 'fas fa-check',
    text: 'Hot Shot, Scheduled & Routed Delivery',
  },
  {
    icon: 'fas fa-check',
    text: 'Local Pick Up & Delivery',
  },
];
const finalmile = [
  {
    icon: 'fas fa-check',
    text: 'Variety of residential delivery options.',
  },
  {
    icon: 'fas fa-check',
    text: 'Commercial non-dock business solutions',
  },
  {
    icon: 'fas fa-check',
    text: 'White golve delivery services',
  },
];
const longhaul = [
  {
    icon: 'fas fa-check',
    text: 'Exclusive Vehicle Use',
  },
  {
    icon: 'fas fa-check',
    text: 'Customized Routes',
  },
  {
    icon: 'fas fa-check',
    text: 'Easy Payment Methods',
  },
];
const teammembertab = [
  {
    icon: 'fas fa-check',
    text:
      'There are many variations of passages of LoreIpsum available, but the majority have suffered',
  },
  {
    icon: 'fas fa-check',
    text:
      'There are many variations of passages of LoreIpsum available, but the majority have suffered',
  },
  {
    icon: 'fas fa-check',
    text:
      'There are many variations of passages of LoreIpsum available, but the majority have suffered',
  },
];

export default () => {
  return (
    <section
      className="service-section shape-style-one section-gap grey-bg advanced-tab section-gap"
      id="solutions"
    >
      <div className="section-title text-center both-border mb-50">
        <span className="title-tag">Our Services</span>
        <h2 className="title">Real Solutions, Real Fast!</h2>
      </div>
      <div className="container">
        {/* Tabs Buttons */}
        <div className="tab-buttons">
          <Tab.Container defaultActiveKey="mission">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="mission">Expedited Delivery</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="history">Final Mile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="businessgoals">Long Haul</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="mission">
                <div className="tab-text-block left-image with-left-circle">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10">
                      <div className="block-image">
                        <img src={img1} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                      <div className="block-text">
                        <div className="section-title left-border mb-40">
                          <span className="title-tag">Expedited Delivery</span>
                          <h4 className="mini-title">
                            Freight & Transportation Solutions{' '}
                          </h4>
                        </div>
                        <p>
                          Fastlane provides best-in-class ground expedite
                          service for your time-sensitive freight. Shipment
                          delays. Pressing delivery deadlines. Last-minute
                          orders. Freight needed yesterday. No matter your
                          urgent shipping needs, expedited transportation is an
                          ideal solution.
                        </p>
                        <ul>
                          {expedited.map((item, i) => (
                            <li key={i}>
                              <i className={item.icon} />
                              {item.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="history">
                <div className="tab-text-block right-image with-right-circle">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10 order-2 order-lg-1">
                      <div className="block-text">
                        <div className="section-title left-border mb-40">
                          <span className="title-tag">Final Mile</span>
                          <h4 className="mini-title">
                            Residential & Commercial Delivery Options{' '}
                          </h4>
                        </div>

                        <p>
                          Our team will help you simplify your home delivery
                          needs. We cater to businesses that sell bulky and
                          oversized products such as furniture and fixtures. Our
                          final mile delivery services are customized to your
                          needs. We offer a variety of residential delivery
                          options.
                        </p>
                        <ul>
                          {finalmile.map((item, i) => (
                            <li key={i}>
                              <i className={item.icon} />
                              {item.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-10 order-1 order-lg-2">
                      <div className="block-image">
                        <img src={img2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="businessgoals">
                <div className="tab-text-block left-image with-left-circle">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10">
                      <div className="block-image">
                        <img src={img3} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                      <div className="block-text">
                        <div className="section-title left-border mb-40">
                          <span className="title-tag">Long Haul</span>
                          <h4 className="mini-title">
                            Regional & Cross-Country Delivery Services{' '}
                          </h4>
                        </div>
                        <p>
                          Logistical solutions for B2B customers who need long
                          haul trucking options. Whether you need a sprinter van
                          to travel across town or a large truck for
                          cross-country trips, Fastlane Logistics will provide
                          transportation options for B2B companies to keep your
                          operations running smoothly.
                        </p>
                        <ul>
                          {longhaul.map((item, i) => (
                            <li key={i}>
                              <i className={item.icon} />
                              {item.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="teammember">
                <div className="tab-text-block right-image with-right-circle">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10 order-2 order-lg-1">
                      <div className="block-text">
                        <h2 className="title">
                          Professional Business Guidance Agency
                        </h2>
                        <p>
                          Sedut perspiciatis unde omnis iste natus error sit
                          voluptat em accusantium doloremque laudantium, totam
                          raperiaeaque ipsa quae ab illo inventore veritatis et
                          quasi
                        </p>
                        <ul>
                          {teammembertab.map((item, i) => (
                            <li key={i}>
                              <i className={item.icon} />
                              {item.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-10 order-1 order-lg-2">
                      <div className="block-image">
                        <img src={img1} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </section>
  );
};
