import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center">
      <div className="w-2/3 px-20">
        <h1 className="text-5xl font-bold">Get Moving with SwiftRides</h1>
        <h3 className="text-lg mt-4">
          Fast, reliable, and flexible car rentals at your fingertips. Find your
          ride in minutes and hit the road with ease.
        </h3>
        <div>
          <button className="bg-[#ff4d30] text-white px-4 py-2 mt-4 rounded-md">
            Book Ride
          </button>
        </div>
      </div>
      <div className="w-full flex relative  min-h-screen">
        <div className="z-30 absolute w-[1500px] top-20 h-auto">
          <img src="/images/harrier.png" />
        </div>
        <div className="bg-[#d2c924] -z-10 w-2/3 min-h-screen absolute right-0 top-0"></div>
      </div>
    </section>
  );
};

export default Hero;
