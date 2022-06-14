import { Avatar } from "../../Assets";
import DropDown from "./UserDropdown";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion"

const Useractions = ({user, action}: {user: any, action: () => void}) => {
    const logout = () => {}
    return (
        <div className={`group flex items-center gap-3 px-3 py-1 rounded-lg`}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className=" flex items-center justify-center"
        >
          <img
            src={user?.photoURL || Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer"
            alt="profile"
          />
          <p className="text-headerColor cursor-pointer flex items-center justify-center gap-2">
            <RiArrowDropDownLine />
          </p>
        </motion.div>
        <DropDown user={user} action={logout} />
      </div>
    )
}

export default Useractions