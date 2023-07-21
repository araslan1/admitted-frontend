import "./UserSideNav.css";
import "./ReviewerDashboard.css";
import Typed from 'typed.js';
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import documenticon from "./images/document_icon.png"

const ReviewerDashboard = () => {
    const history = useHistory();
    const [UserName, setUserName] = useState("Adam Raslan");
    const [documentIds, setDocumentIds] = useState(null);
    const el = useRef(null);


    const logout = () => {

    };

    const openNav = () => {
        document.querySelector("#mySidenav").style.width = "280px";
    }

    const closeNav = () => {
        document.querySelector("#mySidenav").style.width = "0";
    }


    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [`Hi ${UserName}`],
            typeSpeed: 70,
        });
    
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, [UserName]);



    return (
    <div className="reviewerdashboard">
        <div className="usersidenav">
            <div id="mySidenav" className="sidenav">
                <button className="closebtn" onClick={closeNav}>
                    &times;
                </button>
                <div className="linksdiv">
                    <a href="/">About</a>
                    <a href="/">Services</a>
                    <a href="/">Clients</a>
                    <a href="/">Contact</a>
                    <a href="#" onClick={logout}>Log Out</a>
                </div>
            </div>

            <span onClick={openNav} id="openNavBtn">
                <div className="linesdiv">
                    <div className="topline"></div>
                    <div className="line"></div>
                    <div className="bottomline"></div>
                </div>
            </span>
        </div>
        <div className="userdashboard">
            <div id="left-side">
                <h1>
                    <span ref={el}></span>
                </h1>

                <p className="left-side-p">Welcome back to the workspace, we missed You!</p>

                <h3>
                    Notifications
                </h3>
                <div id ="projectscontainer">
                    <div className="noti-ind">
                        <p>Hello this is a notification</p>
                        {/* Need to add delete notification function */}
                        <button><p className="x-but">&#x2715;</p></button>
                    </div>
                    <div className="noti-ind">
                        <p>Hello this is a notification</p>
                        {/* Need to add delete notification function */}
                        <button><p className="x-but">&#x2715;</p></button>
                    </div>
                </div>

            </div>
            <div id="right-side">
                <h1 className='right-side-header' style={{marginLeft: "20px"}}>Your Workspace</h1>
                <h3 className="right-side-header" style={{marginLeft: "20px", marginTop: "50px"}}> current essays</h3>
                <hr></hr>
                <div className="current_projects">
                    <div id="upload" onClick={() => {
                        history.push('/testeditingtool')
                    }}>
                        <img src={documenticon}></img>
                        <h2>Demo</h2>
                        <div> 

                        </div>
                    </div> 
                </div>
                <h3 className="right-side-header" style={{marginLeft: "20px", marginTop: "20px"}}> pick up an available essay here</h3>
                <hr></hr>
                <div className="current_projects">
                    <div id="upload" onClick={() => {
                        history.push('/testeditingtool')
                    }}>
                        <img src={documenticon}></img>
                        <h2>Demo</h2>
                        <div> 

                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div> 
    );
}
 
export default ReviewerDashboard;