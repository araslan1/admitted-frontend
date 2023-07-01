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
import Examplefile from "./Examplefile";
import Checkout from "./Checkout"
import Cancel from "./Cancel"
import Success from "./Success"
import { v4 as uuidV4 } from 'uuid';
import WhyAdmitted from './WhyAdmitted';

function App() {
  return (
    <Router>
      <div className="App"> 
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/signup"><Signup /></Route>
          <Route exact path="/dashboard"><Dashboard /></Route>
          <Route path="/dashboard/example"><Examplefile /></Route>
          <Route exact path="/editingtool">
            <Redirect to={`/editingtool/${uuidV4()}`} />
          </Route>
          <Route path="/editingtool/:id"><Editingtool /></Route>
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
