import SideNav from './SideNav';
import './Dashboard.css';
import ImportantDates from './ImportantDates';

const Dashboard = () => {
    return (
        <>
        <SideNav />
        <ImportantDates />
        <div className="dashboard-border">
        </div>
        <div className="dashboard">
            <div className="recent-activity">
                <p>Recent activity </p>
            </div>
        </div>
        </>
    );
}
 
export default Dashboard;