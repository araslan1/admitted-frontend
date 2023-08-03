import './ReviewerProfile.css';

const ReviewerProfile = (props) => {

    const info = props.profile;

    return (
        <div className="reviewer-profile" id='select-profile'>
            <img className='profile-photo' src={props.image} alt="..." />
            <p className='profile-name'>{info.name}</p>
            <p className='profile-school'>{info.school}</p>
            <div className="profile-description-wrap">
                <p className='profile-description'>{info.description[0]} is a {info.description[1]} studying <span>{info.description[2]}</span> at <span>{info.school}</span>!</p>
            </div>
        </div>
    );
}
 
export default ReviewerProfile;