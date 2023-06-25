import SideNav from './SideNav';
import './Support.css';

const Support = () => {
    return (
        <>
            <SideNav />
            <div className="support">
                <div className="support-box">
                    <h1>Support</h1>
                    <div className="contact-info-wrapper">
                        <p>Contact Us At:</p>
                        <div className="contact-info-wrapper2">
                            <p className='contact-info'>+1 (850) 879-9010</p>
                            <p className='contact-info-email'>araslan@usc.edu</p>
                        </div>
                    </div>
                <div className="mailing-address-wrapper">
                    <p>Mailing Address:</p>
                    <p className='mailing-address'>1111 New Orleans Ave.</p>
                </div>
                </div>
            </div>
        </>
    );
}
 
export default Support;