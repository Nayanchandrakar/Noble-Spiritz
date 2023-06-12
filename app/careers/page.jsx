'use client'
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Careers() {
  return (
    <div className="bg-base-200">
      <h1 className=" text-4xl text-center py-10">Join Our Awesome Team </h1>
      <div className="max-w-screen-xl  mx-auto p-4 grid grid-cols-1 gap-10 items-center md:grid-cols-2 lg:grid-cols-3">
        {/* card 1 */}
        <div className="bg-white/70 p-10 text-center space-y-5 rounded-lg max-w-sm shadow-lg h-[252px]">
          <p className="text-primary"> Join as a </p>
          <h1 className="text-4xl uppercase ">Fresher / Student</h1>
          <button className="btn bg-primary text-base hover:text-black ">
            <span>Join Now</span>
            <BsArrowRight />
          </button>
        </div>

        {/* card 2*/}
        <div className="bg-white/70 p-10 text-center space-y-5 rounded-lg max-w-sm shadow-lg h-[252px]">
          <p className="text-primary"> Join as a </p>
          <h1 className="text-4xl uppercase ">Experienced / Professional</h1>
          <button className="btn bg-primary text-base hover:text-black ">
            <span>Join Now</span>
            <BsArrowRight />
          </button>
        </div>

        {/* card 2*/}
        <div className="bg-white/70 p-10 text-center space-y-5 rounded-lg max-w-sm shadow-lg h-[252px]">
          <p className="text-primary"> Join as a </p>
          <h1 className="text-4xl uppercase ">Volunteers</h1>
          <button className="btn bg-primary text-base hover:text-black ">
            <span>Join Now</span>
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
