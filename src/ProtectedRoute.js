import { Route, Redirect } from 'react-router-dom';
import Cookies from "universal-cookie";
const cookies = new Cookies();

const ProtectedRoute = ({ component: Component, ...rest } ) => {
    return <Route {...rest} render={(props) => {
        //logic for if user is authentication
        const token = cookies.get("TOKEN");
        
        // returns route if there is a valid token set in the cookie
        if (token) {
          return <Component {...props} />;
        }else{
            //redirect to login page from current location
            return <Redirect to={{pathname: '/login', state: { from: props.location }}}/>
        }
    }} />;
     
}
 
export default ProtectedRoute;