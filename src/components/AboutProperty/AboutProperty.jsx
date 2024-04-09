import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { BsBuildingGear } from "react-icons/bs";
import { FaBath, FaGlassMartini } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";

const AboutProperty = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mt-8 md:mt-16 ">
        <h1 className="text-center font-bold text-3xl uppercase">
          About <span className="text-[#0077be]">Property</span>
        </h1>
        <p className="w-3/4 mx-auto text-sm md:text-base font-normal mt-3 md:mt-5 text-center">
          At HavenHQ, we're not just selling properties; we're curating
          experiences and crafting lifestyles. Our property section is a
          collection of what you get and what fecilities we provide, thats where
          you can get a idea about our property.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
        <div className="border text-center p-5">
          <div className="flex justify-center">
            <IoBedOutline className="text-6xl text-[#0077be]" />
          </div>
          <h2 className="my-2 font-bold text-xl uppercase">Bedrooms</h2>
          <span className=" font-bold text-2xl">3</span>
        </div>
        <div className="border  text-center p-5">
          <div className="flex justify-center">
            <BsBuildingGear className="text-6xl text-[#0077be]" />
          </div>
          <h2 className="my-2 font-bold text-xl uppercase">Square Feet</h2>
          <p className=" font-bold text-2xl">2540</p>
        </div>
        <div className="border  text-center p-5">
          <div className="flex justify-center">
            <FaBath className="text-6xl text-[#0077be]" />
          </div>
          <h2 className="my-2 font-bold text-xl uppercase">Baths</h2>
          <p className=" font-bold text-2xl">2</p>
        </div>
        <div className="border text-center p-5">
          <div className="flex justify-center">
            <CiCalendarDate className="text-6xl text-[#0077be]" />
          </div>
          <h2 className="my-2 font-bold text-xl uppercase">Year Build</h2>
          <p className=" font-bold text-2xl">2012</p>
        </div>
        <div className="border  text-center p-5">
          <div className="flex justify-center">
            <FaGlassMartini className="text-6xl text-[#0077be]" />
          </div>
          <h2 className="my-2 font-bold text-xl uppercase">Car Parking</h2>
          <p className=" font-bold text-2xl">5</p>
        </div>
       
      </div>
    </div>
  );
};

export default AboutProperty;
