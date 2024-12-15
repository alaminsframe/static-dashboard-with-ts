import React from "react";
import { IconType } from "react-icons";
interface MenuItem {
  title: string;
  icon?: IconType;
  isActive?: boolean;
  open?:boolean;
}

export default function SidebarItem({
  title,
  icon,
  isActive,
  open,
}: MenuItem) {

  if (icon) {
    return (
      <>
        <li key={title} className="text-slate-800" onClick={()=>(isActive==true)}>
          <a href="#" className={`relative flex items-center gap-6 duration-300 rounded-full md:p-1 group ${open && "hover:bg-primary/10 data-[active=true]:bg-primary/10 "}`} data-active={isActive}>
            <span className={`data-[active=true]:bg-primary group-hover:bg-primary data-[active=true]:text-white duration-300 rounded-full p-2.5 md:p-3`} data-active={isActive}>
              {React.createElement(icon, {
                className:
                  "h-4 md:h-5 w-4 md:w-5 group-hover:text-white data-[active=true]:text-white duration-300",
                 
              })}
            </span>
            <span className={`text-sm font-medium tracking-wide data-[active=true]:text-primary origin-left group-hover:text-primary duration-300 hidden md:block ${!open && "scale-0"}`} data-active={isActive}>
              {title}
            </span>

            <span className={`text-[10px] md:text-xs text-white font-poppins data-[active=true]:hidden ${open ? "hidden" : "absolute left-[50px] md:left-[65px] bg-primary/90 rounded p-1 -translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 duration-300 "} `} data-active={isActive}>
              {title}
            </span>
          </a>
        </li>
      </>
      
    );
  }

  return <li className={`pt-2 text-slate-700 uppercase font-medium tracking-wide origin-left duration-300 hidden md:block ${open ? "text-xs ps-4":" text-[10px]"}`}>{title}</li>;
}
