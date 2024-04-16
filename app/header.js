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
      <div className="max-w-full m-5 px-2 md:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
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
                <Link href="/about">
                  <div className="text-[#000000] hover:text-[#00415C] hover:font-bold px-3 py-2 md:text-lg text-sm font-medium">
                    Home
                  </div>
                </Link>
                <Link href="/services">
                  <div className="text-[#000000] hover:text-[#00415C] hover:font-bold px-3 py-2 md:text-lg text-sm font-medium">
                  About
                  </div>
                </Link>
                <Link href="/contact">
                  <div className="text-[#000000] hover:text-[#00415C] hover:font-bold px-3 py-2 md:text-lg text-sm font-medium">
                  Marketplace
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-6">
            <div className="flex">
              <Link href="/register">
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
      
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3">
          <Link href="/about">
            <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white">
              About
            </div>
          </Link>
          <Link href="/services">
            <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white mt-1">
              Services
            </div>
          </Link>
          <Link href="/contact">
            <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white mt-1">
              Contact
            </div>
          </Link>
          <Link href="/register">
            <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white mt-1">
              Register
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
