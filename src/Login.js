import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState(''); 



    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(email);
        console.log(pass);
        console.log("helo"); 

    };

    return (  
        <div className="login">
            <h2>Please Log In</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="youremail@gmail.com"
                    required
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value); 
                    }}
                />
                <label htmlFor="password">Password</label>
                <input        
                    type="password"
                    id="password"
                    required
                    placeholder="*********"
                    value={pass}
                    onChange = {(e) => {
                        setPass(e.target.value); 
                    }}
                />
                <button>Log in</button>
            </form>

            <Link to="/signup">Don't have an account? Register here.</Link>
        </div>
    );
}
 
export default Login;