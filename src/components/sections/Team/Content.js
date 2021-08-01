import React, { Fragment } from 'react'
import Skills from './Skills'
import Teamblock from './Teamblock'
import Video from './Video'

export default () => {

    return (
        <Fragment>
            <Teamblock />
            <Video />
            <Skills />
        </Fragment>
    )
}