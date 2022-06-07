import React from "react";

import ic1 from "../../img/ic11.webp";
import ic2 from "../../img/ic12.webp";
import ic3 from "../../img/ic13.webp";

function Fetures() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-10 ">
        <div className="title text-center p-10  font-samibold">
          <h3 className="text-[40px] ">WHAT MAKES THE ESSENTIAL DIFFERENT?</h3>
          <h6 className="text-[20px] p-2 tracking-[.25em]  font-medium ">
            EXPERIENCE HIGH PERFORMANCE AND SECURE
          </h6>
        </div>
        <div className="features p-10 flex justify-around items-center flex-wrap   text-center">
          <div className="card-1 p-5 flex flex-col  items-center ">
            <div className="card-top">
              <img src={ic3} className="pb-8 cursor-pointer" alt="this is icon   " />
              <h5 className="text-[15px] font-bold">PERFECT CUT</h5>
              <h5 className="text-[18px] font-bold">DUAL CAMERA</h5>
            </div>

            <div className="card-des pt-2 text-[17px]">
              <p>
                Tristique senectus et netus et <br /> malesuada ant reiet fames.
              </p>
            </div>
          </div>



          <div className="card-2 p-5 flex flex-col  items-center ">
            
            <div className="card-top">
              <img src={ic2} className="pb-8 inline  cursor-pointer" alt="this is icon   " />
              <h5 className="text-[15px] font-bold">PRETTY</h5>
              <h5 className="text-[18px] font-bold">INTELLIGENT PROCESSING</h5>
            </div>

            <div className="card-des pt-2 text-[17px]">
              <p>
                Dictum varius duis at consectetur <br /> lorem donec massa sap
                faucibus.
              </p>
            </div>
          </div>




          <div className="card-3 p-5 flex flex-col  items-center ">
            <div className="card-top">
              <img src={ic1} className="pb-8  cursor-pointer" alt="this is icon   " />
              <h5 className="text-[15px] font-bold">MOST POPULAR</h5>
              <h5 className="text-[18px] font-bold">8GB DDR5 RAM</h5>
            </div>

            <div className="card-des pt-2 text-[17px]">
              <p>
                Dictum varius duis at consectetur <br /> lorem donec massa sap
                faucibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fetures;
