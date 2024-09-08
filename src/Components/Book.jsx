import React, { useState } from "react";

const Book = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState(0);

  const calculateDays = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end - start); // abs is absolute value
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
      setDays(diffDays);
    } else {
      setDays(0); // Reset if either date is not selected
    }
  };

  return (
    <div className="md:w-full lg:w-10/12 h-auto md:h-auto mx-auto -my-12 z-auto bg-orange-200 rounded-lg p-9">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8 justify-center items-center">
        <div className="flex flex-col">
          <label>Pick-up</label>
          <select className="bg-white border border-slate-300 py-1 px-1 md:py-2 md:px-4 rounded-lg">
            <option>Select your location</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>Drop-off</label>
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
            className="bg-white border border-slate-300 py-1 px-5 md:py-2 md:px-4 rounded-lg"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label>End Date</label>
          <input
            className="bg-white border border-slate-300 py-1 px-5 md:py-2 md:px-4 rounded-lg"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="md:grid md:col-span-2 lg:grid lg:col-span-1">
          <div className="flex justify-center">
            <button
              className="bg-[#ff4d30] hover:bg-[#f01a1a] text-white mt-6 px-12 py-2 rounded-lg"
              onClick={calculateDays}
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
      {days > 0 && (
        <div className="flex justify-center mt-4">
          <p className="font-semibold">Total Days: {days}</p>
        </div>
      )}
    </div>
  );
};

export default Book;
