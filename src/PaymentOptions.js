import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './PaymentOptions.css';

const PaymentOptions = () => {
    const handleClick = () => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
      };

    return (
        <div className="payment-options">
            <h2>Get your application reviewed today</h2>
                <div className="pay-options-all-boxes">
                    <Link to='/review-policy' onClick={handleClick}>
                        <div className="pay-options-box">
                            <div className="individual-box">
                                <h3 className="pay-options-header">Premium+</h3>
                                <p className='pay-options-blurb'>A comprehensive analysis of your<br></br>entire application; ideal for those<br></br>who want 5+ schools reviewed</p>
                                <p className='pay-options-features'>
                                    <span className='pay-options-features-line'>&#x2713; Supplemental Essay Analysis<br></br></span>
                                    <span className='pay-options-features-line'>&#x2713; Common App Essay Review<br></br></span>
                                    <span className='pay-options-features-line'>&#x2713; Activities & Honors Evaluation<br></br></span>
                                    <span className='pay-options-features-line'>&#x2713; Resume Evaluation<br></br></span>
                                    <span className='pay-options-features-last-line'>&#x2713; Practice Interview<br></br></span>
                                </p> 
                            </div>
                        </div>
                    </Link>
                    <Link to='/review-policy' onClick={handleClick}>
                        <div className="pay-options-box">
                            <div className="individual-box">
                                <h3 className="pay-options-header">Premium</h3>
                                <p className='pay-options-blurb'>A complete review of the Common<br></br>Application; ideal for those applying<br></br>to 2-5 schools</p>
                                <p className='pay-options-features'>
                                    <span className='pay-options-features-line'>&#x2713; Supplemental Essay Analysis<br></br></span>
                                    <span className='pay-options-features-line'>&#x2713; Common App Essay Review<br></br></span>
                                    <span className='pay-options-features-line'>&#x2713; Activities & Honors Evaluation<br></br></span>
                                    <span className='pay-options-features-line'>&#x2713; Resume Evaluation<br></br></span>
                                    <span className='pay-options-features-last-line pay-options-features-line-x'>&#x2715; Practice Interview<br></br></span>
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/review-policy' onClick={handleClick}>
                        <div className="pay-options-box">
                            <div className="individual-box">
                                <h3 className="pay-options-header">Essentials</h3>
                                <p className='pay-options-blurb'>An extensive review of each application<br></br>essays; suited for those solely<br></br>looking for essay feedback</p>
                                <p className='pay-options-features'>
                                    <span className='pay-options-features-line'>&#x2713; Supplemental Essay Analysis<br></br></span>
                                    <span className='pay-options-features-line'>&#x2713; Common App Essay Review<br></br></span>
                                    <span className='pay-options-features-line pay-options-features-line-x'>&#x2715; Activities & Honors Evaluation<br></br></span>
                                    <span className='pay-options-features-line pay-options-features-line-x'>&#x2715; Resume Evaluation<br></br></span>
                                    <span className='pay-options-features-last-line pay-options-features-line-x'>&#x2715; Practice Interview<br></br></span>
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/review-policy' onClick={handleClick}>
                        <div className="pay-options-box">
                            <div className="individual-box">
                                <h3 className="pay-options-header">Free Trial</h3>
                                <p className='pay-options-blurb'>One sample essay review for one<br></br>of either USC or Stanford's short<br></br>supplemental essays</p>
                                <p className='pay-options-features'>
                                    <span className='pay-options-features-line'>&#x2713; Sample Essay Analysis<br></br></span>
                                    <span className='pay-options-features-line pay-options-features-line-x'>&#x2715; Common App Essay Review<br></br></span>
                                    <span className='pay-options-features-line pay-options-features-line-x'>&#x2715; Activities & Honors Evaluation<br></br></span>
                                    <span className='pay-options-features-line pay-options-features-line-x'>&#x2715; Resume Evaluation<br></br></span>
                                    <span className='pay-options-features-last-line pay-options-features-line-x'>&#x2715; Practice Interview<br></br></span>
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            <div className="admitted-next-btn-wrap">
                <Link to='/why-admitted' className='admitted-next-btn' onClick={handleClick}>Next: How Admitted Can Help You!</Link>
            </div>
        </div>
    );
}
 
export default PaymentOptions;