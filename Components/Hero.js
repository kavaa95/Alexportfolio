import React, { useState, useEffect } from "react";
import GiftComponents from "./GiftComponents";
import Fade from "react-reveal/Fade";
import Sparkles from "react-sparkle";
function Hero() {
  const [windowWidth, setWindowWidth] = useState(null);
  const [imgSize, setimgSize] = useState(200);
  const [show, setShow] = useState("hidden");

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("here");
      handleResize();
    }
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth <= 754) {
      setimgSize(200);
    } else if (window.innerWidth > 754 && window.innerWidth <= 1000) {
      setimgSize(450);
    } else if (window.innerWidth >= 1000) {
      setimgSize(700);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  setTimeout(() => {
    setShow("");
    console.log("you can see me after 2 seconds");
  }, 100);

  return (
    <div className="relative text-white bg-black">
      <div className="w-[90%]">
        <Sparkles
          width="100%"
          color="white"
          count={30}
          minSize={2}
          maxSize={10}
          overflowPx={50}
          fadeOutSpeed={10}
          flicker={false}
        />

        <div className="h-[40vh]  md:h-screen w-full bg-black">
          <div className={`grid items-center  md:h-screen ${show}`}>
            <Fade top>
              <GiftComponents
                src="https://giphy.com/embed/3o7WIB00yXujVt4WEo"
                width={`${imgSize} px`}
                height={`${imgSize} px`}
              />
            </Fade>
          </div>
        </div>
        <div className="absolute top-[30%]  right-[2%] flex flex-col place-items-center  text-[6vw] font-bold">
          <div className="flex gap-6">
            <Fade bottom>
              <h1>Hello </h1>
              <Fade bottom delay={200}>
                <h1>
                  I am <span className="text-[#ea0f1e]">Alex</span>,
                </h1>
              </Fade>
            </Fade>
          </div>
          <Fade bottom delay={500}>
            <h1>Welcome to my world.</h1>
          </Fade>
          <Fade bottom big delay={600}>
            <p className="text-[1vw] mt-8 tracking-widest">
              Full Stack software Engineer
            </p>
          </Fade>
        </div>
        <div className="absolute top-[2%]  right-[2%] flex flex-col place-items-center h-screen text-[2vw] md:text-[1vw] font-bold">
          <div className="flex gap-4 ">
            <Fade bottom delay={500}>
              <span class="w-full p-0.5 bg-red-600 "></span>
              <h1>Porfolio</h1>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
