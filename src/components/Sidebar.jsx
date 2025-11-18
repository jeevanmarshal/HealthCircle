import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <>
            <div className=" hidden lg:w-[25%] md:w-[30%] h-full mt-12 lg:mt-12 md:mt-4  flex lg:flex md:flex items-center justify-center p-3">
                <div className="w-full hidden lg:flex md:flex flex-col gap-5 lg:gap-8 md:gap-5 justify-center text-center text-sm lg:text-[16px] md:text-md">
                    <NavLink to="/" className={({ isActive }) =>
                        `w-full p-2 flex justify-center items-center border 
     h-[40px] lg:h-[60px] md:h-[60px] ml-1 rounded-md rounded-br-md 
     hover:shadow-none cursor 
     ${isActive ? "bg-pink-400 text-white" : "bg-accent hover:bg-pink-200"}`
                    }><span className="mr-2">📊</span> Dashboard</NavLink>
                    <NavLink to="/medicines" className={({ isActive }) =>
                        `w-full p-2 flex justify-center items-center border 
     h-[40px] lg:h-[60px] md:h-[60px] ml-1 rounded-md rounded-br-md 
     hover:shadow-none cursor 
     ${isActive ? "bg-pink-400 text-white" : "bg-accent hover:bg-pink-200"}`
                    }><span className="mr-2">💊</span> Medicine Management</NavLink>
                    <NavLink to="/appointments" className={({ isActive }) =>
                        `w-full p-2 flex justify-center items-center border 
     h-[40px] lg:h-[60px] md:h-[60px] ml-1 rounded-md rounded-br-md 
     hover:shadow-none cursor 
     ${isActive ? "bg-pink-400 text-white" : "bg-accent hover:bg-pink-200"}`
                    }><span className="mr-2">📅</span> Appointments</NavLink>
                    <NavLink to="/reports" className={({ isActive }) =>
                        `w-full p-2 flex justify-center items-center border 
     h-[40px] lg:h-[60px] md:h-[60px] ml-1 rounded-md rounded-br-md 
     hover:shadow-none cursor 
     ${isActive ? "bg-pink-400 text-white" : "bg-accent hover:bg-pink-200"}`
                    }><span className="mr-2">📁</span> Reports</NavLink>
                    <NavLink to="/analytics" className={({ isActive }) =>
                        `w-full p-2 flex justify-center items-center border 
     h-[40px] lg:h-[60px] md:h-[60px] ml-1 rounded-md rounded-br-md 
     hover:shadow-none cursor 
     ${isActive ? "bg-pink-400 text-white" : "bg-accent hover:bg-pink-200"}`
                    }><span className="mr-2">📈</span> Analytics</NavLink>
                </div>
            </div>
        </>
    )
}