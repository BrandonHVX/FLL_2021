import React, { Fragment } from 'react'
import Memberdetail from './Memberdetail'
import Project from './Project'
import Teamskill from './Teamskill'

export default () => {

    return (
        <Fragment>
            <Memberdetail />
            <Teamskill />
            <div className="container">
                <div className="line-bottom"></div>
            </div>
            <Project />
        </Fragment>
    )
}