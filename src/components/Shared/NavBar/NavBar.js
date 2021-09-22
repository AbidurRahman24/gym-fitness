import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo.jpg'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light text-black">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div href="/">
                    <img className="logo" src={logo} alt="" />
                </div>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav ms-auto mt-2 text-dark">
                        <Link class="nav-item active">
                            <a class="nav-link" href="/">Home</a>
                        </Link>
                        <Link class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </Link>
                        <Link class="nav-item nav-link" to="/order">Order
                        </Link>
                        <Link class="nav-item nav-link" to="/contact">Contact
                        </Link>
                        <Link class="nav-item nav-link" to="/admin">Admin</Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;