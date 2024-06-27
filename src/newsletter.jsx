import React from "react";

const Newsletter = () => {
  const subscribe = () => {
    alert("Thank you for Subscribing to our Newsletter");
  };

  return (
    <div>
      <div class="bg-blue-950 lg:flex lg:justify-center rounded-lg my-28 hidden relative overflow-hidden max-w-7xl mx-auto  p-20 px-60">
        <img
          className="absolute top-0 left-0"
          src="../assets/shape.png"
          alt=""
        />
        <div class="relative z-10">
          <h2 class="text-white text-3xl font-semibold mb-10 text-center">
            Subscribe to our newsletter
          </h2>
          <form class="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              required
              placeholder="First name"
              class="flex-1 px-8 py-4 text-white rounded-md border border-zinc-300 outline-none bg-transparent  focus:outline-none focus:ring focus:ring-transparent focus:ring-offset-1  focus:bg-transparent"
            />
            <input
              type="email"
              placeholder="Email address"
              required
              class="flex-1 px-8 py-4 text-white rounded-md border border-zinc-300 outline-none bg-transparent  focus:outline-none focus:ring focus:ring-transparent focus:ring-offset-1  focus:bg-transparent"
            />
            <button
              type="submit"
              onClick={subscribe}
              class="bg-[#68CA05] text-white px-10 py-4 rounded-md hover:bg-blue-600"
            >
              Subscribe Now
            </button>
          </form>
        </div>
        <img
          className="absolute bottom-0 right-0"
          src="../assets/shape2.png"
          alt=""
        />
      </div>

      <div class="bg-blue-950 p-6 relative overflow-hidden lg:hidden">
        <div class="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-r from-blue-500 to-transparent"></div>
        <div class="relative z-10">
          <h2 class="text-white text-2xl font-bold mb-4">
            Subscribe to our newsletter
          </h2>
          <div class="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="First name"
              class="flex-1 px-2 text-white py-2 bg-transparent rounded-md border border-zinc-300 outline-none  focus:outline-none focus:ring focus:ring-transparent focus:ring-offset-2  focus:bg-transparent"
            />
            <input
              type="email"
              placeholder="Email address"
              class="flex-1 px-2 text-white py-2 bg-transparent rounded-md border border-zinc-300  focus:outline-none focus:ring focus:ring-transparent focus:ring-offset-2  focus:bg-transparent"
            />
            <button
              type="submit"
              onSubmit={subscribe}
              class="bg-[#68CA05] text-white px-6 py-2 rounded-md hover:bg-blue-600"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
