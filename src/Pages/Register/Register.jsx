import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()



    return (
        <div className="flex flex-col items-center">
        <form className="card-body lg:w-[30%] border">
          <h2 className="text-center text-2xl md:text-3xl font-bold">Register</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered rounded-none"
              required
            />
          </div>
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
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
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
            
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#0077be] text-white hover:text-black rounded-none ">Register</button>
          </div>
          <h2 className="text-center mt-2 font-medium">Already have an account? <Link to={'/register'} className="text-[#0077be] underline">Login</Link></h2>
        </form>
      </div>
    );
};

export default Register;