import React, { Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import Client from '../layouts/Client'
import Content from '../sections/servicedetail/Content'

export default () => {

    return (
        <Fragment>
            <MetaTags>
                <title>Finsa | Service Detail</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header />
            <Breadcrumbs breadcrumb={{ pagename: 'Service Detail' }} />
            <Content />
            <section className="client-section">
                <div className="container">
                    <div className="client-slider section-gap line-top">
                        <Client />
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}