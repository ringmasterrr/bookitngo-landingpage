import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[80%] py-16 gap-2 ">
        <h3 className="large_head poppins font-bold text-[#000000] ">
          Why&nbsp;
          <span className="large_head poppins font-bold text-[#00415C]">
            Bookitngo
          </span>
        </h3>
        <p className="large_para poppins font-medium text-[#000000]  text-center py-8">
          Experience seamless booking, tokenized assets, and a revolutionary
          secondary marketplace for trading NFTs, unlocking a new dimension of
          travel and digital ownership.
        </p>
      </div>
      <div>
        <div className="grid xl:grid-cols-2  w-full gap-8 gap-y-14 xl:my-0 my-8 md:mx-0 px-6  ">
          <div className="flex items-start justify-start gap-8 md:w-[40rem]">
           
            <Image
              src={"/Union.svg"}
              alt="reach"
              width={100}
              height={100}
              className="w-24 "
            />

            <div className="flex flex-col items-start justify-center">
              <h3 className="why_head lato font-bold ">
                Expertise and Experience
              </h3>
              <h3 className="why_subhead lato font-normal max-w-[30rem] text-xl">
                With a team of seasoned professionals in Blockchain technology,
                finance, and asset management, we bring a wealth of expertise to
                the table. We have a deep understanding of the tokenisation
                market and can guide you through the entire process with
                confidence.
              </h3>
            </div>
          </div>
          <div className="flex items-start justify-start gap-8 md:w-[40rem]">
            <Image
              src={"/24H.svg"}
              alt="reach"
              width={100}
              height={100}
              className="w-24 "
            />
            <div className="flex flex-col items-start justify-center">
              <h3 className="why_head lato font-bold ">
                Cutting-Edge Technology
              </h3>
              <h3 className="why_subhead lato font-normal max-w-[30rem] text-xl">
                We leverage the latest advancements in Blockchain technology to
                provide a secure, efficient, and scalable platform, by
                implementing modular Blockchain in our protocol. Our robust
                infrastructure ensures that asset tokenisation is seamless and
                reliable, while maintaining data integrity and privacy.
              </h3>
            </div>
          </div>
          <div className="flex items-start justify-start gap-8 md:w-[40rem]">
            <Image
              src={"/Local.svg"}
              alt="reach"
              width={100}
              height={100}
              className="w-24 "
            />
            <div className="flex flex-col items-start justify-center">
              <h3 className="why_head lato font-bold ">Global Marketplace</h3>
              <h3 className="why_subhead lato font-normal max-w-[30rem] text-xl">
                Our platform offers access to a global network of investors,
                expanding the reach and visibility of your assets. We connect
                you with a diverse pool of potential buyers, ensuring liquidity
                and maximizing your opportunities for capital growth.
              </h3>
            </div>
          </div>
          <div className="flex items-start justify-start gap-8 md:w-[40rem]">
            <Image
              src={"/Quotes.svg"}
              alt="reach"
              width={100}
              height={100}
              className="w-24 "
            />
            <div className="flex flex-col items-start justify-center">
              <h3 className="why_head lato font-bold ">
                Regulatory Compliance
              </h3>
              <h3 className="why_subhead lato font-normal max-w-[30rem] text-xl ">
                We prioritize compliance with regulatory frameworks to ensure a
                transparent and legally compliant protocol. By partnering with
                us, you can navigate the complexities of tokenisation within a
                secure and compliant environment.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/Decoration1.svg"}
        alt="deco"
        width={30}
        height={1000}
        className="absolute left-0 top-[7%] h-[1000px] hidden lg:block"
      />
      <Image
        src={"/Decoration2.svg"}
        alt="deco"
        width={30}
        height={1000}
        className="absolute right-0 top-[7%] h-[1000px] hidden lg:block"
      />
    </div>
  );
};

export default Section3;
