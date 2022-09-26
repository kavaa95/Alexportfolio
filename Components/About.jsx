import React from "react";
import bgImg from "../public/alexPortfolio.png";
import Image from "next/image";
function About() {
  return (
    <section className=" bg-gray-800 text-gray-100  bg-[#191919]">
      <div className=" grid    lg:grid-cols-2   ">
        <div className="grid p-[6vw]">
          <Image
            src={bgImg}
            alt="Alex Profile Image"
            className="object-contain    "
          />
        </div>
        <div className="w-full py-[4%] px-12 md:px-16   flex flex-col justify-center items-center text-justify">
          <h1 className="text-5xl font-extrabold dark:text-gray-50 lg:text-7xl ">
            About
          </h1>
          <span className="block mb-2 pt-[5%] text-[#f9004d] lg:text-2xl">
            Full Stack Software engineer
          </span>
          <p className="my-5 lg:text-2xl ">
            Hi, I am <span className="text-[#ea0f1e]">Alex Kavanagh</span>, I
            was drawn to Math since my childhood. I enjoyed the process of being
            presented with an unsolved problem and working my way to a solution.
            In a lot of ways, technology is a lot like Math, that’s why I chose
            to pursue a career in the tech field. I have a thirst for knowledge
            and want to keep learning as my priority even as I progress in my
            career.
          </p>

          <p className="my-5 lg:text-2xl ">
            Fueled by high energy levels and boundless enthusiasm, I’m easily
            inspired and more then willing to follow my fascinations wherever
            they take me. I’m passionate, expressive, multi-talented spirit with
            a natural ability to entertain and inspire. I’m never satisfied to
            just come up with ideas. Instead I have an almost impulsive need to
            act on them.
          </p>
          <p className="my-5 lg:text-2xl ">
            My abundant energy fuels me in the pursuit of many interests,
            hobbies, areas of study and artistic endeavors. I’m a fast learner,
            able to pick up new skills and juggle different projects and roles
            with relative ease.
          </p>
        </div>
      </div>
    </section>
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
