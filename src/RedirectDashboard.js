import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie"; 
import axios from 'axios'; 
import LoadingMessage from "./LoadingMessage";

const cookies = new Cookies(); 

const RedirectDashboard = () => {
    const history = useHistory(); 
    const token = cookies.get("TOKEN");
    const [loadingMessage , setLoadingMessage] = useState(false);
    
    useEffect(() => {
        setLoadingMessage(true);
        const configuration = {
            method: 'get',
            url: `${process.env.REACT_APP_SERVER_URL}/dashboard`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios(configuration)
            .then((result) => {
                history.push(`/dashboard/${result.data.dashboardId}`);
            })
            .catch((error) => {
                console.log("you do not have access to the dashboard, please log in");
                console.log(error)
                // Handle the error or redirect to the login page if needed
                // For example, you can redirect to the login page like this:
                history.push("/login");
            });
    }, [history, token]); // The empty dependency array ensures that this effect runs only once on component mount.

    return <>
        {loadingMessage && <LoadingMessage title ="Sending You To Your Dashboard"/>}
    </>; // You can simply return null if the component doesn't need to render anything.
}
 
export default RedirectDashboard;
