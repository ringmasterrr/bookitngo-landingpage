import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative">

      <div className="absolute -top-[20rem] flex flex-col items-center justify-center mt-28 w-full ">
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

      <footer className="bg-[#00283C] text-white py-8  md:h-96 h-[54rem] flex items-end mt-[20rem] ">
        <div className=" mx-auto px-4 flex md:flex-row flex-col items-start justify-between md:w-[60%] w-[80%]">
          <div className="flex flex-col mb-4 sm:mb-0 w-2/5">
            <div className="md:mr-4 ">
              <Image
                src="/whitelogo.svg"
                alt="Logo"
                width={300}
                height={300}
                className="w-28 h-28 items-start justify-start"
              />
            </div>

            <div className="flex items-center mt-4 gap-1">
              <div className="rounded-full bg-transparent flex items-start justify-center mr-2">
                <FaFacebook size={30} className="w-5 text-white" />
              </div>
              <div className="rounded-full bg-transparent flex items-start justify-center mr-2">
                <FaTwitter size={30} className="w-5 text-white" />
              </div>
              <div className="rounded-full bg-transparent  flex items-start justify-center mr-2">
                <FaInstagram size={30} className="w-5 text-white" />
              </div>
              <div className="rounded-full bg-transparent flex items-start justify-center">
                <FaLinkedin size={30} className="w-5 text-white" />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div>
              <h2 className="font-semibold text-xl mb-8">Opening Restaurant</h2>
              <ul className="flex flex-col justify-end text-gray-500 text-sm ">
                <li>Sat-Wet: 09:00am-10:00PM</li>
                <li>Sat-Wet: 09:00am-10:00PM</li>
                <li>Sat-Wet: 09:00am-10:00PM</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <div>
              <h2 className="font-semibold text-xl mb-8">User Link</h2>
              <ul className="flex flex-col justify-end ">
                <li>
                  <a className="text-gray-500  text-sm hover:text-black">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 text-sm hover:text-black">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 text-sm hover:text-black">
                    Services
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 text-sm hover:text-black">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <div>
              <h2 className="font-semibold text-xl mb-8">Contact Us</h2>
              <ul className="flex flex-col justify-end text-gray-500 text-sm ">
                <li>
                  <p>
                    1234 Country Club Ave
                    <br />
                    NC 123456, London, UK <br />
                    +0123 456 7891 <br />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
