import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import { Button } from '../Button/Button';
import './Navbar.css';

function Navbar() {

    const [isActive, setisActive] = React.useState(false);

    return (
        // Opening div - for react
        <div>
            {/* Opening Nav Tag */}
            <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                {/* Navbar brand/logo */}
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
                    </a>

                    <a onClick={() => {
                        setisActive(!isActive);
                    }}
                        role="button"
                        className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                {/* Navbar Menu */}
                <div id="navbarBasicExample"
                    className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                    <div class="navbar-start">
                        <a class="navbar-item">Home</a>
                        <a class="navbar-item">Sign up</a>
                    </div>

                    {/* Navbar menu --> Drop down */}
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">More</a>
                        {/* Navbar menu --> Drop down items*/}
                        <div class="navbar-dropdown">
                            <a class="navbar-item">More 1</a>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar;
