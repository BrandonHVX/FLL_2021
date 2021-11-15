import React, { Fragment } from "react";
import { Link } from "gatsby";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Headertwo";
import Footer from "../layouts/Footer";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Client from "../layouts/Client";
import Content from "../sections/careers/Content";
import Form from "../sections/home/Form";
import breadcrumbimg from "../../assets/images/backgrounds/truck-on-road.jpg";

export default () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Fastlane Logistics | Careers</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <section
        className="breadcrumb-section bg-img-c"
        style={{ backgroundImage: "url(" + breadcrumbimg + ")" }}
      >
        <div className="container">
          <div className="breadcrumb-text">
            <h1 className="page-title">Careers</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <div className="breadcrumb-shapes">
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </div>
      </section>
      <Content />

      <Footer />
    </Fragment>
  );
};
