import React from "react";
import { useLoaderData } from "react-router-dom";
import SpecialEstateCard from "./SpecialEstateCard";

const SpecialEstate = () => {
  const specialData = useLoaderData();
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mt-8 md:mt-16 ">
        <h1 className="text-center font-bold text-3xl uppercase">
          Special <span className="text-[#0077be]">Estate</span>
        </h1>
        <p className="w-3/4 mx-auto text-sm md:text-base font-normal mt-3 md:mt-5 text-center">
          This section is some special estate for our customer. who can choice and explore more features and get various estate and find a happiness. from here explore and choice more estate here.
        </p>
      </div>
      <div className=" grid grid-cols-1 mt-8 px-2 md:mt-16 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialData.map((item) => (
          <SpecialEstateCard key={item.id} item={item}></SpecialEstateCard>
        ))}
      </div>
    </div>
  );
};

export default SpecialEstate;
