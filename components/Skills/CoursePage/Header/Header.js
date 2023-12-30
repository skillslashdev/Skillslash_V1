import React from "react";
import Link from "next/link";
const Header = ({
  desc,
  deskTopPara,
  spanTitleText,
  title,
  spanTitle,
  desc1,
  desc2,
  hour,
  link,
  actualPrice,
  offerPrice,
  discount,
}) => {
  return (
    <div className="bg-[#F8F6FF] px-28 pt-32 pb-20 grid grid-cols-[55%,44%] gap-4 relative max-sm:px-5 max-sm:flex max-sm:flex-col max-sm:pt-24">
      <div className="flex flex-col gap-6 ">
        <div className="flex flex-col gap-2">
          <p className="bg-[#f18350] w-max px-4 py-1 rounded text-white font-bold text-lg">
            {deskTopPara}
          </p>
          <p className="font-medium">{spanTitleText}</p>
        </div>
        <h1 className="text-4xl font-bold text-black max-sm:text-2xl">
          {title}
          <span className="text-[black]">{spanTitle}</span>
        </h1>
        <p className="text-lg">
          {" "}
          {desc} <b>{desc1}</b> +<b>{desc2}</b>
        </p>
        {/* <h3 className="text-2xl font-bold text-[#f18350]">500K+ learners</h3> */}
        <div className="flex items-center gap-3">
          <Link href={link}>
            <button
              className="px-5 py-2 bg-transparent text-[#f18350]  rounded"
              style={{ border: "1px solid #f18350" }}
            >
              Start Learning
            </button>
          </Link>
          <div className="flex flex-col ">
            <p className="text-lg text-black font-medium"> {actualPrice}</p>
            <div className="flex gap-3 items-center">
              <p>
                <s> {offerPrice}</s>
              </p>
            </div>
          </div>
          <p className="bg-[#f9ac89] px-3 py-1 rounded text-black text-sm">
            {discount} OFF
          </p>
        </div>
      </div>
      <div></div>
      <div
        className="flex flex-col gap-3 rounded px-8 py-8 absolute bg-white right-28 top-28 max-sm:right-0 max-sm:top-[95%] max-sm:mt-2 max-sm:w-[90%] max-sm:mr-[20px] "
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      >
        <h3 className="text-2xl font-semibold flex flex-col  mb-4">
          Course Highlights
        </h3>

        <hr className="w-full text-[#646464]" />

        <div className="flex flex-col">
          <span className="text-lg font-semibold">Recorded Session</span>
          <p className="text-[#646464]">{hour} hours of Recorded Session</p>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">
            Live Doubt Clearing Sessions
          </span>
          <p className="text-[#646464]">Weekly live session with trainers</p>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Live Project Sessions</span>
          <p className="text-[#646464]">
            Live sessions with trainers on real-life projects
          </p>
        </div>

        <div className="flex flex-col">
          <span className="text-lg font-semibold">Certificates</span>
          <p className="text-[#646464]">Triple Certificates</p>
        </div>
        <hr className="w-full text-[#646464]" />
        <Link href={link}>
          <span className="text-[#0056d2] mt-2 font-medium">
            start learning
          </span>
        </Link>
      </div>
      <div className="absolute bottom-[-50px] left-28 flex gap-3 max-sm:hidden ">
        <span className="border-[#f18350] text-[#f18350] border-2 px-5 py-1 w-max rounded">
          Features
        </span>
        <span className="border-[#646464] border-[1px] px-5 py-1 w-max rounded">
          Modules
        </span>
        <span className="border-[#646464] border-[1px] px-5 py-1 w-max rounded">
          Project
        </span>
        <span className="border-[#646464] border-[1px] px-5 py-1 w-max rounded">
          Certification
        </span>
        <span className="border-[#646464] border-[1px] px-5 py-1 w-max rounded">
          Tool
        </span>
        <span className="border-[#646464] border-[1px] px-5 py-1 w-max rounded">
          FAQ
        </span>
      </div>
    </div>
  );
};

export default Header;
