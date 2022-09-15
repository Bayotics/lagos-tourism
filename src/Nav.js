import React from "react";
import { Link } from "react-router-dom";

import logo from "./images/PngItem_1692324.png"


const Nav = () => {
    return (
        <div id="mainNavDiv">
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                {/* <a className="navbar-brand" href="#">Navbar w/ text</a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <span className="" id="nav-logo">
                        <img className="img-responsive" alt="logo" src={logo} id="logo" />
                    </span>
                    <ul id="navbarUl" className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" id="navText" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/Destination'} id="navText" className="nav-link" >Destination <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/Crew'} id="navText" className="nav-link" >Crew</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/Attractions'} id="navText" className="nav-link">Tours</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default Nav;
