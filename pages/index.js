import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Contact from "../Components/contact";
import Hero from "../Components/Hero";
import { Parallax } from "react-parallax";
import About from "../Components/About";
import Banner from "../Components/Banner";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
const image =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      {/* <Banner gImage={image} height={400} /> */}
      {/* <Education /> */}
      <Experience />
      {/* <Contact /> */}
    </div>
  );
}
