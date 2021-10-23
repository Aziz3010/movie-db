import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
// import Style from './Navbar.module.css';

class Navbar extends Component {
    render() {
        return (
            <>
            <section>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" to="/">ASSET</Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Movies">Movies</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Tv_Show">Tv-Show</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/About">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Contacts">Contacts</NavLink>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </section>
            </>
        );
    }
}

export default Navbar;