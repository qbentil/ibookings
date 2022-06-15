import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from "react";
import { FaBed, } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { DateRange } from 'react-date-range';
import {format} from 'date-fns';
const Showcase = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [showDate, setShowDate] = useState(false);
  return (
    <div className="w-full md:w-[99%] bg-blue-700 h-80 flex flex-col items-center justify-center relative">
      <div className="w-full p-5 py-10 flex flex-col gap-5 items-center md:items-start justify-center">
        <p className="md:text-3xl text-white font-semibold">
          A lifetime of discounts? It's Genuis.
        </p>
        <p className="text-white">
          Get rewarded for your travels - Unlock instant savings of 10% or more
          with free iBookings account
        </p>
      </div>
      <div className="w-full flex items-start justify-start px-5">
        {/* Action Button */}
        <button className="bg-blue-500 hover:bg-blue-700 border border-blue-500 text-white font-bold py-2 px-4 rounded-full">
          Get Started
        </button>
      </div>
      <div className="w-[90%] h-48 md:h-12 rounded-lg bg-white flex flex-col md:flex-row items-center justify-between gap-5 md:gap-3 absolute top-72 bottom-0 border-2 border-yellow-600  py-5">
          <div className="flex items-center h-full justify-start gap-2 px-2  md:mt-0">
              <FaBed className="text-gray-200 text-2xl" />
              <input type="text" className="text-base border-none outline-none placeholder:text-gray-300" placeholder="where are you going to?" />
          </div>
          <div onClick={() => setShowDate(!showDate)} className="flex items-center justify-center gap-2  h-full px-2">
              <MdDateRange className="text-gray-200 text-2xl cursor-pointer" />
              <p onClick={() => setShowDate(!showDate)} className="text-base border-none outline-none text-gray-300">{`${format(date[0].startDate, "MMMM dd, yyyy")} to ${format(date[0].endDate, "MMMM dd, yyyy")}`}</p>
              {
                showDate && (
                  <DateRange
                  editableDateInputs={true}
                  onChange={(item:any) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="absolute top-[100px] md:top-[45px]"
                />
                )
              }
          </div>
          <div className="flex items-center justify-center gap-2  h-full px-2">
              <GiPerson className="text-gray-200 text-2xl" />
              <p className="text-base border-none outline-none text-gray-300">2 adults 2 children 1 room</p>
          </div>
          <div className="w-full md:w-auto flex items-center justify-center gap-2  h-full px-2 mb-6 md:mb-0">
              <button className="bg-blue-500 hover:bg-blue-700 border border-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full md:w-auto">
              Search
            </button>
          </div>
      </div>
    </div>
  );
};

export default Showcase;
