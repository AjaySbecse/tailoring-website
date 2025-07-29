import '../styles/header.css';
import logo from '../logo/Logo.png';

import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt="Logo" srcset="" />
            </div>
            <div className="header-nav">
                <ul>
                    <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                    <li><NavLink to="/service" className="nav-link">Services</NavLink></li>
                    <li><NavLink to="/gallery" className="nav-link">Gallery</NavLink></li>
                </ul>
            </div>
            <div className="header-contact-us">
                <button id='contact-us-button'>
                    <NavLink to="/contact" className="nav-link">Contact us</NavLink>
                </button>
            </div>
        </div >
    )
}

export default Header;