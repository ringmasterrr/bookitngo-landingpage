import Image from "next/image";
import React from "react";

const Section5 = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 sm:my-32 my-8">
      <div className="separator"></div>

      <div className="flex flex-col items-center justify-center w-[80%] py-16 ">
        <div className="flex md:flex-row flex-col md:gap-6">
          <h3 className="large_head text-center poppins font-bold text-[#000000] ">
            What is
          </h3>
          <span className="large_head text-center poppins font-bold text-[#00415C]">
            Asset Tokenisation
          </span>
        </div>
        <p className="large_para poppins font-medium text-[#000000]  text-center py-8">
          Tokenisation is the process of converting the ownership rights of a
          physical asset into digital tokens on a Blockchain. By tokenising
          assets, we enable fractional ownership, allowing investors to buy and
          sell smaller portions of an asset, thereby increasing liquidity and
          reducing barriers to entry. Through our platform, asset owners can
          unlock the value of their assets and tap into a global pool of
          investors, while investors gain access to a diverse range of
          investment opportunities.
        </p>
      </div>
      
      <div className="flex xl:flex-row flex-col items-center justify-center gap-10 mx-4 ">
        <Image
          src={"/asset1.svg"}
          alt="roadmap"
          height={430}
          width={840}
          className="px-2 md:max-w-[38rem]  "
        />
        <Image
          src={"/asset2.svg"}
          alt="roadmap"
          height={430}
          width={840}
          className="px-2 md:max-w-[38rem] "
        />
      </div>
    </div>
  );
};

export default Section5;
