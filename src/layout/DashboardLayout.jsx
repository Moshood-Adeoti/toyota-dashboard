import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import tesla from '../assets/tesla.png'
import { MdOutlineDashboardCustomize } from "react-icons/md"
import { MdOutlineStorefront } from "react-icons/md"
import { MdOutlineShoppingBag } from "react-icons/md"
import { MdOutlineMessage } from "react-icons/md"
import { MdOutlinePeople } from "react-icons/md"
import { MdOutlineSettings } from "react-icons/md"
import { allPaths } from '../path'
import { SiToyota } from "react-icons/si";


const menuListOne = [
  { name: "Dashboard",   icon: <MdOutlineDashboardCustomize />, to: allPaths.dashboard },
  { name: "Marketplace", icon: <MdOutlineStorefront />,         to:  allPaths.marketplace },
  { name: "Todo List",    icon: <MdOutlineShoppingBag />,        to: allPaths.todoList },
  { name: "Orders",      icon: <MdOutlineShoppingBag />,        to:  allPaths.order },
  { name: "Tracking",    icon: <MdOutlineMessage />,            to: allPaths.tracking },
  { name: "Customers",   icon: <MdOutlinePeople />,             to: allPaths.customers },
  { name: "Settings",    icon: <MdOutlineSettings />,           to: allPaths.settings }
]

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex">

      <nav className="bg-blue-900 w-56 p-4 flex flex-col items-start fixed h-full">

        {/* Logo */}
        <div className="flex items-center gap-2 mb-2 px-2">
           <SiToyota  className='text-[white] text-[40px]'/> <p className='text-[23px] font-semibold text-center text-white'>Toyota</p>
        </div>

        {/* Menu Items */}
        <div className="mt-4 space-y-2">
          {menuListOne.map((item, i) => (
            <NavLink
              key={i}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded-lg cursor-pointer
                ${isActive
                  ? "bg-green-500 text-white"
                  : "hover:bg-green-100 text-white"
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm">{item.name}</span>
            </NavLink>
          ))}
        </div>

      </nav>

      <main className= "flex-1 p-6 ml-56">
        <Outlet />
      </main>

    </div>
  )
}

export default DashboardLayout