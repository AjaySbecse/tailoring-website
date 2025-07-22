import '../styles/Footer.css'

import logo from '../logo/Logo.png';

function Footer() {
    return (
        <div id="footer">
            <div className='footer-overview-part'>
                <img src={logo} alt="Logo" />
                <p>
                    Tailored with love, crafted for confidence. <br />
                    A boutique space for every woman's style and story.
                </p>
                <button className='footer-contact-now'>Contact Now</button>
            </div>
            <div className='footer-link-part'>
                <div className='weblinks'>
                    <div className='quick-link'>
                        <h3>
                            Quick Links
                        </h3>

                        <ul>
                            <li>Services</li>
                            <li>Gallery</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='contact-details'>
                        <h3>Visit Us</h3>
                        <p>Mobile No</p>
                        <p>Email</p>
                        <p>Address</p>
                    </div>
                </div>
                <div className='social-media'>
                    <span>test</span>
                    <span>test2</span>
                </div>
            </div>
        </div>
    );
}

export default Footer