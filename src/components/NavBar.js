import React from 'react'
import { Link, Outlet } from "react-router-dom"
import './navBar.css'

function NavigationBar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <h1><Link to="/">Pokedex</Link></h1>
                    <div className='pages-container'>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default NavigationBar