import React from 'react'
import { PieChart, Pie, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { Card, CardContent } from '../Card'

function Chart({adherenceData, appointmentData, reportData}) {
    return (
        <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center mb-8 pr-2">

            {/* Pie Chart */}
            <Card className="w-[100%] lg:w-[50%] md:w-[10   0%] shadow-lg p-4 rounded-xl">
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

    )
}

export default Chart
