import React from "react";
import Header from '../components/Analytics/Header'
import Chart from "../components/Analytics/Chart";
import Summary from "../components/Analytics/Summary";

const Analytics = () => {
    // Dummy Data
    const adherenceData = [
        { name: "Taken", value: 88 },
        { name: "Missed", value: 12 },
    ];

    const appointmentData = [
        { day: "Mon", count: 1 },
        { day: "Tue", count: 0 },
        { day: "Wed", count: 2 },
        { day: "Thu", count: 1 },
        { day: "Fri", count: 0 },
    ];

    const reportData = [
        { month: "Jan", uploads: 2 },
        { month: "Feb", uploads: 1 },
        { month: "Mar", uploads: 3 },
        { month: "Apr", uploads: 4 },
    ];

    return (
        <div className="mt-8 w-[100%] p-3 flex lg:flex md:flex flex-col justify-center gap-2 text-sm lg:text-[16px] md:text-md">
            <Header />
            <Chart adherenceData={adherenceData} appointmentData={appointmentData} reportData={reportData} />
            <Summary/>
        
        </div>
    );
};

export default Analytics;
