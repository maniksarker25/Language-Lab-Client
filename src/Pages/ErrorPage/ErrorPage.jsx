
import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../../../src/assets/errorPageImg/404img.jpg'
const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div className='mx-auto max-w-screen-xl mt-24 text-center  '>
            <img className='mx-auto w-[800px] h-[400px] rounded-xl ' src={errorImage} alt="" />
            <h1 className='text-center text-2xl mt-12 text-primary'>{error.error.message}</h1>
            <Link to='/'><button className="primary-btn px-4 py-3 mt-12">Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;