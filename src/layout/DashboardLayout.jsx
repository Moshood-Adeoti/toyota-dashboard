 

import React, { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { MdOutlineDashboardCustomize, MdOutlineStorefront, MdOutlineShoppingBag, MdOutlineMessage, MdOutlinePeople, MdOutlineSettings, MdMenu, MdClose } from "react-icons/md"
import { SiToyota } from "react-icons/si"
import { allPaths } from '../path'

const menuListOne = [
  { name: "Dashboard",   icon: <MdOutlineDashboardCustomize />, to: allPaths.dashboard },
  { name: "Marketplace", icon: <MdOutlineStorefront />,         to: allPaths.marketplace },
  { name: "Orders",      icon: <MdOutlineShoppingBag />,        to: allPaths.order },
  { name: "Todo List",    icon: <MdOutlineShoppingBag />,        to: allPaths.todoList },
  { name: "Tracking",    icon: <MdOutlineMessage />,            to: allPaths.tracking },
  { name: "Customers",   icon: <MdOutlinePeople />,             to: allPaths.customers },
  { name: "Settings",    icon: <MdOutlineSettings />,           to: allPaths.settings },
]

const DashboardLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex">

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-blue-900 flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <SiToyota className="text-white text-[30px]" />
          <p className="text-white text-[18px] font-semibold">Toyota</p>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-[28px]">
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[52px] left-0 right-0 z-40 bg-blue-900 px-4 py-4 flex flex-col gap-2">
          {menuListOne.map((item, i) => (
            <NavLink
              key={i}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg text-white
                ${isActive ? "bg-green-500" : "hover:bg-green-100 hover:text-blue-900"}`
              }
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm">{item.name}</span>
            </NavLink>
          ))}
        </div>
      )}

      {/* Desktop Sidebar */}
      <nav className="hidden md:flex bg-blue-900 w-56 p-4 flex-col items-start fixed h-full">
        <div className="flex items-center gap-2 mb-2 px-2">
          <SiToyota className="text-white text-[40px]" />
          <p className="text-[23px] font-semibold text-white">Toyota</p>
        </div>
        <div className="mt-4 space-y-2 w-full">
          {menuListOne.map((item, i) => (
            <NavLink
              key={i}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded-lg cursor-pointer w-full
                ${isActive ? "bg-green-500 text-white" : "hover:bg-green-100 text-white"}`
              }
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 md:ml-56 mt-14 md:mt-0">
        <Outlet />
      </main>

    </div>
  )
}

export default DashboardLayout