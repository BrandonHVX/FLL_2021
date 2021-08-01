import React from 'react'
import { Link } from 'gatsby'

export default () => {

    return (
        <div className="pagination-wrap">
            <ul>
                <li><Link to="#"><i className="far fa-angle-left" /></Link></li>
                <li className="active"><Link to="#">01</Link></li>
                <li><Link to="#">02</Link></li>
                <li><Link to="#">03</Link></li>
                <li><Link to="#"><i className="far fa-angle-right" /></Link></li>
            </ul>
        </div>
    )
}