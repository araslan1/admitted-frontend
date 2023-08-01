import { useEffect, useState } from 'react'; 
import axios from 'axios';
import "./Signup.css"
import { useHistory } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';


    

const ReviewerSignup = () => {
    const history = useHistory();
    const dashboardId = uuidV4();
    const [fullname, setName] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    const [register, setRegister] = useState(false); 
    const [secretKey, setSecretKey] = useState(""); 
    const [schoolName, setSchoolName] = useState(""); 

    // ... (existing code)

const handleSubmit = e => {
    e.preventDefault();
    if (process.env.REACT_APP_REVIEWER_KEY === secretKey) {
      //allow access
      const configuration = {
        method: "post",
        url: `${process.env.REACT_APP_SERVER_URL}/register`,
        data: {
          fullname,
          email,
          schoolName,
          password,
          dashboardId,
        },
      };
  
      axios(configuration)
        .then((result) => {
          console.log(result);
          setRegister(true);
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
    } else {
      console.log("You do not have the right key!");
      window.alert("You do not have access!");
    }
  };
  
  // ... (existing code)
  

    return ( 
        <div id="signup-body">
            <div className="signup">
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
                    <label>Secret Key:</label>
                    <input 
                        type="secretkey" 
                        placeholder='Secret Key'
                        required
                        value={secretKey}
                        onChange = {(e) =>{
                            setSecretKey(e.target.value); 
                        }}
                    />
                   <label>School Name:</label>
                    <input 
                        type="text" 
                        placeholder='School Name'
                        required
                        value={schoolName}
                        onChange = {(e) =>{
                            setSchoolName(e.target.value); 
                        }}
                    />

                    <button>Create Account</button>
                    {register ? (
                        <p className="text-success">You Are Registered Successfully</p>
                    ) : (
                        <p className="text-danger">You Are Not Registered</p>
                    )}
                </form>
            </div>
        </div>
     );
}
 
export default ReviewerSignup;