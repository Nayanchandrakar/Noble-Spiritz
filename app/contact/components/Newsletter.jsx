"use client";
import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";

export default function Newsletter() {
  return (
    <div className="p-10 flex gap-10 flex-col lg:flex-row">
      <Image
        width={590}
        height={625}
        src="https://i.ibb.co/GJFWLkp/contact-1.jpg"
        alt="Contact us"
        className="rounded-lg"
      />

      <div className="w-full">
        <h1 className="text-3xl font-semibold mb-5">Get In Touch</h1>
        <form className="flex flex-col gap-5">
          {/* name */}
          <div className="w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full "
            />
          </div>

          {/* email */}
          <div className="w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full "
            />
          </div>

          {/* phone number */}
          <div>
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full "
            />
          </div>

          {/* Message */}
          <div>
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              type="text"
              placeholder="Type here"
              className="textarea  input-bordered input-primary w-full h-48"
            />
          </div>
          <button className="btn  border-0 bg-primary max-w-xs text-white flex justify-center items-center gap-2 hover:bg-black ">
            Send Message <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
}
