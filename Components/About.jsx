import React from "react";
// import Image from "next/image";
import bgImg from "../public/aleximg.png";
import GiftComponents from "./GiftComponents";
import Image from "next/image";
function About() {
  return (
    <div className="">
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-t from-transparent to-black">
        <div className=" grid lg:place-items-center    ">
          <div className=" grid h-[25vh] md:h-[50vh] lg:h-screen lg:w-full ">
            <Image src={bgImg} className=" object-contain lg:object-cover " />
          </div>
        </div>
        <div className="lg:h-screen grid gap-10 text-white  ">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900 ">
            <span className="block mb-2 dark:text-violet-400 text-2">
              Full Stack Software engineer
            </span>
            <h1 className="text-5xl md:text-8xl font-extrabold dark:text-gray-50">
              About Me
            </h1>
            <p className="my-8 text-1xl md:text-2xl dark:text-white font-medium text-justify">
              I don't like to define myself by the work I've done. I define
              myself by the work I want to do. Skills can be taught, personality
              is inherent. I prefer to keep learning, continue challenging
              myself, and do interesting things that matter.
            </p>
            <p className="my-8 text-1xl md:text-2xl dark:text-white font-medium text-justify">
              Fueled by high energy levels and boundless enthusiasm, I’m easily
              inspired and more then willing to follow my fascinations wherever
              they take me. I’m passionate, expressive, multi-talented spirit
              with a natural ability to entertain and inspire. I’m never
              satisfied to just come up with ideas. Instead I have an almost
              impulsive need to act on them.
            </p>{" "}
          </div>
        </div>
      </div> */}

      <section className="p-6 bg-gray-800 text-gray-100  bg-[#191919]">
        <div className="container grid gap-6 mx-auto text-center  lg:grid-cols-2   ">
          <Image
            src={bgImg}
            alt=""
            className="object-contain lg:object-cover w-full rounded-md  bg-black"
          />
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16  lg:h-screen  ">
            <span className="block mb-2 text-[#f9004d] lg:text-2xl">
              Full Stack Software engineer
            </span>
            <h1 className="text-5xl font-extrabold dark:text-gray-50 lg:text-8xl ">
              About Me
            </h1>
            <p className="my-8 lg:text-1xl lg:text-justify">
              I don't like to define myself by the work I've done. I define
              myself by the work I want to do. Skills can be taught, personality
              is inherent. I prefer to keep learning, continue challenging
              myself, and do interesting things that matter.
            </p>
            <p className="my-8 lg:text-1xl lg:text-justify">
              Fueled by high energy levels and boundless enthusiasm, I’m easily
              inspired and more then willing to follow my fascinations wherever
              they take me. I’m passionate, expressive, multi-talented spirit
              with a natural ability to entertain and inspire. I’m never
              satisfied to just come up with ideas. Instead I have an almost
              impulsive need to act on them.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

{
  /* <section class="text-gray-600 body-font bg-white">
<div class="container mx-auto flex px-5 h-screen md:flex-row flex-col items-center">
  <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Before they sold out
      <br class="hidden lg:inline-block" />
      readymade gluten
    </h1>
    <p class="mb-8 leading-relaxed">
      Copper mug try-hard pitchfork pour-over freegan heirloom neutra
      air plant cold-pressed tacos poke beard tote bag. Heirloom echo
      park mlkshk tote bag selvage hot chicken authentic tumeric
      truffaut hexagon try-hard chambray.
    </p>
    <div class="flex justify-center">
      <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Button
      </button>
      <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
        Button
      </button>
    </div>
  </div>
  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 bg-[url('/img/hero-pattern.svg')]">
    {/* <Image src={bgImg} /> */
}
//   </div>
// </div>
{
  /* <Image alt="hero" src={bgImg} />
<GiftComponents
  src="https://giphy.com/embed/SiEIl8kjIMrKzhMkem"
  // width="480px"
  // height="270px"
/> */
}
// </section> */}
