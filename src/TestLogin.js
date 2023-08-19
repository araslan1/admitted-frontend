import './TestLogin.css'; 
import google_icon2 from "./images/google_icon2.png"; 
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Cookies from "universal-cookie";
import { useHistory } from 'react-router-dom';
import LoadingMessage from "./LoadingMessage";
import admitted_letter from "./images/admitted.png"; 
import login_arrow from './images/icons8-back-arrow-50.png'; 
const cookies = new Cookies();

const TestLogin = () => {
    const history = useHistory(); 
    const [email, setEmail] = useState('');
    const [password, setPass] = useState(''); 

    const [loggingIn, setLoggingIn] = useState(false); 
    const [resettingPassword, setResettingPassword] = useState(false); 

    const navigate = (url) => {
        setLoggingIn(false); 
        window.location.href = url; 
    }

    const auth = async () => {
        setLoggingIn(true); 
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/request`, {method: 'post'});
        const data = await response.json(); 
        console.log(data); 
        navigate(data.url);  

    }

     
    const redirectToOTP = () => {
        if (email){
            setResettingPassword(true); 
            const newOTP = Math.floor(Math.random() * 9000 + 1000);
            const new_data = {
                email: email, 
                OTP: newOTP, 
            }
            console.log(newOTP); 
            // setOTP(newOTP); 
            const configuration = {
                method: "post", 
                url:   `${process.env.REACT_APP_SERVER_URL}/send-email`,
                data: {
                    recipient: email,
                    content: `Hi there! Here's your verification code to reset your password: ${newOTP}`,
                    subject: "Reset Password"
                },
            };

            axios(configuration)
                .then(() => {
                    setResettingPassword(false); 
                    history.push({
                        pathname: '/OTP',
                        search: `?email=${email}OTP=OTP`,
                        state: new_data,
                    })
                })
                .catch(() => {
                    setResettingPassword(false); 
                    window.alert("I'm sorry we're having trouble connecting to the server")
                    return; 
                })
            return; 
        }
        return alert("Please enter your email")
    }



    const handleSubmit = (e) => {
        e.preventDefault(); 
        setLoggingIn(true); 
        const configuration = {
            method: "post",
            url:   `${process.env.REACT_APP_SERVER_URL}/login?isGoogleAuth=false`,
            data: {
                email,
                password,
            },
        };

        axios(configuration)
        .then((result) => {
            //check if it was reviewer or not who logged in!
            setLoggingIn(false); 
            // setIsReviewer(result.data.isReviewer);
            cookies.set("TOKEN", result.data.token,{
                path: '/',
            });
            console.log(cookies);
            //redirect user to to the auth page
            if (!result.data.isReviewer){
                history.push(`/dashboard/${result.data.dashboardId}`)
            }else{
                history.push(`/reviewerdashboard/${result.data.dashboardId}`)
            }
        })
        .catch((error) => {
            setLoggingIn(false); 
            error = new Error();
            window.alert("This is the wrong password or email!")
        });
    };



    return (
    <div className ="testlogincontainer">
        {resettingPassword && <LoadingMessage title="Sending you a reset code now..."/>}
        {loggingIn && <LoadingMessage title="One moment. We Are Finding Your Dashboard Now."/>}
        <div className ="centerspace">
            <h1 style = {{fontWeight: "400", fontFamily: 'Inter'}}>Log In To Admitted</h1>
            <div className="anothercontainer">

                <div className="loginmessages">
                    <Link to="/signup">Don't have an account? Register here.</Link>
                    <button onClick = {redirectToOTP}>Forgot your password?</button>
                </div>
                <div className="verticalrowcontainer">
    
                    <div className="verticalrow"></div>
                    <img src={admitted_letter} alt="This is our company logo"></img>
                    <div className="verticalrow"></div>
                    {/* <div className="verticalrow"></div> */}
                </div>
    
                <div className="fillloginform">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email Address"
                            required
                            value={email}
                            style={{marginRight: "50px"}}
                            onChange={(e) => {
                                setEmail(e.target.value); 
                            }}
                        />
                        <label htmlFor="password">Password:</label>
                        <div style={{display: 'flex'}}>

                            <input        
                                type="password"
                                id="password"
                                required
                                placeholder="Password"
                                value={password}
                                onChange = {(e) => {
                                    setPass(e.target.value); 
                                }}
                            />
                            <img src={login_arrow} onClick={handleSubmit} alt="This is a log in icon"></img>
    
                        </div>
        
                    </form>
                    <div className="login_ormessage_container">
                        <div className="horizontalrow"></div>
                        <p className="login_ormessage">or</p>
                        <div className="horizontalrow"></div>
                    </div>
                    <div className="googleButtonContainer">
                    <button onClick = {(e) => {
                        e.preventDefault(); 
                        auth(); 
                    }} 
                    className="sign_up_with_google_button"><img src={google_icon2} alt="google icon"></img><span>Sign Up With Google</span></button>
                </div>
                </div>
            </div>
            <div className="termsandconditions">
                    <Link to='/terms-of-service'>Terms of Service</Link>
                    <Link to='/privacy-policy'>Privacy Policy</Link>
            </div>
        </div>
    </div>
    );
}
 
export default TestLogin;