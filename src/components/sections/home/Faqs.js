import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

import Fastfaq from '../../../assets/img/fast-faq.jpg';
import circleimg from '../../../assets/img/faq-circle.png';

export default () => {
  return (
    <section
      className="faq-section  skill-section section-gap with-illustration with-shape "
      id="faq"
    >
      <div className="container">
        <div className="faq-illustration-img">
          <img src={Fastfaq} alt="illustration" width={675} />
        </div>
        <div className="row justify-content-lg-end justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="faq-content">
              <div className="section-title mb-40 left-border">
                <span className="title-tag">FAQ</span>
                <h2 className="title">Frequently Asked Questions</h2>
              </div>
              {/* FAQ LOOP */}
              <Accordion
                defaultActiveKey="0"
                className="faq-loop"
                id="faqAccordion"
              >
                <Card>
                  <Accordion.Collapse eventKey="0" className="collapseparent">
                    <Card.Body>Answer #1</Card.Body>
                  </Accordion.Collapse>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Question #1
                      <span className="icons">
                        <i className="far fa-plus" />
                      </span>
                    </Accordion.Toggle>
                  </Card.Header>
                </Card>
                <Card>
                  <Accordion.Collapse eventKey="1" className="collapseparent">
                    <Card.Body> Answer #2 </Card.Body>
                  </Accordion.Collapse>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      Question #2
                      <span className="icons">
                        <i className="far fa-plus" />
                      </span>
                    </Accordion.Toggle>
                  </Card.Header>
                </Card>
                <Card>
                  <Accordion.Collapse eventKey="2" className="collapseparent">
                    <Card.Body>Answer #3</Card.Body>
                  </Accordion.Collapse>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      Question #3
                      <span className="icons">
                        <i className="far fa-plus" />
                      </span>
                    </Accordion.Toggle>
                  </Card.Header>
                </Card>
                <Card>
                  <Accordion.Collapse eventKey="3" className="collapseparent">
                    <Card.Body>Answer #2</Card.Body>
                  </Accordion.Collapse>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                      Question #4
                      <span className="icons">
                        <i className="far fa-plus" />
                      </span>
                    </Accordion.Toggle>
                  </Card.Header>
                </Card>
              </Accordion>
              {/* End Faq LOOP */}
            </div>
          </div>
        </div>
        <div
          className="circle-img"
          style={{ backgroundImage: 'url(' + circleimg + ')' }}
        />
      </div>
    </section>
  );
};
