import placeholder from './images/placeholder-college.jpeg'
import './Checkout.css'

let collegeCount = 0;
let featuresArr = [false, false, false]
let testArr = [];

const testFun = () => {
    if (collegeCount > 0) {
        testArr.push({id: 1, quantity: collegeCount});
    }
    if (featuresArr[0]) {
        testArr.push({id: 2, quantity: 1});
    }
    if (featuresArr[1]) {
        testArr.push({id: 3, quantity: 1});
    }
    if (featuresArr[2]) {
        testArr.push({id: 4, quantity: 1});
    }
}

const Checkout = () => {
    const handleClick = () => {
        testFun()

        fetch('http://localhost:7459/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: testArr
                // items: [
                //     { id: 1, quantity: collegeCount},
                //     { id: 2, quantity: resumeCount}
                // ]
            })
        }).then(res => {
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        }).then(({ url }) => {
            window.location = url
            console.log(url)
        }).catch(e => {
            console.error(e.error)
        })
    }

    let selected = []

    const handleSelect = (id) => {
        let index = selected.indexOf(id);
        if (index === -1) {
            selected.push(id);
            document.getElementById('college-' + id).innerHTML = "&#x2713;";
            collegeCount += 1;
        } else {
            selected.splice(index, 1)
            document.getElementById('college-' + id).innerHTML = "+";
            collegeCount -= 1;
        }
    }

    const handleSelectFeature = (id) => {
        if (!featuresArr[id - 1]) {
            document.getElementById('feature-' + id).innerHTML = "&#x2713;";
            featuresArr[id - 1] = true;
        } else {
            document.getElementById('feature-' + id).innerHTML = "+";
            featuresArr[id - 1] = false;
        }
    }

    return (
        <div className="checkout">
            <div className="checkout-container">
                <div className="header-wrapper">
                    <h1>Select Colleges:</h1>
                </div>
                <div className="college-all">
                    <div className="college-row">
                        <div className="college-ind">
                            <div className="college-image">
                                <img src={placeholder} alt="..." width="140" height="160"/>
                            </div>
                            <div className="button-wrapper">
                                <button 
                                    className="select-btn" 
                                    id="college-1"
                                    onClick={() => handleSelect(1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="college-ind">
                            <div className="college-image">
                                <img src={placeholder} alt="..." width="140" height="160"/>
                            </div>
                            <div className="button-wrapper">
                                <button 
                                    className="select-btn" 
                                    id="college-2"
                                    onClick={() => handleSelect(2)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="college-ind">
                            <div className="college-image">
                                <img src={placeholder} alt="..." width="140" height="160"/>
                            </div>
                            <div className="button-wrapper">
                                <button 
                                    className="select-btn" 
                                    id="college-3"
                                    onClick={() => handleSelect(3)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                   </div>
                   <div className="college-row">
                        <div className="college-ind">
                            <div className="college-image">
                                <img src={placeholder} alt="..." width="140" height="160"/>
                            </div>
                            <div className="button-wrapper">
                                <button 
                                    className="select-btn" 
                                    id="college-4"
                                    onClick={() => handleSelect(4)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="college-ind">
                            <div className="college-image">
                                <img src={placeholder} alt="..." width="140" height="160"/>
                            </div>
                            <div className="button-wrapper">
                                <button 
                                    className="select-btn" 
                                    id="college-5"
                                    onClick={() => handleSelect(5)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="college-ind">
                            <div className="college-image">
                                <img src={placeholder} alt="..." width="140" height="160"/>
                            </div>
                            <div className="button-wrapper">
                                <button 
                                    className="select-btn" 
                                    id="college-6"
                                    onClick={() => handleSelect(6)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                   </div>
                </div>

                <div className="add-features">
                    <div className="feature-ind">
                        <div className="text-wrapper">
                            <p>Resume Review</p>
                        </div>
                        <div className="button-wrapper">
                            <button 
                                className="select-btn" 
                                id="feature-1"
                                onClick={() => handleSelectFeature(1)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="feature-ind">
                        <div className="text-wrapper">
                            <p>Activities & Honors Review</p>
                        </div>
                        <div className="button-wrapper">
                            <button 
                                className="select-btn" 
                                id="feature-2"
                                onClick={() => handleSelectFeature(2)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="feature-ind">
                        <div className="text-wrapper">
                            <p>Practice Interview</p>
                        </div>
                        <div className="button-wrapper">
                            <button 
                                className="select-btn" 
                                id="feature-3"
                                onClick={() => handleSelectFeature(3)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>

                <div className="button-wrapper">
                    <button onClick={() => handleClick()}>Checkout</button>
                </div>
            </div>
        </div>
    );
}
 
export default Checkout;