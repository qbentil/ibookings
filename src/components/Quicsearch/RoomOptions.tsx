
const RoomOptions = ({options, optionsHandler}: {options: {adults:number, children:number, rooms:number}, optionsHandler: (type:string, increase:boolean) => void}) => {
  return (
    <div className="absolute hidden group-hover:flex flex-col gap-3 right-18 px-5 py-2 top-[150px] md:top-[45px] bg-white text-gray-600 rounded-lg shadow-xl w-80">
    <div className="flex justify-between">
      <p>Adult</p>
      <div className=" flex justify-between gap-5 w-[38%]">
        <button
          className="border border-[#0071c2] rounded-sm w-6 h-6 text-[#0071c2]"
          onClick={() => optionsHandler("adults", false)}
        >
          -
        </button>
        <p>{options.adults}</p>
        <button 
          className="border border-[#0071c2] rounded-sm w-6 h-6 text-[#0071c2]" 
          onClick={() => optionsHandler("adults", true)}
        >
          +
        </button>
      </div>
    </div>
    <div className="flex justify-between">
      <p>Children</p>
      <div className=" flex justify-between gap-5 w-[38%]">
        <button
          className="border border-[#0071c2] rounded-sm w-6 h-6 text-[#0071c2]"
          onClick={() => optionsHandler("children", false)}
        >
          -
        </button>
        <p>{options.children}</p>
        <button className="border border-[#0071c2] rounded-sm w-6 h-6 text-[#0071c2]"
          onClick={() => optionsHandler("children", true)}
        >
          +
        </button>
      </div>
    </div>
    <div className="flex justify-between">
      <p>Room</p>
      <div className=" flex justify-between gap-5 w-[38%]">
        <button
          className="border border-[#0071c2] rounded-sm w-6 h-6 text-[#0071c2]"
          onClick={() => optionsHandler("rooms", false)}
        >
          -
        </button>
        <p>{options.rooms}</p>
        <button className="border border-[#0071c2] rounded-sm w-6 h-6 text-[#0071c2]"
      
        >
          +
        </button>
      </div>
    </div>
  </div>
  )
}

export default RoomOptions