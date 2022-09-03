import React from "react";
import { Parallax } from "react-parallax";
import Hero from "./Hero";
import Image from "next/image";
import bigImg from "../public/wave-haikei.svg";
function Banner({
  title = "the title",
  subtitle = "the subtitle",
  bgImage,
  height,
}) {
  return (
    <div className="parallax-banner">
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage="url('../public/wave-haikei.svg')"
        strength={300}
      >
        <div className=" h-[20vh]  bg-[url('../public/wave-haikei2.svg')] bg-cover w-full bg-center ">
          <div className="">
            <div className="h-[20vh] md:h-[25vh] flex justify-center items-center  font-bold ">
              <p className="text-5xl md:text-8xl text-white ">ABOUT ME</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Banner;
