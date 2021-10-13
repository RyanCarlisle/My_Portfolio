import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div>
            <nav className="navbar-header navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid main-header">
                    <Link to={{pathname: "/"}} className="text-decoration-none"><div className="navbar-brand my-name-in-navbar">Bhuswarna Kashyap</div></Link>
                        <ul className="navbar-nav ms-auto me-4">
                            <li className="nav-item ms-3">
                                <Link to={{pathname: "/"}} className="nav-link active">Home</Link>
                            </li>
                        </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;