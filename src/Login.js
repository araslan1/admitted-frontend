import { useState } from "react";
import './Login.css'; 
import { Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState(''); 
    const [login, setLogin] = useState(false); 


    const handleSubmit = (e) => {
        e.preventDefault(); 

        const configuration = {
            method: "post",
            url: "https://dream-catcher-araslan21.onrender.com/login",
            data: {
                email,
                password,
            },
        };

        axios(configuration)
        .then((result) => {
            setLogin(true);
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
                    <label htmlFor="email">Your Email Address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="email address"
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value); 
                        }}
                    />
                    <label htmlFor="password">Password</label>
                    <input        
                        type="password"
                        id="password"
                        required
                        placeholder="password"
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