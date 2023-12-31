import './ReviewPolicy.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import essay from './images/placeholderEssay.webp'
import resume from './images/placeholderResume.webp'
import honorsActivities from './images/honorsActivitiesPlaceholder.webp'
import interview from './images/interviewPlaceholder.webp'

const ReviewPolicy = () => {
    const handleClick = () => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
      };

    
    return (
        <>
        <Navbar />
        <div className="review-policy">
            <h1 className='review-header'>What are you <span className='review-header-underline'>paying</span> for?</h1>
            <table>
                <colgroup>
                    <col />
                    <col span='4' className='test'/>
                </colgroup>
                <tr>
                    <td>
                        <h2>Not sure<br></br> which plan you want?</h2>
                        <p>Take a look at the different features each plan offers and choose the one that fits you best</p>
                    </td>
                    <td>
                        <h2 className='policy-table-header'>Free</h2>
                        <p>A sample essay review for either Stanford or USC; limited to one of the short essays</p>
                        <Link to='/signup' className='policy-table-button'   onClick={handleClick} style={{backgroundColor: '#FEDEE7'}}>Get Started!</Link>
                    </td>
                    <td>
                        <h2 className='policy-table-header'>Essentials</h2>
                        <p>An extensive review of every application essay; suited for those who solely want essay feedback</p>
                        <Link to='/signup' className='policy-table-button'   onClick={handleClick} style={{backgroundColor: '#FEC6D5'}}>Get Started!</Link>
                    </td>
                    <td>
                        <h2 className='policy-table-header'>Premium</h2>
                        <p>A comprehensive review of the Common Application; ideal for those applying to multiple schools</p>
                        <Link to='/signup' className='policy-table-button'   onClick={handleClick} style={{backgroundColor: '#FDADC3'}}>Get Started!</Link>
                    </td>
                    <td>
                        <h2 className='policy-table-header'>Premium+</h2>
                        <p>Our most complete service, with everything from practice interviews to resume review included</p>
                        <Link to='/signup'   onClick={handleClick} className='policy-table-button'>Get Started!</Link>
                    </td>
                </tr>
                <tr className='row-colored'>
                    <td>College-Specific Essay Review</td>
                    <td>1 Short Essay</td>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                </tr>
                <tr>
                    <td>Live Essay Review</td>
                    <td>One 10-Minute Session</td>
                    <td>20-Minute Session / College</td>
                    <td>25-Minute Session / College</td>
                    <td>30-Minute Session / College</td>
                </tr>
                <tr className='row-colored'>
                    <td>Common App Essay Review</td>
                    <td>&#x2717;</td>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                </tr>
                <tr>
                    <td>Price / College Reviewed (All supplementals)</td>
                    <td>Free</td>
                    <td>$45</td>
                    <td>$50</td>
                    <td>$55</td>
                </tr>
                <tr className='row-colored'>
                    <td>Resume Review</td>
                    <td>&#x2717;</td>
                    <td>&#x2717;</td>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                </tr>
                <tr>
                    <td>Activities/Academic Honors Review</td>
                    <td>&#x2717;</td>
                    <td>&#x2717;</td>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                </tr>
                <tr className='row-colored'>
                    <td>Practice Interview</td>
                    <td>&#x2717;</td>
                    <td>&#x2717;</td>
                    <td>&#x2717;</td>
                    <td>&#x2713;</td>
                </tr>
                <tr>
                    <td>Base Price:</td>
                    <td>Free</td>
                    <td>$0 + $45 / College</td>
                    <td>$50 + $50 / College</td>
                    <td>$100 + $55 / College</td>
                </tr>
            </table>

            <div className="admitted-next-btn-wrap">
                <Link to='/cost-calculator' onClick={handleClick} className='admitted-next-btn'>Next: Determine the Exact Price with Our Cost Calculator</Link>
            </div>

            <div className="review-sec-section">
                <h1 className='review-header'>How do our <span className='review-header-underline'>reviews</span> work?</h1>
                <div className="review-sec-row">
                    <div className="review-sec-ind">
                        <div className="review-sec-ind-img-wrapper">
                            <img className='review-sec-ind-img' src={essay} alt="Example college application essay with latin text" />
                        </div>
                        <div className="review-sec-ind-text">
                            <h3 className='review-sec-ind-text-header'>Essays</h3>
                            <ul>
                                <li>College-specific essays will be reviewed by an Admitted student-reviewer from that university</li>
                                <li>The Common Application essay will be reviewed by the Admitted student-reviewer from the college you designate as your "Primary University"</li>
                                <li>Reviewers will read essays prior to Live Review Sessions</li>
                                <li>Following the Live Review Session, formal comments and feedback will be provided through Admitted's Editing Tool</li>
                                <li>Live Review Sessions are held over Zoom</li>
                            </ul>
                        </div>
                    </div>

                    <div className="review-sec-ind">
                        <div className="review-sec-ind-img-wrapper">
                            <img className='review-sec-ind-img' src={interview} alt='An illustration of a practice college interview, with a stick figure interviewer saying "Hello!' />
                        </div>
                        <div className="review-sec-ind-text">
                            <h3 className='review-sec-ind-text-header'>Interviews</h3>
                            <ul>
                                <li>Practice interviews will last 30 minutes and will be conducted over Zoom</li>
                                <li>The interviewer will be an Admitted student-reviewer from the college you designate as your 'Primary University'</li>
                                <li>The interviewer will spend 25 minutes conducting an interview similar to the one they received during their admissions process</li>
                                <li>After the interview, the interviewer will spend 5+ minutes giving feedback</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="review-sec-row">
                <div className="review-sec-ind">
                        <div className="review-sec-ind-img-wrapper">
                            <img className='review-sec-ind-img' src={honorsActivities} alt="Representation of the Common Application's (Common App) 10 activities & 5 academic honors sections." />
                        </div>
                        <div className="review-sec-ind-text">
                            <h3 className='review-sec-ind-text-header'>Activities & Academic Honors</h3>
                            <ul>
                                <li>Review of the Common Application's 10 Activities & 5 Academic Honors section</li>
                                <li>Activities & Academic Honors will be reviewed by an Admitted student-reviewer from the college you designate as your 'Primary University'</li>
                                <li>Feedback will be provided through Admitted's Editing Tool</li>
                                <li>Activities & Academic Honors will be reviewed within 3-7 days of submission</li>
                            </ul>
                        </div>
                    </div>
                    <div className="review-sec-ind">
                        <div className="review-sec-ind-img-wrapper">
                            <img className='review-sec-ind-img' src={resume} alt="Model resume that has a school, achievements, and activities section." />
                        </div>
                        <div className="review-sec-ind-text">
                            <h3 className='review-sec-ind-text-header'>Resume</h3>
                            <ul>
                                <li>Purchasing the Premium or Premium+ plans grants access to Admitted's resume-building tool and template</li>
                                <li>The submitted resume will be reviewed by an Admitted student-reviewer from the college you designate as your 'Primary University'</li>
                                <li>Feedback will be provided through Admitted's Editing Tool</li>
                                <li>Resumes will be reviewed within 3-7 days of submission</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="admitted-next-btn-wrap">
                <Link to='/contact-us'  onClick={handleClick} className='admitted-next-btn'>Still have questions?</Link>
            </div>
        </div>
        <Footer />
        </>
    );
}
 
export default ReviewPolicy;