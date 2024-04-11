import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import AgentsCard from "./AgentsCard";

const Agents = () => {
  const agents = useLoaderData();
  // console.log(agents)
  return (
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <title>HavenHQ - Agents</title>
      </Helmet>
      <div className="mt-2 md:mt-4 ">
        <h1 className="text-center font-bold text-3xl uppercase">
          Meet Our <span className="text-[#0077be]">Agents</span>
        </h1>
        <p className="w-3/4 mx-auto text-sm md:text-base font-normal mt-3 md:mt-5 text-center">
          Meet and contact our popular agents and talk to then about real estate
          and know about how to book and buy or rent. please also try only email
          and phone number and talk to them.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {agents.map((item) => (
          <AgentsCard key={item} item={item}></AgentsCard>
        ))}
      </div>
    </div>
  );
};

export default Agents;
