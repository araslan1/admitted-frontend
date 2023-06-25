import Footer from './Footer';
import Navbar from './Navbar';
import './CostCalculator.css';
import { useState } from 'react';

const CostCalculator = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    let centPerWord = 0;
    const features = [false, false, false];
    const selectedArr = [];
    let totWords = 0;


    const calcPrice = () => {
        let temp = 0;
        temp += (totWords + 650) * centPerWord;
        console.log(temp);
        if (features[0]) {temp += 5000};
        if (features[1]) {temp += 2500};
        if (features[2]) {temp += 2500};

        temp /= 100;
        setTotalPrice(temp);
        centPerWord = 0;
        totWords = 0;
        for (let i = 1; i <= 3; i++) {
            if (i == 2) {
                for (let j = 1; j <= 9; j++) {
                    document.getElementById('calc-' + i + '-' + j).style.backgroundColor = '#fc8eac';
                    selectedArr.pop();
                }
            }
            else {
                for (let j = 1; j <= 3; j++) {
                    document.getElementById('calc-' + i + '-' + j).style.backgroundColor = '#fc8eac';
                    document.getElementById('calc-' + i + '-' + j).disabled = false;
                }
            }
            features[i - 1] = false;
        }
    }

    const handleClickQuestion1 = (pricePerWord, id) => {
        centPerWord = pricePerWord;
        
        if (id === 1) {
            for (let i = 1; i <= 3; i++) {
                features[i - 1] = true;
                document.getElementById('calc-3-' + i).style.backgroundColor = '#f91f59';
                document.getElementById('calc-3-' + i).disabled = true;
            }
        }
        else if (id === 2) {
            features[0] = false;
            document.getElementById('calc-3-' + 1).disabled = false;
            document.getElementById('calc-3-' + 1).style.backgroundColor = '#fc8eac';
            for (let i = 2; i <= 3; i++) {
                features[i - 1] = true;
                document.getElementById('calc-3-' + i).style.backgroundColor = '#f91f59';
                document.getElementById('calc-3-' + i).disabled = true;
            }
        }
        else {
            for (let i = 1; i <= 3; i++) {
                features[i - 1] = false;
                document.getElementById('calc-3-' + i).style.backgroundColor = '#fc8eac';
                document.getElementById('calc-3-' + i).disabled = false;
            }
        }

        document.getElementById('calc-1-' + id).style.backgroundColor = '#f91f59';
        for (let i = 1; i <= 3; i++) {
            if (i != id) {
                document.getElementById('calc-1-' + i).style.backgroundColor = '#fc8eac';
            }
        }
    }

    const handleClickQuestion2 = (maxWordCount, id) => {
        let index = selectedArr.indexOf(id);
        if (index === -1) {
            selectedArr.push(id);
            totWords += maxWordCount;
            document.getElementById('calc-2-' + id).style.backgroundColor = '#f91f59';
        }
        else {
            selectedArr.splice(index, 1);
            totWords -= maxWordCount;
            document.getElementById('calc-2-' + id).style.backgroundColor = '#fc8eac';
        }
    }

    const handleClickQuestion3 = (id) => {
        if (features[id - 1]) {
            features[id - 1] = false;
            document.getElementById('calc-3-' + id).style.backgroundColor = '#fc8eac';
        }
        else {
            features[id - 1] = true;
            document.getElementById('calc-3-' + id).style.backgroundColor = '#f91f59';
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
                    <p className='calc-question'>Which plan?</p>
                    <div className="calc-answers">
                        <button className='calc-answer-button' id='calc-1-1' onClick={() => handleClickQuestion1(2.5, 1)}>Premium+</button>
                        <button className='calc-answer-button' id='calc-1-2' onClick={() => handleClickQuestion1(2.5, 2)}>Premium</button>
                        <button className='calc-answer-button' id='calc-1-3' onClick={() => handleClickQuestion1(3.0, 3)}>Essentials</button>
                    </div>
                </div>
                <div className="calc-questions-ind">
                    <p className='calc-question'>Which colleges?</p>
                    <div className="calc-answers-2">
                        <div className="calc-answers-row">
                            <button className='calc-answer-button-2' id='calc-2-1' onClick={() => handleClickQuestion2(100, 1)}>Stanford</button>
                            <button className='calc-answer-button-2' id='calc-2-2' onClick={() => handleClickQuestion2(100, 2)}>USC</button>
                            <button className='calc-answer-button-2' id='calc-2-3' onClick={() => handleClickQuestion2(100, 3)}>Yale</button>
                        </div>
                        <div className="calc-answers-row">
                            <button className='calc-answer-button-2' id='calc-2-4' onClick={() => handleClickQuestion2(100, 4)}>Harvard</button>
                            <button className='calc-answer-button-2' id='calc-2-5' onClick={() => handleClickQuestion2(100, 5)}>Princeton</button>
                            <button className='calc-answer-button-2' id='calc-2-6' onClick={() => handleClickQuestion2(100, 6)}>Columbia</button>
                        </div>
                        <div className="calc-answers-row">
                            <button className='calc-answer-button-2' id='calc-2-7' onClick={() => handleClickQuestion2(100, 7)}>Dartmouth</button>
                            <button className='calc-answer-button-2' id='calc-2-8' onClick={() => handleClickQuestion2(100, 8)}>Brown</button>
                            <button className='calc-answer-button-2' id='calc-2-9' onClick={() => handleClickQuestion2(100, 9)}>Cornell</button>
                        </div>
                    </div>
                </div>
                <div className="calc-questions-ind">
                    <p className='calc-question'>What additional features do you want?</p>
                    <div className="calc-answers">
                        <button className='calc-answer-button-3' id='calc-3-1' onClick={() => handleClickQuestion3(1)}>Practice Interview</button>
                        <button className='calc-answer-button-3' id='calc-3-2' onClick={() => handleClickQuestion3(2)}>Resume Review</button>
                        <button className='calc-answer-button-3' id='calc-3-3' onClick={() => handleClickQuestion3(3)}>Activities & Honors</button>
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