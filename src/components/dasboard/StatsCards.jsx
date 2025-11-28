import { NavLink} from "react-router-dom";
export default function StatsCards() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-ne gap-4 my-6 text-center">
                <NavLink to="" className="bg-accent h-[40px] lg:h-[60px] md:h-[50px] cursor-pointer rounded-md box-shadow hover:shadow-none flex items-center justify-center"><span className="mr-2">💊</span> Medicines</NavLink>
                <NavLink to="" className="bg-accent h-[40px] lg:h-[60px] md:h-[50px] cursor-pointer rounded-md box-shadow hover:shadow-none flex items-center justify-center"><span className="mr-2">📅</span> Appointments</NavLink>
                <NavLink to="" className="bg-accent h-[40px] lg:h-[60px] md:h-[50px] cursor-pointer rounded-md box-shadow hover:shadow-none flex items-center justify-center"><span className="mr-2">📁</span> Reports</NavLink>
                <NavLink to="" className="bg-accent h-[40px] lg:h-[60px] md:h-[50px] cursor-pointer rounded-md box-shadow hover:shadow-none flex items-center justify-center"><span className="mr-2">⚠️</span> Analytics</NavLink>
            </div>
        </>
    );
}