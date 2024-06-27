import React, { useEffect, useRef, useState } from "react";

function Services() {
  const servicesContainerRef = useRef(null);
  const servicesContainerScrollRef = useRef(null);

  const [scrollAmount, setScrollAmount] = useState(0);

  const handleScroll = (scrollOffset) => {
    const newScrollAmount = scrollAmount + scrollOffset;
    servicesContainerScrollRef.current.scrollTo({
      left: newScrollAmount,
      behavior: "smooth",
    });
    setScrollAmount(newScrollAmount);
  };

  useEffect(() => {
    const handleScrollToServices = () => {
      if (servicesContainerRef.current) {
        const offsetTop =
          servicesContainerRef.current.getBoundingClientRect().top +
          window.pageYOffset -
          100;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    };

    window.addEventListener("scrollToServices", handleScrollToServices);

    return () => {
      window.removeEventListener("scrollToServices", handleScrollToServices);
    };
  }, []);

  return (
    <div
      ref={servicesContainerRef}
      id="services-section"
      className="xl:px-20 mb-10 p-5 scroll"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-3xl my-5 lg:my-0 font-semibold lg:text-left">
          Our Services
        </h2>
        <div className="hidden md:flex justify-center items-center space-x-8">
          <div>
            <button
              className="border-2 w-10 h-10 border-black rounded-[50%] hover:bg-[#68CA05] hover:border-none duration-700 p-3 flex"
              onClick={() => handleScroll(-500)}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </div>
          <div>
            <button
              className="border-2 w-10 h-10 border-black rounded-[50%] hover:bg-[#68CA05] hover:border-none duration-700 p-3 flex"
              onClick={() => handleScroll(500)}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <img className="w-16 md:hidden" src="../../assets/lordgif.gif" alt="" />
      </div>
      <div
        className="flex overflow-x-scroll lg:w-full p-2 gap-4 justify-left mt-5 space-x-3"
        ref={servicesContainerScrollRef}
      >
        <div className="flex-none lg:w-[260px] w-[320px] bg-[#EFF2EF] rounded-2xl shadow-md p-2">
          <div className="flex justify-center items-center">
            <img
              src="../../assets/Services/serv1.png"
              alt="Deep Cleaning"
              className="rounded-lg mb-4 w-80 lg:w-full"
            />
          </div>
          <h3 className="text-lg font-semibold my-2">Deep Cleaning</h3>
          <p className="text-[15px] leading-[18px]">
            Get a thorough cleaning with our deep cleaning services, leaving
            your space sparkling and...
          </p>
        </div>
        <div className="flex-none lg:w-[260px] w-[320px] bg-[#EFF2EF] rounded-2xl shadow-md p-2">
          <div className="flex justify-center items-center">
            <img
              src="../../assets/Services/serv3.png"
              alt="Pest Control"
              className="w-80 lg:w-full rounded-lg mb-4"
            />
          </div>
          <h3 className="text-lg font-semibold my-2">Fumigation Service</h3>
          <p className="text-[15px] leading-[18px]">
            Complete fumigation solutions to eradicate even the toughest
            pests...
          </p>
        </div>
        <div className="flex-none lg:w-[260px] w-[320px] bg-[#EFF2EF] rounded-2xl shadow-md p-2">
          <div className="flex justify-center items-center">
            <img
              src="../../assets/Services/serv4.png"
              alt="Pest Control"
              className="w-80 object-contain lg:w-full rounded-lg mb-1"
            />
          </div>
          <h3 className="text-lg font-semibold my-2">Pest Control</h3>
          <p className="text-[15px] leading-[18px]">
            Eliminate unwanted critters with our effective pest control
            solutions. Our expert technicians use...
          </p>
        </div>
        <div className="flex-none lg:w-[260px] w-[320px] bg-[#EFF2EF] rounded-2xl shadow-md p-2">
          <div className="flex justify-center items-center">
            <img
              src="../../assets/Services/serv5.png"
              alt="Upholstery and Carpet Cleaning"
              className="rounded-lg mb-4 w-80 lg:w-full"
            />
          </div>
          <h3 className="text-lg font-semibold my-2">
            Upholstery and Carpet Cleaning
          </h3>
          <p className="text-[15px] leading-[18px]">
            Revive your furniture and floor with our expert upholstery and
            carpet cleaning services...
          </p>
        </div>
        <div className="flex-none lg:w-[260px] w-[320px] bg-[#EFF2EF] rounded-2xl shadow-md p-2">
          <div className="flex justify-center items-center">
            <img
              src="../../assets/janitor.png"
              alt="Pest Control"
              className="w-80 lg:w-full rounded-lg mb-4"
            />
          </div>
          <h3 className="text-lg font-semibold my-2">Janitorial Service</h3>
          <p className="text-[15px] leading-[18px]">
            Complete janitorial service that leave your space spotless and
            sparkling.
          </p>
        </div>

        <div className="flex-none lg:w-[260px] w-[320px] bg-[#EFF2EF] rounded-2xl shadow-md p-2">
          <div className="flex justify-center items-center">
            <img
              src="../../assets/retail.png"
              alt="Retail and Commercial Cleaning"
              className="rounded-lg mb-4 w-80 lg:w-full"
            />
          </div>
          <h3 className="text-lg font-semibold my-2">
            Retail and Commercial Cleaning
          </h3>
          <p className="text-[15px] leading-[18px]">
            Keep your business shining with our expert retail and commercial
            cleaning services...
          </p>
        </div>

        <div className="flex-none lg:w-[260px] w-[320px] bg-[#EFF2EF] rounded-2xl shadow-md p-2">
          <div className="flex justify-center items-center">
            <img
              src="../../assets/Services/facade.png"
              alt="Fumigation Service"
              className="rounded-lg mb-4 w-80 lg:w-full"
            />
          </div>
          <h3 className="text-lg font-semibold my-2">Facade Cleaning</h3>
          <p className="text-[15px] leading-[18px]">
            Restore your building exterior with our specialized facade cleaning
            services...
          </p>
        </div>
        <div className="flex-none lg:w-[260px] w-[320px] bg-[#EFF2EF] rounded-2xl shadow-md p-2">
          <div className="flex justify-center items-center">
            <img
              src="../../assets/Services/serv2.png"
              alt="Retail and Commercial Cleaning"
              className="rounded-lg mb-4 w-80 lg:w-full"
            />
          </div>
          <h3 className="text-lg font-semibold my-2">Specialized Cleaning </h3>
          <p className="text-[15px] leading-[18px]">
            Trust us with your unique cleaning challenges...
          </p>
        </div>

        <div className="flex-none lg:w-[260px] w-[320px] bg-[#EFF2EF] rounded-2xl shadow-md p-2">
          <div className="flex justify-center items-center">
            <img
              src="../../assets/Services/industry.png"
              alt="Deep Cleaning"
              className="rounded-lg mb-4 w-80 lg:w-full"
            />
          </div>
          <h3 className="text-lg font-semibold my-2">Industrial Cleaning</h3>
          <p className="text-[15px] leading-[18px]">
            Keep your facilities running smoothly with our expert industrial
            cleaning services. from factories to warehouse...
          </p>
        </div>
        <div className="flex-none lg:w-[260px] w-[320px] bg-[#EFF2EF] rounded-2xl shadow-md p-2">
          <div className="flex justify-center items-center">
            <img
              src="../../assets/Services/post.png"
              alt="Deep Cleaning"
              className="rounded-lg mb-4 w-80 lg:w-full"
            />
          </div>
          <h3 className="text-lg font-semibold my-2">Post construction  Cleaning</h3>
          <p className="text-[15px] leading-[18px]">
            Keep your newly built facilities spotless and ready for occupancy
            with our expert post-construction cleaning services.
          </p>
        </div>
        <div className="flex-none lg:w-[260px] w-[320px] bg-[#EFF2EF] rounded-2xl shadow-md p-2">
          <div className="flex justify-center items-center">
            <img
              src="../../assets/disinfection.png"
              alt="Deep Cleaning"
              className="rounded-lg mb-4 w-80 lg:w-full"
            />
          </div>
          <h3 className="text-lg font-semibold my-2">Disinfection</h3>
          <p className="text-[15px] leading-[18px]">
            Keep your facilities germ-free and running smoothly with our expert
            disinfection services.
          </p>
        </div>
        <div className="flex-none lg:w-[260px] w-[320px] bg-[#EFF2EF] rounded-2xl shadow-md p-2">
          <div className="flex justify-center items-center">
            <img
              src="../../assets/Services/aircraft.png"
              alt="Deep Cleaning"
              className="rounded-lg mb-4 w-80 lg:w-full"
            />
          </div>
          <h3 className="text-lg font-semibold my-2">Aircraft Cleaning</h3>
          <p className="text-[15px] leading-[18px]">
            Ensure a safe and sanitary environment for passenger and crew with
            our comprehensive aircraft cleaning services...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
