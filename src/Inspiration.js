import Footer from './Footer';
import './Inspiration.css';
import Navbar from './Navbar';
import insp1 from './images/insp1.webp';
import insp2 from './images/insp2.webp';
import insp3 from './images/insp3.webp';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Inspiration = () => {
    return (
        <>
        <Navbar />
        <div className="inspiration">
            <h1 id='insp-header'>Made By Students For Students</h1>
            <div className="insp-sec">
                <div className="insp-img-wrapper">
                    <img className='insp-photo' src={insp1} alt="..." />
                </div>
                <div className="insp-photo-text">
                    <div className="insp-photo-text-header">
                        <h3>How It All Started...</h3>
                    </div>
                    <div className="insp-photo-text-body">
                        <p>
                            As young college students, we did not remember the free-for-all contest that is applying to college fondly. In one short application, we had to prove our worth and justify our lives to colleges who did not know us. Looking back, one thing has become abundantly clear. If you don’t know the rules of the college application game and you don’t have the money to find out, your dream school would remain a dream. So, we decided to change the game.
                        </p>
                    </div>
                </div>
            </div>
            <div className="insp-sec">
                <div className="insp-img-wrapper" id='insp-img-wrapper2'>
                    <img className='insp-photo-2' src={insp2} alt="..." />
                </div>
                <div className="insp-photo-text-2">
                    <div className="insp-photo-text-header">
                        <h3>Our Idea</h3>
                    </div>
                    <div className="insp-photo-text-body">
                        <p>
                        When we were applying to college, we would look online and lament at the vague advice most websites offered and the helpful services locked behind $1,000+ price tags. We figured that there had to be a more affordable way to amplify your chances of getting into an elite university. And there is! The people who can review your application best are those who have already written a successful application to your dream schools. That means connecting you with current or recent students at elite institutions!
                        </p>
                    </div>
                </div>
            </div>
            <div className="insp-sec">
                <div className="insp-img-wrapper">
                    <img className='insp-photo' src={insp3} alt="..." />
                </div>
                <div className="insp-photo-text">
                    <div className="insp-photo-text-header">
                        <h3>The Next Step</h3>
                    </div>
                    <div className="insp-photo-text-body">
                        <p>
                        After three months of development, we are excited to have released our <Link to='/review-policy'>Free Trial</Link> plan, with more comprehensive services launching this September! We have already begun our <Link to='/why-admitted'>College Match Guarantee</Link> service, ensuring that your application for each college will be reviewed by a current or recent student from that university. With this and many more ideas still in development, we hope you will let Admitted help you with your college application journey.
                        </p>
                    </div>
                </div>
            </div>
            <div className="admitted-next-btn-wrap">
                <Link to='/why-admitted' className="admitted-next-btn">Next: Why choose us?</Link>
            </div>
        </div>
        <Footer />
        </>
    );
}
 
export default Inspiration;