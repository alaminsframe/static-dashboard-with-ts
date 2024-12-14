import { useState } from "react";
import { VscHome } from "react-icons/vsc";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { AiTwotoneAppstore } from "react-icons/ai";
import { RiBox1Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { TfiShoppingCart } from "react-icons/tfi";
import { CiDeliveryTruck } from "react-icons/ci";

const SideBar = () => {
  const [Open, setOpen] = useState(true);
  const Items= [
    {
      title:'Categories',
      icon: AiTwotoneAppstore,
    },
    {
      title:'Products',
      icon: RiBox1Line,
    },
    {
      title:'Customers',
      icon: IoPersonOutline,
    },
    {
      title:'Orders',
      icon: TfiShoppingCart,
    },
    {
      title:'Deliveries',
      icon: CiDeliveryTruck,
    }
  ]

  return (
    <>
      <div className={`relative bg-white h-screen border-r-2 px-[11px] md:px-[23px] py-5 duration-300 ${Open ? "w-16 md:w-80" : "w-16 md:w-24"}`}>
        <button onClick={() =>  setOpen(!Open)} className="absolute hidden md:block -right-[60px] z-10">
          <HiOutlineBars3BottomLeft size={28} className={``} /> 
        </button>
          
        <div className="space-y-5">
          <div className={`flex items-center gap-x-3`}>
            <img src="./src/assets/site-logo.svg" className={`cursor-pointer md:h-10 duration-300 ${Open ? 'rotate-[360deg]':''}`} alt="" />
            <span className={`"space-y-1 md:block hidden`}>
              <h3 className={`font-sans text-md font-black origin-left whitespace-nowrap duration-300 ${!Open && "scale-0"}`}>
                Wecommerce
              </h3>
              <p className={`font-sans text-xs font-medium tracking-wide origin-left whitespace-nowrap duration-300 ${!Open && "scale-0"}`}>
                Admin Dashboard
              </p>
            </span>
          </div>
          <div className={`flex items-center gap-3 rounded-full ${Open ? "bg-[#8B5CF6]/10 ":""}`}>
            <div>
              <VscHome className='bg-[#8B5CF6] fill-white h-10 w-10 md:h-12 md:w-12 rounded-full p-2 md:p-3'/>
            </div>
            <p className={`font-sans text-[#8B5CF6] text-sm font-medium tracking-wide origin-left duration-300 md:block hidden ${!Open && "scale-0"}`}>Dashboard</p>
          </div>
        </div>
        <div className="mt-4 space-y-4">
          <p className={`ml-3 font-sans text-xs font-medium tracking-wide uppercase origin-left duration-300 md:block hidden ${!Open && "scale-0"}`}>Resources</p>
          <ul className="">
            {Items.map( (item,index)=>(
              <li key={index} className={`flex items-center gap-x-6 rounded-full hover:bg-[#8B5CF6]/10 cursor-pointer p-2 md:p-3`}>
                <div>
                  <item.icon size={35} className="h-6 w-6 rounded-full "/>
                </div>
                
                <span className={`font-poppins text-sm origin-left duration-300 md:block hidden ${!Open && "scale-0"}`}>
                  {item.title}
                </span>
              </li>
            ) )}
          </ul>
        </div>
      </div>
        
    
    </>
  )
}

export default SideBar
