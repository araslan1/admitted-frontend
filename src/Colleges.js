
import { Link } from 'react-router-dom/cjs/react-router-dom';
import './Colleges.css'
import Footer from './Footer';
import Navbar from './Navbar';

const Colleges = () => {
    const handleClick = () => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
      };

    return (
        <>
        <Navbar />
        <div className="colleges">
            <h1 id='colleges-header'>Colleges we offer reviews for:<sup>*</sup></h1>
            <div className="college-list">
                <div className="college-col">
                    <p>Stanford University</p>
                    <p>Harvard University</p>
                    <p>Princeton University</p>
                    <p>University of Pennsylvania</p>
                    <p>Columbia University</p>
                    <p>Tulane University</p>
                </div>

                <div className="college-col">
                    <p>University of Southern California</p>
                    <p>Yale University</p>
                    <p>Dartmouth University</p>
                    <p>Cornell University</p>
                    <p>Brown University</p>
                </div>
            </div>
            
            <div className="college-unlisted">
                <h2 id='college-unlisted-header'>Your dream school isn't listed?</h2>
                <p>
                    We are doing our best to find reviewers at every elite institution. If there is one school in particular that you want reviewed by a current student, email the address listed below to let us know. If we find reviewers, we'll email you back!
                </p>
                <p className='colleges-email'>admitted.team@gmail.com</p>
            </div>

            <div className="admitted-next-btn-wrap">
                <Link to='/review-policy' onClick={handleClick} className='admitted-next-btn'>Next: How do our reviews work?</Link>
            </div>

            <p className='colleges-disclaimer'>*Admitted is not officially affiliated or endorsed by any of the above universities</p>
        </div>
        <Footer />
        </>
    );
}
 
export default Colleges;