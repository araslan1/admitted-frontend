import "./Dashboard.css"
import "./UserSideNav.css"
import documenticon from "./images/document_icon.png"
import React from 'react';
import Typed from 'typed.js';
import { useState, useRef, useEffect } from "react"


const Dashboard = () => {
    const [UserName, setUserName] = useState("")
    const [documentIds, setDocumentIds] = useState([])
    const el = useRef(null);
    const openNav = () => {
        document.querySelector("#mySidenav").style.width = "280px";
    }
    const closeNav = () => {
        document.querySelector("#mySidenav").style.width = "0";
    }

<<<<<<< HEAD


    // useEffect(() => {
    //     const configuration = {
    //         method: "get",
    //         url: http://localhost:7459/
    //     }
    // })

=======
>>>>>>> parent of 72658fb (Commit slight change)
    useEffect(() => {

        //
        const typed = new Typed(el.current, {
            strings: ["Hi Fiona"],
            typeSpeed: 70,
        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, [])

      
    return ( 
    
        <div className ="maindashboard">
            <div className="usersidenav">
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)"className="closebtn" onClick={closeNav}>&times;</a>
                    <div className="linksdiv">
                        <a href="/">About</a>
                        <a href="/">Services</a>
                        <a href="/">Clients</a>
                        <a href="/">Contact</a>
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

                    <p>Welcome back to the workspace, we missed You!</p>

                    <h3>
                        Essays
                    </h3>
                    <div id ="projectscontainer">

                    </div>

                </div>
                <div id ="right-side">
                    <h1 style={{marginLeft: "20px"}}>Your Workspace</h1>
                    <div id="essays">  
                        <div id="upload">
                            <img src={documenticon}></img>
                            <h2>New</h2>
                            <div> 

                            </div>
                        </div>
<<<<<<< HEAD
                        {/* <a href={`/editingtool/${randomId}`}>
                            Click here to go to the editing tool
                        </a> */}
=======
>>>>>>> parent of 72658fb (Commit slight change)
                    </div>
                </div>
            </div>
        </div>
        
     );
}
 
export default Dashboard;


