import React from "react";

const AgentsCard = ({ item }) => {
  const { name, email, phone, address, license, image } = item;
  return (
    <div className="card md:card-side bg-base-100 border rounded-none">
      <figure className="p-4">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <span>Phone: {phone}</span>
        <span>License: {license}</span>
        <span>Address: {address}</span>
        <span>Email: {email}</span>
        
      </div>
    </div>
  );
};

export default AgentsCard;
