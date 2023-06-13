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
            <p>Win over college admission officers with the #1 essay review platform, where your essays are edited by students who have already been admitted into top unversities!</p>
            </div>
            <Link to='/signup'>Get Started!</Link>
        </div>
        </>
    );
}
 
export default Home;