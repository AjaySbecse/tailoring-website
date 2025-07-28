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
                        <p><i class="fa-solid fa-phone"></i> (+91) 7538816387</p>
                        <p><i class="fa-solid fa-envelope"></i>sheebagarmentsofficial@gmail.com</p>
                        <p><i class="fa-solid fa-location-dot"></i>8/3505, 1st Street, Anna Nagar. Tirupur - 641602</p>
                    </div>
                </div>
                <div className='social-media'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>
    );
}

export default Footer