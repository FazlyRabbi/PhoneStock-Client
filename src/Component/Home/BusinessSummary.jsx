import React from "react";
import { FiFlag } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FiSmile } from "react-icons/fi";
import { FiStar } from "react-icons/fi";

function BusinessSummary() {
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="uppercase text-center text-[30px] font-bold">
          millions people's trust us
        </h1>
        <h3 className="uppercase text-center text-[15px] text-neutral">
          try to understand user expectation
        </h3>
        <div className="flex flex-wrap  items-center justify-around mt-12">
          <div className="flex flex-col p-10  items-center ">
            <FiFlag className="text-[40px]" />
            <p className="text-center mt-4 text-[20px]">
              <span className="text-[30px] font-bold text-green-500">72</span>{" "}
              <br />
              <span>Countries</span>
            </p>
          </div>
         
          <div className="flex flex-col p-10  items-center ">
            <FiSmile className="text-[40px]" />
            <p className="text-center mt-4 text-[20px]">
              <span className="text-[30px] font-bold text-accent text-green-500">
                357+
              </span>{" "}
              <br />
              <span>Happy Clients</span>
            </p>
          </div>
          <div className="flex flex-col p-10  items-center ">
            <FiStar className="text-[40px]" />
            <p className="text-center mt-4 text-[20px]">
              <span className="text-[30px] font-bold text-accent text-green-500">
                530+
              </span>{" "}
              <br />
              <span>FeedBack</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessSummary;
