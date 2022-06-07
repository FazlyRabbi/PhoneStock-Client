import React from "react";
import Navbar from "../Shared/Navbar";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { useForm } from "react-hook-form";
import { auth } from "../../firebase.init";
import { Link, useNavigate, useLocation } from "react-router-dom";

import useToken from "../../hooks/useToken";

function Login() {
  const [signInWithEmailAndPassword, User, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, GLoading, GError] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const [token] = useToken(User || gUser);

  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }

  let signInError;

  if (loading || GLoading) {
    return <button class="btn btn-square loading align-middle"></button>;
  }

  if (error || GError) {
    signInError = (
      <p className="text-red-600">
        {" "}
        <small>{error?.message || GError?.message}</small>{" "}
      </p>
    );
  }

  return (
    <>
      <Navbar />
      <section className="h-screen container mx-auto">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email input */}
                <div className="mb-6">
                  <input
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                    })}
                  />

                  <label>
                    {errors.email?.type === "required" && (
                      <span className="text-red-500">
                        {errors.email.message}
                      </span>
                    )}

                    {errors.email?.type === "pattern" && (
                      <span className="text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      minLength: {
                        value: 8,
                        message: "Password must be 8 characters of longer",
                      },
                    })}
                  />
                  <label>
                    {errors.password?.type === "required" && (
                      <span className="text-red-500">
                        {errors.password.message}
                      </span>
                    )}

                    {errors.password?.type === "minLength" && (
                      <span className="text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="flex justsify-between items-center mb-6">
                  <div className="form-group form-check">
                    <p className="text-red-500">
                      New to Doctors Portal?{" "}
                      <Link to="/signup" className="text-primary">
                        SignUp
                      </Link>
                    </p>
                  </div>
                </div>
                {/* Submit button */}
                {signInError}
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-accent text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  LogIn
                </button>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
                <a
                  className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                  style={{ backgroundColor: "#ffff", color: "black" }}
                  href="#!"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={() => {
                    signInWithGoogle();
                  }}
                >
                  {/* Facebook */}
                  <svg
                    className="mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="30px"
                    height="30px"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                  Continue with Google
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
