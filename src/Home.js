import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import zoomImg1 from "./images/mailchimp-0.webp";
import zoomImg2 from "./images/mailchimp-1.webp";
import zoomImg3 from "./images/mailchimp-2.webp";
import zoomImg4 from "./images/mailchimp-3.webp";
import './Home.css';
import PaymentOptions from "./PaymentOptions";
import Footer from "./Footer";
// import axios from 'axios';
// import { useEffect } from "react";
// import Cookies from "universal-cookie";
// const cookies = new Cookies(); 
// const token = cookies.get('TOKEN'); 

const Home = () => {


    // useEffect(() => {
    //     const configuration = {
    //         method: 'get',
    //         url: `http://localhost:7470/auth-endpoint`,
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     };
        
    //     axios(configuration)
    //         .then((response) => {
    //         })
    // }, [])
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
                <p id="main-blurb">Win over college admission officers with the #1 essay review platform, where your essays are edited by students who have already been admitted into top unversities!</p>
            </div>
            <Link to='/signup' className="mainbutton">Get Started!</Link>
            <div className="feature-card-section">
                <div className='feature-cards'>
                    <div className="image-wrapper">
                        <a href='http://localhost:3000/dashboard'><img src={zoomImg1} className='zoom-imgs'></img></a>
                        <div className="text-overlay">
                            <h2><Link to='/dashboard' className="top-left">Get into your<br></br>dream school!</Link></h2>
                        </div>
                    </div>
                    <div className="cooking">
                    <div className="card-info" id='card-info-0'>
                        <p className='card-info-blurb'>Did you know that many admissions<br></br>officers at elite universities are alumni?</p>
                        <Link to='/signup' className="mainbutton" id='card-info-0-button'>Get Started!</Link>
                    </div>
                    </div>
                </div>
                <div className='feature-cards'>
                    <div className="image-wrapper">
                        <a href='http://localhost:3000/inspiration'><img src={zoomImg2} className='zoom-imgs'></img></a>
                        <h2><Link to='/inspiration' className="top-left">Made by students<br></br>for students</Link></h2>
                    </div>
                    <div className="card-info" id='card-info-1'>
                        <p className='card-info-blurb'>We've already gone through this<br></br>process!</p>
                        <Link to='/signup' className="mainbutton" id='card-info-1-button'>Get Started!</Link>
                    </div>
                </div>
                <div className='feature-cards'>
                    <div className="image-wrapper">
                        <a href='http://localhost:3000/about-us'><img src={zoomImg3} className='zoom-imgs'></img></a>
                        <h2><Link to='/about-us' className="top-left">We are not copying<br></br>Grammarly!</Link></h2>
                    </div>
                    <div className="card-info" id='card-info-2'>
                        <p className='card-info-blurb'>We are also not copying<br></br>Intuit Mailchimp!</p>
                        <Link to='/signup' className="mainbutton" id='card-info-2-button'>Get Started!</Link>
                    </div>
                </div>
                <div className='feature-cards'>
                    <div className="image-wrapper">
                        <a href='http://localhost:3000/support'><img src={zoomImg4} className='zoom-imgs'></img></a>
                        <h2><Link to='/support' className="top-left">I don't know what to<br></br>say here!</Link></h2>
                    </div>
                    <div className="card-info" id='card-info-3'>
                        <p className='card-info-blurb'>Generic blurb lorum ipsum<br></br>drago thago FRANK!</p>
                        <Link to='/signup' className="mainbutton" id='card-info-3-button'>Get Started!</Link>
                    </div>
                </div>
            </div>
            <div>
                <PaymentOptions />
            </div>
        </div>
        <Footer />
        </>
    );
}
 
export default Home;