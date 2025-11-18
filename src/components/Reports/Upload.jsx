import React from 'react'

function Upload({setFile, handleUpload}) {
  return (
            <div className="p-6 rounded-xl border-dash mb-8">
                <div className="text-center">
                    <p className="text-gray-600 mb-3">
                        📎 Drag & Drop your file or choose manually
                    </p>

                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="mb-4"
                    />

                    <button
                        onClick={handleUpload}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                        Upload
                    </button>
                </div>
            </div>
  )
}

export default Upload
