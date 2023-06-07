import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useState } from "react";
import loginImg from "../../assets/login/login.jpg";
import { FaEye } from "react-icons/fa";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    placeholder="Your Email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    {...register("photoURL", { required: true })}
                    type="url"
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-600">photoURL is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label relative">
                    <span className="label-text">Password</span>
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4  top-[55px] cursor-pointer"
                    >
                      <FaEye />
                    </span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">Password must be 6 character</p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less then 20 character
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label relative">
                    <span className="label-text">Confirm Password</span>
                    <span
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4  top-[55px] cursor-pointer"
                    >
                      <FaEye />
                    </span>
                  </label>
                  <input
                    {...register("confirmPassword", { required: true })}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="input input-bordered"
                  />
                  {errors.confirmPassword?.type === "required" && (
                    <p className="text-red-600">Confirm Password is required</p>
                  )}
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
