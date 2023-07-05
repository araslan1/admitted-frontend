import "./Dashboard.css"
import "./UserSideNav.css"
import documenticon from "./images/document_icon.png"
import React from 'react';
import Typed from 'typed.js';
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import Cookies from "universal-cookie"; 
import axios from 'axios'; 
import { useHistory } from "react-router-dom";
const cookies = new Cookies(); 



const Dashboard = () => {
    const history = useHistory();
    const [UserName, setUserName] = useState("")
    const [servicesRequested, setServicesRequested] = useState(null);
    const {id: dashboardId} = useParams(); 
    const [documentIds, setDocumentIds] = useState(null);
    const [auth, setAuth] = useState(false); 
    const el = useRef(null);
    const openNav = () => {
        document.querySelector("#mySidenav").style.width = "280px";
    }
    const closeNav = () => {
        document.querySelector("#mySidenav").style.width = "0";
    }
    const redirect = (id) => {
        history.push(`/editingtool/${id}`);
    }

    useEffect(() => {
        if (!auth){
            const token = cookies.get('TOKEN'); 
            const configuration = {
                method: 'get',
                url: `http://localhost:7470/auth-dashboard/${dashboardId}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
        
            axios(configuration)
                .then((response) => {
                    console.log("hurray, given access to dashboard!")
                    setDocumentIds(response.data.documentIds);
                    setUserName(response.data.fullname);
                    setServicesRequested(response.data.servicesRequested); 
                    setAuth(true); 
                })
                .catch((error) => {
                    console.log("you do not have access to dashboard")
                    error = new Error(); 
                });
        }
    }, []);
    
    // Separate useEffect for UserName, documentIds, and servicesRequested
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
    
    // useEffect(() => {
    //     const token = cookies.get('TOKEN'); 
    //     const configuration = {
    //         method: 'get',
    //         url: `http://localhost:7470/auth-dashboard/${dashboardId}`,
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     };
    
    //     axios(configuration)
    //         .then((response) => {
    //             console.log("hurray, given access to dashboard!")
    //             setDocumentIds(response.data.documentIds);
    //             setServicesRequested(response.data.servicesRequested); 
    //         })
    //         .catch((error) => {
    //             console.log("you do not have access to dashboard")
    //             error = new Error(); 
    //         });
    // }, [dashboardId, cookies]);
    
    return ( 
    
        <div className ="maindashboard">
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
                        {documentIds && documentIds.map((id, index) => (
                            <div id="upload" onClick={() => {redirect(id)}} key={index}>
                                <img src={documenticon}></img>
                                <h2 style={{textAlign: 'center'}}>{servicesRequested[index]}</h2>
                                <div> 

                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
        
     );
}
 
export default Dashboard;


