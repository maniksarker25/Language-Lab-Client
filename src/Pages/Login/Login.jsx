import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login/login.jpg";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/UseAuth";
// const navigate = useNavigate();
// const location = useLocation();
// const from = location.state?.from?.pathname || '/';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { logIn } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    setError("");
    setSuccess("");
    console.log(data.email, data.password);
    logIn(data.email, data.password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setSuccess("User Login Successfully");
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  //states
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="container">
      <div className="hero mt-4 lg:mt-16">
        <div className="hero-content flex-col lg:flex-row gap-24">
          <div className="text-center shadow-2xl lg:w-1/2">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl lg:w-1/2 bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl text-center text-primary font-bold">
                Login
              </h1>
              <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                    })}
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label relative">
                    <span className="label-text">Password</span>
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-[55px] cursor-pointer"
                    >
                      <FaEye />
                    </span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      maxLength: 30,
                    })}
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                {error && <p className="text-red-600">{error}</p>}
                {success && <p className="text-green-600">{success}</p>}
                <div className="form-control mt-6">
                  <input
                    className="primary-btn py-2"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="text-center mb-4">
                New to Language Lab?
                <Link to="/signUp" className="text-primary font-bold">
                  SignUp
                </Link>
              </p>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
