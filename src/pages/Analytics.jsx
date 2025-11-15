import React from "react";
import { PieChart, Pie, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const Card = ({ children }) => (
    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
      {children}
    </div>
  );
  
  const CardContent = ({ children }) => (
    <div className="mt-2 flex flex-col items-center">
      {children}
    </div>
  );

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
        <div className="mt-8 w-[100%] lg:w-[75%] md:w-[70%] h-full p-3 flex lg:flex md:flex flex-col justify-center gap-2 text-sm lg:text-[16px] md:text-md">
            {/* Header */}
            <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
                📊 Your Health Insights
            </h1>

            {/* Charts Grid */}
            <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center mb-8 pr-2">

                {/* Pie Chart */}
                <Card className="w-[100%] lg:w-[50%] md:w-[100%] shadow-lg p-4 rounded-xl">
                    <CardContent>
                        <h2 className="font-semibold mb-3">Medicine Adherence</h2>
                        <PieChart width={220} height={220}>
                            <Pie
                                data={adherenceData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={80}
                                fill="#ec4899"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </CardContent>
                </Card>

                {/* Line Chart */}
                <Card className="w-[100%] lg:w-[50%] md:w-[100%] shadow-lg p-4 rounded-xl">
                    <CardContent>
                        <h2 className="font-semibold mb-3">Appointment Frequency</h2>
                        <LineChart width={230} height={220} data={appointmentData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="count" stroke="#ec4899" strokeWidth={3} />
                        </LineChart>
                    </CardContent>
                </Card>

                {/* Bar Chart */}
                <Card className="w-[100%] lg:w-[50%] md:w-[100%] shadow-lg p-4 rounded-xl">
                    <CardContent>
                        <h2 className="font-semibold mb-3">Report Upload Activity</h2>
                        <BarChart width={250} height={220} data={reportData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="uploads" fill="#ec4899" />
                        </BarChart>
                    </CardContent>
                </Card>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <Card className="p-4 shadow-lg text-center rounded-xl bg-pink-50 border border-pink-200">
                    <CardContent>
                        <h3 className="text-xl font-bold text-pink-600">88%</h3>
                        <p className="text-gray-600">Average Adherence</p>
                    </CardContent>
                </Card>

                <Card className="p-4 shadow-lg text-center rounded-xl bg-pink-50 border border-pink-200">
                    <CardContent>
                        <h3 className="text-xl font-bold text-pink-600">3</h3>
                        <p className="text-gray-600">Missed Doses</p>
                    </CardContent>
                </Card>

                <Card className="p-4 shadow-lg text-center rounded-xl bg-pink-50 border border-pink-200">
                    <CardContent>
                        <h3 className="text-xl font-bold text-pink-600">5</h3>
                        <p className="text-gray-600">Active Reports</p>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
};

export default Analytics;
