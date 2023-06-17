import { FadeLoader } from "react-spinners";

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
      <FadeLoader color="#FF7350"/>
    </div>
    );
};

export default LoadingSpinner;
