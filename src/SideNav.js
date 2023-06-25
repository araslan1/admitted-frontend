import {Link} from 'react-router-dom'
import logo from './images/sidenav.jpeg';
import './SideNav.css'

const SideNav = () => {
    return (
        <div className="SideNav">
            <div id="logodiv">
                <img src={logo} id="logo"></img>
            </div>
            <div id="linksdiv">
                <Link to="/">About us</Link>
                <Link to="/">Profile</Link>
                <Link to="/">My Essays</Link>
                <Link to="/">Support</Link>
                <Link to="/">Settings</Link>
            </div>
        </div>
    );
}
 
export default SideNav;