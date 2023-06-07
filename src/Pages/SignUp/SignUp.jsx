import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useState } from "react";
import loginImg from '../../assets/login/login.jpg'
import { FaEye } from "react-icons/fa";

const SignUp = () => {
    const [showPassword,setShowPassword] = useState(false)
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)
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
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Email"
                    name="email"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Photo URL"
                    name="photo"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-12 top-[385px] cursor-pointer"
                    >
                      <FaEye />
                    </span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                    <span
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-12 top-[468px] cursor-pointer"
                    >
                      <FaEye />
                    </span>
                  </label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="password"
                    required
                    className="input input-bordered"
                  />
                </div>
                {/* {error && <p className="text-red-600">{error}</p>}
                  {success && <p className="text-green-600">{success}</p>} */}
                <div className="form-control mt-6">
                  <input
                    className="primary-btn py-2"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="text-center mb-4">
                Already Have an Account?
                <Link to="/login" className="text-primary font-bold">
                  Login
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

export default SignUp;
