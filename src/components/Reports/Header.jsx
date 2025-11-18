import React from 'react'

function Header() {
    return (
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold flex items-center gap-2">
                📄 Health Reports
            </h1>

            <button className="bg-pink-500 text-white font-medium px-4 py-2 rounded-lg shadow hover:bg-pink-600">
                + Upload Report
            </button>
        </div>
    )
}

export default Header
