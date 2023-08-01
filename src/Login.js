import { useState } from "react";
import './Login.css'; 
import { Link } from "react-router-dom";
import axios from 'axios';
import Cookies from "universal-cookie";
import { useHistory } from 'react-router-dom';

const cookies = new Cookies();

const Login = () => {
    const history = useHistory(); 
    const [email, setEmail] = useState('');
    const [password, setPass] = useState(''); 
    const [login, setLogin] = useState(false); 
    // const [isReviewer, setIsReviewer] = useState(false); 


    const handleSubmit = (e) => {
        e.preventDefault(); 

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
            error = new Error();
        });
    };

    return (  
        <div id="loginbody">
        <div className="login">
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
        </div>
    );
}
 
export default Login;