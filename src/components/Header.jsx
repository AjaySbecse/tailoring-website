import '../styles/header.css';
import logo from '../logo/Logo.png';

function Header(){
    return (
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt="test" srcset="" />
            </div>
            <div className="header-nav">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Gallery</li>
                </ul>
            </div>
            <div className="header-contact-us">
                <button id='contact-us-button'>Contact us</button>
            </div>
        </div>
    )
}

export default Header;