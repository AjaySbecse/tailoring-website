import "../styles/Service.css";
import ServiceCategoriesComponent from './ServiceSectionComponent';


function ServiceComponent() {
    return (
        <div>
            <div className="service-landing">
                <p className="service-landing-title">Every woman deserves a wardrobe that fits her <br />
                    style and her story</p>
                <p className="service-landing-subtitle">Nagalakshmi tailoring your ideas are tailored into timeless pieces. From everyday wear to wedding outfits,
                    <br />we stitch it all with finesse, comfort, and elegance.</p>
            </div>

            <div className="service-container service-section">
                <p className='section-title'># OUR SERVICES</p>
                <p className='section-subtitle'> What we stitch </p>
                <ServiceCategoriesComponent showCategories2={true} />
            </div>
        </div>
    );
}

export default ServiceComponent;