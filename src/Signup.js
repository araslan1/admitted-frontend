import { useState } from 'react'; 
import axios from 'axios';
import "./Signup.css"
import { useHistory } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';


    

const Signup = () => {
    const history = useHistory();
    const dashboardId = uuidV4();
    const [fullname, setName] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    const [register, setRegister] = useState(false); 


    const handleSubmit = e =>{
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
          
    };

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
        </div>
     );
}
 
export default Signup;