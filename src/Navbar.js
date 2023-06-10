import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="links">
                <Link to='/products'>Products</Link>
                <Link to='/about-us'>About Us</Link>
            </div>
            <h1><Link to='/' id='title'>Dreamcatcher</Link></h1>
            <div className="links">
                <Link to="/login">Log in</Link>
                <Link to="/signup">Register</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;