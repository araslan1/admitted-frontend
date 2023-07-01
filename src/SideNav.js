import {Link} from 'react-router-dom'
import logo from './images/sidenav.jpeg';
import house_icon_white from './images/house-icon-white.png'
import './SideNav.css'

const SideNav = () => {


    return (
        <div className="SideNav">
            <div id="header">
                <h1>DASHBOARD</h1>
            </div>
            <div id="linksdiv">
                <Link to="/" style ={{background: "#fc8eac", color: "white"}}><span><img src={house_icon_white}></img>About us</span></Link>
                <Link to="/"><span>Profile</span></Link>
                <Link to="/"><span>My Essays</span></Link>
                <Link to="/"><span>Support</span></Link>
                <Link to="/"><span>Settings</span></Link>
            </div>
        </div>
    );
}
 
export default SideNav;