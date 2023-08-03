import "./Confirm.css"


const Confirm = ({ closeModal, submitEssays, title }) => {

    return (
        <div className ="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    <h1>{title}</h1>
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