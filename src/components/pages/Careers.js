import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Client from "../layouts/Client";
import Content from "../sections/careers/Content";
import Form from "../sections/home/Form";

export default () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Finsa | Careers</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumbs breadcrumb={{ pagename: "Careers" }} />
      <Content />
      <section className="client-section">
        <div className="container">
          <div className="client-slider section-gap">
            <Form />
            <Client />
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};
