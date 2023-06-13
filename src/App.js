import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';
import Editingtool from './Editingtool';

function App() {
  return (
    <Router>
      <div className="App"> 
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/login" element ={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path="/editingtool" element={<Editingtool />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
