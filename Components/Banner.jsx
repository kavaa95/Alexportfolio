import React from "react";
import { Parallax } from "react-parallax";

function Banner() {
  return (
    <div className="parallax-banner">
      <div className=" h-[20vh]  bg-[url('../public/wave-haikei2.svg')] bg-cover w-full bg-center ">
        <div className="">
          <div className="h-[20vh] flex justify-center items-center  font-bold ">
            {/* <p className="text-5xl md:text-8xl text-white ">ABOUT ME</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
