import { useState } from 'react'; 
import axios from 'axios';



const Signup = () => {

    const [fullname, setName] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    const [register, setRegister] = useState(false); 


    const handleSubmit = e =>{
        e.preventDefault(); // to stop the page from refreshing and losing data

        const configuration = {
            method: "post",
            url: "https://dream-catcher-araslan21.onrender.com/register",
            data: {
              fullname,
              email,
              password,
            },
          };
         

          axios(configuration)
            .then((result) => {
                console.log(result); 
                setRegister(true); 
            })
            .catch((error) => {
                console.log("FAILED"); 
                console.log(error); 
            });
          
    };

    return ( 
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
                    <option>be an essay reviewer who has attended or does attend a target university</option>
                </select>
                <button>Create Account</button>
                {register ? (
                    <p className="text-success">You Are Registered Successfully</p>
                ) : (
                    <p className="text-danger">You Are Not Registered</p>
                )}
            </form>
        </div>
     );
}
 
export default Signup;