import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <>
        <div>
            <Navbar />
        </div>
        <div className="home">
            <h2>Turning Essays into Acceptances</h2>
            <p>Recieve help on your college applications from current students who have already been admitted!</p>
            <Link to='/signup'>Get Started!</Link>
            </div>
        </div>
        </>
    );
}
 
export default Home;