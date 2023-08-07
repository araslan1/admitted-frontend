import "./Confirm.css"


const LoadingMessage = ({ title }) => {

    return (
        <div className ="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <div className="footer_confirm">
                    <div class="dots-bars-6"></div>
                </div>
            </div>
        </div>
    );
}
 
export default LoadingMessage;