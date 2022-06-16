import { FaBed } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import RoomOptions from "./RoomOptions";
import { motion } from "framer-motion";
import { RiArrowDropDownLine } from "react-icons/ri";
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
  const optionsHandler = (type: string, increase: boolean) => {
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
  };
  return (
    <div className="w-[90%] h-48 md:h-12 rounded-lg flex flex-col md:flex-row items-center justify-between gap-5 md:gap-3 absolute top-72 bottom-0 border-2 bg-yellow-500 border-yellow-500  py-5 pl-2">
      <motion.div
        whileHover={{ scale: 0.95 }}
        className="flex items-center h-10 w-[30%] justify-start gap-2 px-2 bg-white  md:mt-0"
      >
        <FaBed className="text-gray-200 text-2xl" />
        <input
          type="search"
          className="text-base border-none outline-none placeholder:text-gray-300 w-[90%]"
          placeholder="where are you going to?"
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 0.95 }}
        className="flex items-center h-10 w-[30%] justify-center gap-2 bg-white  px-2 cursor-pointer"
      >
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
            className="hidden absolute top-[100px] md:top-[45px]"
          />
        )}
      </motion.div>
      <motion.div
        whileHover={{ scale: 0.95 }}
        className="group cursor-pointer flex items-center h-10 w-[30%] justify-center gap-2 bg-white  px-2"
      >
        <GiPerson className="text-gray-200 text-2xl" />
        <p className="text-base border-none outline-none text-gray-300">{`${options.adults} adults ${options.children} children ${options.rooms} room`}</p>
        <RoomOptions options={options} optionsHandler={optionsHandler} />
        <RiArrowDropDownLine className="border-none outline-none text-xl cursor-pointer text-blue-700" />
      </motion.div>
      <div className="w-full md:w-auto flex items-center justify-center gap-2  h-full px-2 mb-6 md:mb-0">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-blue-500 hover:bg-blue-700 border border-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full md:w-auto"
        >
          Search
        </motion.button>
      </div>
    </div>
  );
};

export default QuickSearch;
