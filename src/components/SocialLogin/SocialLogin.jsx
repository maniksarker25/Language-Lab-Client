import { FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2">
        <hr className=" w-1/2  lg:w-1/3 " />
        <span>or</span>
        <hr className=" w-1/2 lg:w-1/3 " />
      </div>
      <button className="flex primary-btn py-2 rounded-md text-white font-semibold w-full my-4 items-center justify-center gap-2 hover:bg-[]">
        <FaGoogle /> Continue With Google
      </button>
    </div>
  );
};

export default SocialLogin;
