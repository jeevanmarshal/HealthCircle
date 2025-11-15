export default function StatsCards() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-ne gap-4 my-6 text-center">
                <div className="bg-accent h-[40px] lg:h-[60px] md:h-[50px] cursor-pointer rounded-md box-shadow hover:shadow-none flex items-center justify-center"><span className="mr-2">💊</span> Medicines</div>
                <div className="bg-accent h-[40px] lg:h-[60px] md:h-[50px] cursor-pointer rounded-md box-shadow hover:shadow-none flex items-center justify-center"><span className="mr-2">📅</span> Appointments</div>
                <div className="bg-accent h-[40px] lg:h-[60px] md:h-[50px] cursor-pointer rounded-md box-shadow hover:shadow-none flex items-center justify-center"><span className="mr-2">📁</span> Reports</div>
                <div className="bg-accent h-[40px] lg:h-[60px] md:h-[50px] cursor-pointer rounded-md box-shadow hover:shadow-none flex items-center justify-center"><span className="mr-2">⚠️</span> Alerts</div>
            </div>
        </>
    );
}