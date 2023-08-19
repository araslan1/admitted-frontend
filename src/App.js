import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useEffect } from 'react'
// import Signup from './Signup';
// import Login from './Login';
import Support from './Support';
import AboutUs from './AboutUs';
import Home from './Home';
import Dashboard from './Dashboard';
import Editingtool from './Editingtool';
import ContactUs from './ContactUs';
import Inspiration from './Inspiration';
import Colleges from './Colleges';
import ReviewPolicy from './ReviewPolicy';
import CostCalculator from './CostCalculator';
import Testeditingtool from "./Testeditingtool"; 
import Checkout from "./Checkout"
import Cancel from "./Cancel"
import Success from "./Success"
import ProtectedRoute from './ProtectedRoute';
import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import { v4 as uuidV4 } from 'uuid';
import WhyAdmitted from './WhyAdmitted';
import RedirectDashboard from './RedirectDashboard';
import ReviewerDashboard from './ReviewerDashboard';
import ReviewerSignup from './ReviewerSignup'; 
import Checkout2 from './Checkout2'; 
import Logout from './Logout'; 
import TestLogin from './TestLogin'; 
import OTP from './Otp'; 
import MainLogin from './MainLogin';
import PrivacyPolicy from './PrivacyPolicy'; 
import TOS from './TOS'; 
import NotFound from './NotFound';
import GoogleAuth from './GoogleAuth'; 

function App() {
  useEffect(() => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        document.getElementById('mobile-cover').style.opacity = '1';
        document.getElementById('mobile-cover').style.pointerEvents = 'auto';
        document.getElementById('whole-app').style.filter = 'blur(10px)'
    }
  }, []);

  return (
    <Router>
      <div className="App"> 
        <div id='mobile-cover'>
          <h3>Whoops!</h3>
          <p>Unfortunately, Admitted isn't supported on mobile devices yet. Feel free to visit us again on your computer or visit our <a href='https://www.instagram.com/admitted_official/'>Instagram</a> page!</p>
        </div>
        <div id='whole-app'>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/login"><TestLogin /></Route>
          <Route path="/signup"><MainLogin /></Route>
          <ProtectedRoute exact path="/dashboard" component={RedirectDashboard}></ProtectedRoute>
          <ProtectedRoute exact path="/dashboard/:id" component={Dashboard}/>
          <Route exact path="/editingtool">
            <Redirect to={`/editingtool/${uuidV4()}`} />
          </Route>
          <ProtectedRoute path="/editingtool/:id"><Editingtool /></ProtectedRoute>
          <Route exact path="/reviewerdashboard"><ReviewerDashboard /></Route>
          <ProtectedRoute exact path="/reviewerdashboard/:id" component={ReviewerDashboard}></ProtectedRoute>
          <Route exact path="/reviewerdashboard"><ReviewerDashboard /></Route>
          <Route path="/testeditingtool"><Testeditingtool /></Route>
          <Route path='/support'><Support /></Route>
          <Route path='/about-us'><AboutUs /></Route>
          <Route path='/contact-us'><ContactUs /></Route>
          <Route path='/inspiration'><Inspiration /></Route>
          <Route path='/colleges'><Colleges /></Route>
          <Route path='/why-admitted'><WhyAdmitted /></Route>
          <Route path='/review-policy'><ReviewPolicy /></Route>
          <Route path='/cost-calculator'><CostCalculator /></Route>
          <Route path='/cancel'><Cancel /></Route>
          <Route path='/success'><Success /></Route>
          <Route exact path='/checkout'><Checkout /></Route>
          <Route exact path='/checkout2' component={Checkout2}></Route>
          <Route path='/reviewersignup'><ReviewerSignup /></Route>
          <Route path='/account' component={Account}></Route>
          <Route path='/free' component={FreeComponent}></Route>
          <Route path='/logout' component={Logout}></Route>
          <ProtectedRoute path='/auth' component={AuthComponent} />
          <Route exact path = '/OTP' component={OTP}></Route>
          <Route exact path = '/mainlogin' component={MainLogin}></Route>
          <Route exact path = '/googleAuth' component={GoogleAuth}></Route>
          <Route path='/terms-of-service'><TOS /></Route>
          <Route path='/privacy-policy'><PrivacyPolicy /></Route>
          <Route path='/testlogin'><TestLogin /></Route>
          <Route path='*'><NotFound /></Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
