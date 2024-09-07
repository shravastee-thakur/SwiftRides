import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center text-sm font-semibold py-6  px-12 shadow-lg ">
        <div>
          <h1 className="text-4xl font-bold">
            <span className="text-[#ff4d30]">Swift</span>Rides
          </h1>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex gap-8">
            <li>HOME</li>
            <li>OUR CARS</li>
            <li>GET APP</li>
            <li>CONTACT</li>
          </ul>
          <div>
            <button className="bg-[#ff4d30] hover:bg-[#f01a1a] text-white px-4 py-1 rounded-full">
              LOGIN
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
