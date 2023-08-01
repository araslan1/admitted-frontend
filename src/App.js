import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
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

function App() {
  return (
    <Router>
      <div className="App"> 
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/signup"><Signup /></Route>
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
          <Route path='/checkout'><Checkout /></Route>
          <Route path='/reviewersignup'><ReviewerSignup /></Route>
          <Route path='/account' component={Account}></Route>
          <Route path='/free' component={FreeComponent}></Route>
          <ProtectedRoute path='/auth' component={AuthComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
