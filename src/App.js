import Navbar from './Navbar'; 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/login" element ={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
