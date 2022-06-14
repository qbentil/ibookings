
import {motion} from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Useractions from './Useraction';
import LoginAction from './Loginaction';
import Navigations from '../Navigations';

const Navbar = () => {
  const [user, setUser] = useState(null)
  
  const logout = () => {
    setUser(null)
  }
  return (
    <div className="w-full z-50  flex flex-col gap-3 md:gap-6 justify-center items-center backdrop-blur-md md:p-3 md:px-4 lg:p-6 lg:px-16">
        {/* desktop & Tablet view */}
        <div className="flex w-full md:w-[80%] justify-between  py-2 px-5 md:p-0 items-center">
        <Link to={"/"}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            {/* <img src={Logo} alt="Logo" className="md:w-6 lg:w-8 object-cover" /> */}
            <p className="text-headerColor font-brand text-xl lg:text-2xl font-bold">
              i<span className='text-blue-800'>Bookings</span>
            </p>
          </motion.div>
        </Link>

        {
          user ? <Useractions user={user} action={logout} />: <LoginAction text='Login'  />
        }
        </div>
        <Navigations />
    </div>
  )
}

export default Navbar