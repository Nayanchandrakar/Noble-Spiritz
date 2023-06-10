'use client'

import Link from "next/link";
import { GoPrimitiveDot } from "react-icons/go";
export default function Header({ pageName, bg_img }) {
  return (
    <div
      className="relative bg-cover bg-no-repeat bg-center z-0"
      style={{
        minHeight: "400px",
        backgroundImage: `url(${bg_img})`,
      }}
    >
      <div className=" absolute inset-0 bg-black/50  text-center text-white p-10">
        {" "}
        <div className="text-center  py-20">
          <h1 className="text-[3rem] font-bold">{pageName}</h1>

          <p className="flex items-center gap-1 justify-center">
            <Link className="text-primary font-semibold" href="/">
              Home
            </Link>
            <GoPrimitiveDot className="mt-1 text-primary" />
            <span>{pageName}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
