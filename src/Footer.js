import { Link } from 'react-router-dom';
import logo from './images/admittedLogo.png';
import './Footer.css';

const Footer = () => {
    const handleClick = () => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
      };

    return (
        <div className="footer">
            <Link to='/' onClick={handleClick}><img src={logo} alt="An enlarged logo for the company Admitted. Admitted provides a college application review service."/></Link>
            <div className="footer-col-box">
                <div className="footer-col">
                    <p className='footer-col-title'>Company</p>
                    <Link to='/inspiration' onClick={handleClick}>Inspiration</Link>
                    <Link to='/about-us' onClick={handleClick}>About Us</Link>
                    <Link to='/contact-us' onClick={handleClick}>Contact Us</Link>
                </div>
                <div className="footer-col">
                    <p className='footer-col-title'>Get Started</p>
                    <Link to='/login' onClick={handleClick}>Login</Link>
                    <Link to='/signup' onClick={handleClick}>Register</Link>
                </div>
                <div className="footer-col">
                    <p className='footer-col-title'>Resources</p>
                    <Link to='/colleges' onClick={handleClick}>Colleges</Link>
                    <Link to='/why-admitted' onClick={handleClick}>Why Choose Us?</Link>
                    <Link to='/review-policy' onClick={handleClick}>Review Policy</Link>
                    <Link to='/cost-calculator' onClick={handleClick}>Cost Calculator</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;