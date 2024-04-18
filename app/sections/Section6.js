import Image from "next/image";
import React from "react";

const Section6 = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 sm:mt-32 mt-8 mb-8">
      <div className="separator"></div>
      <div className="flex flex-col items-center justify-center w-[80%] py-16 ">
        <div className="flex md:flex-row flex-col md:gap-6">
          <h3 className="large_head text-center poppins font-bold text-[#000000] ">
            Our
          </h3>
          <span className="large_head text-center poppins font-bold text-[#00415C]">
            Process
          </span>
        </div>
        <p className="large_para poppins font-medium text-[#000000]  text-center py-8 xl:mx-28">
          Bookitngo simplifies travel: Tokenize, Trade, Transform. It is a
          global leader in innovative,technology-enabled trades for simplicity
          and convenience.
        </p>
      </div>

      <div className="flex xl:flex-row flex-col items-center justify-evenly w-10/12 mx-36 gap-5">
        <div className="border-[#BCBCBC] rounded border flex flex-col items-center justify-start md:w-[27rem] min-h-[38rem] p-10 gap-8">
          <Image
            src={"/1.svg"}
            alt="1"
            height={100}
            width={100}
            className="w-12"
          />
          <Image
            src={"/v1.svg"}
            alt="v1"
            height={200}
            width={200}
            className="w-24"
          />
          <h3 className="font-bold text-3xl text-center">Tokenize your travel assets</h3>
          <p className="font-regular xl:text-xl text-base text-center">
            Convert traditional flight tickets and hotel room reservations into
            digital tokens on the Bookitngo platform, ensuring secure and
            accessible representation of your travel assets.
          </p>
        </div>
        <div className="border-[#BCBCBC] rounded border flex flex-col items-center justify-start md:w-[27rem] min-h-[38rem] p-10 gap-8">
          <Image
            src={"/2.svg"}
            alt="1"
            height={100}
            width={100}
            className="w-12"
          />
          <Image
            src={"/v2.svg"}
            alt="v1"
            height={200}
            width={200}
            className="w-24"
          />
          <h3 className="font-bold text-3xl text-center ">Trade seamlessly</h3>
          <p className="font-regular xl:text-xl text-base text-center">
            Utilize our user-friendly interface to buy, sell, or exchange
            tokenized travel assets with ease, providing users with a convenient
            marketplace for managing their travel plans.
          </p>
        </div>
        <div className="border-[#BCBCBC] rounded border flex flex-col items-center justify-start md:w-[27rem] min-h-[38rem] p-10 gap-8">
          <Image
            src={"/3.svg"}
            alt="1"
            height={100}
            width={100}
            className="w-12"
          />
          <Image
            src={"/v3.svg"}
            alt="v1"
            height={200}
            width={200}
            className="w-24"
          />
          <h3 className="font-bold text-3xl text-center">Transform your journey</h3>
          <p className="font-regular xl:text-xl text-base text-center">
            Experience travel like never before by leveraging tokenization to
            access personalized offers, upgrades, and unique experiences
            tailored to your preferences, enhancing the overall travel
            experience and creating memorable journeys.
          </p>
        </div>
      </div>
      <div className="separator mt-20"></div>

    </div>
  );
};

export default Section6;
