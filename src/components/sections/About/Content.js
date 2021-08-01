import React, { Fragment } from 'react'
import About from './About'
import Advancedtab from './Advancedtab'
import Service from './Service'
import Testimonials from './Testimonials'
import Video from './Video'

export default () => {

    return (
        <Fragment>
            <About />
            <Service />
            <Advancedtab />
            <Video />
            <Testimonials />
        </Fragment>
    )
}