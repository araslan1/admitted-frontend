import Footer from './Footer';
import Navbar from './Navbar';
import './CostCalculator.css';
import { useState } from 'react';

const CostCalculator = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    let centPerWord = 0;
    const packages = [false, false, false]
    const collegeArr = [false, false, false, false, false, false, false, false, false]
    const features = [false, false, false];
    const selectedArr = [];
    let totWords = 0;

    const colorSwap = (id, addBorder) => {
        let test = '';

        test = document.getElementById(id).style.backgroundColor;
        document.getElementById(id).style.backgroundColor = document.getElementById(id).style.color;
        document.getElementById(id).style.color = test;

        if (addBorder) {
            document.getElementById(id).style.textDecoration = "underline 2px";
        } else {
            document.getElementById(id).style.textDecoration = "none";
        }
    }

    const calcPrice = () => {
        let temp = 0;
        // temp += (totWords + 650) * centPerWord;
        // console.log(temp);
        for (let i = 0; i < 9; i++) {
            if (collegeArr[i]) {
                temp++;
            }
        }
        temp *= 5000;
        if (features[0]) {temp += 5000};
        if (features[1]) {temp += 2500};
        if (features[2]) {temp += 2500};

        temp /= 100;
        setTotalPrice(temp);
        centPerWord = 0;
        totWords = 0;
        for (let i = 1; i <= 3; i++) {
            if (packages[i - 1]) {
                colorSwap('calc-1-' + i, false);
                packages[i - 1] = false;
            }
            if (features[i - 1]) {
                colorSwap('calc-3-' + i, false);
                features[i - 1] = false;
            }
            document.getElementById('calc-3-' + i).disabled = false;
        }
        for (let i = 1; i <= 9; i++) {
            if (collegeArr[i - 1]) {
                colorSwap('calc-2-' + i, false);
                collegeArr[i - 1] = false;
            }
        }
    }

    const handleClickQuestion1 = (pricePerWord, id) => {
        centPerWord = pricePerWord;
        if (packages[id - 1]) {
            colorSwap('calc-1-' + id, false);
            packages[id - 1] = false;
        } else {
            colorSwap('calc-1-' + id, true);
            packages[id - 1] = true;
            for (let i = 1; i <= 3; i++) {
                if (i != (id) && packages[i - 1]) {
                    colorSwap('calc-1-' + i, false);
                    packages[i - 1] = false;
                }
            }
        }
        
        if (packages[0]) {
            for (let i = 1; i <= 3; i++) {
                if (!features[i-1]) {
                    colorSwap('calc-3-' + i, true);
                    features[i - 1] = true;
                }
                document.getElementById('calc-3-' + i).disabled = true;
            }
        }
        else if (packages[1]) {
            if (features[0]) {
                colorSwap('calc-3-1', false)
                features[0] = false;
            }
            document.getElementById('calc-3-' + 1).disabled = false;
            for (let i = 2; i <= 3; i++) {
                if (!features[i - 1]) {
                    colorSwap('calc-3-' + i, true)
                    features[i - 1] = true;
                }
                document.getElementById('calc-3-' + i).disabled = true;
            }
        }
        else {
            for (let i = 1; i <= 3; i++) {
                if (features[i - 1]) {
                    colorSwap('calc-3-' + i, false);
                    features[i - 1] = false;
                }
                document.getElementById('calc-3-' + i).disabled = false;
            }
        }
    }

    const handleClickQuestion2 = (maxWordCount, id) => {
        if (!(packages[0] || packages[1] || packages[2])) {
            handleClickQuestion1(3.0, 3)
        }

        if (!collegeArr[id - 1]) {
            collegeArr[id - 1] = true;
            totWords += maxWordCount;
            colorSwap("calc-2-" + id, true);
        } else {
            collegeArr[id - 1] = false;
            totWords -= maxWordCount;
            colorSwap("calc-2-" + id, false)
        }
    }

    const handleClickQuestion3 = (id) => {
        if (features[id - 1]) {
            features[id - 1] = false;
            colorSwap('calc-3-' + id, false);
        }
        else {
            features[id - 1] = true;
            colorSwap('calc-3-' + id, true);
        }
    }

    return (
        <>
        <Navbar />
        <div className="cost-calculator">
            <h1 className='cost-header'>How much will our service <span className='cost-header-underline'>cost</span>?</h1>
            <p className='cost-main-text'>Admitted is here to improve your chances at getting into your dream school at an affordable price. To help you choose which plan fits your budget, we made a cost calulcator!</p>

            <div className="calc-questions-all">
                <h2 className='calc-header'>Cost Calculator</h2>
                <div className="calc-questions-ind" id='calc-questions-ind-1'>
                    <div className='calc-popout'>
                        <button className='calc-question'>Plan</button>
                        <div className="calc-popout-info">
                            <p className='calc-popout-info-header'>Plan</p>
                            <p className='calc-popout-info-text'>Morbi tempus iaculis urna id. Nibh tortor id aliquet lectus. Neque volutpat ac tincidunt vitae semper quis.</p>
                        </div>
                    </div>
                    <div className="calc-answers">
                        <button className='calc-answer-button button-color-1' id='calc-1-1' onClick={() => handleClickQuestion1(2.5, 1)} style={{backgroundColor: '#fc8eac', color: 'black'}}>Premium+</button>
                        <button className='calc-answer-button button-color-2' id='calc-1-2' onClick={() => handleClickQuestion1(2.75, 2)} style={{backgroundColor: '#C98DFC', color: 'black'}}>Premium</button>
                        <button className='calc-answer-button button-color-3' id='calc-1-3' onClick={() => handleClickQuestion1(3.0, 3)} style={{backgroundColor: '#FCF58D', color: 'black'}}>Essentials</button>
                    </div>
                </div>
                <div className="calc-questions-ind">
                    <div className='calc-popout'>
                        <button className='calc-question'>Colleges</button>
                        <div className="calc-popout-info">
                            <p className='calc-popout-info-header'>Colleges</p>
                            <p className='calc-popout-info-text'>Morbi tempus iaculis urna id. Nibh tortor id aliquet lectus. Neque volutpat ac tincidunt vitae semper quis.</p>
                        </div>
                    </div>
                    <div className="calc-answers-2">
                        <div className="calc-answers-row">
                            <button className='calc-answer-button-2' id='calc-2-1' onClick={() => handleClickQuestion2(100, 1)} style={{backgroundColor: '#B83A4B', color: 'white'}}>Stanford</button>
                            <button className='calc-answer-button-2' id='calc-2-2' onClick={() => handleClickQuestion2(100, 2)} style={{backgroundColor: '#FFC72C', color: '#990000'}}>USC</button>
                            <button className='calc-answer-button-2' id='calc-2-3' onClick={() => handleClickQuestion2(100, 3)} style={{backgroundColor: '#0f4d92', color: 'white'}}>Yale</button>
                        </div>
                        <div className="calc-answers-row">
                            <button className='calc-answer-button-2' id='calc-2-4' onClick={() => handleClickQuestion2(100, 4)} style={{backgroundColor: 'white', color: '#A51C30'}}>Harvard</button>
                            <button className='calc-answer-button-2' id='calc-2-5' onClick={() => handleClickQuestion2(100, 5)} style={{backgroundColor: '#f58025', color: 'black'}}>Princeton</button>
                            <button className='calc-answer-button-2' id='calc-2-6' onClick={() => handleClickQuestion2(100, 6)} style={{backgroundColor: '#9BDDFF', color: '#003865'}}>Columbia</button>
                        </div>
                        <div className="calc-answers-row">
                            <button className='calc-answer-button-2' id='calc-2-7' onClick={() => handleClickQuestion2(100, 7)} style={{backgroundColor: '#006633', color: 'white'}}>Dartmouth</button>
                            <button className='calc-answer-button-2' id='calc-2-8' onClick={() => handleClickQuestion2(100, 8)} style={{backgroundColor: '#E4002B', color: '#381C00'}}>Brown</button>
                            <button className='calc-answer-button-2' id='calc-2-9' onClick={() => handleClickQuestion2(100, 9)} style={{backgroundColor: 'white', color: '#B31B1B'}}>Cornell</button>
                        </div>
                    </div>
                </div>
                <div className="calc-questions-ind">
                   <div className='calc-popout'>
                        <button className='calc-question'>Additional Features</button>
                        <div className="calc-popout-info">
                            <p className='calc-popout-info-header'>Features</p>
                            <p className='calc-popout-info-text'>Morbi tempus iaculis urna id. Nibh tortor id aliquet lectus. Neque volutpat ac tincidunt vitae semper quis.</p>
                        </div>
                   </div>
                    <div className="calc-answers">
                        <button className='calc-answer-button-3 button-color-1' id='calc-3-1' onClick={() => handleClickQuestion3(1)} style={{backgroundColor: '#fc8eac', color: 'black'}}>Practice Interview</button>
                        <button className='calc-answer-button-3 button-color-2' id='calc-3-2' onClick={() => handleClickQuestion3(2)} style={{backgroundColor: '#C98DFC', color: 'black'}}>Resume Review</button>
                        <button className='calc-answer-button-3 button-color-3' id='calc-3-3' onClick={() => handleClickQuestion3(3)} style={{backgroundColor: '#FCF58D', color: 'black'}}>Activities & Honors</button>
                    </div>
                </div>
                <div className="calc-price">
                    <button onClick={() => calcPrice()} className='calc-price-button'>Calculate Price</button>
                    <p className='calc-price-num'>${totalPrice}</p>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}
 
export default CostCalculator;