import React from "react";

const HashTag = ({item}) => {
  return (
    <div>
      <div className=" mb-2">
        <button className="btn-sm bg-blue-100 text-base font-medium border-0 text-[#0077be] rounded-full">
          
          {item}
        </button>
      </div>
    </div>
  );
};

export default HashTag;
