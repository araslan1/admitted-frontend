import './AboutUs.css';
import Navbar from './Navbar';
import Footer from './Footer';
import personPhoto from './images/IMG_6420.jpg';
import personPhoto2 from './images/IMG_0101.jpg';
import personPhoto3 from './images/IMG_1861.jpg';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const AboutUs = () => {
    return (
        <>
        <Navbar />
        <div className="about-us">
            <div className="all-person-boxes">
                <div className="person-boxes-row">
                    <div className="person-box">
                        <div className="person-image-wrapper">
                            <img src={personPhoto} className='person-img' alt="profile for Admitted co-founder Alastair Deng" />
                        </div>
                        <div className="person-img-info">
                            <div className="person-img-name">
                                <p>Alastair Deng</p>
                            </div>
                            <div className="person-img-position">
                                <p>Co-Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="person-box">
                        <div className="person-image-wrapper">
                            <img src={personPhoto2} className='person-img' alt="profile for Admitted co-founder Adam Raslan" />
                        </div>
                        <div className="person-img-info">
                            <div className="person-img-name">
                                <p>Adam Raslan</p>
                            </div>
                            <div className="person-img-position">
                                <p>Co-Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="person-boxes-row">
                    <div className="person-box">
                        <div className="person-image-wrapper">
                            <img src={personPhoto3} className='person-img' alt="profile for Admitted advisor Fiona Collins" />
                        </div>
                        <div className="person-img-info">
                            <div className="person-img-name">
                                <p>Fiona Collins</p>
                            </div>
                            <div className="person-img-position">
                                <p>Advisor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-us-next-btn-wrap">
                <Link to='/inspiration' className='about-us-next-btn'>Next: Our Story!</Link>
            </div>
        </div>
        <Footer />
        </>
    );
}
 
export default AboutUs;