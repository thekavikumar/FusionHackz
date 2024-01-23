"use client";
import React from "react";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import rocket from "../assets/rocket.png";
import cloud1 from "../assets/cloud1.png";
import cloud3 from "../assets/cloud2.png";
import para from "../assets/para.png";
import Image from "next/image";
import devfolio from "../assets/devfolio.png";
import polygon from "../assets/polygon.png";
import replit from "../assets/replit.png";
import Link from "next/link";

function Homepage() {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  // upto
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const targetDate = new Date("2024-01-29T00:00:00"); // Set your target date and time here
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      // Countdown has reached zero
      return { hours: 0, minutes: 0, seconds: 0 };
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(difference / (1000 * 60 * 60) - days * 24);
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }
  return (
    <div
      suppressHydrationWarning
      className=" h-screen flex justify-center items-center md:px-10 px-4"
    >
      <Navbar />

      <div suppressHydrationWarning className="text-center max-w-6xl z-10">
        <div className="mb-14">
          <h1 className="text-5xl md:text-7xl font-black headline mb-3 tracking-wider">
            Unleash the Fusion of Tech Brilliance
          </h1>
          <h2 className="text-lg md:text-2xl max-w-3xl mx-auto font-medium">
            Experience the fusion of tech brilliance at FusionHackZ - where
            innovation meets excellence in every line of code!
          </h2>
        </div>
        <div
          suppressHydrationWarning
          className="md:flex items-center gap-4 mx-auto justify-center"
        >
          <h1
            suppressHydrationWarning
            className="text-2xl font-semibold tracking-wide"
          >
            Event Starts in:
          </h1>
          <h1
            suppressHydrationWarning
            className="text-xl md:text-3xl tracking-wide font-bold"
            id="counter"
          >
            {timeRemaining.days}
            <span className="text-lg font-semibold">Days</span> :{" "}
            {timeRemaining.hours}
            <span className="text-lg font-semibold">hrs</span> :{" "}
            {timeRemaining.minutes}
            <span className="text-lg font-semibold">min</span> :{" "}
            {timeRemaining.seconds}
            <span className="text-lg font-semibold">sec</span>
          </h1>
        </div>
        <div className="flex items-center mt-6 mb-4 md:mb-0 justify-center">
          <div
            className="apply-button"
            data-hackathon-slug="fusionhackz"
            data-button-theme="dark"
            style={{ "height": "44px", "width": "312px" }}
          ></div>
        </div>
        <div className="flex items-center gap-3 md:gap-10 md:-mb-20 -mb-12 md:mt-10 justify-center">
          <Link href={"https://devfolio.co/"}>
            <Image
              src={devfolio}
              alt="DEVFOLIO LOGO"
              className="md:h-[64px] h-[40px] w-[200px] md:w-[300px]"
            />
          </Link>
          <Link href={"https://polygon.technology/"}>
            <Image
              src={polygon}
              alt="POLYGON LOGO"
              className="md:h-[64px] md:w-[300px] h-[40px] w-[200px]"
            />
          </Link>
          <Link href={"https://replit.com/"}>
            <Image
              src={replit}
              alt="REPLIT LOGO"
              className="md:h-[64px] md:w-[270px] h-[40px] w-[200px]"
            />
          </Link>
        </div>
      </div>
      <Image
        src={rocket}
        alt=""
        className="absolute md:inline hidden w-[350px] md:right-3 -right-[130px]"
      />
      <marquee
        behavior=""
        direction="right"
        className="absolute left-3 bottom-[180px] "
      >
        <Image src={cloud1} alt="" className="w-[350px] " />
      </marquee>
      <marquee
        behavior=""
        direction="left"
        className="absolute right-3 top-[180px] "
      >
        <Image src={cloud3} alt="" className=" w-[350px] " />
      </marquee>
      <marquee
        behavior=""
        direction="down"
        className="absolute md:left-3 -left-[110px] top-[0px] h-screen "
      >
        <Image src={para} alt="" className=" w-[350px] " />
      </marquee>
    </div>
  );
}

export default Homepage;
