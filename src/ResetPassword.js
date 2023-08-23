import { useState } from "react";
import "./ResetPassword.css";
import login_arrow from './images/icons8-back-arrow-50.png'; 
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import LoadingMessage from "./LoadingMessage";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from 'react-toastify';


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
            console.log(email); 
            console.log(password); 
            if (!email){
                console.log("email not found!")
                history.push('/login'); 
            }
            setConnectingToServer(true); 
            const configuration = {
                method: 'post', 
                url: `${process.env.REACT_APP_SERVER_URL}/resetpassword`, 
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
                    const errorMessage = error.response.data.message;
                    toast.error(`${errorMessage}, you are being redirected to the login page`, {
                        // position: toast.POSITION.TOP_CENTER,
                        className:'custom-toast', 
                        onClose: () => {
                          history.push('/login'); // Redirect after the toast is closed
                        },
                      });
                })
        }
    }


    return (
        <>
        <div className="bigResetPassword">
            {connectingToServer && <LoadingMessage title="Resetting Your Password Now!"/>}
            <ToastContainer />
        </div>
        {!connectingToServer && <div className="resetPassword">
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
                        <img src={login_arrow} style={{zIndex: "5"}}onClick={handleSubmit} alt="This is a log in icon"></img>

                    </div>
                    
                    {notPasswordMatch && <p>The passwords do not match!</p>}
                </form>
            </div>
        </div>}
        </>
    );
}
 
export default ResetPassword;