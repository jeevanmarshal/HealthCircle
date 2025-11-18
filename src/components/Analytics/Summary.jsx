import React from 'react'
import { Card, CardContent } from '../Card'

function Summary() {
    return (
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
    )
}

export default Summary
