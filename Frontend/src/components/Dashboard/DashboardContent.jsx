import React from 'react';


const DashboardContent = () => {
  return (
 
      <div className="bg-blue-500 bg-opacity-50 p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-3 gap-6">
          <div className=" p-6 shadow rounded">
            <h2 className="text-xl font-bold text-black">Total Bookings</h2>
            <p className="text-gray-600">250</p>
          </div>
          <div className=" p-6 shadow rounded">
            <h2 className="text-xl font-bold text-black">Total Partners</h2>
            <p className="text-gray-600">50</p>
          </div>
          <div className=" p-6 shadow rounded">
            <h2 className="text-xl font-bold text-black">Revenue</h2>
            <p className="text-gray-600">$10,000</p>
          </div>
        </div>
      </div>
    
  );
};

export default DashboardContent;
