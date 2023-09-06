
import './AboutUs.css';
import Navbar from './Navbar';
import Footer from './Footer';
import personPhoto from './images/team1.webp';
import personPhoto2 from './images/IMG_0101.jpg';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const AboutUs = () => {
    const handleClick = () => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
      };
    
    return (
        <>
        <Navbar />
        <div className="about-us">
            <div className="all-person-boxes">
                <div className="person-boxes-row">
                    <div className="person-box">
                        <div className="person-image-wrapper">
                            <img src={personPhoto} className='person-img' alt="Co-Founder of Admitted, Alastair Deng, wearing a tuxedo and smiling." />
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
            </div>

            <div className="admitted-next-btn-wrap">
                <Link to='/inspiration'  onClick={handleClick} className='admitted-next-btn'>Next: Our Story!</Link>
            </div>
        </div>
        <Footer />
        </>
    );
}
 
export default AboutUs;