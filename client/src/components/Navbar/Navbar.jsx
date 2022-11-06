import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
    const location = useLocation();
    return (
        <div className='Navbar container'>
            <Link to='/' >
                <div className="logo">Med<span>Chain</span></div>
            </Link>
            <div className="links_wrapper">
                <Link to='/'>
                    <div className={"link" + ` ${location.pathname === '/' ? "active" : ""}`}>
                        Home
                    </div>
                </Link>
                <Link to='/upload'>
                    <div className={"link" + ` ${location.pathname === '/upload' ? "active" : ""}`}>
                        Upload
                    </div>
                </Link>
                <Link to='/share'>
                    <div className={"link" + ` ${location.pathname === '/share' ? "active" : ""}`}>
                        Share
                    </div>
                </Link>
                <Link to='/view'>
                    <div className={"link" + ` ${location.pathname === '/view' ? "active" : ""}`}>
                        View
                    </div>
                </Link>
                <Link to='/UserReg'>
                    <div className={"link" + ` ${location.pathname === '/UserReg' ? "active" : ""}`}>
                        Register
                    </div>
                </Link>
            </div>

        </div>
    )
}
export default Navbar