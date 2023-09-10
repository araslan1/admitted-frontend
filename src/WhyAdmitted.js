
import './WhyAdmitted.css';
import Navbar from './Navbar';
import Footer from './Footer';
import circle1 from './images/circle1.webp'
import circle2 from './images/circle2.webp'
import circle3 from './images/circle3.webp'
import headImg from './images/admittedALogo-enlarged.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Profiles from './Profiles';

const WhyAdmitted = () => {
    const handleClick = () => {
        window.scrollTo(0, 0);
     };

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
                        <p className='why-main-text-bot'>
                        With hundreds of thousands of students applying to university each year, the college application process is extremely competitive. 
                        As such, more and more college "counselors" and "gurus" claim that they know the secret to success. 
                        Yet, their services are both expensive and ineffective! 
                        Here at Admitted, our College Match Guarantee ensures a meeting and advice from a current or recent student of each school you're applying to. 
                        These students know what it takes to be accepted into their respective universities and they're ready to help you be admitted too!
                        </p>
                        <Link to='/signup' onClick={handleClick} className='why-button'>Get Started!</Link>
                    </div>
                    <div className="why-main-img-wrapper">
                        <img className='why-main-img' src={headImg} alt='Enlarged version of the Admitted A logo' />
                    </div>
                </div>
            </div>

            <div className="why-circle-content">
                <div className="why-ind-circle">
                    <div className="why-circle-img-wrapper">
                        <Link to='/review-policy' onClick={handleClick}>
                            <img className='why-circle-img' src={circle1} alt="Stanford undergraduates Alastair Deng and Lee Tao stand together during Stanford's Admit Weekend." />
                        </Link>
                    </div>
                    <div className="why-circle-text">
                        <p className='circle-text-head'>College Match Guarantee</p>
                        <p>
                            College-specific essays will only be read by a student from that university! 
                            This ensures expert feedback from someone who knows the culture and spirit of a school.
                        </p>
                    </div>
                </div>
                <div className="why-ind-circle">
                    <div className="why-circle-img-wrapper">
                        <Link to='/review-policy' onClick={handleClick}>
                            <img className='why-circle-img' src={circle3} alt="Someone reviews the feedback they received on their college application essay through Admitted’s Editing Tool." />
                        </Link>
                    </div>
                    <div className="why-circle-text">
                        <p className='circle-text-head'>Affordable AND Comprehensive</p>
                        <p>
                        Other counseling services can cost from $850 to over $10,000. 
                        The first application review from Admitted is free and then costs as little as $45.
                        </p>
                    </div>
                </div>
                <div className="why-ind-circle">
                    <div className="why-circle-img-wrapper">
                        <Link to='/review-policy' onClick={handleClick}>
                            <img className='why-circle-img' src={circle2} alt="USC students Adam Raslan and Fiona Collins review college essays together on their laptops." />
                        </Link>
                    </div>
                    <div className="why-circle-text">
                    <p className='circle-text-head'>Real-Time Feedback</p>
                        <p>
                            Essay reviews happen live over Zoom! 
                            Reviewers will answer questions, tailor advice, and personalize a plan for you through Admitted's Editing Tool!
                        </p>
                    </div>
                </div>
            </div>

            <Profiles />

            <div className="admitted-next-btn-wrap">
                <Link to='/colleges' className='admitted-next-btn' onClick={handleClick}>Next: What college applications do we offer review for?</Link>
            </div>

        </div>
        <Footer />
        </>
    );
}
 
export default WhyAdmitted;