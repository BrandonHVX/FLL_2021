import React, { Fragment } from 'react'
import Workingprocess from '../hometwo/Workingprocess'
import About from './About'
import Banner from './Banner'
import Blog from './Blog'
import Counter from './Counter'
import Project from './Project'
import Service from './Service'
import Testimonials from './Testimonials'
import Video from './Video'

export default () => {

    return (
        <Fragment>
            <Banner />
            <About />
            <Service />
            <Project />
            <Counter />
            <Workingprocess />
            <Testimonials />
            <Video />
            <Blog />
        </Fragment>
    )
}