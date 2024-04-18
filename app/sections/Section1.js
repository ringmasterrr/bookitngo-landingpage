import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <div>
      <div className="flex xl:flex-row items-stretch justify-between flex-col mt-28 md:mx-16 mx-8 gap-2">
        <div className="xl:max-w-[50%] w-[90%] flex flex-col justify-between items-stretch sm:pt-4">
          <h3
            className="poppins font-bold text-black capitalize xl:text-[4.5rem] lg:text-[4rem] text-4xl md:leading-[5rem] leading-[3rem] "
          >
            Revolutionising Travel:
          </h3>
          <h3
            className="poppins text-black xl:text-[2.65rem] lg:text-[2.3rem] text-2xl md:leading-[4rem] leading-[3rem]"    
          >
            Tokenizing Flights and Hotels
          </h3>
          <h3
            className="poppins text-black xl:text-[2.65rem] lg:text-[2.3rem] text-2xl md:leading-[5rem] leading-[3rem]"
          >
            for a New Era of
          </h3>
           
          <h3
            className="poppins font-bold  text-[#00283C] xl:text-5xl lg:text-[2.6] text-3xl md:leading-[6rem] leading-[3rem] md:py-0 pt-4 pb-1 "  
          >
            Decentralized Accessibility!
          </h3>
          <h3
            className="poppins  text-[#00283C] py-3 sm:text-2xl text-[1.6rem] md:leading-tight leading-[3rem]"
          >
            Bookitngo - Your gateway to seamless travel
            <br /> experiences
          </h3>
          <a href="https://bookitngo.in/">
          <button className="bg-[#00283C] text-white rounded-md w-[8rem] h-[3rem] my-8" >
            Explore
          </button>
          </a>
        </div>
        <div className=" min-w-[50%] xl:pl-4 ">
          <div className="flex gap-8 xl:justify-center">
            <div className=" flex flex-col gap-4 h-full sm:w-[80%] ">
              <div className="photo">
                <Image
                  src="/collage1.png"
                  alt="Image 1"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full "
                />
              </div>
              <div className="photo">
                <Image
                  src="/collage3.png"
                  alt="Image 2"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full "
                />
              </div>
            </div>
            <div className="column flex flex-col gap-4 sm:w-[80%] ">
              <div className="photo">
                <Image
                  src="/collage2.png"
                  alt="Image 3"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full "
                />
              </div>
              <div className="photo">
                <Image
                  src="/collage4.png"
                  alt="Image 4"
                  width={1000}
                  height={1000}
                  className="object-cover  w-full h-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex xl:flex-row xl:items-start justify-between flex-col sm:m-16 m-8 md:mt-48 ">
        <div className="xl:max-w-[40rem] lato font-medium gap-4 mb-2">
          <h3 className="reach_head text-black sm:text-4xl text-3xl leading-snug">
            Enabling Enterprises to unlock Real Value of Assets through our
          </h3>
          <h3 className="reach_head text-[#00415C] sm:font-normal font-semibold sm:text-4xl text-3xl sm:leading-none leading-snug  ">
            borderless global reach
          </h3>
        </div>
        <div className="xl:w-[50%] w-full">
        <div className="grid md:grid-cols-2  gap-8 gap-y-14 xl:my-0 my-8 ">
          <div className="flex items-start justify-start gap-8 sm:w-[23rem] w-[20rem]" >
            <Image src={"/reach2.svg"} alt="reach" width={100} height={100} className="w-16 h-16 pt-2"/>
            <div className="flex flex-col items-start justify-center sm:w-auto w-[240px]">
              <h3 className="reach_head lato font-bold ">6+</h3>
              <h3 className="reach_subhead lato font-normal ">Industries</h3>
            </div>
          </div>
          <div className="flex items-start justify-start gap-8  sm:w-[23rem] w-[20rem]" >
            <Image src={"/reach1.svg"} alt="reach" width={100} height={100} className="w-16 h-16 pt-2"/>
            <div className="flex flex-col items-start justify-center sm:w-auto w-[240px]">
              <h3 className="reach_head lato font-bold ">100K+</h3>
              <h3 className="reach_subhead lato font-normal ">Waitlisted Retail Investors</h3>
            </div>
          </div>
          <div className="flex items-start   justify-start gap-8  sm:w-[23rem] w-[20rem]" >
            <Image src={"/reach3.svg"} alt="reach" width={100} height={100} className="w-16 h-16 pt-2"/>
            <div className="flex flex-col items-start justify-center sm:w-auto w-[240px]">
              <h3 className="reach_head lato font-bold ">160+</h3>
              <h3 className="reach_subhead lato font-normal ">Access to Institutional Asset manager</h3>
            </div>
          </div>
          <div className="flex items-start justify-start gap-8  sm:w-[23rem] w-[20rem]" >
            <Image src={"/reach4.svg"} alt="reach" width={100} height={100} className="w-16 h-16 pt-2"/>
            <div className="flex flex-col items-start justify-center sm:w-auto w-[240px]">
              <h3 className="reach_head lato font-bold ">55 million+</h3>
              <h3 className="reach_subhead lato font-normal ">Waitlisted AUM for Tokenisation</h3>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
