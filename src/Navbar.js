import { Link } from "react-router-dom";
import logo from './images/admitted-white.jpeg';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <Link to='/'><img className="admitted-logo-white" src={logo} alt="Admitted logo with white background" /></Link>
            <div style = {{marginLeft: "auto"}}>
                <Link to='/about-us' className = "regularbutton" style = {{marginLeft: "auto", marginRight: "15px"}}>About Us</Link>
                <Link to='/dashboard' className = "regularbutton" style = {{marginLeft: "auto",marginRight: "15px"}}>User Dashboard</Link>
                <Link to="/inspiration" className = "regularbutton" style = {{marginLeft: "auto", marginRight: "15px"}}>Inspiration</Link>
                <Link to="/login" className="logbutton">Log in</Link>
                <Link to="/signup"className="mainbutton">Get Started!</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;