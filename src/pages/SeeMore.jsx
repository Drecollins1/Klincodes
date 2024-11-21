import React, { useEffect } from "react";
import Newsletter from "../newsletter";
import Services from "../Services";

const images = [
  "gallery.jpg",
  "gallery2.jpg",
  "gallery3.jpg",
  "gallery4.jpg",
  "gallery5.jpg",
  "gallery6.jpg",
  "gallery7.jpg",
  "gallery8.jpg",
  "gallery9.jpg",
  "gallery0.jpg",
  "gallery11.jpg",
  "gallery12.jpg",
  "gallery13.jpg",
  "gallery14.jpg",
];

const SeeMore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="bg-white max-w-7xl mx-auto mt-28">
        <div className="flex flex-wrap">
          {images.map((image, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="h-52 md:h-64 flex items-center justify-center">
                <img
                  src={`../assets/img/${image}`}
                  alt=""
                  className="h-full rounded-lg w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="pt-20 2xl:px-16">
        <Services />
      </div>
      <Newsletter />
    </>
  );
};

export default SeeMore;
