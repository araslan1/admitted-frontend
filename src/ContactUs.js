import { Link } from 'react-router-dom/cjs/react-router-dom';
import './ContactUs.css';
import Footer from './Footer';
import Navbar from './Navbar';

const ContactUs = () => {
    return (
        <>
        <Navbar />
        <div className="contact-us">
            <div className="contact-us-header">
                <h1>Have questions?</h1>
            </div>
            <div className="contact-us-text-box">
                <p>Admitted is an all-in-one platform for students to improve their college applications. Below are a few FAQs, but if you still have questions about what our service can do for you, please contact us at:</p>
            </div>
            <div className="contact-us-email">
                <p>araslan@usc.edu</p>
            </div>
            <div className="faq-header">
                <h2>Frequently Asked Questions:</h2>
            </div>
            <div className="all-faqs">
                <div className="faq-col">
                    <div className="ind-faq">
                        <p className='faq-question'>How long will it take for me to get my application reviewed?</p>
                        <p className='faq-answer'>Reviews will take between 3-7 days to complete.</p>
                    </div>
                    <div className="ind-faq">
                        <p className='faq-question'>How will feedback be given?</p>
                        <p className='faq-answer'>Visit our <Link to='/review-policy'>Review Policy</Link> page to see specific feedback guidelines for each plan.
                        <br></br>
                        You can also try out our essay review service with a <Link to='/review-policy'>Free Trial</Link>!</p>
                    </div>
                    <div className="ind-faq">
                        <p className='faq-question'>What colleges does Admitted offer reviews for?</p>
                        <p className='faq-answer'>Visit our <Link to='/colleges'>Colleges</Link> page to the entire list of offered universities.</p>
                    </div>
                </div>
                <div className="faq-col">
                    <div className="ind-faq">
                        <p className='faq-question'>When will Admitted officially launch?</p>
                        <p className='faq-answer'>The Premium+, Premium, & Essentials plans will offically open in August 2023.
                        <br></br>
                        For now, see how our service works with our <Link to='/review-policy'>Free Trial</Link>!</p>
                    </div>
                    <div className="ind-faq">
                        <p className='faq-question'>How much will it cost for me to get my application reviewed?</p>
                        <p className='faq-answer'>Use our <Link to='/cost-calculator'>Cost Calculator</Link> to see the exact price of Admitted's services.</p>
                    </div>
                </div>
            </div>

            <div className="admitted-next-btn-wrap">
                <Link to='/signup' className='admitted-next-btn'>Get Started!</Link>
            </div>
        </div>
        <Footer />
        </>
    );
}
 
export default ContactUs;