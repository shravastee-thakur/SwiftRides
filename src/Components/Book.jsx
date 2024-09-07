import React, { useState } from "react";

const Book = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState(0);

  const calculateDays = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
      setDays(diffDays);
    } else {
      setDays(0); // Reset if either date is not selected
    }
  };

  return (
    <div className="w-10/12 h-40 mx-auto -my-12 z-auto bg-orange-200 rounded-lg p-9">
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
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label>End Date</label>
          <input
            className="bg-white border border-slate-300 py-1 px-1 md:py-2 md:px-4 rounded-lg"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div>
          <button
            className="bg-[#ff4d30] text-white px-12 py-2 rounded-lg"
            onClick={calculateDays}
          >
            Search
          </button>
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
