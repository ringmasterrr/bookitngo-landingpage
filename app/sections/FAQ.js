import React from "react";
import Accordion from "./accordian";

const FAQ = () => {
  return (
    <div className="rounded-lg mt-40 flex flex-col items-center justify-center ">
      <div className="flex md:flex-row flex-col md:gap-4 text-center my-11 items-center justify-center">
          <h3 className="large_head text-center poppins font-semibold text-[#000000] ">
          Frequently Asked
          </h3>
          <span className="large_head text-center poppins font-bold text-[#00415C]">
          Questions
          </span>
        </div>
      <Accordion
        title="What is Webflow and why is it the best website builder?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes."
      />
      <Accordion
        title="What is your favorite template from BRIX Templates??"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes."
      />

      <Accordion
        title="What is your favorite template from BRIX Templates?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes."
      />
    </div>
  );
};

export default FAQ;
