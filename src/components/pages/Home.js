import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import HeaderOne from '../layouts/Header';
import Header from '../layouts/Headertwo';
import StickyHeader from '../layouts/StickyHeader';
import Footer from '../layouts/Footer';
import Content from '../sections/home/Content';

export default () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Fastlane Logistics| Home</title>
        <meta name="description" content="#" />
      </MetaTags>

      <Header />

      <Content />
      <Footer />
    </Fragment>
  );
};
