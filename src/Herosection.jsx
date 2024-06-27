import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Services from "./Services";
import HappyClients from "./HappyClients";

export default function Widget() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="flex   lg:pt-6  flex-col lg:flex-row  justify-between">
        <div className="herobg w-full ">
          <div className=" lg:p-20 mt-16 lg:mt-10 flex flex-col justify-center ">
            <p className="pro md:text-4xl sm:mx-0  text-[20px] lg:text-2xl  font-[500]  text-center lg:text-left">
              Professional Cleaning Services
            </p>
            <h1 className="trans lg:text-[63px] md:text-5xl text-2xl lg:leading-[66px] text-center lg:text-left">
              Transforming spaces <br /> One Clean at a Time
            </h1>
            <div className="flex items-center lg:justify-start justify-center">
              <p className=" px-5 md:px-0  sm:w-[75%] lg:w-[40%] lg:mb-10 welcome text-lg lg:text-xl  text-center lg:text-left">
                Welcome to Klin-code: Your Trusted Partner in Professional
                Cleaning Services
              </p>
            </div>
            <div className="flex mb-10  lg:space-x-4 mt-4 flex-col lg:flex-row lg:gap-0 lg:justify-normal justify-center items-center gap-5">
              <Link
                to="booknow"
                className=" bg-[#68CA05] px-8 lg:w-[385px] py-4 lg:py-5 butt text-sm lg:text-[18px] lg:px-6  rounded-full shadow-lg hover:bg-blue-950 text-white transition duration-300"
              >
                Book Your Cleaning Now
              </Link>
              <a href="https://wa.link/o1uify">
                <button className=" lg:w-60 w-56 call py-3 lg:py-5 px-10  border rounded-full hover:text-[#68CA05] transition duration-300">
                  Call Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:p-10 xl:p-32 flex-col-reverse lg:flex-row items-center gap-x-16 lg:justify-between lg:w-full lg:h-full">
        <div>
          <img className="" src="../assets/about.png" alt="" />
        </div>
        <div class="lg:w-[50%] w-full flex py-10  lg:font-normal flex-col mt-10">
          <div className="bg-yellow-50 lg:bg-white">
            <h2 class="lg:text-[24px] leading-10 text-center lg:text-left lg:mt-0 mt-5   font-[500] text-[#494849] lg text-3xl mb-1">
              About Us
            </h2>
            <h3 class="text-xl sm:text-[30px] px-2 text-center lg:text-left lg:mt-0 font-bold py-3 ">
              5+ Years of Deep Cleaning
            </h3>
            <p className="p-4 lg:p-0 text-center lg:text-left text-[#767070] leading-6 text-[18px] xl:w-[542px] lg:h-[104px] font-[500]">
              Klin-code is an environmental service provider which serves in the
              cleaning industry to help maintain general hygiene. We are a team
              of experts dedicated to providing high quality cleaning...
            </p>
            <div className="flex justify-center lg:block pb-8">
              <Link
                to="about"
                className="xl:mt-4 lg:mt-16  font-bold w-36 px-3 py-2 border-blue-950 border bg-white text-blue-950 rounded-lg flex items-center gap-2 transition duration-700 hover:border-none hover:bg-[#4f929e] hover:text-white"
              >
                Read more
                <img className="w-3" src="../assets/Vector.png" alt="df" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" md:px-20 lg:mt-[-40px] py-10 lg:mb-10">
        <div>
          <h2 className="font-bold ml-5 mx-auto text-center lg:text-3xl  flex lg:mb-10 md:gap-3">
            Book
            <span className="text-[#68CA05] flex flex-col">
              klin-code
              <img
                src="../../assets/Vector 20.png"
                alt=""
                className="w-[70%] m-auto"
              />
            </span>
            service in 3 easy steps
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 p-4 gap-10">
          <div className="bg-[#5EAE0133] flex flex-col justify-center items-center xl:w-[420px] h-[434px] rounded-2xl  p-5">
            <div className="flex justify-center">
              <img src="../assets/troll.png" alt="Cleaning Service" />
            </div>
            <h3 className="text-xl font-semibold text-center mt-10">
              Choose Your Cleaning Service
            </h3>
            <p className="text-center mt-4 font-[500] text-[#565656]">
              Give us a full detail of your cleaning needs, and we will provide
              you with the necessary information you need.
            </p>
          </div>

          <div className="bg-blue-200 flex flex-col justify-center items-center xl:w-[420px] h-[434px] rounded-2xl p-5">
            <div className="flex justify-center">
              <img className="" src="../assets/cal.png" alt="Schedule" />
            </div>
            <h3 className="text-xl font-semibold text-center mt-10">
              Schedule Your Cleaning Time
            </h3>
            <p className="text-center mt-4 font-[500] text-[#565656]">
              Our online booking system let’s you choose a time most convenient
              for you.
            </p>
          </div>

          <div className="bg-[#FBB31933] flex flex-col justify-center items-center xl:w-[420px] h-[434px] rounded-2xl p-5">
            <div className="flex justify-center">
              <img src="../assets/home.png" alt="Enjoy Clean Home" />
            </div>
            <h3 className="text-xl font-semibold text-center mt-10">
              Enjoy A Clean, Tidy Space
            </h3>
            <p className="text-center xl:w-[423px] mt-4 font-[500] text-[#565656]">
              Now you just sit back and relax, while we ensure your Space is
              spotless, clean from the top to bottom.
            </p>
          </div>
        </div>
      </div>

      <Services />

      <div className="flex flex-col gap-10  lg:flex-row items-center mx-auto max-w-7xl justify-center  ">
        <div className="lg:w-[40%]">
          <img
            src="../assets/rect.png"
            alt="Person organizing shelf"
            className="w-full h-auto lg:px-0 px-8"
          />
        </div>
        <div className="lg:w-[50%] lg:mt-10  ">
          <ul className=" md:w-3/4 md:mx-auto">
            <h2 class="lg:text-2xl text-3xl text-center lg:text-left lg:font-bold font-extrabold mb-6">
              Why Choose Us
            </h2>
            <li class="mb-5 flex lg:gap-4 gap-2 lg:p-0 p-4 ">
              <img
                className="w-[24px] h-[24px]"
                src="../assets/pep.png"
                alt=""
              />
              <p className="leading-5 text-justify lg:w-[476px]">
                With years of experience in the cleaning industry, our team has
                the knowledge and skills to tackle any cleaning task. Our
                expertise ensures a high-quality service that meets your
                specific needs.
              </p>
            </li>
            <li className="mb-5 flex lg:gap-4 gap-2 lg:p-0 p-4 ">
              <img
                className="w-[24px] h-[24px]"
                src="../assets/pep.png"
                alt=""
              />
              <p className="leading-5 text-justify lg:w-[476px]">
                We pride ourselves on our reliability, efficiency, and
                cost-effectiveness. Our streamlined processes and skilled team
                ensure a prompt and thorough cleaning service that fits your
                budget and schedule.
              </p>
            </li>
            <li className="mb-5 flex lg:gap-4 gap-2 lg:p-0 p-4 ">
              <img
                className="w-[24px] h-[24px]"
                src="../assets/pep.png"
                alt=""
              />
              <p className="leading-5 text-justify lg:w-[476px]">
                We understand that every client is unique, and we tailor our
                services to meet your specific requirements. Our attention to
                detail and personalized approach ensure a cleaning experience
                that exceeds your expectations.
              </p>
            </li>
            <li className="mb-5 flex lg:gap-4 gap-2 lg:p-0 p-4 ">
              <img
                className="w-[24px] h-[24px]"
                src="../assets/pep.png"
                alt=""
              />
              <p className="mb-10 leading-5 text-justify lg:w-[476px]">
                We care about the environment and use eco-friendly products and
                practices that minimize our impact on the planet. Our
                sustainable approach ensures a cleaner, healthier space for you
                and a better future for our community.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:mt-36 relative z-0">
        <img
          className="brightness-50 lg:h-full h-64"
          src="../assets/high.png"
          alt=""
        />

        <div className=" absolute inset-0 mx-auto xs:mt-10 my-auto lg:w-[65%] h-1/2 ">
          <h1 className="text-white -mt-5 md:-mt-0 text-2xl xl:text-5xl font-bold xl:mb-5 text-center">
            We clean, you relax. It`s simple.
          </h1>
          <p className="lg:px-20  text-center w-full px-8 text-sm lg:text-xl lg:mb-4 xl:mb-10 text-white">
            Experience the ultimate cleanliness and protection with our
            comprehensive cleaning, fumigation, pest control, and disinfection
            services.
          </p>
          <div className="flex justify-center mt-3 xl:mt-5">
            <Link
              to="/booknow"
              className=" bg-transparent border-2 px-5 hover:border-none border-white  lg:w-[385px] py-3 xl:py-5 butt text-sm lg:text-[18px] lg:px-6  rounded-full shadow-lg hover:bg-blue-700 text-white transition duration-300"
            >
              Book Your Cleaning Now
            </Link>
          </div>
        </div>
      </div>
      <div className=" lg:mb-16 lg:mt-20">
        <h2 className="text-2xl font-bold text-center my-10 ">
          Our Trusted Partner
        </h2>
        <div className="flex flex-wrap px-10 gap-5 lg:gap-0 lg:px-28  lg:flex justify-around items-center">
          <img className="w-36" src="../assets/partner1.png" alt="" />
          <img className="w-36" src="../assets/partner2.png" alt="" />
          <img className="w-20" src="../assets/partner3.png" alt="" />
          <img className="w-20" src="../assets/partner4.png" alt="" />
          <img className="w-20" src="../assets/partner5.png" alt="" />
          <img className="w-36" src="../assets/partner6.png" alt="" />
        </div>
      </div>
      <HappyClients />
    </>
  );
}
