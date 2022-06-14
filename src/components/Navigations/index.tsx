import { FaBed, FaCar, FaCarAlt } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { SiHomeadvisor } from "react-icons/si";
import { motion } from "framer-motion";
const Navigations = () => {
  return (
    <div className="w-full md:w-[85%] flex gap-2 px-5 md:px-5 items-center md:justify-start overflow-x-scroll scrollbar-hidden">
      <motion.div
        whileTap={{ scale: 1.1 }}
        className="min-w-[150px]  h-8 md:h-10 px-2 md:px-5 text-blue-700 hover:text-white hover:bg-blue-700 transition-all ease-in-out duration-150 rounded-full border-[1.2px] border-blue-700 flex items-center justify-center gap-2 cursor-pointer "
      >
        <FaBed className="md:text-2xl text-base" />
        <p className="text-sm">Stay</p>
      </motion.div>
      <motion.div
        whileTap={{ scale: 1.1 }}
        className="min-w-[150px]  h-8 md:h-10 px-2 md:px-5 text-blue-700 rounded-full border-[1.2px] border-blue-700 hover:text-white hover:bg-blue-700 transition-all ease-in-out duration-150 flex items-center justify-center gap-2 cursor-pointer "
      >
        <GiCommercialAirplane className="md:text-2xl text-base" />
        <p className="text-sm">Flight</p>
      </motion.div>
      <motion.div
        whileTap={{ scale: 1.1 }}
        className="min-w-[150px]  h-8 md:h-10 px-2 md:px-5 text-blue-700 rounded-full border-[1.2px] border-blue-700 hover:text-white hover:bg-blue-700 transition-all ease-in-out duration-150 flex items-center justify-center gap-2 cursor-pointer "
      >
        <FaCar className="md:text-2xl text-base" />
        <p className="text-sm">Car rentals</p>
      </motion.div>
      <motion.div
        whileTap={{ scale: 1.1 }}
        className="min-w-[150px]  h-8 md:h-10 px-2 md:px-5 text-blue-700 rounded-full border-[1.2px] border-blue-700 hover:text-white hover:bg-blue-700 transition-all ease-in-out duration-150 flex items-center justify-center gap-2 cursor-pointer "
      >
        <SiHomeadvisor className="md:text-2xl text-base" />
        <p className="text-sm">Attractions</p>
      </motion.div>
      <motion.div
        whileTap={{ scale: 1.1 }}
        className="min-w-[150px]  h-8 md:h-10 px-2 md:px-5 text-blue-700 rounded-full border-[1.2px] border-blue-700 hover:text-white hover:bg-blue-700 transition-all ease-in-out duration-150 flex items-center justify-center gap-2 cursor-pointer "
      >
        <FaCarAlt className="md:text-2xl text-base" />
        <p className="text-sm">Airpot taxis</p>
      </motion.div>
    </div>
  );
};

export default Navigations;
