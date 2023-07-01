import "./UserSideNav.css"

const UserSideNav = () => {
    const openNav = () => {
        document.querySelector("#mySidenav").style.width = "250px";
    }
    const closeNav = () => {
        document.querySelector("#mySidenav").style.width = "0";
    }

  
  


    return (  
        <div className="usersidenav">
            <div id="mySidenav" className="sidenav">
                <a href="/" className="closebtn" onClick={closeNav}>&times;</a>
                <a href="/">About</a>
                <a href="/">Services</a>
                <a href="/">Clients</a>
                <a href="/">Contact</a>
            </div>

            <button onClick={openNav} id="openNavBtn">
                open
                <div className="topline"></div>
                <div className="line"></div>
                <div className="bottomline"></div>
            </button>
        </div>
    );
}
 
export default UserSideNav;