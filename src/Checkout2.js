import { useState } from 'react';
import LoadingMessage from "./LoadingMessage";
import './Checkout2.css';
import Cookies from "universal-cookie";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import EnterEmail from "./EnterEmail"; 
import axios from 'axios';

const cookies = new Cookies();

const Checkout2 = () => {
    const [loadingMessage, setLoadingMessage] = useState(false); 
    const token = cookies.get('TOKEN'); 
    const [loadingPayment, setLoadingPayment] = useState(false); 
   const plans = [false, false, false, false];
   const selectedColleges = [false, false, false, false, false, false, false, false, false, false, false];
    const history = useHistory(); 
    const [chosenCollege, setChosenCollege] = useState(''); 
    const [enterEmail, setEnterEmail] = useState(false); 


   const compileItems = () => {
        let compiledArr

        if (plans[3]) {
            compiledArr = makeArr(2); //Premium+
            compiledArr.push({id: 34, quantity: 1});
            compiledArr.push({id: 35, quantity: 1});
            compiledArr.push({id: 36, quantity: 1});
        } else if (plans[2]) {
            compiledArr = makeArr(1); //Premium
            compiledArr.push({id: 34, quantity: 1});
            compiledArr.push({id: 35, quantity: 1});
        } else  if (plans[1]) {
            compiledArr = makeArr(0); //Essentials
        }

        return compiledArr;
   }

   const makeArr = (mod) => {
        const arr = [];

        for (let i = 1; i <= selectedColleges.length; i++) {
            if (selectedColleges[i - 1]) {
                arr.push({id: 1 + mod + ((i - 1) * 3), quantity: 1});
            }
        }
        return arr;
   }

    const proceedToPayment = async () => { 
        setLoadingPayment(true); 
        let oneAnswered = false;
        for (let i = 0; i < plans.length; i++) {
            if (plans[i]) {
                oneAnswered = true;
                break
            }
        }

        let twoAnswered = false;
        for (let i = 0; i < selectedColleges.length; i++) {
            if (selectedColleges[i]) {
                twoAnswered = true;
                break
            }
        }

        let freeTrialIncorrect = false;
        if (plans[0] && (selectedColleges[0] && selectedColleges[1])) {
            freeTrialIncorrect = true;
        }

        if (!freeTrialIncorrect && (oneAnswered && twoAnswered)) {
            if (plans[0]) {
                console.log('You chose free trial!'); 
                if (token){
                    if (selectedColleges[0]){
                        //Stanford is  0
                        setChosenCollege("Stanford - Free Trial");
                    }else if (selectedColleges[1]){
                        //USC is 1
                        setChosenCollege("USC - Free Trial");
                    }
                    
                    setEnterEmail(true);
                }else{
                    history.push("/login"); 
                }
                // setFreeTrialChosen
                // fetch(`${process.env.REACT_APP_SERVER_URL}/order/success/freetrial`, {
                //     method: 'POST',

                // });
                //Create a short essay document for them based on whether they chose Stanford or USC; no need to send to stripe
            } else {
                fetch(`${process.env.REACT_APP_SERVER_URL}/create-checkout-session`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        items: compileItems()
                    })
                }).then(res => {
                    if (res.ok) return res.json()
                    return res.json().then(json => Promise.reject(json))
                }).then(({ url }) => {
                    setLoadingPayment(false); 
                    window.location = url
                    console.log(url)
                }).catch(e => {
                    setLoadingPayment(false); 
                    console.error(e.error)
                })
            }
        }
        else {
            setLoadingPayment(false); 
            if (!oneAnswered || !twoAnswered) {
                document.getElementById('proceed-to-payment-error').innerHTML = 'Please select a plan and at least one university'
            }
            if (freeTrialIncorrect) {
                document.getElementById('proceed-to-payment-error').innerHTML = 'Free trial only allows for one college review'
            }
        }
        setLoadingPayment(false); 
    }

    const handlePlanSelect = (id) => {

        if (id === 0) {
            if (plans[id]) {
                document.getElementById("checkout-payment-button").innerHTML = "Proceed to Payment";
            }
            else {
                document.getElementById("checkout-payment-button").innerHTML = "Get Reviewed!";
            }
        }

        if (!plans[id]) {
            document.getElementById('checkout-button-1-' + id).innerHTML = "&#x2713;"
            document.getElementById('checkout-ind-box-' + id).style.border = '1px solid #FB5682'
            document.getElementById('checkout-ind-box-' + id).style.backgroundColor = "#f6f9fe";
            plans[id] = true;

            for (let i = 0; i < plans.length; i++) {
                if (i !== id && plans[i]) {
                    document.getElementById('checkout-button-1-' + i).innerHTML = "+"
                    document.getElementById('checkout-ind-box-' + i).style.border = '.1px solid #BCBAB8'
                    document.getElementById('checkout-ind-box-' + id).style.backgroundColor = "white";
                    plans[i] = false;
                    if (i === 0) {
                        for (let j = 2; j < selectedColleges.length; j++) {
                            document.getElementById('checkout-button-2-' + j).disabled = false;
                            document.getElementById('checkout-button-2-' + j).style.backgroundColor = 'black'
                            document.getElementById('checkout-college-ind-' + j).style.color = 'black'
                        }
                    }
                }
            }

            if (id === 0) {
                for (let i = 2; i < selectedColleges.length; i++) {
                    document.getElementById('checkout-button-2-' + i).disabled = true;
                    document.getElementById('checkout-button-2-' + i).style.backgroundColor = '#CDCAC1';
                    document.getElementById('checkout-college-ind-' + i).style.color = '#CDCAC1';
                    document.getElementById('checkout-college-ind-' + i).style.backgroundColor = 'white';
                    if (selectedColleges[i]) {
                        document.getElementById('checkout-college-ind-' + i).style.border = '.1px solid #BCBAB8';
                        document.getElementById('checkout-ind-box-' + id).style.backgroundColor = "white";
                        document.getElementById('checkout-button-2-' + i).innerHTML = '+'
                        selectedColleges[i] = false;
                    }
                }
            }
        } else {
            document.getElementById('checkout-button-1-' + id).innerHTML = "+"
            document.getElementById('checkout-ind-box-' + id).style.border = '.1px solid #BCBAB8'
            document.getElementById('checkout-ind-box-' + id).style.backgroundColor = "white";
            plans[id] = false;
            if (id === 0) {
                for (let j = 2; j < selectedColleges.length; j++) {
                    document.getElementById('checkout-button-2-' + j).disabled = false;
                    document.getElementById('checkout-button-2-' + j).style.backgroundColor = 'black';
                    document.getElementById('checkout-college-ind-' + j).style.color = 'black';
                }
            }
        }
    }

    const handleCollegeSelect = (id) => {
        if (!selectedColleges[id]) {
            document.getElementById('checkout-button-2-' + id).innerHTML = "&#x2713;";
            document.getElementById('checkout-college-ind-' + id).style.border = '1px solid #FB5682';
            document.getElementById('checkout-college-ind-' + id).style.backgroundColor = "#f6f9fe";
            selectedColleges[id] = true;
        } else {
            document.getElementById('checkout-button-2-' + id).innerHTML = "+";
            document.getElementById('checkout-college-ind-' + id).style.border = '.1px solid #BCBAB8'
            document.getElementById('checkout-college-ind-' + id).style.backgroundColor = "white";
            selectedColleges[id] = false;
        }
    }

    const submitPayment = (email) => {
        if (!chosenCollege){
            return;
        }
        setEnterEmail(false);
        console.log(chosenCollege);
        setLoadingMessage(true);

        const configuration = {
            method: "post",
            url: `${process.env.REACT_APP_SERVER_URL}/order/success/freetrial`,
            data: {
                email: email,
                collegeChoice: chosenCollege,
            },
        }

        axios(configuration)
            .then((reponse) => {
                setLoadingMessage(false);
                console.log("success");
                history.push('/dashboard');
            })
            .catch((error) => {
                console.error("Email doesn't exist", error);
                history.push('/login');
            })

    }

   

    return (
        <div className="checkout-2">
            {enterEmail && <EnterEmail chosenCollege = {chosenCollege} submitPayment = {submitPayment} />}
            {loadingPayment && <LoadingMessage title="Sending you to checkout"/>}
            {loadingMessage && <LoadingMessage title="Creating a New Document"/>}
            <div className="checkout-banner-launch">
                <p>Admitted officially launches in September 2023! In the meantime, see how our service works with our <span>Free Trial</span></p>
            </div>
            <h2 className='checkout-2-header'>Select Plan:</h2>
                <div className="checkout-all-boxes">
                    <div className="checkout-options-box">
                        <div className="checkout-individual-box" id='checkout-ind-box-0'>
                            <div className="checkout-options-header">
                                <h3>Free Trial</h3>
                                <button id='checkout-button-1-0' onClick={() => handlePlanSelect(0)}>+</button>
                            </div>
                            <p className='checkout-options-features'>
                                <span className='checkout-options-features-line'>&#x2713; Sample Essay Analysis<br></br></span>
                                <span className='checkout-options-features-line'>&#x2713; One 10-Minute Review Session<br></br></span>
                                <span className='checkout-options-features-line checkout-options-features-line-x'>&#x2715; Common App Essay Review<br></br></span>
                                <span className='checkout-options-features-line checkout-options-features-line-x'>&#x2715; Activities & Honors Evaluation<br></br></span>
                                <span className='checkout-options-features-line checkout-options-features-line-x'>&#x2715; Resume Evaluation<br></br></span>
                                <span className='checkout-options-features-last-line checkout-options-features-line-x'>&#x2715; 30-Minute Practice Interview<br></br></span>
                            </p>
                        </div>
                    </div>
                    <div className="checkout-options-box">
                        <div className="checkout-individual-box" id='checkout-ind-box-1'>
                        <div className="checkout-options-header">
                                <h3>Essentials</h3>
                                <button id='checkout-button-1-1' onClick={() => handlePlanSelect(1)} disabled>+</button>
                            </div>
                            <p className='checkout-options-features'>
                                <span className='checkout-options-features-line'>&#x2713; Supplemental Essay Analysis<br></br></span>
                                <span className='checkout-options-features-line'>&#x2713; 20-Minute Review Session / College<br></br></span>
                                <span className='checkout-options-features-line'>&#x2713; Common App Essay Review<br></br></span>
                                <span className='checkout-options-features-line checkout-options-features-line-x'>&#x2715; Activities & Honors Evaluation<br></br></span>
                                <span className='checkout-options-features-line checkout-options-features-line-x'>&#x2715; Resume Evaluation<br></br></span>
                                <span className='checkout-options-features-last-line checkout-options-features-line-x'>&#x2715; 30-Minute Practice Interview<br></br></span>
                            </p>
                        </div>
                    </div>
                    <div className="checkout-options-box">
                        <div className="checkout-individual-box" id='checkout-ind-box-2'>
                        <div className="checkout-options-header">
                                <h3>Premium</h3>
                                <button id='checkout-button-1-2' onClick={() => handlePlanSelect(2)} disabled>+</button>
                            </div>
                            <p className='checkout-options-features'>
                                <span className='checkout-options-features-line'>&#x2713; Supplemental Essay Analysis<br></br></span>
                                <span className='checkout-options-features-line'>&#x2713; 25-Minute Review Session / College<br></br></span>
                                <span className='checkout-options-features-line'>&#x2713; Common App Essay Review<br></br></span>
                                <span className='checkout-options-features-line'>&#x2713; Activities & Honors Evaluation<br></br></span>
                                <span className='checkout-options-features-line'>&#x2713; Resume Evaluation<br></br></span>
                                <span className='checkout-options-features-last-line checkout-options-features-line-x'>&#x2715; 30-Minute Practice Interview<br></br></span>
                            </p>
                        </div>
                    </div>
                    <div className="checkout-options-box">
                        <div className="checkout-individual-box" id='checkout-ind-box-3'>
                            <div className="checkout-options-header">
                                <h3>Premium+</h3>
                                <button id='checkout-button-1-3' onClick={() => handlePlanSelect(3)} disabled>+</button>
                            </div>
                            <p className='checkout-options-features'>
                                <span className='checkout-options-features-line'>&#x2713; Supplemental Essay Analysis<br></br></span>
                                <span className='checkout-options-features-line'>&#x2713; 30-Minute Review Session / College<br></br></span>
                                <span className='checkout-options-features-line'>&#x2713; Common App Essay Review<br></br></span>
                                <span className='checkout-options-features-line'>&#x2713; Activities & Honors Evaluation<br></br></span>
                                <span className='checkout-options-features-line'>&#x2713; Resume Evaluation<br></br></span>
                                <span className='checkout-options-features-last-line'>&#x2713; 30-Minute Practice Interview<br></br></span>
                            </p> 
                        </div>
                    </div>
                </div>

            <h2 className='checkout-2-header'>Select Colleges:<sup>*</sup></h2>
            <div className="checkout-college-boxes-all">
                <div className="checkout-college-boxes-row">
                    <div className="checkout-college-ind" id='checkout-college-ind-0'>
                        <p>Stanford University</p>
                        <button id='checkout-button-2-0' onClick={() => handleCollegeSelect(0)}>+</button>
                    </div>
                    <div className="checkout-college-ind" id='checkout-college-ind-1'>
                        <p>USC</p>
                        <button id='checkout-button-2-1' onClick={() => handleCollegeSelect(1)}>+</button>
                    </div>
                    <div className="checkout-college-ind" id='checkout-college-ind-2'>
                        <p>Harvard University</p>
                        <button id='checkout-button-2-2' onClick={() => handleCollegeSelect(2)}>+</button>
                    </div>
                </div>

                <div className="checkout-college-boxes-row">
                    <div className="checkout-college-ind" id='checkout-college-ind-3'>
                        <p>Yale University</p>
                        <button id='checkout-button-2-3' onClick={() => handleCollegeSelect(3)}>+</button>
                    </div>
                    <div className="checkout-college-ind" id='checkout-college-ind-4'>
                        <p>Columbia University</p>
                        <button id='checkout-button-2-4' onClick={() => handleCollegeSelect(4)}>+</button>
                    </div>
                    <div className="checkout-college-ind" id='checkout-college-ind-5'>
                        <p>Princeton University</p>
                        <button id='checkout-button-2-5' onClick={() => handleCollegeSelect(5)}>+</button>
                    </div>
                </div>

                <div className="checkout-college-boxes-row">
                    <div className="checkout-college-ind" id='checkout-college-ind-6'>
                        <p>Cornell University</p>
                        <button id='checkout-button-2-6' onClick={() => handleCollegeSelect(6)}>+</button>
                    </div>
                    <div className="checkout-college-ind" id='checkout-college-ind-7'>
                        <p>Dartmouth University</p>
                        <button id='checkout-button-2-7' onClick={() => handleCollegeSelect(7)}>+</button>
                    </div>
                    <div className="checkout-college-ind" id='checkout-college-ind-8'>
                        <p>Brown University</p>
                        <button id='checkout-button-2-8' onClick={() => handleCollegeSelect(8)}>+</button>
                    </div>
                </div>

                <div className="checkout-college-boxes-row">
                    <div className="checkout-college-ind" id='checkout-college-ind-9'>
                        <p>UPenn</p>
                        <button id='checkout-button-2-9' onClick={() => handleCollegeSelect(9)}>+</button>
                    </div>
                    <div className="checkout-college-ind" id='checkout-college-ind-10'>
                        <p>Tulane University</p>
                        <button id='checkout-button-2-10' onClick={() => handleCollegeSelect(10)}>+</button>
                    </div>
                </div>
            </div>

            <div className="proceed-to-payment">
                <button onClick={() => proceedToPayment()} id='checkout-payment-button'>Proceed to Payment</button>
                <p id='proceed-to-payment-error'></p>
            </div>

            <div className="checkout-disclaimer">
                <p>*Admitted is not officially affiliated or endorsed by any of the listed universities</p>
            </div>
        </div>
    );
}
 
export default Checkout2;