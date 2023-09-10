import Footer from './Footer';
import Navbar from './Navbar';
import './CostCalculator.css';
import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './NavbarListener.js'

const CostCalculator = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const packages = [false, false, false]
    const collegeArr = [false, false, false, false, false, false, false, false, false, false, false]

    const colorSwap = (id, addBorder) => {
        let test = '';

        test = document.getElementById(id).style.backgroundColor;
        document.getElementById(id).style.backgroundColor = document.getElementById(id).style.color;
        document.getElementById(id).style.color = test;

        if (addBorder) {
            let innerText = document.getElementById(id).innerHTML
            document.getElementById(id).innerHTML = innerText.substring(0, innerText.length - 1) + "&#x2713;"
        } else {
            let innerText2 = document.getElementById(id).innerHTML
            document.getElementById(id).innerHTML = innerText2.substring(0, innerText2.length - 1) + "&#x2715;"
        }
    }

    const calcPrice = () => {
        let temp = 0;
        for (let i = 0; i < collegeArr.length; i++) {
            if (collegeArr[i]) {
                temp++;
            }
        }
        if (packages[0]) {
            temp *= 4500;
        } else if (packages[1]) {
            temp *= 5000;
            temp += 5000;
        } else if (packages[2]) {
            temp *= 5500;
            temp += 10000;
        }

        temp /= 100;
        setTotalPrice(temp);
        for (let i = 1; i <= 3; i++) {
            if (packages[i - 1]) {
                colorSwap('calc-1-' + i, false);
                packages[i - 1] = false;
            }
        }
        for (let i = 1; i <= collegeArr.length; i++) {
            if (collegeArr[i - 1]) {
                colorSwap('calc-2-' + i, false);
                collegeArr[i - 1] = false;
            }
        }
    }

    const handleClickQuestion1 = (id) => {
        if (packages[id - 1]) {
            colorSwap('calc-1-' + id, false);
            packages[id - 1] = false;
        } else {
            colorSwap('calc-1-' + id, true);
            packages[id - 1] = true;
            for (let i = 1; i <= 3; i++) {
                if (i !== (id) && packages[i - 1]) {
                    colorSwap('calc-1-' + i, false);
                    packages[i - 1] = false;
                }
            }
        }
    }

    const handleClickQuestion2 = (id) => {
        if (!(packages[0] || packages[1] || packages[2])) {
            handleClickQuestion1(1)
        }

        if (!collegeArr[id - 1]) {
            collegeArr[id - 1] = true;
            colorSwap("calc-2-" + id, true);
        } else {
            collegeArr[id - 1] = false;
            colorSwap("calc-2-" + id, false)
        }
    }

    return (
        <>
        <Navbar />
        <div className="cost-calculator">
            <h1 className='cost-header'>How much will our service <span className='cost-header-underline'>cost</span>?</h1>
            <p className='cost-main-text'>Admitted is here to improve your chances of getting into your dream school at an affordable price. To help you find which plan fits your budget, we made a cost calculator!</p>

            <div className="calc-questions-all">
                <h2 className='calc-header'>Cost Calculator</h2>
                <div className="calc-questions-ind" id='calc-questions-ind-1'>
                    <div className='calc-popout' data-dropdown>
                        <button className='calc-question' data-dropdown-button>Plan</button>
                        <div className="calc-popout-info">
                            <p className='calc-popout-info-header'>Plan</p>
                            <p className='calc-popout-info-text'>Each Admitted service plan includes different features. 
                            To see the exact details please visit our <Link to='/review-policy'>Review Policy</Link> page. 
                            In general, the <span>Premium+</span> plan is our most comprehensive service that includes all available features. 
                            Our <span>Premium</span> plan includes all features except a practice interview, though Live Review sessions are shorter than with the Premium+ plan. 
                            The <span>Essentials</span> plan covers every essay in your application, but each Live Review session is constrained to 20 minutes. 
                            Finally, our <span>Free Trial</span> is comprised of one 10-minute Live Review of a short essay for Stanford or USC.</p>
                        </div>
                    </div>
                    <div className="calc-answers">
                        <button className='calc-answer-button' id='calc-1-1' onClick={() => handleClickQuestion1(1)} style={{backgroundColor: '#fc8eac', color: 'black'}}>Essentials &nbsp;|&nbsp; &#x2715;</button>
                        <button className='calc-answer-button' id='calc-1-2' onClick={() => handleClickQuestion1(2)} style={{backgroundColor: '#fc8eac', color: 'black'}}>Premium &nbsp;|&nbsp; &#x2715;</button>
                        <button className='calc-answer-button' id='calc-1-3' onClick={() => handleClickQuestion1(3)} style={{backgroundColor: '#fc8eac', color: 'black'}}>Premium+ &nbsp;|&nbsp; &#x2715;</button>
                    </div>
                </div>
                <div className="calc-questions-ind">
                    <div className='calc-popout' data-dropdown>
                        <button className='calc-question' data-dropdown-button>Colleges*</button>
                        <div className="calc-popout-info">
                            <p className='calc-popout-info-header'>Colleges*</p>
                            <p className='calc-popout-info-text'>*Admitted is not officially affiliated or endorsed by any of the listed universities<br></br><br></br>
                            Selecting a college means that you wish for an Admitted reviewer from that college to read and provide feedback 
                            on your main <span>Common Application essay</span> and all of the selected college's <span>required supplemental essays</span>.
                            For additional information, feel free to visit our <Link to='/review-policy'>Review Policy</Link> page.</p>
                        </div>
                    </div>
                    <div className="calc-answers-2">
                        <div className="calc-answers-row">
                            <button className='calc-answer-button-2' id='calc-2-1' onClick={() => handleClickQuestion2(1)} style={{backgroundColor: '#FB7196', color: 'black'}}>Stanford &nbsp;|&nbsp; &#x2715;</button>
                            <button className='calc-answer-button-2' id='calc-2-2' onClick={() => handleClickQuestion2(2)} style={{backgroundColor: '#FB7196', color: 'black'}}>USC &nbsp;|&nbsp; &#x2715;</button>
                            <button className='calc-answer-button-2' id='calc-2-3' onClick={() => handleClickQuestion2(3)} style={{backgroundColor: '#FB7196', color: 'black'}}>Yale &nbsp;|&nbsp; &#x2715;</button>
                        </div>
                        <div className="calc-answers-row">
                            <button className='calc-answer-button-2' id='calc-2-4' onClick={() => handleClickQuestion2(4)} style={{backgroundColor: '#FB5682', color: 'black'}}>Harvard &nbsp;|&nbsp; &#x2715;</button>
                            <button className='calc-answer-button-2' id='calc-2-5' onClick={() => handleClickQuestion2(5)} style={{backgroundColor: '#FB5682', color: 'black'}}>Princeton &nbsp;|&nbsp; &#x2715;</button>
                            <button className='calc-answer-button-2' id='calc-2-6' onClick={() => handleClickQuestion2(6)} style={{backgroundColor: '#FB5682', color: 'black'}}>Columbia &nbsp;|&nbsp; &#x2715;</button>
                        </div>
                        <div className="calc-answers-row">
                            <button className='calc-answer-button-2' id='calc-2-7' onClick={() => handleClickQuestion2(7)} style={{backgroundColor: '#FA3B6E', color: 'black'}}>Dartmouth &nbsp;|&nbsp; &#x2715;</button>
                            <button className='calc-answer-button-2' id='calc-2-8' onClick={() => handleClickQuestion2(8)} style={{backgroundColor: '#FA3B6E', color: 'black'}}>Brown &nbsp;|&nbsp; &#x2715;</button>
                            <button className='calc-answer-button-2' id='calc-2-9' onClick={() => handleClickQuestion2(9)} style={{backgroundColor: '#FA3B6E', color: 'black'}}>Cornell &nbsp;|&nbsp; &#x2715;</button>
                        </div>
                        <div className="calc-answers-row">
                            <button className='calc-answer-button-2' id='calc-2-10' onClick={() => handleClickQuestion2(10)} style={{backgroundColor: '#F91F59', color: 'black'}}>UPenn &nbsp;|&nbsp; &#x2715;</button>
                            <button className='calc-answer-button-2' id='calc-2-11' onClick={() => handleClickQuestion2(11)} style={{backgroundColor: '#F91F59', color: 'black'}}>Tulane &nbsp;|&nbsp; &#x2715;</button>
                        </div>
                    </div>
                </div>
                <div className="calc-price">
                    <button onClick={() => calcPrice()} className='calc-price-button'>Calculate Price</button>
                    <p className='calc-price-num'>${totalPrice}</p>
                </div>
            </div>
            <div className="cost-calc-disclaimer">
                <p>*Admitted is not officially affiliated or endorsed by any of the above universities</p>
            </div>
        </div>
        <Footer />
        </>
    );
}
 
export default CostCalculator;