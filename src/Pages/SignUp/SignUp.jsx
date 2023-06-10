import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import loginImg from "../../assets/login/login.jpg";
import { FaEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import useAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // const {signUp,updateUserProfile} = useAuth();
  const {signUp,updateUserProfile,logOut} = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleSignUp = (data) => {
    setError("");
    setSuccess("");
    // console.log(data)
    if (data.password !== data.confirmPassword) {
      return setError("Password not match");
    }
    signUp(data.email,data.password)
    .then(result =>{
        const createdUser =result.user;
        console.log(createdUser)
        setSuccess('User Created Successfully')
        updateUserProfile(data.name,data.photoURL)
        .then(() => {
          const savedUser = {name:data.name, email:data.email, photoUrl:data.photoURL, role:'student'}
          fetch("http://localhost:5000/users",{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(savedUser)
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "User Created Successfully.Now Login Please!",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    })
    .catch(error=>{
        const errorMessage = error.errorMessage;
        console.log(errorMessage)
        setError(errorMessage)
    })

  };
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
                SignUp
              </h1>
              <form onSubmit={handleSubmit(handleSignUp)}>
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
                {error && <p className="text-red-600">{error}</p>}
                {success && <p className="text-green-600">{success}</p>}
                <div className="form-control mt-6">
                  <input
                    className="primary-btn py-2 cursor-pointer"
                    type="submit"
                    value="SignUp"
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
