import './ReviewPolicy.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import placeholder from './images/essay.jpeg';

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
                        <p className='policy-table-price-text'>Starts at<br></br><span className='policy-table-price'>$X00</span><br></br>per college reviewed</p>
                        <Link to='/signup' className='policy-table-button'>Get Started!</Link>
                    </td>
                    <td>
                        <h2 className='policy-table-header'>Premium</h2>
                        <p>Best suited for students who are applying to 10+ schools. BLAH BLAH BLAH BLAH BLAH BLAH</p>
                        <p className='policy-table-price-text'>Starts at<br></br><span className='policy-table-price'>$X00</span><br></br>per college reviewed</p>
                        <Link to='/signup' className='policy-table-button'>Get Started!</Link>
                    </td>
                    <td>
                        <h2 className='policy-table-header'>Essentials</h2>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className='policy-table-price-text'>Costs at most<br></br><span className='policy-table-price'>$X0</span><br></br>per college reviewed</p>
                        <Link to='/signup' className='policy-table-button'>Get Started!</Link>
                    </td>
                    <td>
                        <h2 className='policy-table-header'>Free</h2>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className='policy-table-price-text'><span className='policy-table-price'>$0</span><br></br>for one short essay review for certain schools</p>
                        <Link to='/signup' className='policy-table-button'>Get Started!</Link>
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
                    <td>Price / Word Reviewed</td>
                    <td>&#162;2.5</td>
                    <td>&#162;2.5</td>
                    <td>&#162;3</td>
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

            <div className="review-sec-section">
                <h1 className='review-header'>How do our <span className='review-header-underline'>reviews</span> work?</h1>
                <div className="review-sec-row">
                    <div className="review-sec-ind">
                        <div className="review-sec-ind-img-wrapper">
                            <img className='review-sec-ind-img' src={placeholder} alt="..." />
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
                            <img className='review-sec-ind-img' src={placeholder} alt="..." />
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
                            <img className='review-sec-ind-img' src={placeholder} alt="..." />
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
                            <img className='review-sec-ind-img' src={placeholder} alt="..." />
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