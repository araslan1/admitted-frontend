import "./MainLogin.css";
import { useState } from 'react'; 
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import admitted_logo from "./images/admittedLogo.png";
import checkmark from "./images/signup_checkmark.png"; 

const MainLogin = () => {
    const history = useHistory();
    const dashboardId = uuidV4();
    const [fullname, setName] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    // const [register, setRegister] = useState(false); 


    const handleSubmit = (e) =>{
        e.preventDefault(); // to stop the page from refreshing and losing data

        const configuration = {
            method: "post",
            url: `${process.env.REACT_APP_SERVER_URL}/register`,
            data: {
              fullname,
              email,
              password,
              dashboardId,
            },
          };
         

          axios(configuration)
            .then((result) => {
                console.log(result); 
                // setRegister(true); 
                history.push('/login'); 
            })
            .catch((error) => {
                console.log("FAILED"); 
                console.log(error); 
                if (error.response && error.response.status === 409) {
                    // Display the error message to the user if the email is already taken
                    window.alert(error.response.data.message);
                } else {
                    // Display a generic error message for other errors
                    window.alert("Create account failed!");
                }
            });
          
    };
    
    return ( 
      <>
      <div className="mainlogin">
        <div className="leftside">
            <img style= {{marginTop: "15px"}}className="mainlogo"src={admitted_logo} alt="admitted logo" /> 
            <div className="checkbox">
                <div className="label">
                    <img className="checkmark"src={checkmark} alt="checkmark" /> 
                    <div>
                        <h3>Get Started Quickly</h3>
                        <p>Get Your College Application Reviewed Within Days</p>
                    </div>
                </div>
                <div className="label">
                    <img className="checkmark"src={checkmark} alt="checkmark" /> 
                    <div>
                        <h3>College Match Guarantee</h3>
                        <p>Your Stanford Essays Reviewed by Stanford Students, USC Essays Reviewed By USC students<br></br>Harvard essays by Harvard students...</p>
                    </div>
                </div>
                <div className="label">
                    <img className="checkmark"src={checkmark} alt="checkmark" /> 
                    <div>
                        <h3>Affordable</h3>
                        <p>First One's On Us, Then Prices Range From 30-50$</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="rightside">
            <h1 className="account_header">Create Account</h1>
            <form onSubmit={handleSubmit}>
                    <label>Full Name:</label>
                    <input
                        placeholder='First Last'
                        type="text"
                        required
                        value={fullname}
                        onChange = {(e)=>{
                            setName(e.target.value); 
                        }}
                    />
                    <label>Email:</label>
                    <input 
                        type="email"
                        placeholder='Email Address'
                        required
                        value={email}
                        onChange = {(e) => {
                            setEmail(e.target.value); 
                        }}
                    />
                    <label>Password:</label>
                    <input 
                        type="password" 
                        placeholder='Password'
                        required
                        value={password}
                        onChange = {(e) =>{
                            setPassword(e.target.value); 
                        }}
                    />
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <input
                            style={{display: 'inline'}}
                            type="checkbox"
                            className="terms_of_service"
                        />
                        <p style={{display: 'inline', margin: "2px auto 20px 14px"}}>I agree to Admitted's <a href="/">Terms of Service</a></p>
                    </div>
    
                    <button>Create Account</button>
                    {/* {register ? (
                        <p className="text-success">You Are Registered Successfully</p>
                    ) : (
                        <p className="text-danger">You Are Not Registered</p>
                    )} */}
                </form>

        </div>
        {/* <div className="rightside">
            <div>
                <h2>Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <label>Full Name:</label>
                    <input
                        placeholder='First Last'
                        type="text"
                        required
                        value={fullname}
                        onChange = {(e)=>{
                            setName(e.target.value); 
                        }}
                    />
                    <label>Email:</label>
                    <input 
                        type="email"
                        placeholder='Email Address'
                        required
                        value={email}
                        onChange = {(e) => {
                            setEmail(e.target.value); 
                        }}
                    />
                    <label>Password:</label>
                    <input 
                        type="password" 
                        placeholder='Password'
                        required
                        value={password}
                        onChange = {(e) =>{
                            setPassword(e.target.value); 
                        }}
                    />
                    <label>I am looking to: </label>
                    <select>
                        <option style={{display: "none"}}></option>
                        <option>have my college essay(s) reviewed</option>
                        <option>be an essay reviewer who attends a target university</option>
                    </select>
                    <button>Create Account</button>
                    {register ? (
                        <p className="text-success">You Are Registered Successfully</p>
                    ) : (
                        <p className="text-danger">You Are Not Registered</p>
                    )}
                </form>
            </div>
        </div> */}
      </div>
      </>
    );
}
 
export default MainLogin;