import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import Navmenu from './Navmenu'
import OffCanvas from './Offcanvas'
import classNames from 'classnames'

import logo from '../../assets/img/logo-3.png'

export default () => {
    const [classmethod, setClassmethod] = useState(false)
    const [togglemethod, setTogglemethod] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isMobilesmall, setIsMobilesmall] = useState(false)
    const [isTop, setIsTop] = useState(false)


    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth < 991)
            setIsMobilesmall(window.innerWidth < 767)
        }, false)
        window.addEventListener('load', () => {
            setIsMobile(window.innerWidth < 991)
            setIsMobilesmall(window.innerWidth < 767)
        }, false)
        // Sticky header
        window.addEventListener('scroll', () => {
            setIsTop(window.scrollY > 110)
        }, false)
    }, [])

    const addClass = () => {
        setClassmethod(true)
    }

    const removeClass = () => {
        setClassmethod(false)
    }
    const toggleClass = () => {
        setTogglemethod(!togglemethod)
    }

    const mobileactive = isMobile ? 'breakpoint-on' : ''
    const smallmobileactive = isMobilesmall ? 'd-none' : ''
    const stickyheader = isTop ? 'sticky-on' : ''


    return (
        <Fragment>
            <header className={`header-three sticky-header ${stickyheader}`}>
                {/* Header Menu  */}
                <div className="header-nav">
                    <div className="container-fluid">
                        <div className={`nav-container ${mobileactive}`}>
                            {/* Site Logo */}
                            <div className="site-logo">
                                <Link to="/"><img src={logo} alt="Logo" /></Link>
                            </div>
                            {/* Main Menu */}
                            <div className={classNames("nav-menu d-lg-flex align-items-center", { "menu-on": togglemethod })}>
                                {/* Navbar Close Icon */}
                                <div className="navbar-close" onClick={toggleClass}>
                                    <div className="cross-wrap"><span /><span /></div>
                                </div>
                                {/* Mneu Items */}
                                <div className="menu-items">
                                    <Navmenu />
                                </div>
                                {/* Pushed Item */}
                                <div className="nav-pushed-item" />
                            </div>
                            {/* Navbar Extra  */}
                            <div className="navbar-extra d-flex align-items-center">
                                {/* Social Link */}
                                <div className={`menu-social nav-push-item ${smallmobileactive}`}>
                                    <div className="menu-social-link">
                                        <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                        <Link to="#"><i className="fab fa-twitter" /></Link>
                                        <Link to="#"><i className="fab fa-instagram" /></Link>
                                        <Link to="#"><i className="fab fa-behance" /></Link>
                                        <Link to="#"><i className="fab fa-dribbble" /></Link>
                                    </div>
                                </div>
                                {/* off canvas menu toggler*/}
                                <div className="offcanvas-toggler" onClick={addClass}>
                                    <span><span /><span /><span /></span>
                                </div>
                                {/* Navbar Toggler */}
                                <div className={classNames("navbar-toggler", { "active": togglemethod })} onClick={toggleClass}>
                                    <span /><span /><span />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={classNames("offcanvas-wrapper", { "show-offcanvas": classmethod })}>
                <div className={classNames("offcanvas-overly", { "show-overly": classmethod })} onClick={removeClass} />
                <div className="offcanvas-widget">
                    <Link to="#" className="offcanvas-close" onClick={removeClass} ><i className="fal fa-times" /></Link>
                    <OffCanvas />
                </div >
            </div >
        </Fragment>
    )
}