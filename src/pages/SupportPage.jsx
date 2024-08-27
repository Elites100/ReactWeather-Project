import React from 'react'

const SupportPage = () => {
  return (
    <div className="flex flex-col items-center bg-blue-100 min-h-screen py-8">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center w-3/4 mb-8">
        <h1 className="text-3xl font-bold mb-4">New York</h1>
        <p className="text-xl">Temperature: 17°C</p>
        <p className="text-lg">Clear Sky</p>
      </div>
      <div className="flex justify-center gap-4">
        <div className="bg-white shadow-lg rounded-lg p-4 text-center w-24">
          <p>Wednesday</p>
          <p>21°C</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 text-center w-24">
          <p>Thursday</p>
          <p>24°C</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 text-center w-24">
          <p>Friday</p>
          <p>21°C</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 text-center w-24">
          <p>Saturday</p>
          <p>24°C</p>
        </div>
      </div>
    </div>
  )
}

export default SupportPage