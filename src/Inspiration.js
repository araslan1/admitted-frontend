import Footer from './Footer';
import './Inspiration.css';
import Navbar from './Navbar';
import insp1 from './images/insp1.webp';
import insp2 from './images/insp2.webp';
import insp3 from './images/insp3.webp';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Inspiration = () => {
    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
        <Navbar />
        <div className="inspiration">
            <h1 id='insp-header'>Made By Students For Students</h1>
            <div className="insp-sec">
                <div className="insp-img-wrapper">
                    <img className='insp-photo' src={insp1} alt="A stick figure high school student is stressed by the many different aspects of applying to college." />
                </div>
                <div className="insp-photo-text">
                    <div className="insp-photo-text-header">
                        <h3>How It All Started...</h3>
                    </div>
                    <div className="insp-photo-text-body">
                        <p>
                            As young college students, we did not remember applying to college fondly. 
                            In one short application, we had to justify our lives to colleges who did not know us. 
                            Looking back, it has become abundantly clear how confusing the college application system is. 
                            There are too many moving parts for one person to figure out alone. 
                            Misinformation, bad advice, and fake (plus expensive) experts exacerbate that problem even more. 
                            So, we decided to change the game.
                        </p>
                    </div>
                </div>
            </div>
            <div className="insp-sec">
                <div className="insp-img-wrapper" id='insp-img-wrapper2'>
                    <img className='insp-photo-2' src={insp2} alt='A crossroad and sign with confusing directions. One sign reads “Advice” while pointing to the right and another reads “Help” but points to the left.' />
                </div>
                <div className="insp-photo-text-2">
                    <div className="insp-photo-text-header">
                        <h3>Our Idea</h3>
                    </div>
                    <div className="insp-photo-text-body">
                        <p>
                        When we were applying to college, we would look online and lament at the vague advice most websites offered and the helpful services locked behind $1,000+ price tags. 
                        We figured that there had to be a more affordable way to amplify your chances of getting into an elite university. And there is! 
                        The people who can help you the most with your application are those who’ve already been accepted to your dream schools. 
                        That means connecting you with current or recent students at elite institutions!
                        </p>
                    </div>
                </div>
            </div>
            <div className="insp-sec">
                <div className="insp-img-wrapper">
                    <img className='insp-photo' src={insp3} alt="Stick figure student celebrates after receiving help from Admitted." />
                </div>
                <div className="insp-photo-text">
                    <div className="insp-photo-text-header">
                        <h3>The Next Step</h3>
                    </div>
                    <div className="insp-photo-text-body">
                        <p>
                        After many months of development, we are excited to have released our <Link to='/review-policy' onClick={handleClick}>Free Trial</Link> plan, with more comprehensive services launching this October! 
                        We have already begun our <Link to='/why-admitted' onClick={handleClick}>College Match Guarantee & Live Review</Link> service, ensuring that your application for each college will be reviewed by a student from that university. 
                        With this and many more ideas still in development, we hope you will let Admitted help you with your college application journey.
                        </p>
                    </div>
                </div>
            </div>
            <div className="admitted-next-btn-wrap">
                <Link to='/why-admitted' onClick={handleClick} className="admitted-next-btn">Next: Why choose us?</Link>
            </div>
        </div>
        <Footer />
        </>
    );
}
 
export default Inspiration;