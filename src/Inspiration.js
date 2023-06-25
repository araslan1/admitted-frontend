import Footer from './Footer';
import './Inspiration.css';
import Navbar from './Navbar';
import placeholder1 from './images/IMG_0101.jpg';
import placeholder2 from './images/IMG_1861.jpg';
import placeholder3 from './images/IMG_6420.jpg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Inspiration = () => {
    return (
        <>
        <Navbar />
        <div className="inspiration">
            <h1 id='insp-header'>Made By Students For Students</h1>
            <div className="insp-sec">
                <div className="insp-img-wrapper">
                    <img className='insp-photo' src={placeholder1} alt="..." />
                </div>
                <div className="insp-photo-text">
                    <p>The term Lorem Ipsum is derived from the Latin term Dolorem Ipsum which means "pain itself. " The text has been in use for a very long time and its history spans for over two millennia.</p>
                </div>
            </div>
            <div className="insp-sec">
                <div className="insp-img-wrapper" id='insp-img-wrapper2'>
                    <img className='insp-photo' src={placeholder2} alt="..." />
                </div>
                <div className="insp-photo-text">
                    <p>It was due to the popularity of De Finibus Bonorum et Malorum that the Lorem Ipsum text came to be in its current form. Cicero was considered one of the most skilled rhetoricians of all time. During the age of enlightenment, his works were considered the standard for prose in Latin.</p>
                </div>
            </div>
            <div className="insp-sec">
                <div className="insp-img-wrapper">
                    <img className='insp-photo' src={placeholder3} alt="..." />
                </div>
                <div className="insp-photo-text">
                    <p>The Lorem Ipsum text is not only there as a placeholder. You can also use it to keep you focused on the draft copy. Why do you think the typesetter intentionally garbled Cicero's work? He probably did it to avoid distraction.</p>
                </div>
            </div>
            <Link to='/signup' class="insp-button" id='insp-register-button'>Next: Register and let us help you!</Link>
        </div>
        <Footer />
        </>
    );
}
 
export default Inspiration;