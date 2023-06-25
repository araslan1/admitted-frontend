import './Colleges.css'
import collegePhoto1 from './images/placeholder-college.jpeg';
import Footer from './Footer';
import Navbar from './Navbar';

const Colleges = () => {
    return (
        <>
        <Navbar />
        <div className="colleges">
            <h1>Colleges we offer reviews for:</h1>
            <div className="all-colleges">
                <div className="college-row">
                    <div className="college-ind">
                        <div className="college-ind-img-wrapper">
                            <img className='college-ind-img' src={collegePhoto1} alt="..." />
                        </div>
                        <div className="college-ind-text">
                            <p>Stanford University</p>
                        </div>
                    </div>

                    <div className="college-ind">
                        <div className="college-ind-img-wrapper">
                            <img className='college-ind-img' src={collegePhoto1} alt="..." />
                        </div>
                        <div className="college-ind-text">
                            <p>University of Southern California</p>
                        </div>
                    </div>

                    <div className="college-ind">
                        <div className="college-ind-img-wrapper">
                            <img className='college-ind-img' src={collegePhoto1} alt="..." />
                        </div>
                        <div className="college-ind-text">
                            <p>Tulane University</p>
                        </div>
                    </div>
                </div>

                <div className="college-row">
                    <div className="college-ind">
                        <div className="college-ind-img-wrapper">
                            <img className='college-ind-img' src={collegePhoto1} alt="..." />
                        </div>
                        <div className="college-ind-text">
                            <p>Yale University</p>
                        </div>
                    </div>

                    <div className="college-ind">
                        <div className="college-ind-img-wrapper">
                            <img className='college-ind-img' src={collegePhoto1} alt="..." />
                        </div>
                        <div className="college-ind-text">
                            <p>Dartmouth University</p>
                        </div>
                    </div>

                    <div className="college-ind">
                        <div className="college-ind-img-wrapper">
                            <img className='college-ind-img' src={collegePhoto1} alt="..." />
                        </div>
                        <div className="college-ind-text">
                            <p>Harvard University</p>
                        </div>
                    </div>
                </div>

                <div className="college-row">
                    <div className="college-ind">
                        <div className="college-ind-img-wrapper">
                            <img className='college-ind-img' src={collegePhoto1} alt="..." />
                        </div>
                        <div className="college-ind-text">
                            <p>Cornell University</p>
                        </div>
                    </div>

                    <div className="college-ind">
                        <div className="college-ind-img-wrapper">
                            <img className='college-ind-img' src={collegePhoto1} alt="..." />
                        </div>
                        <div className="college-ind-text">
                            <p>Princeton University</p>
                        </div>
                    </div>

                    <div className="college-ind">
                        <div className="college-ind-img-wrapper">
                            <img className='college-ind-img' src={collegePhoto1} alt="..." />
                        </div>
                        <div className="college-ind-text">
                            <p>Columbia University</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="college-unlisted">
                <h2>Your dream school isn't listed?</h2>
                <p>
                    We are doing our best to find reviewers at every elite instition. If there is one school in particular that you want reviewed by a current student, email the address listed below to let us know. If we find reviewers, we'll email you back!
                </p>
                <p className='colleges-email'>araslan@usc.edu</p>
            </div>
        </div>
        <Footer />
        </>
    );
}
 
export default Colleges;