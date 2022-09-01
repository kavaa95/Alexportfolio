import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Contact from "../Components/contact";
import Hero from "../Components/Hero";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <Contact />
    </div>
  );
}
