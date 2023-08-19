//image import
import './WhyAdmitted.css';
import Navbar from './Navbar';
import Footer from './Footer';
import circlePlaceholder from './images/IMG_0101.jpg';
import circle1 from './images/circle1.webp'
import circle2 from './images/circle2.webp'
import admittedStudentReviewer1 from './images/profile1.webp'
import admittedStudentReviewer2 from './images/IMG_FIONA.jpg'
import headImg from './images/whyAdmittedHead.webp'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const WhyAdmitted = () => {
    const handleClick = () => {
        // Scroll to the top of the page
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
                            With hundreds of thousands of students applying to elite universities each year, the college application process is extremely competitive. As such, a growing number of college "counselors" and "gurus" are claiming that they know the secret to get into top colleges. Yet, their services are both expensive and not effective! Here at Admitted, our College Match Guarantee ensures that your application is being reviewed by current or recent students from each school you are applying to. These students know what it takes to be accepted into their respective universities and they're ready to help you be admitted too!
                        </p>
                        <Link to='/signup' className='why-button'>Get Started!</Link>
                    </div>
                    <div className="why-main-img-wrapper">
                        <img className='why-main-img' src={headImg} alt='Generic college acceptance letter. The letter reads: "Your Admitted! Dear XXXX, you have been admitted into the class of 20XX!"' />
                    </div>
                </div>
            </div>

            <div className="why-circle-content">
                <div className="why-ind-circle">
                    <div className="why-circle-img-wrapper">
                        <img className='why-circle-img' src={circle1} alt="Stanford undergraduates Alastair Deng and Lee Tao stand together during Stanford's Admit Weekend." />
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
                        <img className='why-circle-img' src={circlePlaceholder} alt="..." />
                    </div>
                    <div className="why-circle-text">
                        <p className='circle-text-head'>Affordable</p>
                        <p>
                            Other college counseling services can cost from $850 at the lowest to over $10,000. 
                            A college application review from Admitted costs as little as $55.
                        </p>
                    </div>
                </div>
                <div className="why-ind-circle">
                    <div className="why-circle-img-wrapper">
                        <img className='why-circle-img' src={circle2} alt="USC students Adam Raslan and Fiona Collins review college essays together on their laptops." />
                    </div>
                    <div className="why-circle-text">
                    <p className='circle-text-head'>Comprehensive</p>
                        <p>
                            Alongside offering essay feedback and practice interviews, Admitted also reviews resumes and the Common Application's 
                            Activities & Academic Honors sections. 
                        </p>
                    </div>
                </div>
            </div>

            <div className="why-profiles">
                <h3 className='why-profiles-header'>Our reviewers have been in your position!</h3>
                <div className="why-profiles-all">
                    <div className="why-profile-ind">
                        <div className="why-profile-img-wrapper">
                            <img className='why-profile-img' src={admittedStudentReviewer1} alt="Odessa Deng, an alumni from Harvard University, poses in front of Widener Library." />
                        </div>
                        <div className="why-profile-text">
                            <p className='why-profile-text-meet'>Meet Odessa</p>
                            <p>
                                Odessa graduated from Harvard University in 2023 with a double major in Chemistry and Neuroscience. 
                                When Odessa 
                                She knows what it takes to get into Harvard and wants to help you get there too!
                            </p>
                        </div>
                    </div>
                    <div className="why-profile-ind">
                        <div className="why-profile-img-wrapper">
                            <img className='why-profile-img' src={admittedStudentReviewer2} alt="..." />
                        </div>
                        <div className="why-profile-text">
                            <p className='why-profile-text-meet'>Meet Fiona</p>
                            <p>
                                Fiona is a sophomore majoring in Psychology at USC. 
                                When Fiona was applying to USC she was lucky to get application advice from a friend already attending the university. 
                                Now, she is excited to pass on that advice to help you improve your application!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="admitted-next-btn-wrap">
                <Link to='/colleges' className='admitted-next-btn' onClick={handleClick}>Next: What college applications do we offer review for?</Link>
            </div>

        </div>
        <Footer />
        </>
    );
}
 
export default WhyAdmitted;