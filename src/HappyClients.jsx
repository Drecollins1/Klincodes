import React, { useState } from "react";

const HappyClients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: "../assets/bg1.png",
      testimonial:
        "So I was looking for a janitor to take care of a new apartment I was just about moving into, and a friend recommended them to me. They did absolutely amazing. Thank you Klin-Code.",
      name: "Queen Okon",
    },
    {
      id: 2,
      image: "../assets/bg2.png",
      testimonial:
        "Outstanding service for deep cleaning and fumigation, would recommend to anyone, give them a try and thank me later!...",
      name: "Mayowa Odesanya",
    },
    {
      id: 3,
      image: "../assets/bg3.jpg",
      testimonial:
        "I employed the services of Klin-Code Limited in residential move-in cleaning and they absolutely delivered. Their conduct was super professional and they were really nice, Kudos!",
      name: "Tosin Adebowale",
    },
    {
      id: 4,
      image: "../assets/bg4.jpeg",
      testimonial:
        "I absolutely love the deep cleaning service they provided at my place. They did an excellent job, and I would highly recommend this cleaning company to anyone.",
      name: "paul esemibo",
    },
    {
      id: 5,
      image: "../assets/bg5.jpg",
      testimonial:
        "I love the services(fumigation and cleaning ) you rendered at my place is so excellent and something different from the usual, I therefore recommend your services to everyone.",
      name: "Edward Jacob Cham",
    },
    {
      id: 6,
      image: "../assets/bg6.jpg",
      testimonial: "What a beautiful services rendered. I'm really impressed.",
      name: "Ojolowo Olufemi",
    },
  ];

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  const setsOfSlides = [
    slides.slice(0, 2),
    slides.slice(2, 4),
    slides.slice(4, 6),
  ];

  return (
    <div className="bg-[#EBF0FF] mt-10 flex flex-col">
      <div className="text-center mt-7 lg:mt-10">
        <p className="text-[#047185] text-[16px] leading-7 font-bold">
          Over 150+ successful clients
        </p>
      </div>
      <h2 className="text-center text-xl lg:text-[52px] leading-[62px] font-semibold lg:mt-5">
        Here is what they say about us
      </h2>
      <div className="alumni lg:pt-16 lg:pb-20 pb-10 lg:flex justify-center lg:space-x-16">
        {setsOfSlides[currentIndex].map((slide) => (
          <div
            key={slide.id}
            className="lg:flex items-center justify-between gap-8"
          >
            <div className="flex  justify-center items-center">
              <img
                className="w-[243px] mt-10 lg:mt-0 object-cover rounded-2xl h-[243px]"
                src={slide.image}
                alt="Client Image"
              />
            </div>
            <div className="mt-4 flex flex-col">
              <div className="flex justify-center lg:justify-start space-x-1">
                <img src="../../assets/star.png" alt="" />
                <img src="../../assets/star.png" alt="" />
                <img src="../../assets/star.png" alt="" />
                <img src="../../assets/star.png" alt="" />
                <img src="../../assets/star.png" alt="" />
              </div>
              <p className="lg:w-[346px] font-semibold p-2 lg:p-0 text-[18px] text-[#494849] mt-2 text-center lg:text-start">
                {slide.testimonial}
              </p>
              <p className="mt-1 text-black text-[16px] leading-7 font-bold text-center lg:text-start">
                {slide.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-10 gap-1">
        {setsOfSlides.map((_, index) => (
          <button key={index} onClick={() => handleSlideChange(index)}>
            <img
              src={`../../assets/Ellipse${
                currentIndex === index ? "2" : "1"
              }.png`}
              alt={`Slide Set ${index + 1}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
