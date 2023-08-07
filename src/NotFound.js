import { Link } from 'react-router-dom/cjs/react-router-dom';
import notFoundImg from './images/not_found.jpeg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <div>
                <img src={notFoundImg} alt='404 error stating that the page either was moved, deleted, or never existed in the first place.' />
            </div>
            <div className="admitted-next-btn-wrap">
                <Link className='admitted-next-btn' to='/'>Go back to Home</Link>
            </div>
        </div>
    );
}
 
export default NotFound;