import React from "react";
import { Parallax } from "react-parallax";
import Hero from "./Hero";
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
        bgImage="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/SUNY_Farmingdale_seal.svg/1200px-SUNY_Farmingdale_seal.svg.png"
        strength={300}
      >
        <div className=" h-[100vh] ">
          <div className="container">
            <div className="row banner-text text-red-500">
              {/* {title && (
                <div className="col-xs-12 text-center">
                  <p className="title">{title}</p>
                  {subtitle && <p className="subtitle">{subtitle}</p>}
                </div>
              )} */}
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Banner;
