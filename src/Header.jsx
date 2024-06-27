import { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    handleScroll();
    closeMenu();
  };

  const handleScroll = () => {
    const event = new CustomEvent("scrollToServices");
    window.dispatchEvent(event);
  };

  return (
    <>
      <header className="bg-white shadow-sm fixed top-0 w-[100%] z-50">
        <nav className="flex space-x-4 justify-between items-center p-4 md:px-16">
          <div>
            <Link to="/">
              <img
                className="w-[127px] h-[72px]"
                src="../assets/logobg.png"
                alt=""
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <ul className="hidden lg:flex items-center mt-2 space-x-10 font-semibold">
                <li>
                  <Link to="/" className=" text-gray-500 hover:text-black">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className=" text-gray-500 hover:text-black">
                    About Us
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleScroll}
                    className=" text-gray-500 hover:text-black"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className=" text-gray-500 hover:text-black"
                  >
                    Gallery
                  </Link>
                </li>
                <a href="https://wa.link/o1uify">
                  <button className="bg-blue-950 hover:bg-transparent duration-500 hover:text-blue-950 hover:border hover:border-blue-950 text-slate-100 p-2 rounded-full px-10">
                    Call Us
                  </button>
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="lg:hidden">
        {isOpen && (
          <button
            className="fixed top-4 right-2 z-50 w-8 h-8 border border-transparent rounded flex items-center justify-center focus:outline-none"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        {!isOpen && (
          <button
            className="fixed top-4 right-2 z-50 w-8 h-8 bg-transparent border border-transparent rounded flex items-center justify-center focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        )}

        <div
          className={`fixed inset-0 z-40 bg-gray-900 transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ width: isOpen ? "100%" : "" }}
        >
          <div className="flex flex-col p-3 h-full">
            <ul className="flex flex-col mt-24 gap-4 p-3 text-white hover:text-sky-500 z-50">
              <li>
                <Link
                  to="/"
                  className="text-white text-2xl font-semibold hover:text-black"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white text-2xl font-semibold hover:text-black"
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <button
                  onClick={handleClick}
                  className="text-white text-2xl font-semibold hover:text-black"
                >
                  Services
                </button>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-white text-2xl font-semibold hover:text-black"
                  onClick={closeMenu}
                >
                  Gallery
                </Link>
              </li>
            </ul>
            <div className="flex justify-center mt-10">
              <Link
                to="/booknow"
                className="text-white mx-auto max-w-7xl p-3 px-8 lg:px-16 hover:bg-blue-950 border bg-transparent rounded-full"
                onClick={closeMenu}
              >
                Book Your Cleaning Now
              </Link>
            </div>
            <div className="flex justify-center mt-5">
              <a href="https://wa.link/o1uify">
                <Link
                  to="/booknow"
                  className="text-white p-3 px-24 lg:px-16 hover:bg-blue-950 border bg-transparent rounded-full"
                  onClick={closeMenu}
                >
                  Call Us
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
