import { Link } from 'react-router-dom';
import logo from './images/admittedLogo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Link to='/'><img src={logo} alt="Admitted logo with a pink background"/></Link>
            <div className="footer-col-box">
                <div className="footer-col">
                    <p className='footer-col-title'>Company</p>
                    <Link to='/inspiration'>Inspiration</Link>
                    <Link to='/about-us'>About Us</Link>
                    <Link to='/why-admitted'>Why Choose Us?</Link>
                    <Link to='/contact-us'>Contact Us</Link>
                </div>
                <div className="footer-col">
                    <p className='footer-col-title'>Get Started</p>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Register</Link>
                </div>
                <div className="footer-col">
                    <p className='footer-col-title'>Products</p>
                    <Link to='/colleges'>Colleges</Link>
                    <Link to='/review-policy'>Review Policy</Link>
                    <Link to='/cost-calculator'>Cost Calculator</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;