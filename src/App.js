import Navbar from './Navbar'; 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div className="App"> 
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/login" element ={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
