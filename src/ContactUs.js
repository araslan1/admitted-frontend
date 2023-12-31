//window scroll to links

import { Link } from 'react-router-dom/cjs/react-router-dom';
import './ContactUs.css';
import Footer from './Footer';
import Navbar from './Navbar';

const ContactUs = () => {

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

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
                <p>admitted.team@gmail.com</p>
            </div>
            <div className="faq-header">
                <h2>Frequently Asked Questions:</h2>
            </div>
            <div className="all-faqs">
                <div className="faq-col">
                    <div className="ind-faq">
                        <p className='faq-question'>How long will it take for me to get my application reviewed?</p>
                        <p className='faq-answer'>A Live Review session will typically be scheduled within 3-7 days of submission.</p>
                    </div>
                    <div className="ind-faq">
                        <p className='faq-question'>How will feedback be given?</p>
                        <p className='faq-answer'>Advice is provided in a Live Review session & documented using Admitted's Editing Tool.
                        <br></br>
                        Visit our <Link to='/review-policy' onClick={handleClick}>Review Policy</Link> page for more details!</p>
                    </div>
                    <div className="ind-faq">
                        <p className='faq-question'>What colleges does Admitted offer reviews for?</p>
                        <p className='faq-answer'>Visit our <Link to='/colleges' onClick={handleClick}>Colleges</Link> page for the entire list of offered universities.</p>
                    </div>
                </div>
                <div className="faq-col">
                    <div className="ind-faq">
                        <p className='faq-question'>When will Admitted officially launch?</p>
                        <p className='faq-answer'>The Essentials, Premium, & Premium+ plans open in October 2023.
                        <br></br>
                        For now, see how our service works with our <Link to='/review-policy' onClick={handleClick}>Free Trial</Link>!</p>
                    </div>
                    <div className="ind-faq">
                        <p className='faq-question'>How much will it cost for me to get my application reviewed?</p>
                        <p className='faq-answer'>Use our <Link to='/cost-calculator' onClick={handleClick}>Cost Calculator</Link> to see the exact price of Admitted's services.</p>
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