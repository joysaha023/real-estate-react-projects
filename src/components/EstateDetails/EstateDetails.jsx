import React from "react";
import { Helmet } from "react-helmet-async";
import { CiLocationOn } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router-dom";
import HashTag from "../HashTag/HashTag";

const EstateDetails = () => {
  const { id } = useParams();
  const estates = useLoaderData();
  const estate = estates.find((item) => item.id == id);
  const { estate_title, image, segment_name, description, price, Status, Area, location, facilities } = estate;
  return (
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <title>HavenHQ - Property Details</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl uppercase">Property Details</h2>
      <div className="card my-5 w-full rounded-none bg-base-100 shadow-none border ">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <p>{description}</p>
          <p>{segment_name}</p>
          <p className="flex items-center gap-1"><CiLocationOn /> {location}</p>
          <p className="flex items-center gap-1">Area: {Area}</p>
          <div className="">
            <h2>Facilities:</h2>
            {
              estate.facilities.map(item => <HashTag key={item.id} item={item}></HashTag>)
            }
          </div>
          <p>Status: For {Status}</p>
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-[#0077be] text-white hover:text-black rounded-none">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
