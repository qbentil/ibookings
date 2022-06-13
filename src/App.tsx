import './App.css';
import "react-toastify/dist/ReactToastify.css";
import {Routes, Route} from 'react-router-dom';
import { Home } from './pages';
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <ToastContainer />
      <div className="w-screen h-auto min-h-[100vh] flex flex-col bg-primary">
        {/* Navbar */}
        <main className="mt-16 md:mt-16 px-3 md:px-8 md:py-6 py-4 w-full h-auto">
          {/* Routes */}
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>

        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
