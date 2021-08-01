import React from "react";
import { Helmet } from "react-helmet";
import Home from "../components/pages/Home";
import "../assets/scss/style.scss";

import "../assets/css/flaticon.css";
import Layout from "components/Layout";
import Container from "components/Container";

import img_gatsby from "assets/images/gatsby-astronaut.png";

const IndexPage = () => {
  return (
    <div pageName="home">
      <Home />
    </div>
  );
};

export default IndexPage;
