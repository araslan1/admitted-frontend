import { useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import './Otp.css'

const OTP = () => {
    const location = useLocation();
    const [numberValue1, setNumberValue1] = useState('');
    const [numberValue2, setNumberValue2] = useState('');
    const [numberValue3, setNumberValue3] = useState('');
    const [numberValue4, setNumberValue4] = useState('');

    const combineValues = () => {
        const combinedValue = parseInt(numberValue1 + numberValue2 + numberValue3 + numberValue4, 10);
        return isNaN(combinedValue) ? 0 : combinedValue;
    };


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
        const receivedData = location.state; 
        const OTP = receivedData.OTP; 
        // const email = receivedData.email; 
        const entered_number = combineValues(); 
        if (entered_number < 1000){
            window.alert("You entered an invalid number"); 
            return; 
        }
        if (entered_number === OTP){
            // valid input, send to reset password page
            console.log("valid otp");
        }else{
            //invalid input
            window.alert("This was the incorrect code, return to our login page and try clicking reset password again!")
        }
    }


    return (
        <div className="otp">
            <h1>
                We have sent a code to your email!
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
        </div>
    );
}
 
export default OTP;