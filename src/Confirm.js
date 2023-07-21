import "./Confirm.css"


const Confirm = ({ closeModal, submitEssays }) => {
    return (
        <div className ="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    <h1>Are you sure you want to submit your essays?</h1>
                </div>
                <div className="footer_confirm">
                    <button className = "logbutton" onClick = {() => {closeModal(false)}}>
                        Cancel
                    </button>
                    <button className="mainbutton" onClick={submitEssays}>Submit</button>
            
                </div>
            </div>
        </div>
    );
}
 
export default Confirm;