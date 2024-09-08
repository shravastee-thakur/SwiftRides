import React, { useState } from "react";
import { CarData } from "../Data/CarData";

const Fleet = () => {
  const [tab, setTab] = useState(1);

  const activeTab = (tabNumber) => {
    setTab(tabNumber);
  };

  const Hatchback = CarData.filter((car) => car.type === "Hatchback");
  const Sedan = CarData.filter((car) => car.type === "Sedan");
  const Muv = CarData.filter((car) => car.type === "Muv");
  const Suv = CarData.filter((car) => car.type === "Suv");

  const data =
    tab === 2
      ? Hatchback
      : tab === 3
      ? Sedan
      : tab === 4
      ? Muv
      : tab === 5
      ? Suv
      : CarData;
  return (
    <section className="mt-24">
      <h4 className="text-center font-semibold">
        Discover the SwiftRides Fleet
      </h4>
      <h1 className="text-center text-3xl md:text-4xl font-bold">Our Rental Fleets</h1>

      <div className="flex flex-wrap gap-3 md:gap-8 justify-center items-center mt-8">
        <div
          className="cursor-pointer font-semibold"
          style={{ borderBottom: tab === 1 ? "2px solid red" : "white" }}
          onClick={() => setTab(1)}
        >
          Show All
        </div>
        <div
          className="cursor-pointer font-semibold"
          style={{ borderBottom: tab === 2 ? "2px solid red" : "white" }}
          onClick={() => setTab(2)}
        >
          Hatchback
        </div>
        <div
          className="cursor-pointer font-semibold"
          style={{ borderBottom: tab === 3 ? "2px solid red" : "white" }}
          onClick={() => setTab(3)}
        >
          Sedan
        </div>
        <div
          className="cursor-pointer font-semibold"
          style={{ borderBottom: tab === 4 ? "2px solid red" : "white" }}
          onClick={() => setTab(4)}
        >
          MUV
        </div>
        <div
          className="cursor-pointer font-semibold"
          style={{ borderBottom: tab === 5 ? "2px solid red" : "white" }}
          onClick={() => setTab(5)}
        >
          SUV
        </div>
      </div>

      <div className="mt-12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-20">
        {data &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                className="border border-slate-300 w-[250px] md:w-[350px] my-4 flex flex-col justify-between"
              >
                <div className="w-[250px] md:w-[349px]">
                  <img src={item.carImage} alt="" />
                </div>
                <div className="text-center flex-grow">
                  <h1 className="text-2xl font-bold text-red-800">
                    {item.carTitle}
                  </h1>
                  <p className="text-blue-900 font-bold mt-6">
                    ₹ {item.pricePerDay.toLocaleString()} /- per day
                  </p>
                </div>
                <div className="flex justify-around mt-4">
                  <div className="">
                    <button className="bg-orange-600 rounded-md py-1 px-12 font-semibold text-white">
                      Rent
                    </button>
                  </div>
                  <div className="">
                    <button className="bg-orange-400 rounded-md py-1 px-8 font-semibold text-white">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Fleet;
