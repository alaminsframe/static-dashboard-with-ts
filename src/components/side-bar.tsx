import { useState } from "react";
import menu from "../menus";
import SidebarItems from './sidebar-items';
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";


const SideBar = () => {
  const [open, setopen] = useState(true);
 
  return (
    <>
      <div className={`relative bg-white h-screen border-r-2 px-3 md:px-5 py-5 duration-300 ${open ? "w-16 md:w-80" : "w-16 md:w-24"}`}>
        <button onClick={() =>  setopen(!open)} className="absolute hidden md:block -right-[60px] z-10">
          <HiOutlineBars3BottomLeft size={28} className={``} /> 
        </button>
          
        <div className="space-y-5">
          <div className={`flex items-center gap-x-3`}>
            <img src="./src/assets/site-logo.svg" className={`cursor-pointer md:h-10 duration-300 ${open ? 'rotate-[360deg]':''}`} alt="" />
            <span className={`"space-y-1 md:block hidden`}>
              <h3 className={`font-sans text-md font-black origin-left whitespace-nowrap duration-300 ${!open && "scale-0"}`}>
                Wecommerce
              </h3>
              <p className={`font-sans text-xs font-medium tracking-wide origin-left whitespace-nowrap duration-300 ${!open && "scale-0"}`}>
                Admin Dashboard
              </p>
            </span>
          </div>
          <ul className="space-y-5">

            {menu.map((item, index) => (
              <SidebarItems
                key={index}
                title={item.title}
                icon={item.icon}
                isActive={item.isActive}
                open = {open}
              />
            ))}

          </ul>

        </div>
      </div>
        
    
    </>
  )
}

export default SideBar
