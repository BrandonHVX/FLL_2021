import React, { Fragment } from "react";
import Client from "../../layouts/Client";

import Banner from "./Banner";
import Blog from "./Blog";
import Contact from "./Contact";
import Features from "./Features";
import Service from "./Service";
import Skills from "./Skills";
import Statics from "./Statics";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Video from "./Video";
import Whyus from "./Whyus";
import Quote from "./Contact";
import Workingprocess from "./Workingprocess";
import Faq from "./Faqs";
import AdvanceTab from "./Advancedtab";

export default () => {
  return (
    <Fragment>
      <Banner />
      {/* <Quote /> */}
      <Workingprocess />
      {/* <AdvanceTab /> */}
      <Service />
      {/* <Video /> */}
      {/* <Features /> */}
      <Statics />
      <Whyus />
      {/* <Counter /> */}
      {/* <Skills /> */}
      {/* <Testimonials /> */}
      <section className="client-section mb-5">
        <div className="container">
          <div className="client-slider section-gap line-bottom">
            {/* <Client /> */}
          </div>
        </div>
      </section>
      <Contact />
      {/* <Blog /> */}
    </Fragment>
  );
};
