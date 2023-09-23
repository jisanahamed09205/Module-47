import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Ooops!!!</h2>
            <Link to='/'><button className="btn btn-primary">Go back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;