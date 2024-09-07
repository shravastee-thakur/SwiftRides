import React from "react";

const Book = () => {
  return (
    <div className=" w-full">
      <div className="flex gap-8 justify-center items-center">
        <div className="flex flex-col">
          <label>Pick-up *</label>
          <select className="bg-white border border-slate-300 py-1 px-1 md:py-2 md:px-4 rounded-lg">
            <option>Select your location</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>Drop-of *</label>
          <select className="bg-white border border-slate-300 py-1 px-1 md:py-2 md:px-4 rounded-lg">
            <option>Select your location</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label>Start Date</label>
          <input
            className="bg-white border border-slate-300 py-1 px-1 md:py-2 md:px-4 rounded-lg"
            type="date"
          />
        </div>

        <div className="flex flex-col">
          <label>End Date</label>
          <input
            className="bg-white border border-slate-300 py-1 px-1 md:py-2 md:px-4 rounded-lg"
            type="date"
          />
        </div>

        <div>
            <button className="bg-[#ff4d30] text-white px-12 py-2 rounded-lg">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
