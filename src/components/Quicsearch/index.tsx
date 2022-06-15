import { FaBed } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import RoomOptions from "./RoomOptions";
const QuickSearch = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });
  const [showDate, setShowDate] = useState(false);
  const optionsHandler = (type:string, increase:boolean) => {
    if (type === "adults") {
      if (increase) {
        setOptions({ ...options, adults: options.adults + 1 });
      } else {
        if (options.adults > 1) {
          setOptions({ ...options, adults: options.adults - 1 });
        }
      }
    } else if (type === "children") {
      if (increase) {
        setOptions({ ...options, children: options.children + 1 });
      } else {
        if (options.children > 0) {
          setOptions({ ...options, children: options.children - 1 });
        }
      }
    } else if (type === "rooms") {
      if (increase) {
        setOptions({ ...options, rooms: options.rooms + 1 });
      } else {
        if (options.rooms > 1) {
          setOptions({ ...options, rooms: options.rooms - 1 });
        }
      }
    }
  }
  return (
    <div className="w-[90%] h-48 md:h-12 rounded-lg bg-white flex flex-col md:flex-row items-center justify-between gap-5 md:gap-3 absolute top-72 bottom-0 border-2 border-yellow-600  py-5">
    <div className="flex items-center h-full justify-start gap-2 px-2  md:mt-0">
      <FaBed className="text-gray-200 text-2xl" />
      <input
        type="text"
        className="text-base border-none outline-none placeholder:text-gray-300"
        placeholder="where are you going to?"
      />
    </div>
    <div className="flex items-center justify-center gap-2  h-full px-2 cursor-pointer">
      <MdDateRange
        onClick={() => setShowDate(!showDate)}
        className="text-gray-200 text-2xl cursor-pointer"
      />
      <p
        onClick={() => setShowDate(!showDate)}
        className="text-base border-none outline-none text-gray-300"
      >{`${format(date[0].startDate, "MMMM dd, yyyy")} to ${format(
        date[0].endDate,
        "MMMM dd, yyyy"
      )}`}</p>
      {showDate && (
        <DateRange
          editableDateInputs={true}
          onChange={(item: any) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="absolute top-[100px] md:top-[45px]"
        />
      )}
    </div>
    <div className="flex items-center justify-center gap-2  h-full px-2">
      <GiPerson className="text-gray-200 text-2xl" />
      <p onClick={() => setOpenOptions(!openOptions)} className="text-base border-none outline-none text-gray-300">{`${options.adults} adults ${options.children} children ${options.rooms} room`}</p>
        {
          openOptions && (
            <RoomOptions options={options} optionsHandler={optionsHandler} />
          )
        }
    </div>
    <div className="w-full md:w-auto flex items-center justify-center gap-2  h-full px-2 mb-6 md:mb-0">
      <button className="bg-blue-500 hover:bg-blue-700 border border-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full md:w-auto">
        Search
      </button>
    </div>
  </div>
  )
}

export default QuickSearch