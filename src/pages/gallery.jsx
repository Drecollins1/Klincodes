import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Newsletter from "../newsletter";
import Services from "../Services";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <section class="bg-white  max-w-7xl mx-auto mt-28">
        <div className="mt-10  relative p-4 z-0 object-cover hover:scale-105 transition-transform duration-700 ease-in-out rounded-lg">
          <img
            className="brightness-50 lg:h-full  "
            src="../assets/img/img1.png"
            alt=""
          />

          <div className="absolute inset-0 mx-auto my-auto lg:w-[65%] h-1/2 ">
            <h1 className="text-white text-xl lg:text-5xl font-bold lg:m-10 text-center">
              Gallery
            </h1>
            <p className="lg:px-20  text-center w-full px-8 text-xl lg:text-2xl  text-white">
              Some of our works
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className=" h-52  md:h-64 flex items-center justify-center">
              <img
                src="../assets/img/img2.png"
                alt=""
                className="h-full rounded-lg w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 lg:p-3 p-4">
            <div className=" h-52  md:h-64 flex items-center justify-center">
              <img
                src="../assets/img/img3.png"
                alt=""
                className="h-full rounded-lg w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 lg:p-3 p-4">
            <div className=" h-52  md:h-64 flex items-center justify-center">
              <img
                src="../assets/img/img4.png"
                alt=""
                className="h-full rounded-lg w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 lg:p-3 p-4">
            <div className=" h-52  md:h-64 flex items-center justify-center">
              <img
                src="../assets/img/img5.png"
                alt=""
                className="h-full rounded-lg w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 lg:p-3 p-4">
            <div className=" h-52  md:h-64 flex items-center justify-center">
              <img
                src="../assets/img/img6.png"
                alt=""
                className="h-full rounded-lg w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 lg:p-3 p-4">
            <div className=" h-52  md:h-64 flex items-center justify-center">
              <img
                src="../assets/img/img7.png"
                alt=""
                className="h-full rounded-lg w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 lg:p-3">
            <div className=" h-52 md:h-[532px] flex items-center justify-center">
              <img
                src="../assets/img/img5.png"
                alt=""
                className="h-full rounded-lg w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 lg:p-3 space-y-5">
            <div className=" h-52 md:h-64 flex items-center justify-center">
              <img
                src="../assets/img/img2.png"
                alt=""
                className="h-full rounded-lg w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className=" h-52 md:h-64 flex items-center justify-center">
              <img
                src="../assets/img/img6.png"
                alt=""
                className="h-full rounded-lg w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-4 lg:p-3">
            <NavLink
              to="/seemore"
              className="relative  h-52 md:h-[532px] flex items-center justify-center"
            >
              <img
                src="../assets/img/img9.png"
                alt=""
                className="h-full brightness-50 rounded-lg w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute flex items-center space-x-3 text-white text-6xl ">
                See More <i class="fa-solid fa-angles-right"></i>
              </div>
            </NavLink>
          </div>
        </div>
      </section>
      <div className=" pt-20 2xl:px-16">
        <Services />
      </div>

      <Newsletter />
    </>
  );
};

export default Gallery;
