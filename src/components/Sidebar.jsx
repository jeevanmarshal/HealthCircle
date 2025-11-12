export default function Sidebar() {
    return (
        <>
            <div className="w-[25%] h-screen lg:w-[25%] md:w-[30%] flex lg:flex md:flex items-center p-3">
                <div className="w-full h-4/6 mt-10 hidden lg:flex md:flex flex-col gap-5 justify-between text-center text-sm lg:text-[16px] md:text-md">
                    <a className="w-full hover:shadow-none p-3 flex justify-center bg-accent items-center border h-[40px] lg:h-[60px] md:h-[60px] ml-1 rounded-md rounded-br-md cursor " href="#"><span className="mr-2">📊</span> Dashboard</a>
                    <a className="w-full hover:shadow-none p-3 flex justify-center bg-accent items-center border h-[40px] lg:h-[60px] md:h-[60px] ml-1 rounded-md rounded-br-md cursor " href="#"><span className="mr-2">💊</span> Medicine Management</a>
                    <a className="w-full hover:shadow-none p-3 flex justify-center bg-accent items-center border h-[40px] lg:h-[60px] md:h-[60px] ml-1 rounded-md rounded-br-md cursor  " href="#"><span className="mr-2">📅</span> Appointments</a>
                    <a className="w-full hover:shadow-none p-3 flex justify-center bg-accent items-center border h-[40px] lg:h-[60px] md:h-[60px] ml-1 rounded-md rounded-br-md cursor " href="#"><span className="mr-2">📁</span> Reports</a>
                    <a className="w-full hover:shadow-none p-3 flex justify-center bg-accent items-center border h-[40px] lg:h-[60px] md:h-[60px] ml-1 rounded-md rounded-br-md cursor " href="#"><span className="mr-2">📈</span> Analytics</a>
                </div>

                <div className="w-full h-4/6 mt-6 bg-accent p-5 rounded-md box-shadow flex lg:hidden md:hidden flex-col gap-5 justify-between text-center border text-2xl">
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