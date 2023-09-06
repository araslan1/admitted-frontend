import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import zoomIMG1 from "./images/zoom1.webp";
import zoomIMG2 from "./images/zoom2.webp";
import zoomIMG3 from "./images/zoom3.webp";
import zoomImg4 from "./images/zoom4.webp";
import './Home.css';
import admittedStudentReviewer1 from './images/profile1.webp';
import admittedStudentReviewer2 from './images/IMG_FIONA.jpg';
import PaymentOptions from "./PaymentOptions";
import Footer from "./Footer";
// import ReviewerProfile from "./ReviewerProfile";
// import reviewerIMG1 from './images/IMG_AdamA.jpeg';
// import reviewerIMG2 from './images/IMG_6420.jpg';
// import reviewerIMG3 from './images/IMG_FIONA2.jpeg';

const Home = () => {
    const handleClick = () => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
      };

    // const profiles = new Map([
    //     [1, { name: 'Adam Aladahir', school: 'Tulane', description: ['Adam', 'Junior', 'Biology'] }],
    //     [2, { name: 'Alastair Deng', school: 'Stanford', description: ['Alastair', 'Freshman', 'Computer Science'] }],
    //     [3, { name: 'Fiona Collins', school: 'USC', description: ['Fiona', 'Sophomore', 'Psychology'] }]
    // ])


    return (
        <>
        <div>
            <Navbar />
            <div className="free-trial-banner">
                <p>Admitted officially launches in October 2023! In the meantime, see how our service works with our <Link to='/review-policy'>Free Trial</Link></p>
            </div>
        </div>
        <div className="home">
            <div style={{ marginTop: "20px" }}>
                <h1>Turning Essays into Acceptances</h1>
            </div>
            <div>
                <p id="main-blurb">Win over college admission officers with the #1 essay review platform, where your applications are reviewed by a current student at each university you're applying to!</p>
            </div>
            <Link to='/signup' className="mainbutton">Get Started!</Link>
            <div className="feature-card-section">
                <div className='feature-cards'>
                    <div className="image-wrapper">
                        <Link to='/signup'><img src={zoomIMG1} className='zoom-imgs' alt="Odessa Deng stands in front of Quincy House during Harvard commencement. She is wearing her cap, gown, and the Harvard AAPI stole." /></Link>
                        <div className="text-overlay">
                            <h2><Link to='/signup' className="top-left">Get Into Your<br></br>Dream School!</Link></h2>
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
                        <Link to='/inspiration' onClick={handleClick}><img src={zoomIMG2} className='zoom-imgs' alt="Zoom 2" /></Link>
                        <h2><Link to='/inspiration' className="top-left">Made By Students<br></br>For Students</Link></h2>
                    </div>
                    <div className="card-info" id='card-info-1'>
                        <p className='card-info-blurb'>We've already gone through the process!</p>
                        <Link to='/inspiration' className="mainbutton" id='card-info-1-button' onClick={handleClick}>Our Story</Link>
                    </div>
                </div>
                <div className='feature-cards'>
                    <div className="image-wrapper">
                        <Link to='/review-policy'><img src={zoomIMG3} className='zoom-imgs' alt="Zoom 3" onClick={handleClick}/></Link>
                        <h2><Link to='/review-policy' className="top-left" onClick={handleClick}>College Match<br></br>Guarantee</Link></h2>
                    </div>
                    <div className="card-info" id='card-info-2'>
                        <p className='card-info-blurb'>Receive feedback from someone who actually attends the university</p>
                        <Link to='/review-policy' className="mainbutton" id='card-info-2-button' onClick={handleClick}>Review Policy</Link>
                    </div>
                </div>
                <div className='feature-cards'>
                    <div className="image-wrapper">
                        <Link to='/why-admitted'><img src={zoomImg4} className='zoom-imgs' alt="Zoom 4" onClick={handleClick} /></Link>
                        <h2><Link to='/why-admitted' className="top-left" onClick={handleClick}>College Counseling<br></br>Made Affordable</Link></h2>
                    </div>
                    <div className="card-info" id='card-info-3'>
                        <p className='card-info-blurb'>Don't pay thousands for an advisor who applied to colleges last century!</p>
                        <Link to='/why-admitted' className="mainbutton" id='card-info-3-button'>Why Choose Admitted?</Link>
                    </div>
                </div>
            </div>

            {/* <div className="meet-our-reviewers">
                <h3>Meet some of our reviewers!</h3>
                <div className="profile-section">
                    <div className="profile-margin">
                        <ReviewerProfile profile={profiles.get(1)} image={reviewerIMG1}/>
                    </div>
                    <div className="profile-margin" id='specific-profile-margin'>
                        <ReviewerProfile profile={profiles.get(2)} image={reviewerIMG2} />
                    </div>
                    <div className="profile-margin">
                        <ReviewerProfile profile={profiles.get(3)} image={reviewerIMG3}/>
                    </div>
                </div>

                <div className="admitted-next-btn-wrap">
                    <Link to='/colleges' className='admitted-next-btn'>Next: See what colleges we review for</Link>
                </div>
            </div> */}


            <div className="why-profiles" style ={{marginTop: "300px"}}>
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
                <Link to='/about-us' className='admitted-next-btn' onClick={handleClick}>More Reviewers</Link>
            </div>


            <div className="home-pay-options">
                <PaymentOptions />
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Home;
