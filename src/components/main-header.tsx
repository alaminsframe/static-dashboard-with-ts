
import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const MainHeader = () => {
    const [IsOpen, setIsOpen] = useState(false);

  return (
    <>
        <div className="">
            <div className="bg-white drop-shadow-md py-5 flex justify-end items-center px-5 md:px-12 gap-5 md:gap-12">
                <button className="relative">
                    <div className="">
                        <FaRegBell size={20} color="gray" />
                    </div>
                    <span className="absolute -top-1 -right-1 bg-[#8B5CF6] rounded-full h-4 w-4 text-[10px] text-white flex justify-center items-center">3</span>
                </button>
                <div className="relative">
                    <button onClick={() => setIsOpen(!IsOpen)} className="flex items-center gap-1.5 font-poppins font-medium text-sm ">
                        Admin

                        <MdOutlineKeyboardArrowDown size={17} className={`fill-gray-500 duration-300 ${IsOpen ? "rotate-180": ""}
                        `}/>
                    </button>

                   
                    {IsOpen && (
                         <div className="absolute top-8 -left-4 bg-white text-xs md:text-sm font-poppins shadow-lg w-24 divide-y rounded">
                            <button className="py-1.5 md:py-1 px-3 w-full mx-auto hover:bg-[#8B5CF6] hover:text-white hover:rounded duration-300"> 
                            Settings
                            </button> 
                            <button className="py-1.5 md:py-1 px-3 w-full mx-auto hover:bg-[#8B5CF6] hover:text-white hover:rounded duration-300"> 
                            Profile
                            </button> 
                            <button className="py-1.5 px-3 w-full mx-auto text-red-600 hover:bg-[#8B5CF6] hover:text-white hover:rounded duration-300"> 
                            Log Out
                            </button> 
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>
  )
}

export default MainHeader
