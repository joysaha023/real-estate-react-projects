import React from "react";
import useEstateData from "../../Hooks/useEstateData";
import EstateCard from "../../components/EstateCard/EstateCard";

const EstateSection = () => {
  const { estates } = useEstateData();

  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mt-8 md:mt-16 ">
        <h1 className="text-center font-bold text-3xl uppercase">
          Residential <span className="text-[#0077be]">Estate</span>
        </h1>
        <p className="w-3/4 mx-auto text-sm md:text-base font-normal mt-3 md:mt-5 text-center">
          Welcome to the Residential Estate section at HavenHQ, where your dream
          of home finds its perfect match. Nestled amidst serene landscapes and
          thoughtfully designed neighborhoods, our residential estates offer a
          harmonious blend of luxury, comfort, and community.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-16 lg:grid-cols-3 px-2 gap-6">
        {
            estates.map(estate => <EstateCard key={estate.id} estate={estate}></EstateCard>)
        }
      </div>
    </div>
  );
};

export default EstateSection;
