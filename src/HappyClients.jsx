import React from "react";

const HappyClients = () => {
  return (
    <div class="bg-[#EBF0FF] mt-10 flex flex-col ">
      <div class="text-center mt-7  lg:mt-10">
        <p class=" text-[#047185] text-[16px] leading-7 font-bold">
          Over 150+ successful client
        </p>
      </div>
      <h2 class=" text-center text-xl lg:text-[52px] leading-[62px] font-semibold lg:mt-5 ">
        Here is what they say about us
      </h2>
      <div class=" alumni lg:pt-16 pb-20  lg:flex justify-center lg:space-x-16">
        <div class=" lg:flex   items-center justify-between gap-8">
          <div className="flex justify-center items-center">
            <img class="" src="../assets/bg1.png" alt="Client Image" />
          </div>
          <div class="mt-4 flex flex-col">
            <div className="flex justify-center lg:justify-start space-x-1">
              <img src="../../assets/star.png" alt="" />
              <img src="../../assets/star.png" alt="" />
              <img src="../../assets/star.png" alt="" />
              <img src="../../assets/star.png" alt="" />
              <img src="../../assets/star.png" alt="" />
            </div>
            <p class=" lg:w-[346px] font-semibold p-2 lg:p-0 text-[18px] text-[#494849] mt-2 text-center lg:text-start">
              So I was looking for a janitor to take care of a new apartment I
              was just about moving into, and a friend recommended them to me.
              They did absolutely amazing. Thank you Klin-Code for such....
              <a href="#" class="text-blue-500">
                see more
              </a>
            </p>
            <p class="mt-1 text-black text-[16px] leading-7 font-bold text-center lg:text-start">
              Queen Okon
            </p>
          </div>
        </div>
        <div class=" lg:flex  mt-10 lg:mt-0  items-center justify-between gap-8">
          <div className="flex justify-center ">
            <img class="" src="../assets/bg2.png" alt="Client Image" />
          </div>
          <div class="flex flex-col">
            <div className="flex mt-5 lg:mt-0 justify-center lg:justify-start space-x-1">
              <img src="../../assets/star.png" alt="" />
              <img src="../../assets/star.png" alt="" />
              <img src="../../assets/star.png" alt="" />
              <img src="../../assets/star.png" alt="" />
              <img src="../../assets/star.png" alt="" />
            </div>
            <p class=" lg:mt-7 lg:w-[346px] p-2 font-semibold text-[18px] text-[#494849] mt-2 text-center lg:text-start">
              Outstanding service for deep cleaning and fumigation, would
              recommend to anyone, give them a try and thank me later!...
            </p>
            <p class="lg:mt-6 text-black text-[16px] leading-7 font-bold text-center lg:text-start">
              Mayowa Odesanya
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10 gap-1">
        <img src="../../assets/Ellipse2.png" alt="" />
        <img src="../../assets/Ellipse1.png" alt="" />
        <img src="../../assets/Ellipse1.png" alt="" />
      </div>
    </div>
  );
};

export default HappyClients;
