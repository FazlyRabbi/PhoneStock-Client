import React from "react";

import bg from "../../img/banner.webp";

function Banner() {
  return (
    <>
      <div class=" " style={{ backgroundImage: `url(${bg})` }}>
        <div className="container mx-auto uppercase text-center text-white">
          <div className="text-wrapper  p-[180px]">
            <h3 className=" text-center lg:text-5xl sm:text-4xl mb-4 leading-snug font-medium uppercase">
              <span>zania black edition</span>
              <br />
            </h3>
            <span className="font-bold lg:text-8xl sm:text-6xl ">
              curvy bevel
              <br />
              dual audio
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
