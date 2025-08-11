import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-black px-4">
      <div className="mx-auto w-full max-w-md bg-gray-900/60 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-purple-800/40">
        <div className="mb-4 flex justify-center">
          <span className="w-24">
            <Logo width="100%" />
          </span>
        </div>

        <h2 className="text-center text-2xl font-bold leading-tight text-white">
          Sign in to your account
        </h2>

        <p className="mt-2 text-center text-sm text-gray-400">
          Don&apos;t have an account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-purple-400 hover:text-purple-300 transition"
          >
            Sign Up
          </Link>
        </p>

        {error && (
          <p className="text-red-500 mt-6 text-center font-medium">{error}</p>
        )}

        <form onSubmit={handleSubmit(login)} className="mt-8 space-y-6">
          <Input
            label="Email:"
            placeholder="Enter your email"
            type="email"
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Email address must be valid",
              },
            })}
          />
          <Input
            label="Password:"
            placeholder="Enter your password"
            type="password"
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
            {...register("password", {
              required: "Password is required",
            })}
          />

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
