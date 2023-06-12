import testImg from './images/placeholder.png';
import testImg2 from './images/placeholder2.png';
import SideNav from './SideNav';

const Dashboard = () => {
    return (
        <>
        <SideNav />
        <div className="dashboard">
            <div className="hero">
                <p id='let-me-cook'>Start a new application</p>
                <div className="icons">
                    <img src={testImg} className="hero-img" />
                    <img src={testImg2} className="hero-img" />
                    <img src={testImg2} className="hero-img" />
                    <img src={testImg2} className="hero-img" />
                </div>
            </div>
            <div className="recent-activity">
                <p>Recent activity </p>
            </div>
        </div>
        </>
    );
}
 
export default Dashboard;