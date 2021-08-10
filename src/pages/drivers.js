import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Breadcrumbs from "../components/layouts/Breadcrumbs";
import Client from "../components/layouts/Client";
import Content from "../components/sections/careers/Content";
import Form from "../components/sections/home/Form";
export default () => {
  return (
    <div>
      <MetaTags>
        <title>Finsa | Careers</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />

      <section className="client-section">
        <div className="container">
          <div className="client-slider section-gap">
            <Form />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
