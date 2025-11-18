import React from 'react'

function Card({ children }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
      {children}
    </div>
  );
}

function CardContent({ children }) {
  return(
    <div className="mt-2 flex flex-col items-center">
      {children}
    </div>
  );
}

export {Card, CardContent}
