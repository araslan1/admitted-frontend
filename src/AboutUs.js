
import './AboutUs.css';
import Navbar from './Navbar';
import Footer from './Footer';
import personPhoto from './images/team1.webp';
import personPhoto2 from './images/team2.webp';
import personPhoto3 from './images/team3.webp';
import personPhoto4 from './images/team4.webp';
import personPhoto5 from './images/team5.webp';
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
                                <p>Co-Founder — Stanford</p>
                            </div>
                        </div>
                    </div>
                    <div className="person-box">
                        <div className="person-image-wrapper">
                            <img src={personPhoto2} className='person-img' alt="Adam Raslan, a Co-Founder of Admitted, wearing a suit and tie" />
                        </div>
                        <div className="person-img-info">
                            <div className="person-img-name">
                                <p>Adam Raslan</p>
                            </div>
                            <div className="person-img-position">
                                <p>Co-Founder — USC</p>
                            </div>
                        </div>
                    </div>
                    <div className="person-box">
                        <div className="person-image-wrapper">
                            <img src={personPhoto3} className='person-img' alt="One of Admitted's reviewers from USC, Fiona Collins" />
                        </div>
                        <div className="person-img-info">
                            <div className="person-img-name">
                                <p>Fiona Collins</p>
                            </div>
                            <div className="person-img-position">
                                <p>Reviewer — USC</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="person-boxes-row">
                    <div className="person-box">
                        <div className="person-image-wrapper">
                            <img src={personPhoto4} className='person-img' alt="Admitted's reviewer for Harvard, Odessa Deng" />
                        </div>
                        <div className="person-img-info">
                            <div className="person-img-name">
                                <p>Odessa Deng</p>
                            </div>
                            <div className="person-img-position">
                                <p>Reviewer — Harvard</p>
                            </div>
                        </div>
                    </div>

                    <div className="person-box">
                        <div className="person-image-wrapper">
                            <img src={personPhoto5} className='person-img' alt="Adam Aldahir, Tulane student and Admitted reviewer" />
                        </div>
                        <div className="person-img-info">
                            <div className="person-img-name">
                                <p>Adam Aldahir</p>
                            </div>
                            <div className="person-img-position">
                                <p>Reviewer — Tulane</p>
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