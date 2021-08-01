import React, { Fragment } from 'react'
import Cta from './Cta'
import Features from './Features'
import Service from './Service'
import Whyus from './Whyus'

export default () => {

    return (
        <Fragment>
            <Service />
            <Features />
            <Whyus />
            <Cta />
        </Fragment>
    )
}