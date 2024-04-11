import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="max-w-6xl mx-auto ">
      <div className="flex flex-col items-center my-16">
        <img className="rounded-full"
          src={user?.photoURL || "https://i.ibb.co/6JyZF0K/user.png"}
          alt="pic"
        />
        <h2 className="mt-10 font-medium text-4xl">{user?.displayName}</h2>
      </div>
    </div>
  );
};

export default Profile;
