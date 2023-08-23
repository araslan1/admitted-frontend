import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import './Otp.css';
import ResetPassword from './ResetPassword'; 



const OTP = () => {
    const history = useHistory(); 
    const location = useLocation();
    const receivedData = location.state; 
    const [email, setEmail] = useState("a"); 
    const [numberValue1, setNumberValue1] = useState('');
    const [numberValue2, setNumberValue2] = useState('');
    const [numberValue3, setNumberValue3] = useState('');
    const [numberValue4, setNumberValue4] = useState('');
    const [validOTP, setValidOTP] = useState(false); 

    const combineValues = () => {
        const combinedValue = parseInt(numberValue1 + numberValue2 + numberValue3 + numberValue4, 10);
        return isNaN(combinedValue) ? 0 : combinedValue;
    };

    useEffect(() => {
        if (!receivedData || !receivedData.email) {
            history.push('/login'); 
        }else{
            setEmail(receivedData.email);
        }
    }, [receivedData, history])


    const handleNumberChange1 = (event) => {
        const inputValue = event.target.value;
        // Ensure only one digit is stored
        if (inputValue.length <= 1) {
          setNumberValue1(inputValue);
        }
    };
    const handleNumberChange2 = (event) => {
        const inputValue = event.target.value;
        // Ensure only one digit is stored
        if (inputValue.length <= 1) {
          setNumberValue2(inputValue);
        }
    };
    const handleNumberChange3 = (event) => {
        const inputValue = event.target.value;
        // Ensure only one digit is stored
        if (inputValue.length <= 1) {
          setNumberValue3(inputValue);
        }
    };
    const handleNumberChange4 = (event) => {
        const inputValue = event.target.value;
        // Ensure only one digit is stored
        if (inputValue.length <= 1) {
          setNumberValue4(inputValue);
        }
    };

    const enterCode = () => {
        if (!receivedData){
            history.push('/login'); 
            return; 
        }
        if (!receivedData.OTP) {
            history.push('/login'); 
            return; 
        }

        const OTP = receivedData.OTP; 
        // const email = receivedData.email; 
        if (!OTP) {
            history.push('/login'); 
            return; 
        }
        const entered_number = combineValues(); 
        if (entered_number < 1000){
            window.alert("You entered an invalid number"); 
            return; 
        }
        if (entered_number === OTP){
            // valid input, send to reset password page
            setValidOTP(true); 
        }else{
            //invalid input
            window.alert("This was the incorrect code, return to our login page and try clicking reset password again!")
        }
    }


    return (
        <div className="otp">
            {
            !validOTP &&
            <>
            <h1>
                We have sent a code to {email}!
            </h1>
            <div className="OTPcontainer">
                <input type="number" 
                className="numberinput"
                value={numberValue1}
                required
                onChange={handleNumberChange1}></input>

                <input type="number" 
                className="numberinput"
                value={numberValue2}
                required
                onChange={handleNumberChange2}
                style ={{marginLeft: "10px"}}
                ></input>

                <input type="number" 
                className="numberinput"
                value={numberValue3}
                required
                style ={{marginLeft: "10px"}}
                onChange={handleNumberChange3}></input>

                <input type="number" 
                className="numberinput"
                value={numberValue4}
                required
                style ={{marginLeft: "10px"}}
                onChange={handleNumberChange4}></input>
            </div>

            <button onClick={enterCode}>Enter Code</button>
            </>
            }
            {validOTP && <ResetPassword email ={email}/>}
        </div>
    );
}
 
export default OTP;