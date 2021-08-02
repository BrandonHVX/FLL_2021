import React from "react";
import { Helmet } from "react-helmet";
import Careers from "../components/pages/Careers";

import img_gatsby from "assets/images/gatsby-astronaut.png";

const IndexPage = () => {
  return (
    <div pageName="home">
      <Careers />
    </div>
  );
};

export default IndexPage;
