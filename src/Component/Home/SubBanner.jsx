import React from "react";

import sub1 from "../../img/sub1.webp";
import sub2 from "../../img/sub2.jpg";
import sub3 from "../../img/sub3.webp";
import sub4 from "../../img/sub4.jpg";

function SubBanner() {
  return (
    <div className="container mx-auto mb-16 mt-16">
      <div className="flex justify-center flex-wrap ">
        <div>
          <img
            src={sub4}
            alt="img"
            className="mx-w-sm   lg:h-[460px]  sm:h-[300px] p-[10px]"
          />
        </div>

        <div>
          <img
            src={sub3}
            alt="img"
            className="p-[10px] lg:h-[230px] sm:h-[150px]  "
          />
          <img
            src={sub2}
            alt="img"
            className="p-[10px] lg:h-[230px] sm:h-[150px] "
          />
        </div>
      </div>
    </div>
  );
}

export default SubBanner;
