import React from "react";
import Image from "next/image";
import ParaAnimation from "../../ParaAnimation/ParaAnimation";

const FirstSection = () => {
  return (
    <div className="grid grid-cols-[58%,40%] gap-2 px-28 mt-[65px] py-16 relative h-[470px] max-sm:px-5 max-sm:py-10 max-sm:grid-cols-[80%,18%]">
      <div className="bgWrap">
        <Image
          src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/First-section-header-home-page.webp"
          fill
          alt="first header"
        />
      </div>
      <div className="flex flex-col justify-center w-full gap-4">
        <h1 className="text-4xl text-[#444444] leading-[45px] max-sm:text-2xl ">
          <span className="font-bold text-[#F18350]">
            Cost effective Self-paced programs
          </span>
          with <b className="text-[#343434]">blended learning</b>
          &nbsp;to reach your career goal
        </h1>
        <ParaAnimation text="Hybrid= Video lesson + Live Doubt session + Live Project session" />
        <button
          className="bg-transparent text-[#f18350] px-4 py-2 mt-3"
          style={{ border: "2px solid #f18350" }}
        >
          Explore Free Courses
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default FirstSection;
