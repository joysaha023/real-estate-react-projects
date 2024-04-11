import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {name, image} = data;
    updateUserProfile(name, image)
        .then(() => {
            navigate('/profile')
        })
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="">
        <div className="flex flex-col items-center ">
          <img
            className="rounded-full"
            src={user?.photoURL || "https://i.ibb.co/6JyZF0K/user.png"}
            alt="pic"
          />
          <h2 className="my-5 font-medium text-4xl">{user?.displayName}</h2>
        </div>
        <div className="flex flex-col items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:w-[30%] border">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered rounded-none"
                {...register("name", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered rounded-none"
                {...register("image", { required: true })}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#0077be] text-white hover:text-black rounded-none ">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
