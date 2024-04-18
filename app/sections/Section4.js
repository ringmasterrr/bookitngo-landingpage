import Image from "next/image";
import React from "react";

const Section4 = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 sm:my-32 my-8">
      <div className="separator"></div>

      <div className="flex flex-col items-center justify-center w-[80%] py-16 ">
        <div className="flex  md:flex-row flex-col md:gap-6">
          <h3 className="large_head poppins font-bold text-[#000000] ">
            Bookitngo
          </h3>
          <span className="large_head poppins font-bold text-[#00415C]">
            Roadmap
          </span>
        </div>
        <p className="large_para poppins font-medium text-[#000000]  text-center py-8">
          At Bookitngo, we stand out as the premier choice for tokenisation of
          real-world travel assets. Here&apos;s why enterprises and
          institutional investors choose us:
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Image src={"/roadmap.svg"} alt="roadmap" height={1500} width={1500} className="px-2" />
      </div>
    </div>
  );
};

export default Section4;
