import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1><Link to='/' id="title">Writeway</Link></h1>
            <div style = {{marginLeft: "auto"}}>
                <Link to='/about-us' className = "regularbutton" style = {{marginLeft: "auto", marginRight: "15px"}}>About Us</Link>
                <Link to='/dashboard' className = "regularbutton" style = {{marginLeft: "auto",marginRight: "15px"}}>User Dashboard</Link>
                <Link to="/" className = "regularbutton" style = {{marginLeft: "auto", marginRight: "15px"}}>Support</Link>
                <Link to="/login" className="logbutton">Log in</Link>
                <Link to="/signup "className="mainbutton">Get Started!</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;