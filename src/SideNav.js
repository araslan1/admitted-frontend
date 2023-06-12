import {Link} from 'react-router-dom'

const SideNav = () => {
    return (
        <div className="side-nav">
            <h3><Link to='/dashboard' id='title'>Dreamcatcher</Link></h3>
            <Link to='/colleges' class='side-nav-links'>Colleges</Link>
            <Link to='/applications' class='side-nav-links'>Applications</Link>
            <Link to='/calendar' class='side-nav-links'>Calendar</Link>
            <Link to='/account' class='side-nav-links'>Account</Link>
            <Link to='/support' class='side-nav-links'>Support</Link>
        </div>
    );
}
 
export default SideNav;