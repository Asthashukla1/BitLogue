import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-black px-4">
      <div className="mx-auto w-full max-w-md bg-gray-900/60 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-purple-800/40">
        <div className="mb-6 flex justify-center">
          <span className="w-24">
            <Logo width="100%" />
          </span>
        </div>

        <h2 className="text-center text-2xl font-bold leading-tight text-white">
          Sign up to create an account
        </h2>

        <p className="mt-2 text-center text-sm text-gray-400">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-purple-400 hover:text-purple-300 transition"
          >
            Sign In
          </Link>
        </p>

        {error && (
          <p className="text-red-500 mt-6 text-center font-medium">{error}</p>
        )}

        <form onSubmit={handleSubmit(create)} className="mt-8 space-y-6">
          <Input
            label="Full Name:"
            placeholder="Enter your full name"
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
            {...register("name", { required: "Full name is required" })}
          />
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
            type="password"
            placeholder="Enter your password"
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
            {...register("password", { required: "Password is required" })}
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
