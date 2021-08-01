import React from 'react'
import { Link } from 'gatsby'

import breadcrumbimg from '../../assets/img/breadcrumb.jpg'

export default (props) => {

    return (
        <section className="breadcrumb-section bg-img-c" style={{ backgroundImage: "url(" + breadcrumbimg + ")" }}>
            <div className="container">
                <div className="breadcrumb-text">
                    <h1 className="page-title">{props.breadcrumb.pagename}</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>{props.breadcrumb.pagename}</li>
                    </ul>
                </div>
            </div>
            <div className="breadcrumb-shapes">
                <div className="one" />
                <div className="two" />
                <div className="three" />
            </div>
        </section>
    )
}