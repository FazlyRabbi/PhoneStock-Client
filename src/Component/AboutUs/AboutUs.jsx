import React from "react";
import Navbar from "../Shared/Navbar"
import mypic from "../../img/mypic.jpg";

function AboutUs() {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto flex  flex-col items-center   ">
        <img
          src={mypic}
          alt=""
          className="object-center mt-20 h-[600px] w-[500px]  "
        />

        <div className="text-center">
          <p className="font-bold mt-12 text-[20px]">
            My goal is to be a full Stack web-developer but my present focus on
            frontend development. After finishing my frontend jurney i search
            fro job.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
