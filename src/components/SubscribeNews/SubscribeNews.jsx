import React from "react";

const SubscribeNews = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mt-8 md:mt-16 px-2">
        <h1 className="text-center font-bold text-3xl uppercase">
          Subscribe to our <span className="text-[#0077be]">Newsletter</span>
        </h1>
        <p className="w-3/4 mx-auto text-sm md:text-base font-normal mt-3 md:mt-5 text-center">
          For Latest news you can subscribe our news latter section. and get a
          latest and special new estate news. Please write your email and and
          get a subscription.
        </p>
        <label className="flex flex-col md:flex-row items-center mt-8 w-full md:w-2/5 mx-auto gap-2">
        <input type="text" placeholder="write email here" className="input input-bordered rounded-none  w-full max-w-xs" />
          <button className="btn rounded-none text-white hover:text-black bg-[#0077be]">Subscribe</button>
        </label>
      </div>
    </div>
  );
};

export default SubscribeNews;
