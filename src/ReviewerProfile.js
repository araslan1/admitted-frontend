import './ReviewerProfile.css';
import profilePhoto from './images/IMG_6420.jpg'

const ReviewerProfile = () => {
    return (
        <div className="reviewer-profile">
            <div className="profile-wrapper">
                <img className='profile-photo' src={profilePhoto} alt="..." />
            </div>
            <p className='profile-name'>Firstname Lastname</p>
            <p className='profile-school'>Stanford</p>
            <div className="profile-description-wrap">
                <p className='profile-description'>Hi! I'm a Freshman studying <span>Biology</span> at <span>Stanford University</span>.</p>
            </div>
            <p className='profile-email'>modelStudent@stanford.edu</p>
        </div>
    );
}
 
export default ReviewerProfile;