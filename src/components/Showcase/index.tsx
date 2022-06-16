import QuickSearch from "../Quicsearch";

const Showcase = () => {
  return (
    <div className="w-full md:w-[99%] bg-blue-700 h-80 flex flex-col items-center justify-center relative mx-auto mt-5 md:mt-0">
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
      <QuickSearch />
    </div>
  );
};

export default Showcase;
