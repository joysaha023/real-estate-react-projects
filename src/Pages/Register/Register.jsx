import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body lg:w-[30%] border"
      >
        <h2 className="text-center text-2xl md:text-3xl font-bold">Register</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            className="input input-bordered rounded-none"
            {...register("fullName", { required: true })}
          />
          {errors.fullName && (
            <span className="text-red-500 text-sm">write your name</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered rounded-none"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">Email is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="photo url"
            className="input input-bordered rounded-none"
            {...register("image")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <label className="input input-bordered rounded-none flex items-center gap-2">
            
          <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className=" "
              {...register("password")} />
            <span className="relative lg:-right-20  text-gray-600" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}</span>
          </label>
      
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#0077be] text-white hover:text-black rounded-none ">
            Register
          </button>
        </div>
        <h2 className="text-center mt-2 font-medium">
          Already have an account?{" "}
          <Link to={"/login"} className="text-[#0077be] underline">
            Login
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default Register;
