import React from "react";
import Accordion from "./accordian";

const FAQ = () => {
  return (
    <div className="rounded-lg mt-40 flex flex-col justify-center items-center ">
      <div className="flex md:flex-row flex-col md:gap-6 text-center justify-center mb-12">
        <h3 className="large_head text-center poppins font-bold text-[#000000] ">
          Frequently Asked
        </h3>
        <span className="large_head text-center poppins font-bold text-[#00415C]">
          Questions
        </span>
      </div>
      <Accordion
        title="How do I verify ownership of tokenized flight seats and hotel nights?"
        answer={
          <>
            Ownership verification is facilitated through the smart contract
            address&nbsp;
            <a href="https://mumbai.polygonscan.com/address/0xc4d3c5bd5aa932aeb72cbf61dcf0e36e91a5a3eb">
              0xC4D3c5BD5aA932aEb72cbf61Dcf0e36E91a5a3eb
            </a>
            &nbsp;on the Polygon blockchain, ensuring transparent and secure
            transactions.
          </>
        }
      />
      <Accordion
        title="Can I trade tokenized flight seats and hotel nights with other users?"
        answer="Yes, our platform allows seamless peer-to-peer trading of tokenized travel assets, providing users with flexibility and accessibility in managing their bookings."
      />

      <Accordion
        title="What advantages does blockchain offer for tokenizing travel assets?"
        answer="Blockchain technology ensures immutable records of ownership, transparent transactions, and enhanced security, revolutionizing the travel booking experience."
      />

      <Accordion
        title="How can I redeem tokenized assets for actual travel bookings?"
        answer="Tokenized assets can be redeemed for travel bookings through our platform's partner networks, offering users a streamlined process and personalized travel experiences."
      />

      <Accordion
        title="Is there a fee associated with trading tokenized flight seats and hotel nights?"
        answer="Our platform may charge nominal fees for tokenization and trading activities, which are transparently communicated to users. Additionally, our loyalty program may offer benefits and discounts to frequent users of the platform."
      />
    </div>
  );
};

export default FAQ;
