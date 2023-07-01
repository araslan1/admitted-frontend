import { Link } from "react-router-dom";
import logo from './images/admitted-white.jpeg';
import './NavbarListener.js'

const Navbar = () => {
    return (  
        <nav className="navbar">
            <Link to='/'><img className="admitted-logo-white" src={logo} alt="Admitted logo with white background" /></Link>
            <div className="test-class" style = {{marginLeft: "auto"}}>

                <div className="nav-dropdown" data-dropdown>
                    <button className="nav-dropdown-link" style = {{marginLeft: "auto", marginRight: "15px"}} data-dropdown-button>About Us</button>
                    <div className="nav-dropdown-menu">
                        <Link to='/about-us' className='nav-dropdown-menu-link'>Our Team</Link>
                        <Link to='/inspiration' className='nav-dropdown-menu-link1'>Inspiration</Link>
                        <Link to='/why-admitted' className='nav-dropdown-menu-link1'>Why Choose Us?</Link>
                        <Link to='/contact-us' className='nav-dropdown-menu-link1'>Contact Us</Link>
                    </div>
                </div>
                <Link to='/dashboard' className = "nav-dropdown-link" style = {{marginLeft: "auto",marginRight: "15px"}}>User Dashboard</Link>
                <div className="nav-dropdown" data-dropdown>
                    <button className="nav-dropdown-link" style = {{marginLeft: "auto", marginRight: "15px"}} data-dropdown-button>Products</button>
                    <div className="nav-dropdown-menu">
                        <Link to='/colleges' className='nav-dropdown-menu-link'>Colleges</Link>
                        <Link to='/review-policy' className='nav-dropdown-menu-link1'>Review Policy</Link>
                        <Link to='/cost-calculator' className='nav-dropdown-menu-link1'>Cost Calculator</Link>
                    </div>
                </div>
                <Link to="/login" className="logbutton">Log in</Link>
                <Link to="/signup"className="mainbutton">Get Started!</Link>

                {/* <Link to='/about-us' className = "regularbutton" style = {{marginLeft: "auto", marginRight: "15px"}}>About Us</Link>
                <Link to='/dashboard' className = "regularbutton" style = {{marginLeft: "auto",marginRight: "15px"}}>User Dashboard</Link>
                <Link to="/inspiration" className = "regularbutton" style = {{marginLeft: "auto", marginRight: "15px"}}>Inspiration</Link>
                <Link to="/login" className="logbutton">Log in</Link>
                <Link to="/signup"className="mainbutton">Get Started!</Link> */}
            </div>
        </nav>
    );
}
 
export default Navbar;