import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white  w-full text-zinc-600 p-10">
      <div className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto flex-wrap">
        <div className="mb-8 lg:mb-0">
          <img src="../assets/logobg.png" alt="Logo" className="mb-4" />
          <p className="font-[400] w-full lg:w-[344px] text-sm flex flex-col my-5 lg:my-0 gap-2">
            Transforming spaces <br /> One Clean at a Time
          </p>
          <div className="flex space-x-4 mt-4 ">
            <a
              href="https://www.linkedin.com/in/klin-code-professional-services-1b3506192/"
              className="text-zinc-600 hover:text-zinc-800"
            >
              <i
                class="fa-brands fa-linkedin fa-xl"
                style={{ color: "#126BC4" }}
              ></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61556926994538&mibextid=ZbWKwL"
              className="text-zinc-600 hover:text-zinc-800"
            >
              <i
                class="fa-brands fa-facebook fa-xl"
                style={{ color: "#4833e6" }}
              ></i>
            </a>
            <a
              href="https://www.instagram.com/klin_code?igsh=Y243YXV0aDFucmJy"
              className="text-zinc-600 hover:text-zinc-800"
            >
              <i class="fa-brands fa-instagram fa-xl"></i>
            </a>
            <a
              href="https://www.youtube.com/@Klin_CodeLimited"
              className="text-zinc-600 hover:text-zinc-800"
            >
              <i class="fa-brands fa-youtube fa-xl"></i>
            </a>
          </div>
        </div>
        <div className="mb-8 lg:mb-0">
          <h3 className="font-bold text-blue-600 mt-5 lg:mt-0 mb-7">
            SERVICES
          </h3>
          <ul className="text-sm  font-[400] flex flex-col my-5 lg:my-0 gap-2">
            <li>Pest Control</li>
            <li>Deep Cleaning</li>
            <li>Janitorial service</li>
            <li>Fumigation service</li>
            <li>Residential Cleaning</li>
            <li>Post Construction Cleaning</li>
            <li>Disinfection/Decontamination</li>
            <li>Upholstery and carpet cleaning</li>
            <li>Retail and commercial cleaning</li>
          </ul>
        </div>
        <div className="mb-8 lg:mb-0">
          <h3 className="font-bold text-blue-600 mt-5 lg:mt-0 mb-7">
            LOCATION
          </h3>
          <p className="text-sm font-[400]">
            20, Akinremi Street, Anifowoshe, Ikeja
          </p>
          <p>Lagos state.</p>
        </div>
        <div>
          <h3 className="font-bold text-blue-600 mt-5 lg:mt-0 mb-7">HELP</h3>
          <ul className="text-sm font-[400] flex flex-col my-5 lg:my-0 gap-2">
            <p className="flex items-center font-[400] text-sm">
              <span className=" flex items-center justify-center w-8 h-8 rounded-full">
                <i className=" fa-solid fa-phone"></i>
              </span>
              +234 903 700 5202
            </p>
            <p className="flex items-center font-[400] text-sm">
              <span className=" flex items-center justify-center w-8 h-8 rounded-full">
                <i className=" fa-solid fa-envelope"></i>
              </span>
              Klincode0@gmail.com
            </p>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-200 mt-8 pt-4 text-center text-sm">
        <p>© Copyright 2024, All Rights Reserved by Kiln-code</p>
      </div>
    </footer>
  );
};

export default Footer;
