import React, { useEffect } from "react";
import Newsletter from "../newsletter";
import { Link } from "react-router-dom";
import OurTeam from "../component/OurTeam";
import Services from "../Services";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <div className="mt-24   relative z-0">
        <img
          className="hidden lg:block brightness-50 w-full"
          src="../assets/new.png"
          alt=""
        />
        <img
          className="lg:hidden sm:h-[70vh] w-full  brightness-50  lg:h-[90vh]"
          src="../assets/about.jpg"
          alt=""
        />

        <div className="absolute xs:mt-5 inset-0 mx-auto mt-20  lg:w-[65%] lg:h-1/2">
          <h1 className="text-white text-2xl xs:text-lg sm:text-4xl lg:-mt-10 xl:mt-0 lg:text-4xl sm:mb-2  xl:text-5xl font-bold xl:mb-5 text-center">
            5+ Years of Deep Cleaning.
          </h1>
          <p className="lg:px-20 md:px-20 lg:text-sm p-2 lg:p-0 sm:text-[17px] sm:mb-2  text-center xl:px-8 text-sm xl:text-xl mb- xl:mb-10 text-white">
            We are team expert dedicated to providing high quality cleaning
            services. <br className="hidden xl:block" /> we are duly registered
            and licensed by the appropriate authorities to
            <br className="hidden xl:block" /> operate in both commercial and
            private sectors.
          </p>
          <div className="flex justify-center xl:mt-5">
            <Link
              to="/booknow"
              className=" bg-transparent border-2 hover:border-none border-white px-10 lg:w-[385px] py-3 lg:py-5 butt text-sm lg:text-[18px] lg:px-6  rounded-full shadow-lg hover:bg-blue-700 text-white transition duration-300"
            >
              Book Your Cleaning Now
            </Link>
          </div>
        </div>
      </div>
      <div className="flex max-w-7xl mx-auto lg:py-20 flex-col-reverse lg:flex-row items-center p-4">
        <div className="flex-1">
          <img
            src="../assets/banner.png"
            alt="Janitor working"
            class="rounded-lg"
          />
        </div>
        <div className="flex flex-col lg:p-10">
          <h2 className="lg:text-[24px] mt-5 leading-10 text-center lg:text-left lg:mt-0 font-[600] text-black lg text-3xl mb-1">
            About Us
          </h2>
          <p className="mb-4 p-4 lg:p-0 text-center lg:text-justify text-[#767070] lg:mt-7 leading-6 text-[18px] lg:w-[474px] font-[500] ">
            Klin-code is an environmental service provider which serves in the
            cleaning industry to help maintain general hygiene. We are a team of
            experts dedicated to providing high quality cleaning and pest
            control services. klin-code is registered and licensed by the
            appropriate authorities to operate in both commercial and private
            sectors.
          </p>
          <div className="flex justify-center mb-10 lg:mb-0 lg:justify-normal">
            <a href="https://wa.link/o1uify">
              <button className="hover:bg-blue-950 my-5 bg-transparent border-2 border-gray-500 font-semibold  text-blue-950 hover:text-white p-2 rounded-lg px-10">
                Call Us
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row-reverse max-w-7xl justify-between mx-auto lg:py-16 flex-col-reverse items-center ">
        <div className="mb-16">
          <img src="../assets/safety.png" alt="Safety" class="rounded-lg" />
        </div>
        <div className="flex flex-col  lg:p-10">
          <h2 className="lg:text-[24px] mt-5 leading-10 text-center lg:text-left lg:mt-0 font-[600] text-black lg text-3xl mb-1">
            Safety
          </h2>
          <p className="mb-10 lg:mb-0 p-4 lg:p-0 text-center lg:text-left   text-[#767070] lg:mt-7 leading-6 text-[18px] lg:w-[474px] font-[500] ">
            At klin-code, we prioritise safety. we practice safety guides to
            ensure our team, employees, contractors, customers, and clients are
            secured against incidents during the course of our assignment. We
            educate our employees and clients on environmental hazards and
            provide professional personal protective equipment (PPE).
          </p>
        </div>
      </div>

      <div className=" bg-[#192C58] px-2 py-20 lg:py-40">
        <div className="max-w-7xl mx-auto lg:flex lg:justify-between item-center ">
          <div className="text-center mb-10 lg:mb-0 py-5 lg:py-0 space-y-4 lg:mt-0 border-[#68CA05] border lg:shadow-none lg:border-0 shadow-lg rounded-2xl lg:p-0 p-2">
            <div className=" flex items-center justify-center">
              <img src="../assets/vision.png" alt="Vision Icon" />
            </div>
            <h2 className="font-bold text-[#ffffff] text-2xl">Our Vision</h2>
            <p className="font-[400]  lg:w-[400px] lg:p-5  xl:w-[517px] text-[18px] text-[#ffffff]">
              To help protect humans and our environments from health traits
              caused by dirt using Eco-friendly products by such providing high
              quality service.
            </p>
          </div>
          <div className="hidden mt-10 lg:block border border-[#c4c4c48b] w-[1px] h-60"></div>
          <div className="text-center  mt-0 lg:mt-0 border border-[#68CA05]  shadow-lg lg:shadow-none lg:border-0 rounded-2xl lg:p-0 pt-6 space-y-4">
            <div className=" flex items-center justify-center">
              <img src="../assets/mission.png" alt="Mission Icon" />
            </div>
            <h2 className="font-bold text-[#ffffff] text-2xl">Our Mission</h2>
            <p className="font-[400] text-[#ffffff] p-5 text-[18px] lg:w-[400px] xl:w-[603px]">
              Our mission is to provide top-notch cleaning solutions, tailored
              to meet the unique needs of our clients, while fostering a culture
              of excellence, integrity, and sustainability. We strive to build
              long-lasting relationships, empower our team, and contribute to a
              cleaner, greener future for our community.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto lg:flex flex lg:flex-row flex-col-reverse mt-16  lg:mt-36 items-center  lg:justify-between  ">
          <div className="text-center   space-y-4 lg:mt-0 lg:shadow-none lg:border-0 rounded-lg lg:p-0 p-2">
            <h2 className="font-bold text-[#68CA05] text-2xl">
              Accreditation <span className="text-white">&</span> Certification
            </h2>
            <p className="font-[400] text-center lg:w-[470px] xl:w-[390px] text-[18px] text-[#fff]">
              We are a fully accredited and certified agency in Nigeria by the
              appropriate authorities.
            </p>
          </div>

          <div className="hidden lg:block border border-[#c4c4c48b] - w-[1px] h-40"></div>
          <div className="flex  justify-center items-center mt-10 lg:mt-0 lg:border-0 lg:p-0 p-6 space-x-10">
            <img
              className=" lg:w-[35%] w-[30%] lg:h-[155px]"
              src="../../assets/cpan.png"
              alt=""
            />
            <img
              className="lg:w-[35%] w-[30%]  lg:h-[189px]"
              src="../../assets/lsepa.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Services />
      </div>
      <OurTeam />
      <div className="mt-10">
        <Newsletter />
      </div>
    </div>
  );
};

export default About;
