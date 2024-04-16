import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <div className="flex xl:flex-row items-center flex-col mt-20 md:px-7">
      <div className="xl:max-w-[50%] w-[90%] md:pl-4 flex flex-col justify-center items-start">
        <h3 className="poppins font-bold text-black capitalize" style={{ fontSize: "clamp(45px, 5vw, 4.4rem)" }}>
          Revolutionising Travel:
        </h3>
        <h3 className="poppins text-black md:leading-[4.2rem]" style={{ fontSize: "clamp(30px, 5vw, 2.6rem)" }}>
          Tokenizing Flights and Hotels
        </h3>
        <h3 className="poppins  text-black md:leading-[4.9rem]" style={{ fontSize: "clamp(30px, 5vw, 2.6rem)" }}>
          for a New Era of
        </h3>

        <h3 className="poppins font-bold  text-[#00283C] md:leading-[4.9rem]" style={{ fontSize: "clamp(30px, 5vw, 3rem)" }}>
          Decentralized Accessibility!
        </h3>
        <h3 className="poppins  text-[#00283C] md:leading-[2rem] py-5" style={{ fontSize: "clamp(16px, 5vw, 1.5rem)" }}>
        Bookitngo- Your gateway to seamless travel experiences
        </h3>
        <button className="bg-[#00283C] rounded-md w-[8rem] h-[3rem] my-8">
          Explore
        </button>
      </div>
      <div className="xl:max-w-[50%] w-[90%] ">
        <div className="gallery flex gap-8 xl:justify-end">
          <div className="column flex flex-col gap-4">
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
          <div className="column flex flex-col gap-4">
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
  );
};

export default Section1;
