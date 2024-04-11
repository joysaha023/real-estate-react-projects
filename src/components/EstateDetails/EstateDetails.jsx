import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const { id } = useParams();
  const estates = useLoaderData();
  const estate = estates.find((item) => item.id == id);
  const { estate_title, image } = estate;
  return (
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <title>HavenHQ - Property Details</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl uppercase ">Property Details</h2>
      <div className="card my-5 w-full rounded-none bg-base-100 shadow-none border">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
