"use client";
import React from "react";
import logo from "../assets/fhzrounded.png";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex justify-between  py-5 px-5 md:px-[50px] lg:px-[100px] z-[500] items-center absolute top-0 w-screen">
      {/* <img src={logo} alt="logo" className="h-12" /> */}
      <Image src={logo} alt="logo" height={50} />
      <ul className="lg:flex text-xl font-medium justify-between gap-14 items-center hidden">
        {/* <l1 className="hover:border-b-4 cursor-pointer duration-200 ease-in-out rounded-sm border-black">
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
        </li> */}
        <Link
          href={"https://fusionhackz.devfolio.co/"}
          className="bg-black border-2 border-black px-3 py-2 rounded-md text-white hover:bg-transparent text-xl font-bold hover:text-black transition-all duration-100 ease-in-out"
        >
          Apply Now!
        </Link>
      </ul>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`w-7 h-7 cursor-pointer lg:hidden ${open && `hidden`}`}
        onClick={() => setOpen(!open)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`w-7 h-7 cursor-pointer lg:hidden ${!open && `hidden`}`}
        onClick={() => setOpen(!open)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>

      {open && (
        <div className="py-8 w-screen absolute top-[90px] right-0 z-[600] bg-white rounded-sm">
          <ul className="flex flex-col justify-center items-center gap-6 text-xl">
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
            <Link
              href={"https://fusionhackz.devfolio.co/"}
              className="bg-black border-2 border-black px-3 py-2 rounded-md text-white hover:bg-transparent text-xl font-bold hover:text-black transition-all duration-100 ease-in-out"
            >
              Apply Now!
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
