import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import zoomImg1 from "./images/mailchimp-0.webp";
import zoomImg2 from "./images/mailchimp-1.webp";
import zoomImg3 from "./images/mailchimp-2.webp";
import zoomImg4 from "./images/mailchimp-3.webp";
import './Home.css';
import PaymentOptions from "./PaymentOptions";
import Footer from "./Footer";

const Home = () => {
    // const clientUrl = process.env.REACT_APP_CLIENT_URL;

    return (
        <>
        <div>
            <Navbar />
            <div className="free-trial-banner">
                <p>Admitted officially launches in August 2023! In the meantime, see how our service works with our <Link to='/review-policy'>Free Trial</Link></p>
            </div>
        </div>
        <div className="home">
            <div style={{ marginTop: "20px" }}>
                <h1>Turning Essays into Acceptances</h1>
            </div>
            <div>
                <p id="main-blurb">Win over college admission officers with the #1 essay review platform, where your essays are edited by students who have already been admitted into top universities!</p>
            </div>
            <Link to='/signup' className="mainbutton">Get Started!</Link>
            <div className="feature-card-section">
                <div className='feature-cards'>
                    <div className="image-wrapper">
                        <Link to='/signup'><img src={zoomImg1} className='zoom-imgs' alt="Zoom 1" /></Link>
                        <div className="text-overlay">
                            <h2><Link to='/signup' className="top-left">Get Into Your Dream School!</Link></h2>
                        </div>
                    </div>
                    <div className="cooking">
                    <div className="card-info" id='card-info-0'>
                        <p className='card-info-blurb'>Did you know that many admissions officers at elite universities are alumni?</p>
                        <Link to='/signup' className="mainbutton" id='card-info-0-button'>Get Started!</Link>
                    </div>
                    </div>
                </div>
                <div className='feature-cards'>
                    <div className="image-wrapper">
                        <Link to='/inspiration'><img src={zoomImg2} className='zoom-imgs' alt="Zoom 2" /></Link>
                        <h2><Link to='/inspiration' className="top-left">Made By Students For Students</Link></h2>
                    </div>
                    <div className="card-info" id='card-info-1'>
                        <p className='card-info-blurb'>We've already gone through the process!</p>
                        <Link to='/inspiration' className="mainbutton" id='card-info-1-button'>Our Story</Link>
                    </div>
                </div>
                <div className='feature-cards'>
                    <div className="image-wrapper">
                        <Link to='/review-policy'><img src={zoomImg3} className='zoom-imgs' alt="Zoom 3" /></Link>
                        <h2><Link to='/review-policy' className="top-left">College-Specific Reviews</Link></h2>
                    </div>
                    <div className="card-info" id='card-info-2'>
                        <p className='card-info-blurb'>Receive feedback from someone who actually attends the university</p>
                        <Link to='/review-policy' className="mainbutton" id='card-info-2-button'>Review Policy</Link>
                    </div>
                </div>
                <div className='feature-cards'>
                    <div className="image-wrapper">
                        <Link to='/why-admitted'><img src={zoomImg4} className='zoom-imgs' alt="Zoom 4" /></Link>
                        <h2><Link to='/why-admitted' className="top-left">College Counseling Made Affordable</Link></h2>
                    </div>
                    <div className="card-info" id='card-info-3'>
                        <p className='card-info-blurb'>Don't pay thousands for an advisor who applied to colleges last century!</p>
                        <Link to='/why-admitted' className="mainbutton" id='card-info-3-button'>Why Choose Admitted?</Link>
                    </div>
                </div>
            </div>
            <div>
                <PaymentOptions />
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Home;
