export default function Sidebar() {
    return (
        <>
            <div className=" hidden lg:w-[25%] md:w-[30%] h-full mt-12 lg:mt-12 md:mt-4  flex lg:flex md:flex items-center justify-center p-3">
                <div className="w-full hidden lg:flex md:flex flex-col gap-5 lg:gap-8 md:gap-5 justify-center text-center text-sm lg:text-[16px] md:text-md">
                    <a className="w-full hover:shadow-none p-2 flex justify-center bg-accent items-center border h-[40px] lg:h-[60px] md:h-[60px] ml-1 rounded-md rounded-br-md cursor " href="#"><span className="mr-2">📊</span> Dashboard</a>
                    <a className="w-full hover:shadow-none p-2 flex justify-center bg-accent items-center border h-[40px] lg:h-[60px] md:h-[60px] ml-1 rounded-md rounded-br-md cursor " href="#"><span className="mr-2">💊</span> Medicine Management</a>
                    <a className="w-full hover:shadow-none p-2 flex justify-center bg-accent items-center border h-[40px] lg:h-[60px] md:h-[60px] ml-1 rounded-md rounded-br-md cursor  " href="#"><span className="mr-2">📅</span> Appointments</a>
                    <a className="w-full hover:shadow-none p-2 flex justify-center bg-accent items-center border h-[40px] lg:h-[60px] md:h-[60px] ml-1 rounded-md rounded-br-md cursor " href="#"><span className="mr-2">📁</span> Reports</a>
                    <a className="w-full hover:shadow-none p-2 flex justify-center bg-accent items-center border h-[40px] lg:h-[60px] md:h-[60px] ml-1 rounded-md rounded-br-md cursor " href="#"><span className="mr-2">📈</span> Analytics</a>
                </div> 

                <div className="w-[12%] h-full hidden  fixed mt-12 bg-accent p-2 rounded-md box-shadow flex lg:hidden md:hidden flex-col gap-5 justify-center items-center text-center text-xl">
                    <a href="#" className="mr-2">📊</a>
                    <a href="#" className="mr-2">💊</a>
                    <a href="#" className="mr-2">📅</a>
                    <a href="#" className="mr-2">📁</a>
                    <a href="#" className="mr-2">📈</a>
                </div>
             </div>
         </>
    );
}