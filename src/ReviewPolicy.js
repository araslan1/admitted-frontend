import './ReviewPolicy.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import essay from './images/placeholderEssay.jpeg'
import resume from './images/placeholderResume.jpeg'
import honorsActivities from './images/honorsActivitiesPlaceholder.jpeg'
import interview from './images/interviewPlaceholder.jpeg'

const ReviewPolicy = () => {
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
                        <p>Take a look at the different features each plan offers and choose the one that fits you best.</p>
                    </td>
                    <td>
                        <h2 className='policy-table-header'>Premium+</h2>
                        <p>Our most complete service, with everything from practice interviews to resume review included.</p>
                        <Link to='/signup' className='policy-table-button'>Get Started!</Link>
                    </td>
                    <td>
                        <h2 className='policy-table-header'>Premium</h2>
                        <p>A comprehensive review of the Common Application, ideal for those applying to mutliple schools.</p>
                        <Link to='/signup' className='policy-table-button' style={{backgroundColor: '#FDADC3'}}>Get Started!</Link>
                    </td>
                    <td>
                        <h2 className='policy-table-header'>Essentials</h2>
                        <p>An extensive review of every application essay, suited for those who solely want essay feedback..</p>
                        <Link to='/signup' className='policy-table-button' style={{backgroundColor: '#FEC6D5'}}>Get Started!</Link>
                    </td>
                    <td>
                        <h2 className='policy-table-header'>Free</h2>
                        <p>A sample essay review for either Stanford or USC; limited to one of the short essays.</p>
                        <Link to='/signup' className='policy-table-button' style={{backgroundColor: '#FEDEE7'}}>Get Started!</Link>
                    </td>
                </tr>
                <tr className='row-colored'>
                    <td>College-specific Essay Review</td>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                    <td>1 Short Essay</td>
                </tr>
                <tr>
                    <td>Common App Essay Review</td>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                    <td>&#x2717;</td>
                </tr>
                <tr className='row-colored'>
                    <td>Price / College Reviewed (All supplementals)</td>
                    <td>$45</td>
                    <td>$47.50</td>
                    <td>$50</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td>Resume Review</td>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                    <td>&#x2717;</td>
                    <td>&#x2717;</td>
                </tr>
                <tr className='row-colored'>
                    <td>Activities/Academic Honors Review</td>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                    <td>&#x2717;</td>
                    <td>&#x2717;</td>
                </tr>
                <tr>
                    <td>Practice Interview</td>
                    <td>&#x2713;</td>
                    <td>&#x2717;</td>
                    <td>&#x2717;</td>
                    <td>&#x2717;</td>
                </tr>
            </table>

            <div className="next-btn-wrap">
                <Link to='/cost-calculator' className='next-btn'>Next: Determine the Exact Price w/ Our Cost Calculator</Link>
            </div>

            <div className="review-sec-section">
                <h1 className='review-header'>How do our <span className='review-header-underline'>reviews</span> work?</h1>
                <div className="review-sec-row">
                    <div className="review-sec-ind">
                        <div className="review-sec-ind-img-wrapper">
                            <img className='review-sec-ind-img' src={essay} alt="..." />
                        </div>
                        <div className="review-sec-ind-text">
                            <h3 className='review-sec-ind-text-header'>Essays</h3>
                            <ul>
                                <li>Your Common App main essay will be reviewed by a student from your primary school (selected by you during registration)</li>
                                <li>College-specific essays are reviewed by a student from that specific university</li>
                                <li>Essays will be reviewed within a week of submission</li>
                                <li>Reviewers will not write your essay for you!</li>
                            </ul>
                        </div>
                    </div>

                    <div className="review-sec-ind">
                        <div className="review-sec-ind-img-wrapper">
                            <img className='review-sec-ind-img' src={interview} alt="..." />
                        </div>
                        <div className="review-sec-ind-text">
                            <h3 className='review-sec-ind-text-header'>Interviews</h3>
                            <ul>
                                <li>You will schedule a 30-minute meeting(s) to meet with a student(s) from whichever university/universities you wish to practice an interview</li>
                                <li>The university student will spend 25-minutes conducting an interview similar to the one they recieved when they applied</li>
                                <li>After the interview, the student will spend 5+ minutes giving feedback</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="review-sec-row">
                <div className="review-sec-ind">
                        <div className="review-sec-ind-img-wrapper">
                            <img className='review-sec-ind-img' src={honorsActivities} alt="..." />
                        </div>
                        <div className="review-sec-ind-text">
                            <h3 className='review-sec-ind-text-header'>10 Activities & 5 Academic Honors</h3>
                            <ul>
                                <li>Your Common App main essay will be reviewed by a student from your primary school (selected by you during registration)</li>
                                <li>College-specific essays are reviewed by a student from that specific university</li>
                                <li>Essays will be reviewed within a week of submission</li>
                                <li>Reviewers will not write your essay for you!</li>
                            </ul>
                        </div>
                    </div>
                    <div className="review-sec-ind">
                        <div className="review-sec-ind-img-wrapper">
                            <img className='review-sec-ind-img' src={resume} alt="..." />
                        </div>
                        <div className="review-sec-ind-text">
                            <h3 className='review-sec-ind-text-header'>Resume</h3>
                            <ul>
                                <li>Your Common App main essay will be reviewed by a student from your primary school (selected by you during registration)</li>
                                <li>College-specific essays are reviewed by a student from that specific university</li>
                                <li>Essays will be reviewed within a week of submission</li>
                                <li>Reviewers will not write your essay for you!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}
 
export default ReviewPolicy;