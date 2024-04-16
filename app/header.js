"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Assuming you want to use Feather icons
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent">
      <div className="max-w-full m-5 px-2 md:px-6 lg:px-16 ">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:gray-700 focus:outline-none focus:gray-700 transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-between">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="text-white font-bold">
                  <Image
                    src={"/logo.svg"}
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-36 h-36"
                  />
                </div>
              </Link>
            </div>
            <div className="hidden md:block md:ml-6 place-self-center justify-self-center w-full max-w-[25rem] mr-52">
              <div className="flex justify-between">
                <Link href="https://bookitngo.in/">
                  <div className="text-[#000000] hover:text-[#00415C] hover:font-bold px-3 py-2 md:text-lg text-sm font-medium">
                    Home
                  </div>
                </Link>
                <Link href="https://bookitngo.in/home/AboutUs">
                  <div className="text-[#000000] hover:text-[#00415C] hover:font-bold px-3 py-2 md:text-lg text-sm font-medium">
                  About
                  </div>
                </Link>
                <Link href="http://marketplace.bookitngo.com/">
                  <div className="text-[#000000] hover:text-[#00415C] hover:font-bold px-3 py-2 md:text-lg text-sm font-medium">
                  Marketplace
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-6">
            <div className="flex">
              <Link href="https://bookitngo.in/">
              <Image
                    src={"/button.svg"}
                    alt="logo"
                    width={195}
                    height={60}
                    className="w-48 h-16"
                  />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`${isOpen ? "block" : "hidden"} md:hidden `}>
        <div className="px-2 pt-2 pb-3 ">
          <Link href="https://bookitngo.in/">
            <div className="block px-3 py-2 text-base font-medium hover:border-b text-gray-800  ">
              Home
            </div>
          </Link>
          <Link href="https://bookitngo.in/home/AboutUs">
            <div className="block px-3 py-2 text-base font-medium hover:border-b text-gray-800  mt-1">
              About
            </div>
          </Link>
          <Link href="http://marketplace.bookitngo.com/">
            <div className="block px-3 py-2 text-base font-medium hover:border-b text-gray-800   mt-1">
              Marketplace
            </div>
          </Link>
          <Link href="https://bookitngo.in/">
            <div className="block px-3 py-2 rounded text-base font-medium  text-gray-800  mt-1">
              Register
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
