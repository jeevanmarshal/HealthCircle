import { useState } from "react";

import Sidebar from "./Sidebar";
import Icon from '../assets/img/Icon.png';
import User from '../assets/img/user.png';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="w-[100%] fixed flex justify-between px-5 py-1 bg-accent box-shadow">
                <div className="flex gap-2 items-center">
                    <img src={Icon} alt="Health-Circle-Logo" className="hidden lg:flex md:flex size-[60px] lg:size-[70px] md:size-[60px]" />
                    <h1 className="gradient-txt hidden text-4xl lg:text-3xl md:text-3xl font-bold lg:flex md:flex">Health Circle</h1>
                    <div>

                        <button
                            onClick={() => setOpen(!open)}
                            className="relative w-8 h-6 flex flex-col justify-between items-center group md:hidden"
                        >
                            {/* Top bar */}
                            <span
                                className={`block h-1 w-8 bg-gray-600 rounded transition-all duration-300 
            ${open ? "rotate-45 translate-y-3" : ""}`}
                            ></span>

                            {/* Middle bar (hidden when open) */}
                            <span
                                className={`block h-1 w-8 bg-gray-600 rounded transition-all duration-300 
            ${open ? "opacity-0" : ""}`}
                            ></span>

                            {/* Bottom bar */}
                            <span
                                className={`block h-1 w-8 bg-gray-600 rounded transition-all duration-300 
            ${open ? "-rotate-45 -translate-y-3" : ""}`}
                            ></span>
                        </button>

                    </div>
                </div>
                {/* Mobile Menu */}
                <div
                    className={`absolute top-12 left-0 w-[65%] h-100vh bg-accent flex flex-col gap-5 py-6 px-2 transition-transform rounded-md duration-500 
          ${open ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <div className="flex gap-2 items-center">
                        <img src={Icon} alt="Health-Circle-Logo" className="flex size-[50px]" />
                        <h1 className="gradient-txt text-xl font-bold">Health Circle</h1>
                    </div>
                    <a className="w-full p-2 flex text-gray items-center h-[40px]" href="#"><span className="mr-2">📊</span> Dashboard</a>
                    <a className="w-full p-2 flex text-gray items-center h-[40px]" href="#"><span className="mr-2">💊</span> Medicine Management</a>
                    <a className="w-full p-2 flex text-gray items-center h-[40px]" href="#"><span className="mr-2">📅</span> Appointments</a>
                    <a className="w-full p-2 flex text-gray items-center h-[40px]" href="#"><span className="mr-2">📁</span> Reports</a>
                    <a className="w-full p-2 flex text-gray items-center h-[40px]" href="#"><span className="mr-2">📈</span> Analytics</a>
                </div>

                <div className="flex gap-2 items-center">
                    <img src={User} alt="Health-Circle-User-image" className="size-[40px]" />
                    <span><a href="#">Profile</a></span>
                </div>
            </div >
        </>
    );
}