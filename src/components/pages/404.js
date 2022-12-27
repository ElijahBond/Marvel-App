import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <ErrorMessage />
            <p style={{'color': 'red', 'textAlign' : 'center'}}>Page doesn't exist</p>
            <Link style={{'display' : 'block' ,'color' : 'red', 'textAlign' : 'center', 'fontSize' : '25px'}} to='/'>Back to main page(click on me)</Link>
        </div>
    )
}

export default Page404;