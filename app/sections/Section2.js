import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="separator "></div>
      <div className="flex xl:flex-row flex-col w-[80%] my-[5rem] xl:items-center xl:justify-center xl:gap-32 gap-8">
        <div className="xl:w-[40%] w-[80%] flex items-center justify-center">
          <div className="flex items-center">
            <Image
              src="/b.png"
              alt="Image 1"
              width={1000}
              height={1000}
              className="object-cover max-w-[8rem] "
            />
            <Image
              src="/lockchain.svg"
              alt="Image 1"
              width={1000}
              height={1000}
              className="object-cover w-full h-full pt-16 pl-4 "
            />
          </div>
        </div>
        <div className="xl:w-[60%] w-[80%] flex flex-col items-center justify-center">
          <h3 className="large_head poppins font-bold text-[#00415C] xl:py-20 py-8">Bookitngo x Blockchain</h3>
          <p className="large_para lato font-medium ">
            At Bookitngo, our vision is to redefine the way people experience
            travel. We envision a world where booking flights and hotels is not
            just a transaction, but a seamless journey enriched with
            accessibility, transparency, and endless possibilities. By
            harnessing the power of blockchain technology, we aim to create a
            global ecosystem where travelers can explore, connect, and immerse
            themselves in diverse cultures with ease. Our vision extends beyond
            convenience; it&apos;s about empowering individuals to embark on
            transformative journeys that leave a lasting impact on their lives.
            Together, we&apos;re shaping the future of travel, one innovative
            solution at a time.
          </p>
        </div>
      </div>
      <div className="separator "></div>
    </div>
  );
};

export default Section2;