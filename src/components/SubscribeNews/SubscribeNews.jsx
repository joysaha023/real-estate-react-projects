import React from "react";

const SubscribeNews = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mt-8 md:mt-16 ">
        <h1 className="text-center font-bold text-3xl uppercase">
          Subscribe to our <span className="text-[#0077be]">Newsletter</span>
        </h1>
        <p className="w-3/4 mx-auto text-sm md:text-base font-normal mt-3 md:mt-5 text-center">
          For Latest news you can subscribe our news latter section. and get a
          latest and special new estate news. Please write your email and and
          get a subscription.
        </p>
        <label className="input input-bordered flex items-center w-2/5 text-center  gap-2">
          <input type="text" className="grow " placeholder="Search" />
          <button className="">Optional</button>
        </label>
      </div>
    </div>
  );
};

export default SubscribeNews;
