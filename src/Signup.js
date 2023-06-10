import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';



const Signup = () => {

    const [name, setName] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    const History = useNavigate(); 

    const handleSubmit = e =>{
        e.preventDefault(); // to stop the page from refreshing and losing data
        History.push('/'); 
    };

    return ( 
        <div className="signup">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input
                    type="text"
                    required
                    value={name}
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
            </form>
        </div>
     );
}
 
export default Signup;