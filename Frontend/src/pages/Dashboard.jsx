import React from 'react';
import { Outlet } from 'react-router-dom';
import Libraries from '../components/Dashboard/Libraries';
import backgroundImage from '../components/img/hero-bg.jpg'; 

import Sidebar from '../components/SidebarNav/Sidebar'; 
import Footer from '../components/HomePage/Footer'; 

function DashboardContent() {
  return (
    <div className="flex-col h-[calc(100vh-3.5rem)] min-w-[220px] border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10">
      <Libraries />
      <div
        className="relative min-h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',    
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat', 
        }}>
        {/* Semi-transparent overlay for better content visibility */}
        <div className="absolute inset-0 bg-black opacity-50">
        </div>

        <Sidebar />

        
      </div>
      <div className="relative z-10 p-6 text-black">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-none p-6 shadow rounded">
              <h2 className="text-xl font-bold text-black">Total Bookings</h2>
              <p className="text-gray-600">250</p>
            </div>
            <div className="p-6 shadow rounded">
              <h2 className="text-xl font-bold text-black">Total Partners</h2>
              <p className="text-gray-600">50</p>
            </div>
            <div className="p-6 shadow rounded">
              <h2 className="text-xl font-bold text-black">Revenue</h2>
              <p className="text-gray-600">$10,000</p>
            </div>
          </div>
        </div>
      <Footer/>
      <Outlet />
    </div>
  );
}

export default DashboardContent;
