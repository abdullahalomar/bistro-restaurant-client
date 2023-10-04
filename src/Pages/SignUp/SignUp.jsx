import { Link, useNavigate } from "react-router-dom";
import signInImg from "../../assets/login/login.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };

          fetch("http://localhost:5000/users", {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            })
          // fetch("http://localhost:5000/users", {
          //   method: "POST",
          //   headers: {
          //     "content-type": "application/json",
          //   },
          //   body: JSON.stringify(saveUser),
          // })
          //   .then((res) => res.json())
          //   .then(data => {
          //     if (data.insertedId) {
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Restaurant | Sign Up</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <img src={signInImg} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <p className="text-center text-2xl font-bold mt-4">Sign up</p>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-600">Photo URL is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 5,
                      maxLength: 10,
                      pattern: /[a-zA-Z0-9]/,
                    })}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <span className="text-red-600">
                      password is required must be 5 characters
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p role="alert" className="text-red-600">
                      password must be 5 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p role="alert" className="text-red-600">
                      password must be less that 10 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p role="alert" className="text-red-600">
                      password must have uppercase, lowercase and number
                    </p>
                  )}
                </div>
                <div className="form-control mt-4">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Signup"
                  />
                </div>
              </form>
              <div className="mx-auto mb-2">
                <p>
                  <small>Already registered?</small>{" "}
                  <Link to="/login" className="text-orange-500">
                    Go to login
                  </Link>
                </p>
              </div>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
