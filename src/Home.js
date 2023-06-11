import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <h2>Turning Essays into acceptances</h2>
            <p>Recieve help on your college applications from current students who have already been admitted!</p>
            <Link to='/signup'>Get Started!</Link>
        </div>
    );
}
 
export default Home;