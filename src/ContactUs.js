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
                <p>Admitted is an all-in-one platform for students to improve their college applications. Below are a few FAQ's, but if you still have questions about what our service can do for you, please contact us at:</p>
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
                        <p className='faq-question'>How long will it take for me to get my essay reviewed?</p>
                        <p className='faq-answer'>Lorum ipsum dipsum florum torum gorum drive slice spin</p>
                    </div>
                    <div className="ind-faq">
                        <p className='faq-question'>How long will it take for me to get my essay reviewed?</p>
                        <p className='faq-answer'>Lorum ipsum dipsum florum torum gorum drive slice spin</p>
                    </div>
                    <div className="ind-faq">
                        <p className='faq-question'>How long will it take for me to get my essay reviewed?</p>
                        <p className='faq-answer'>Lorum ipsum dipsum florum torum gorum drive slice spin</p>
                    </div>
                </div>
                <div className="faq-col">
                    <div className="ind-faq">
                        <p className='faq-question'>How long will it take for me to get my essay reviewed?</p>
                        <p className='faq-answer'>Lorum ipsum dipsum florum torum gorum drive slice spin</p>
                    </div>
                    <div className="ind-faq">
                        <p className='faq-question'>How long will it take for me to get my essay reviewed?</p>
                        <p className='faq-answer'>Lorum ipsum dipsum florum torum gorum drive slice spin</p>
                    </div>
                    <div className="ind-faq">
                        <p className='faq-question'>How long will it take for me to get my essay reviewed?</p>
                        <p className='faq-answer'>Lorum ipsum dipsum florum torum gorum drive slice spin</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}
 
export default ContactUs;