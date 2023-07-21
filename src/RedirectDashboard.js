import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Cookies from "universal-cookie"; 
import axios from 'axios'; 
const cookies = new Cookies(); 
const token = cookies.get("TOKEN");



const RedirectDashboard = () => {
    const history = useHistory(); 

    useEffect(() => {
        const configuration = {
            method: 'get',
            url: `http://localhost:7470/dashboard`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        axios(configuration)
            .then((result) => {
                history.push(`/dashboard/${result.data.dashboardId}`)
            })
            .catch((error) => {
                console.log("you do not have access to dashboard, please log in")
                error = new Error(); 
            })
    }, [])

    return (  
        <>
        </>
    );
}
 
export default RedirectDashboard;