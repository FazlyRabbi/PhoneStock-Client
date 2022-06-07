import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";

import { auth } from "../../firebase.init";
import useToken from "../../hooks/useToken";

function SignUp() {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [updateProfile, updating, upError] = useUpdateProfile(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [token] = useToken(user || gUser);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.fullname });
  };

  let signUpError;

  if (error || upError) {
    signUpError = (
      <p className="text-red-600">
        {" "}
        <small>{error?.message || upError?.message}</small>{" "}
      </p>
    );
  }

  if (token) {
    navigate("/");
  }

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
              {...register("fullname", {
                required: {
                  value: true,
                  message: "FirstName is Required",
                },
              })}
            />
            <label>
              {errors.fullname?.type === "required" && (
                <span className="text-red-500">{errors.fullname.message}</span>
              )}
            </label>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
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
                <span className="text-red-500">{errors.email.message}</span>
              )}

              {errors.email?.type === "pattern" && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </label>

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
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
                <span className="text-red-500">{errors.password.message}</span>
              )}

              {errors.password?.type === "minLength" && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </label>
            {signUpError}
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-accent text-white  hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
          </form>
          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link
            to="/login"
            className="no-underline border-b text-red-400 border-blue text-blue"
          >
            Log in
          </Link>
        </div>
        <div className="divider">OR</div>
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
      </div>
    </div>
  );
}

export default SignUp;
