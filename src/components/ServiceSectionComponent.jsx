import Salwar from '../images/home/Salwar.png';
import Kurthi from '../images/home/Kurti.png';
import Blouses from '../images/home/Blouses.png';
import Chudithars from '../images/home/Chuditars.png';
import Anarkalis from '../images/home/Anarkalis.png';

import AariWork from '../images/service/Aari_Work_Blouses.png';
import EthnicSet from '../images/service/Ethnic_Sets.png';
import HalfSaree from '../images/service/Half_Saree.png';
import MaxiDress from '../images/service/Maxi_Dress.png';
import PattuPavadai from '../images/service/Pattu_Pavadai.png';

function ServiceCategoriesComponent({ showCategories2 = false }) {

    const categories1 = [
        { img: Salwar, title: "Salwar" },
        { img: Kurthi, title: "Kurthi" },
        { img: Blouses, title: "Blouses" },
        { img: Chudithars, title: "Chudithars" },
        { img: Anarkalis, title: "Anarkalis" }
    ];

    const categories2 = [
        { img: EthnicSet, title: "Ethnic Sets" },
        { img: MaxiDress, title: "Maxi Dress" },
        { img: AariWork, title: "Aari Work Blouses" },
        { img: PattuPavadai, title: "Pattu Pavadai" },
        { img: HalfSaree, title: "Half Saree" }
    ];

    return (
        <div id='categories-container'>
            {categories1.map((category, idx) => (
                <div className='categories' key={category.title}>
                    <img src={category.img} alt={category.title} className='category-img' />
                    <p className='category-title'>{category.title}</p>
                </div>
            ))}
            {showCategories2 && categories2.map((category, idx) => (
                <div className='categories' key={category.title}>
                    <img src={category.img} alt={category.title} className='category-img' />
                    <p className='category-title'>{category.title}</p>
                </div>
            ))}
        </div>
    );
}

export default ServiceCategoriesComponent;