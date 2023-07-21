import { useEffect, useState } from "react";
import axios from 'axios'; 
import Cookies from 'universal-cookie';
import React from 'react'; 
const cookies = new Cookies(); 
const token = cookies.get("TOKEN");

const AuthComponent = () => {
    const [ message, setMessage ] = useState(""); 

    useEffect(() => {
        const configuration = {
            method: 'get', 
            headers: {
                Authorization: `Bearer ${token}`
            },
            url: "http://localhost:7470/auth-endpoint",
        }
        axios(configuration)
            .then((result) => {
                console.log("You are authorized!")
                setMessage(result.data.message); 
            })
            .catch((error) => {
                console.log("You are not authorized!")
                setMessage("You are not authorized to access me");
            })
    }, [])

    return (  
        <div>
            <h1>{message}</h1>
        </div>
    );
}
 
export default AuthComponent;