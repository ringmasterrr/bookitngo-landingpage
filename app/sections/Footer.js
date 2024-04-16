import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative">

      <div className="bottom-[5rem] flex flex-col items-center justify-center mt-28 w-full ">
        <div className=" relative bg-[#AEBABF] md:w-[65%] w-[90%] rounded-3xl p-8 flex items-center justify-between">
          <div className="flex flex-col justify-between gap-3 md:w-[60%]">
            <h3 className="text-[#112211] md:text-5xl text-3xl font-bold">
              Subscribe <br />
              Newsletter
            </h3>
            <h3 className="text-[#112211] text-xl font-bold">The Travel</h3>
            <p className="text-xl">
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-4 border border-gray-300 rounded-l focus:outline-none w-full"
              />
              <button
                type="submit"
                className="bg-[#00283C] text-white py-2 px-4 rounded-r"
              >
                Subscribe
              </button>
            </div>
          </div>

          <Image
            src={"/box.svg"}
            alt="box"
            width={370}
            height={270}
            className=" md:w-[24rem] w-24 absolute  md:-bottom-[0.0rem] right-0 "
          />
        </div>
      </div>

  </div> 
  )}

export default Footer;
