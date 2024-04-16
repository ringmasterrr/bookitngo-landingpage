import React from "react";
import Accordion from "./accordian";

const FAQ = () => {
  return (
    <div className="rounded-lg mt-40 flex flex-col justify-center items-center ">
      <div className="flex md:flex-row flex-col md:gap-6 text-center justify-center">
        <h3 className="large_head text-center poppins font-bold text-[#000000] ">
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
