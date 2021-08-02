import React from "react";
import { Helmet } from "react-helmet";

import Container from "components/Container";

const SecondPage = () => {
  return (
    <div>
      <Helmet>
        <title>Page Two</title>
      </Helmet>
      <Container>
        <h1>Page Two</h1>
        <p>Welcome to page 2</p>
      </Container>
    </div>
  );
};

export default SecondPage;
