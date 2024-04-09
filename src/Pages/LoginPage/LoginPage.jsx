import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center">
      <form className="card-body lg:w-[30%] border">
        <h2 className="text-center text-2xl md:text-3xl font-bold">Login</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered rounded-none"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered rounded-none"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#0077be] text-white hover:text-black rounded-none ">Login</button>
        </div>
        <h2 className="text-center mt-2 font-medium">Not a Member Yet? <Link to={'/register'} className="text-[#0077be] underline">Register Now</Link></h2>
        <p className="text-center mt-2 font-medium">Or Login with</p>
        <div className="flex justify-between">
            <button className="flex items-center gap-1 text-[#0077be] btn btn-sm rounded-none"><FaGoogle />Google</button>
            <button className="flex items-center gap-1 text-[#0077be] btn btn-sm rounded-none"><FaGithub />Github</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
