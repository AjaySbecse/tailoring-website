import '../styles/Home.css';
import img1 from '../images/home/Home1.png';
import img2 from '../images/home/Home2.png';
import img3 from '../images/home/Home3.png';
import img4 from '../images/home/Home4.png';
import img5 from '../images/home/Home5.png';

import Salwar from '../images/home/Salwar.png';
import Kurthi from '../images/home/Kurti.png';
import Blouses from '../images/home/Blouses.png';
import Chudithars from '../images/home/Chuditars.png';
import Anarkalis from '../images/home/Anarkalis.png';

import CustomFitIcon from '../icons/home/Custom_Fit.png';
import TwentyFourBySeven from '../icons/home/24_7.png';
import ProvenExperienceIcon from '../icons/home/Proven_Experience.png';
import WomenFocusedIcon from '../icons/home/Women_Focused.png';

import BridalGrace from '../images/home/looks/Bridal_Grace.png';
import ChicParty from '../images/home/looks/Chic_Party_Glam.png';
import ElegantOffice from '../images/home/looks/Elegant_Office_Vibes.png';
import FestiveTraditional from '../images/home/looks/Festive_Traditional_Spark.png';
import DailyComfort from '../images/home/looks/Minimalist_Daily_Comfort.png';

function HomeComponent() {
    return (
        <div id="landing-container">
            <div id="landing-content">
                <p className="landing-title">
                    Tailored Elegance for Every Woman
                </p>
                <div className="landing-description">
                    <p className='first-line'>Nagalakshmi tailoring specialize in creating beautifully fitted garments that celebrate your individuality and grace.<br /></p>
                    Whether you're dressing for daily comfort or a grand occasion, every stitch is made with care --
                    <span id='jfy'> just for you</span>
                </div>
            </div>

            <div id='landing-trending-container'>
                <p id='trending' className='section-title'>#TRENDING</p>
                <div className='trending-image-collection'>
                    <img src={img1} alt="image1" className='trending-img1 trending-img' />
                    <img src={img2} alt="image2" className='trending-img2 trending-img' />
                    <img src={img3} alt="image3" className='trending-img3 trending-img' />
                    <img src={img4} alt="image4" className='trending-img4 trending-img' />
                    <img src={img5} alt="image5" className='trending-img5 trending-img' />
                </div>
            </div>

            <div className='overview-container'>
                <div className='overview-item'>
                    <img src={ProvenExperienceIcon} alt="icon1" />
                    <p className='overview-item-title'>Proven Experience</p>
                    <p className='overview-item-desc'>Over 10 years of trusted tailoring</p>
                </div>
                <div className='overview-item'>
                    <img src={CustomFitIcon} alt="icon2" />
                    <p className='overview-item-title'>Custom Fit</p>
                    <p className='overview-item-desc'>Stitching styles just how you want</p>
                </div>
                <div className='overview-item'>
                    <img src={WomenFocusedIcon} alt="icon3" />
                    <p className='overview-item-title'>Women Focused</p>
                    <p className='overview-item-desc'>Tailoring designed only for women</p>
                </div>
                <div className='overview-item'>
                    <img src={TwentyFourBySeven} alt="icon4" />
                    <p className='overview-item-title'>24/7 Support</p>
                    <p className='overview-item-desc'>We're here whenever you need us</p>
                </div>
            </div>

            <div id='service-container'>
                <p className='section-title'># OUR SERVICES</p>
                <p className='section-subtitle'> We specialize in stitching </p>
                <div id='categories-container'>
                    <div className='categories'>
                        <img src={Salwar} alt="salwar" className='category-img' />
                        <p className='category-title'>Salwar</p>
                    </div>
                    <div className='categories'>
                        <img src={Kurthi} alt="Kurthi" className='category-img' />
                        <p className='category-title'>Kurthi</p>
                    </div>
                    <div className='categories'>
                        <img src={Blouses} alt="Blouses" className='category-img' />
                        <p className='category-title'>Blouses</p>
                    </div>
                    <div className='categories'>
                        <img src={Chudithars} alt="Chudithars" className='category-img' />
                        <p className='category-title'>Chudithars</p>
                    </div>
                    <div className='categories'>
                        <img src={Anarkalis} alt="Anarkalis" className='category-img' />
                        <p className='category-title'>Anarkalis</p>
                    </div>
                </div>
                <button className='home-button'>See More</button>
            </div>

            <div id='looks-container'>
                <p className='section-title'># MOOD BASED LOOKS</p>
                <p className='section-subtitle'> Not sure what suits you? Let us help </p>
                <div id='categories-container'>
                    <div className='categories'>
                        <img src={ElegantOffice} alt="Elegant Office Vibes" className='category-img' />
                        <p className='category-title'>Elegant Office <br /> Vibes</p>
                    </div>
                    <div className='categories'>
                        <img src={FestiveTraditional} alt="Festive Traditional Spark" className='category-img' />
                        <p className='category-title'>Festive Traditional Spark</p>
                    </div>
                    <div className='categories'>
                        <img src={DailyComfort} alt="Minimalist Daily Comfort" className='category-img' />
                        <p className='category-title'>Minimalist Daily Comfort</p>
                    </div>
                    <div className='categories'>
                        <img src={ChicParty} alt="Chic Party Glam" className='category-img' />
                        <p className='category-title'>Chic Party <br /> Glam</p>
                    </div>
                    <div className='categories'>
                        <img src={BridalGrace} alt="Bridal Grace Grandeur" className='category-img' />
                        <p className='category-title'>Bridal Grace & Grandeur</p>
                    </div>
                </div>
                <button className='home-button'>Get Inspired</button>
            </div>

            <div id='customer-review'>
                <div className='customer-review-image-holder'>
                    <div class="card back-card"></div>
                    <div class="card front-card">
                        <div class="badge">

                        </div>
                    </div>
                </div>
                <div className='customer-review-text-holder'>
                    <p className='section-title'># CUSTOMER REVIEWS</p>
                    <div className='star-rating'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p className='customer-name'>Ajay S</p>
                    <p className='customer-review'>
                        The fit was just perfect! And the finishing was better than ready-made ones.
                        I felt super confident wearing it to my cousin's engagement.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;