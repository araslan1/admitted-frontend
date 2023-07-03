import { useState } from 'react'; 
import axios from 'axios';
import "./Signup.css"


const Signup = () => {

    const [fullname, setName] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    const [register, setRegister] = useState(false); 

    //"https://dream-catcher-araslan21.onrender.com/register",

    const handleSubmit = e =>{
        e.preventDefault(); // to stop the page from refreshing and losing data
        console.log("Entered")
        const configuration = {
            method: "post",
            url: "http://localhost:7459/register",
            data: {
              fullname,
              email,
              password,
            },
          };
          console.log("Defined Configuration")
         

          axios(configuration)
            .then((result) => {
                console.log("Success?")
                console.log(result); 
                setRegister(true); 
            })
            .catch((error) => {
                console.log("FAILED"); 
                console.log(error); 
            });
            console.log("Configured")
          
    };

    return ( 
        <div id="signup-body">
            <div className="signup">
                <h2>Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <label>Full Name:</label>
                    <input
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
                        required
                        value={email}
                        onChange = {(e) => {
                            setEmail(e.target.value); 
                        }}
                    />
                    <label>Password:</label>
                    <input 
                        type="password" 
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