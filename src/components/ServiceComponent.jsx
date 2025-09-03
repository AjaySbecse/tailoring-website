import "../styles/Service.css";
import ServiceCategoriesComponent from './ServiceSectionComponent';

const otherOffers = [
    {
        number: "01",
        description: "To enhance comfort and give perfect structure to your outfits.",
        title: "Lining and Padding Services"
    },
    {
        number: "02",
        description: "Quick fixes for your favorite outfits — even if they weren’t stitched by us!",
        title: "Minor Alterations"
    },
    {
        number: "03",
        description: "Can’t decide between a boat neck or sweetheart? We’ll guide you",
        title: "Neck and Sleeve Styling Suggestions"
    },
    {
        number: "03",
        description: "Saw a design you love? Share it — we’ll recreate it with your twist",
        title: "Style Duplication"
    }
];

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

            <div className="service-other-offers">
                <p className='section-subtitle text-center'>We Also Offer</p>
                <div className="service-other-offers-list">
                    {otherOffers.map((offer, idx) => (
                        <div className="service-other-offers-list-item" key={idx}>
                            <div className="other-offer-list-number">{offer.number}</div>
                            <div className="other-offer-list-description">
                                <p>{offer.description}</p>
                                <h3>{offer.title}</h3>
                                <hr className="other-offer-list-hr" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="moodboard-section">
                <div className="moodboard-left">
                    <img
                        src="https://via.placeholder.com/120x100.png?text=Image"
                        alt="Moodboard Left"
                        className="moodboard-img"
                    />
                    <p className="moodboard-desc">
                        Our Style Moodboards are here to inspire. Think of them as your personalized style guide – curated by vibe, occasion, and fabric flow.
                    </p>
                </div>
                <div className="moodboard-center">
                    <h2 className="moodboard-title">
                        Not sure what design fits<br />your personality?
                    </h2>
                    <button className="moodboard-btn">Style Moodboard</button>
                </div>
                <div className="moodboard-right">
                    <p className="moodboard-desc">
                        Whether you’re planning an elegant office look, a dreamy bridal piece, or a comfy casual set, you’ll find moodboards that speak your language.
                    </p>
                    <img
                        src="https://via.placeholder.com/120x100.png?text=Image"
                        alt="Moodboard Right"
                        className="moodboard-img"
                    />
                </div>
            </div>

        </div>
    );
}

export default ServiceComponent;