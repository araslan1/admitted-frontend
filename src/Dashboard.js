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
import new_document_icon from "./images/new_document.png";
const cookies = new Cookies(); 



const Dashboard = () => {
    const token = cookies.get('TOKEN'); 
    const history = useHistory();
    const [UserName, setUserName] = useState("Adam Raslan")
    const [servicesRequested, setServicesRequested] = useState(null);
    const {id: dashboardId} = useParams(); 
    const [documentIds, setDocumentIds] = useState(null);

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
        const configuration = {
            method: 'get',

            url: `${process.env.REACT_APP_SERVER_URL}/auth-dashboard/${dashboardId}`,
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

            })
            .catch((error) => {
                console.log("you do not have access to dashboard")
                error = new Error(); 
                if (token){
                    cookies.remove("TOKEN", { path: '/' });
                }
                history.push("/login"); 
            });
    }, [history, dashboardId, token]);
    
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
                        <a href="/logout">Log Out</a>
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

                </div>
                <div id ="right-side">
                    <h1 className='right-side-header' style={{marginLeft: "20px"}}>Your Workspace</h1>
                    <div id="essays">  
                        <div id="upload" onClick={() => {
                            history.push('/testeditingtool')
                        }}>
                            <img src={documenticon} alt="document"></img>
                            <h2>Demo</h2>
                            <div> 

                            </div>
                        </div> 
                        {documentIds && documentIds.map((id, index) => (
                            <div id="upload" onClick={() => {redirect(id)}} key={index}>
                                <img src={documenticon} alt="document"></img>
                                <h2 style={{textAlign: 'center'}}>{servicesRequested[index]}</h2>
                                <div> 

                                </div>
                            </div>
                        ))
                        }
                        <img onClick = {() => {history.push("/checkout")}} src={new_document_icon} alt="document"style={{width: "100px", marginTop: "50px", marginLeft: "15px", cursor: "pointer"}}></img>
                    </div>
    
                    <div id="checklist-container">
                        <h3 className="right-side-header" style={{textAlign: 'center'}}>Application Checklist</h3>
                        <div className="checklist-items">
                            <ul id='app-checklist'>
                                <li>
                                    <span>Choose the colleges that you want to apply to</span>
                                    <ul>
                                        <li>Find the specific application requirements each college asks for (Number of recommendation letters, essays, etc.)</li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Write your Common App and college-specific essays</span>
                                    <ul>
                                        <li>If you plan on having an Admitted student review your essay, we recommend going through multiple revisions before using our service</li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Contact teachers and other mentors for recommendations</span>
                                </li>
                                <li>
                                    <span>Lorum ipsum sit amet dolourm </span>
                                    <ul>
                                        <li>Interdum velit euismod in pellentesque massa. Mi ipsum faucibus vitae aliquet nec.</li>
                                        <li>Lacinia quis vel eros donec ac odio tempor orci.</li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Lorum ipsum sit amet dolourm </span>
                                    <ul>
                                        <li>Interdum velit euismod in pellentesque massa. Mi ipsum faucibus vitae aliquet nec.</li>
                                        <li>Lacinia quis vel eros donec ac odio tempor orci.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
     );
}
 
export default Dashboard;


