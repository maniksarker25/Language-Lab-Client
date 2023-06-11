import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const SocialLogin = () => {
  const { googleSignIn, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // handle google Sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        
        axios
          .post("https://language-lab-server.vercel.app/users", {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
            photoUrl: loggedInUser.photoURL,
            role: "student",
          })
          .then((data) => {
            console.log(data.data)
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2">
        <hr className=" w-1/2  lg:w-1/3 " />
        <span>or</span>
        <hr className=" w-1/2 lg:w-1/3 " />
      </div>
      <button
        onClick={handleGoogleSignIn}
        className="flex primary-btn py-2 rounded-md text-white font-semibold w-full my-4 items-center justify-center gap-2 hover:bg-[]"
      >
        <FaGoogle /> Continue With Google
      </button>
    </div>
  );
};

export default SocialLogin;
