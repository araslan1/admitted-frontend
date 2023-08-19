import { useState } from "react";
import "./ResetPassword.css"


const ResetPassword = ({ email }) => {
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState(''); 




    return (
        <div className ="resetPassword">
            <div className="resetPasswordContainer">

                    <h1>Your code has been verified! Please enter your new password below!</h1>
      
                <div className="passwords">
                    <label htmlFor="password">New Password: </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value); 
                        }}
                    />
                    <label htmlFor="password">Confirm New Password:</label>
                    <input        
                        type="password"
                        id="password"
                        required
                        placeholder="Confirm New Password"
                        value={confirmPassword}
                        onChange = {(e) => {
                            setConfirmPassword(e.target.value); 
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default ResetPassword;