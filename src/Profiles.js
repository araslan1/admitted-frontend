
import './Profiles.css'
import admittedStudentReviewer1 from './images/profile1.webp'
import admittedStudentReviewer2 from './images/profile2.webp'

const Profiles = () => {
    return (
        <div className="profiles">
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
                                She knows what it takes to get into Harvard and wants to help you get there too!
                            </p>
                        </div>
                    </div>
                    <div className="why-profile-ind">
                        <div className="why-profile-img-wrapper">
                            <img className='why-profile-img' src={admittedStudentReviewer2} alt="Fiona Collins poses in front of a mountain valley." />
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
    );
}
 
export default Profiles;