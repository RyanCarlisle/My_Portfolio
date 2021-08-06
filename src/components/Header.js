import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import About from './Aboutme';
import Skills from './Skills';

function Header(){
    return(
        <div>
            <nav className="navbar-header navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid main-header">
                    <Link to={{pathname: "/"}} className="text-decoration-none"><div className="navbar-brand my-name-in-navbar">Bhuswarna Kashyap</div></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
                            <li className="nav-item ms-3">
                                <Link to={{pathname: "/"}} className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link to="/about-me" className="nav-link active">About Me</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link active" href="#">Experience</a>
                            </li>
                            <li className="nav-item ms-3">
                                <HashLink smooth to="about-me#skills" className="nav-link active">Skills</HashLink>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link active" href="#">Projects</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;