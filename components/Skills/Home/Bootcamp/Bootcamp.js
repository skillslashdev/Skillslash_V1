import React from "react";
import { BsCheck, BsX } from "react-icons/bs";

const Bootcamp = () => {
  return (
    <div className="flex flex-col px-28 py-10 bg-[#F6F6F6] max-sm:px-5">
      <h2 className="text-4xl font-bold max-sm:text-2xl">
        Skillslash Bootcamp
      </h2>
      <div
        className="mt-[20px] w-full"
        style={{
          boxShadow:
            "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
        }}
      >
        <table className="table-fixed border-collapse  w-[100%]">
          <colgroup>
            <col className="w-[128px] max-sm:w-[90px] " />
            <col className="w-[90px] max-sm:w-[60px]" />
            <col className="w-[90px] max-sm:w-[60px]" />
            <col className="w-[90px] max-sm:w-[60px]" />
          </colgroup>
          <thead className="border-[#c5c5c5] border-b-[1px]">
            <tr className=" text-[#f18350] border-[#c5c5c5] border-1">
              <th className="border-r-[1px] border-[#F18350] py-2 text-left pl-10 max-sm:pl-5 max-sm:text-sm">
                Features
              </th>
              <th className="border-r-[1px] border-[#F18350] py-2 border-t-[8px] max-sm:text-sm">
                Skillslash-Hybrid
              </th>
              <th className="border-r-[1px] border-[#8b8b8b] py-2 max-sm:text-sm">
                Others-Recorded
              </th>
              <th className="border-r-[1px] py-2 max-sm:text-sm">
                Others-Live
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-3 pl-10 max-sm:pl-5 pr-2">
                Lesson
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2 text-center max-sm:text-sm">
                Recorded
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2 text-center max-sm:text-sm">
                Recorded
              </td>
              <td className=" p-2 text-center max-sm:text-sm">Live</td>
            </tr>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10 max-sm:pl-5">
                In-depth Lesson
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2 text-center">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F] max-sm:text-2xl " />
                </p>
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436] max-sm:text-2xl" />
                </p>
              </td>
              <td className="p-2 ">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F] max-sm:text-2xl" />
                </p>
              </td>
            </tr>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10 max-sm:pl-5">
                Live Doubt Clearing
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F] max-sm:text-2xl" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436] max-sm:text-2xl" />
                </p>
              </td>
              <td className=" p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F] max-sm:text-2xl" />
                </p>
              </td>
            </tr>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10 max-sm:pl-5">
                Live Projects
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F] max-sm:text-2xl" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436] max-sm:text-2xl" />
                </p>
              </td>
              <td className=" p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F] max-sm:text-2xl" />
                </p>
              </td>
            </tr>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10 max-sm:pl-5 pr-5">
                Course Completion Certificate
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F] max-sm:text-2xl" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F] max-sm:text-2xl" />
                </p>
              </td>
              <td className=" p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F] max-sm:text-2xl" />
                </p>
              </td>
            </tr>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10 max-sm:pl-5">
                Project Experience Certificate
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F] max-sm:text-2xl" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436] max-sm:text-2xl" />
                </p>
              </td>
              <td className=" p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436] max-sm:text-2xl" />
                </p>
              </td>
            </tr>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10 max-sm:pl-5">
                Internship Certificate
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F] max-sm:text-2xl" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436] max-sm:text-2xl" />
                </p>
              </td>
              <td className=" p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436] max-sm:text-2xl" />
                </p>
              </td>
            </tr>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10 max-sm:pl-5">
                Final Year Project Assistance
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F] max-sm:text-2xl" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436] max-sm:text-2xl" />
                </p>
              </td>
              <td className=" p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436] max-sm:text-2xl" />
                </p>
              </td>
            </tr>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10 max-sm:pl-5">
                Resume Building Session
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F] max-sm:text-2xl" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436] max-sm:text-2xl" />
                </p>
              </td>
              <td className=" p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F] max-sm:text-2xl" />
                </p>
              </td>
            </tr>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10 max-sm:pl-5">
                Average Pricing
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2 text-center max-sm:text-sm">
                7,000
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2 text-center max-sm:text-sm">
                6,500
              </td>
              <td className=" p-2 text-center max-sm:text-sm">80,000</td>
            </tr>
            {/* ... (repeat the structure for other rows) */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bootcamp;
