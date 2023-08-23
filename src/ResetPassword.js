import { useState } from "react";
import "./ResetPassword.css";
import login_arrow from './images/icons8-back-arrow-50.png'; 
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import LoadingMessage from "./LoadingMessage";


const ResetPassword = ({ email }) => {
    const history = useHistory(); 
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState(''); 
    const [notPasswordMatch, setNotPasswordMatch] = useState(false); 
    const [connectingToServer, setConnectingToServer] = useState(false); 


    const handleSubmit = () => {
        if (password !== confirmPassword){
            setNotPasswordMatch(true); 
            return; 
        }else{
            if (!email){
                history.push('/login'); 
            }
            setConnectingToServer(true); 
            const configuration = {
                method: 'post', 
                url: `${process.env.SERVER_URL}/resetpassword`, 
                data: {
                    newPassword: password, 
                    emailToUpdate: email,
                }
            }
            axios(configuration)
                .then(() => {
                    setConnectingToServer(false); 
                    history.push('/login'); 
                })
                .catch((error) => {
                    setConnectingToServer(false); 
                    window.alert(`${error}, you are being redirected to login page `); 
                    history.push('/login'); 
                })
        }
    }


    return (
        <div className="resetPassword">
            {connectingToServer && <LoadingMessage title="Resetting Your Password Now!"/>}
            <h1>Your code has been verified! Please enter your new password below!</h1>
            <div className="fillloginform">
                <form >
                    <label htmlFor="password">New Password: </label>
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        style={{marginRight: "50px"}}
                        onChange={(e) => {
                            setPassword(e.target.value); 
                        }}
                    />
                    <label htmlFor="password">Confirm New Password:</label>
                    <div style={{display: 'flex'}}>
                        <input        
                            type="password"
                            required
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange = {(e) => {
                                setConfirmPassword(e.target.value); 
                            }}
                        />
                        <img src={login_arrow} onClick={handleSubmit} alt="This is a log in icon"></img>

                    </div>
                    
                    {notPasswordMatch && <p>The passwords do not match!</p>}
                </form>
            </div>
        </div>
    );
}
 
export default ResetPassword;