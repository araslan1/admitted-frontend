import { useState } from "react";
import { createContext } from "react";
import './Login.css'; 
import { Link } from "react-router-dom";
import axios from 'axios';
import Cookies from "universal-cookie";
import { useHistory } from 'react-router-dom';
import LoadingMessage from "./LoadingMessage";


const cookies = new Cookies();

export const RecoveryContext = createContext(); 

const Login = (props) => {
    const history = useHistory(); 
    const [email, setEmail] = useState('');
    const [password, setPass] = useState(''); 
    const [login, setLogin] = useState(false); 
    const [loggingIn, setLoggingIn] = useState(false); 
    // const [page, setPage] = useState('login'); 
    // const [OTP, setOTP] = useState(); 
    // const [isReviewer, setIsReviewer] = useState(false); 

    // const NavigateComponents = () => {
    //     if (page === 'login') return <Login />; 
    //     if (page === 'login') return <OTPInput />; 
    //     if (page === 'login') return <Reset />; 
    // }
    
    const redirectToOTP = () => {
        if (email){
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
                    history.push({
                        pathname: '/OTP',
                        search: `?email=${email}OTP=OTP`,
                        state: new_data,
                    })
                })
                .catch(() => {
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
            url:   `${process.env.REACT_APP_SERVER_URL}/login`,
            data: {
                email,
                password,
            },
        };

        axios(configuration)
        .then((result) => {
            //check if it was reviewer or not who logged in!
            setLogin(true);
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
        <>
        <div id="loginbody">
            <div className="login">
            {loggingIn && <LoadingMessage title="One moment. We Are Finding Your Dashboard Now."/>}
                    <h3>Log in to the WriteWay Dashboard</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email Address"
                            required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value); 
                            }}
                        />
                        <label htmlFor="password">Password:</label>
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
                        <button>Log in</button>
                        {login ? (
                        <p className="text-success">You Are Logged in Successfully</p>
                        ) : (
                        <p className="text-success">You Are Not Logged in</p>
                        )}
                    </form>
                    <Link to="/signup">Don't have an account? Register here.</Link>
            </div>
            <button style={{width: "100px", textAlign: "center", marginLeft: "45%"}} onClick = {redirectToOTP}>Forgot your password?</button>
        </div>
        </>
    );
}
 
export default Login;