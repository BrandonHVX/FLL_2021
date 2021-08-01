import React, { Fragment } from 'react'
import Advancedtab from './Advancedtab'
import Cta from './Cta'
import Service from './Service'
import Video from './Video'
import Workingprocess from './Workingprocess'

export default () => {

    return (
        <Fragment>
            <Workingprocess />
            <Service />
            <Advancedtab />
            <Video />
            <Cta />
        </Fragment>
    )
}