import { useState } from "react";
import "./Confirm.css"


const EnterEmail = ({chosenCollege, submitPayment}) => {
    const [email, setEmail] = useState(""); 
    

    return (
        <div className ="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    <h1>Confirm Your Admitted Account's Email</h1>
                </div>
                <div className="footer_confirm">
                    <form onSubmit = {() => {submitPayment(email)}}style={{display:"flex", flexDirection:"column"}}>
                        <input
                        required
                        type="email"
                        placeholder = "Enter Email Address"
                        value = {email}
                        onChange={(e) => {
                            setEmail(e.target.value); 
                        }}
                        style ={{display: "block", width: "200px", height: "50px"}}
                        >

                        </input>
                        <button className="mainbutton" style={{marginLeft: "30px"}}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default EnterEmail;