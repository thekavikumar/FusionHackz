"use client";
import React from "react";
import logo from "../assets/fhzrounded.png";
import Image from "next/image";

function Navbar() {
  return (
    <div className="flex justify-around p-5 z-[500] items-center absolute top-0 w-full">
      {/* <img src={logo} alt="logo" className="h-12" /> */}
      <Image src={logo} alt="logo" height={50} />
      <ul className="flex text-xl font-medium justify-between gap-14 items-center">
        <l1 className="hover:border-b-4 cursor-pointer duration-200 ease-in-out rounded-sm border-black">
          Prizes
        </l1>
        <li className="hover:border-b-4 cursor-pointer duration-200 rounded-sm border-black">
          Sponsors
        </li>
        <li className="hover:border-b-4 cursor-pointer duration-200 rounded-sm border-black">
          Timeline
        </li>
        <li className="hover:border-b-4 cursor-pointer duration-200 rounded-sm border-black">
          FAQs
        </li>
      </ul>
      <button className="bg-black border-2 border-black px-3 py-2 rounded-md text-white hover:bg-transparent text-xl font-bold hover:text-black transition-all duration-100 ease-in-out">
        Apply Now!
      </button>
    </div>
  );
}

export default Navbar;
