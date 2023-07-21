import './WhyAdmitted.css';
import Navbar from './Navbar';
import Footer from './Footer';
import placeholder from './images/placeholder-college.jpeg';
import circlePlaceholder from './images/IMG_0101.jpg';
import profilePlaceholder from './images/IMG_1861.jpg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const WhyAdmitted = () => {
    return (
        <>
        <Navbar />
        <div className="why-admitted">
            <div className="why-main">
                <div className="why-main-content">
                    <div className="why-main-text-all">
                        <div className="why-main-text-head">
                            <p className='why-main-text-top'>Why Admitted?</p>
                            <h2 className='why-main-text-title'>We're built to help you get into college at an affordable price</h2>
                        </div>
                        <p className='why-main-text-bot'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <Link to='/signup' className='why-button'>Get Started!</Link>
                    </div>
                    <div className="why-main-img-wrapper">
                        <img className='why-main-img' src={placeholder} alt="..." />
                    </div>
                </div>
            </div>

            <div className="why-circle-content">
                <div className="why-ind-circle">
                    <div className="why-circle-img-wrapper">
                        <img className='why-circle-img' src={circlePlaceholder} alt="..." />
                    </div>
                    <div className="why-circle-text">
                        <p>Vitae elementum curabitur vitae nunc sed. Aliquet nec ullamcorper sit amet risus nullam eget felis eget.</p>
                    </div>
                </div>
                <div className="why-ind-circle">
                    <div className="why-circle-img-wrapper">
                        <img className='why-circle-img' src={circlePlaceholder} alt="..." />
                    </div>
                    <div className="why-circle-text">
                        <p>Vitae elementum curabitur vitae nunc sed. Aliquet nec ullamcorper sit amet risus nullam eget felis eget.</p>
                    </div>
                </div>
                <div className="why-ind-circle">
                    <div className="why-circle-img-wrapper">
                        <img className='why-circle-img' src={circlePlaceholder} alt="..." />
                    </div>
                    <div className="why-circle-text">
                        <p>Vitae elementum curabitur vitae nunc sed. Aliquet nec ullamcorper sit amet risus nullam eget felis eget.</p>
                    </div>
                </div>
            </div>

            <div className="why-profiles">
                <h3 className='why-profiles-header'>Our reviewers have been in your position!</h3>
                <div className="why-profiles-all">
                    <div className="why-profile-ind">
                        <div className="why-profile-img-wrapper">
                            <img className='why-profile-img' src={profilePlaceholder} alt="..." />
                        </div>
                        <div className="why-profile-text">
                            <p className='why-profile-text-meet'>Meet Fiona</p>
                            <p>Rutrum quisque non tellus orci ac auctor. In fermentum posuere urna nec tincidunt praesent semper feugiat. At tempor commodo ullamcorper a lacus vestibulum sed arcu.</p>
                        </div>
                    </div>
                    <div className="why-profile-ind">
                        <div className="why-profile-img-wrapper">
                            <img className='why-profile-img' src={profilePlaceholder} alt="..." />
                        </div>
                        <div className="why-profile-text">
                            <p className='why-profile-text-meet'>Meet Fiona</p>
                            <p>Rutrum quisque non tellus orci ac auctor. In fermentum posuere urna nec tincidunt praesent semper feugiat. At tempor commodo ullamcorper a lacus vestibulum sed arcu.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="why-next-btn-wrap">
                <Link to='/colleges' className='why-next-btn'>Next: What college applications do we offer review for?</Link>
            </div>

        </div>
        <Footer />
        </>
    );
}
 
export default WhyAdmitted;