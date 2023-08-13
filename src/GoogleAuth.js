import { useEffect } from "react";
import Cookies from "universal-cookie";
import { useHistory } from 'react-router-dom';
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";

const cookies = new Cookies();

const GoogleAuth = () => {
    const history = useHistory(); 
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const token = searchParams.get('token');
    const dashboardId = searchParams.get('dashboardId');

    useEffect(() => {
        console.log("entered google auth!");
        console.log('token', token)
        console.log('dashboardId', dashboardId)

        if (token) {
            // You have extracted the token from the URL, you can now use it
            // For example, you might want to store it in local storage or state
            cookies.set("TOKEN", token,{
                path: '/',
            });
            
            history.push(`/dashboard/${dashboardId}`)
            
            // Redirect to a different route or perform other actions
            // ...
          }
    }, [history, token, dashboardId])

    return;
}
 
export default GoogleAuth;