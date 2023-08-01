import "./UserSideNav.css";
import "./ReviewerDashboard.css";
import Typed from 'typed.js';
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import documenticon from "./images/document_icon.png"
import Cookies from "universal-cookie";
import axios from 'axios'; 
import Confirm from './Confirm';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const cookies = new Cookies();


const ReviewerDashboard = () => {
    const [currDocId, setCurrDocId] = useState("");
    const [currDueBy, setCurrDueBy] = useState(""); 
    const [confirmationOpen, setConfirmationOpen] = useState(false); 
    const token = cookies.get('TOKEN'); 
    const history = useHistory();
    const {id: dashboardId} = useParams(); 
    const [UserName, setUserName] = useState("");
    const [reviewerEssays, setReviewerEssays] = useState([]);
    const [allAvailableEssays, setAllAvailableEssays] = useState([])
    const el = useRef(null);

    const formatDate = (date) => {
        const dateObject = new Date(date);
        const options = {
            month: 'long', // 'short' for abbreviated month name, 'long' for full month name
            day: 'numeric' // 'numeric' for day of the month as a number
        };
        return(dateObject.toLocaleString(undefined, options));
    }

    const logout = (event) => {
        event.preventDefault();
        cookies.remove("TOKEN", { path: '/' });
        window.location.href = "/";
    };

    const redirect = (id) => {
        // update information
        history.push(`/editingtool/${id}`);
    };

    const acceptEssay = async () => {
        const object = {
            documentId: currDocId,
            dueBy: currDueBy,
        }
        const backup_reviewerEssays = [...reviewerEssays, object]; 
        setReviewerEssays(backup_reviewerEssays);
        let configuration = {
            method: 'post', 
            data: {
                reviewerEssays: backup_reviewerEssays,
            },
            url: `${process.env.REACT_APP_SERVER_URL}/update-reviewer/${dashboardId}`,
        }
        await axios(configuration);

        configuration = {
            method: 'post',
            url: `${process.env.REACT_APP_SERVER_URL}/editingtool/${currDocId}`,
            data: {
                userHasSubmitted: true,
                essaysReviewed: false,  
                essayMatched: true,  
                dashboardId: dashboardId,
            }
        };
        
        await axios(configuration)
            .then(() => {
                console.log("");
            })
            .catch(() => {
                console.log("error submitting essays");
            })
        

        redirect(currDocId);
    }; 

    useEffect(() => {
        const configuration = {
            method: 'get',
            url: `${process.env.REACT_APP_SERVER_URL}/auth-reviewer-dashboard/${dashboardId}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    
        axios(configuration)
            .then((response) => {
                console.log("hurray, given access to dashboard!")
                setReviewerEssays(response.data.documentIds);
                setUserName(response.data.fullname);
                setAllAvailableEssays(response.data.availableNotMatchedDocuments); 
            })
            .catch((error) => {
                console.log("you do not have access to dashboard");
                if (token){
                    cookies.remove("TOKEN", { path: '/' });
                }
                history.push("/login"); 
                error = new Error(); 
            });
    }, [history, dashboardId, token]);

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
                    <button onClick={logout}>Log Out</button>
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
                        <img src={documenticon} alt="document"></img>
                        <h2>Demo</h2>
                        <div> 

                        </div>
                    </div> 
                    {reviewerEssays && reviewerEssays.map((doc, index) => (
                            <div id="upload" onClick={() => {redirect(doc.documentId)}} key={index}>
                                <img src={documenticon} alt="document"></img>
                                <h2 style={{textAlign: 'center'}}>Due By: {formatDate(doc.dueBy)}</h2>
                                <div> 

                                </div>
                            </div>
                        ))
                    }
                </div>
                <h3 className="right-side-header" style={{marginLeft: "20px", marginTop: "20px"}}> pick up an available essay here</h3>
                <hr></hr>
                <div className="current_projects">
                    <div id="upload" onClick={() => {
                        history.push('/testeditingtool')
                    }}>
                        <img src={documenticon} alt="document"></img>
                        <h2>Demo</h2>
                        <div> 

                        </div>
                    </div> 
                    {/* onClick={() => {redirect(doc._id)}}  */}
                    {allAvailableEssays && allAvailableEssays.map((doc, index) => (
                            <div id="upload" onClick = {() => {setTimeout(() => {
                                setCurrDocId(doc._id);
                                setCurrDueBy(doc.dueBy);
                                setConfirmationOpen(true)
                            }, 400)}} 
                               
                                key={index}
                                >
                                <img src={documenticon} alt="document"></img>
                                <h2 style={{textAlign: 'center'}}>Due By: {formatDate(doc.dueBy)}</h2>
                                <div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        {confirmationOpen && <Confirm closeModal={setConfirmationOpen} submitEssays={acceptEssay} title="Are you sure you want to review this essay?"/>}    
    </div> 
    );
}
 
export default ReviewerDashboard;