import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie"; 

const cookies = new Cookies(); 
const token = cookies.get('TOKEN'); 

const Logout = () => {
    const history = useHistory(); 
    useEffect(() => {
        if (token){
            cookies.remove("TOKEN", { path: '/' });
            history.push("/"); 
        }
    }, [history])

    return ( 
        <>
        </>
     );
}
 
export default Logout;