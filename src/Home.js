import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <>
        <div>
            <Navbar />
        </div>
        <div className="home">
            <div style ={{marginTop:"20px"}}>
            <h1>Turning Essays into Acceptances</h1>
            </div>
            <div>
            <p>Win your admissions officers over with the #1 platform to have your essays reviewed by current students who have already been admitted!</p>
            </div>
            <div>
            <Link to='/signup'>Get Started!</Link>
            </div>
        </div>
        </>
    );
}
 
export default Home;