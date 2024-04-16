import Image from "next/image";
import React from "react";

const Section7 = () => {
  return (
    <div className=" flex flex-col xl:flex-row items-center justify-evenly">
      <div className="relative xl:w-[35%] flex flex-col xl:items-start items-center xl:justify-evenly xl:text-start text-center py-9 gap-10 xl:px-0 px-28">
        <Image
          src={"/decoration3.svg"}
          alt="deco"
          width={1000}
          height={30}
          className="absolute top-0 xl:-left-6 h-8 "
        />
        <h3 className="med_head poppins mt-7 font-bold text-[#000000]">
          Bookitngo: Empowering Travel with Secure Smart Contracts!
        </h3>
        <p className="med_para poppins mt-2 font-medium text-[#000000]">
          Our platform boasts a robust smart contract infrastructure, ensuring
          secure and transparent transactions for every user. Powered by
          cutting-edge blockchain technology, our smart contracts provide a
          reliable foundation for tokenization, trading, and transforming travel
          assets, guaranteeing a seamless and trustworthy experience for all our
          users.
        </p>
        <Image src={"/button2.svg"} alt="button " width={328} height={64}/>
      </div>
      <div className="h-[30rem]">
        <Image
          src={"/empow.png"}
          alt="dec"w
          height={1100}
          width={550}
          className="w-full h-full self-center"
        />
      </div>
    </div>
  );
};

export default Section7;
