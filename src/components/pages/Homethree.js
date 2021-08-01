import React, { Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import Header from '../layouts/Headerthree'
import Client from '../layouts/Client'
import Footer from '../layouts/Footertwo'
import Content from '../sections/homethree/Content'

export default () => {

    return (
        <Fragment>
            <MetaTags>
                <title>Finsa | Homepage</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header />
            <Content />
            <section className="client-section">
                <div className="container">
                    <div className="client-slider section-gap">
                        <Client />
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}