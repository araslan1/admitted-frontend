import axios from 'axios'
import { useEffect, useState } from 'react';
import Cookies from "universal-cookie"; 
const cookies = new Cookies(); 
const token = cookies.get('TOKEN'); 

const AuthComponent = () => {
    const [message, setMessage] = useState("");

    const logout = () => {
        cookies.remove("TOKEN", { path: '/' });
        window.location.href = "/";
    }

    useEffect(() => {
        const configuration = {
            method: 'get',
            url: `http://localhost:7470/auth-endpoint`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        
        axios(configuration)
            .then((response) => {
                console.log('success');
            })
            .catch((error) => {
                error = new Error(); 
            })
    }, [])

    return (  
        <div>
            <h1 className="text-center">{message}</h1>
            <button onClick={() => {logout()}}>Log out</button>
        </div>
    );
}
 
export default AuthComponent;