import '../styles/Home.css'
import img1 from '../images/home/Home1.png'
import img2 from '../images/home/Home2.png'
import img3 from '../images/home/Home3.png'
import img4 from '../images/home/Home4.png'
import img5 from '../images/home/Home5.png'

function HomeComponent(){
    return (
        <div id="landing-container">
            <div id="landing-content">
                <p className="landing-title">
                    Tailored Elegance for Every Woman
                </p>
                <div className="landing-description">
                    <p className='first-line'>Nagalakshmi tailoring specialize in creating beautifully fitted garments that celebrate your individuality and grace.<br/></p>
                    Whether you're dressing for daily comfort or a grand occasion, every stitch is made with care --
                    <span id='jfy'> just for you</span>
                </div>
            </div>

            <div id='landing-trending-container'>
                <p id='trending'>#TRENDING</p>
                <div className='trending-image-collection'>
                        <img src={img1} alt="image1" className='trending-img1 trending-img' />
                        <img src={img2} alt="image2" className='trending-img2 trending-img' />
                        <img src={img3} alt="image3" className='trending-img3 trending-img' />
                        <img src={img4} alt="image4" className='trending-img4 trending-img' />
                        <img src={img5} alt="image5" className='trending-img5 trending-img' />
                </div>
            </div>

        </div>
    );
}

export default HomeComponent;