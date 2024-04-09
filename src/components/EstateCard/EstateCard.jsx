import React from "react";
import { CiLocationOn } from "react-icons/ci";

const EstateCard = ({ estate }) => {
  const { estate_title, price, Status, location, Area } = estate;
  return (
    <div>
      <div className="card w-full bg-base-100 rounded-none border shadow-none">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center">
            <p className="text-[#0077be] font-medium">{price}</p>
            <button className="btn rounded-none btn-sm">For {Status}</button>
          </div>
          <h2 className="card-title">{estate_title}</h2>
          <p className="flex items-center gap-1"><CiLocationOn /> {location}</p>
          <p className="flex items-center gap-1">Area: {Area}</p>
          <div className="card-actions justify-end">
            <button className="btn rounded-none btn-md bg-[#0077be] text-white hover:text-black">View Property</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
