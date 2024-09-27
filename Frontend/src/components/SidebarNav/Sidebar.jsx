import React from 'react';
import { NavLink } from 'react-router-dom'; // For navigation links

const Sidebar = () => {
  return (
    <div className="fixed right-0 top-0 h-screen w-64 bg-gray-900 text-white shadow-lg flex-col">
      {/* Dashboard Heading */}
      <div className=" p-4 bg-gray-800">
        <h2 className="text-3xl font-bold">Dashboard</h2>
      </div>

      {/* Navigation Links */}
      <ul className="flex-grow mt-6">
        <li className="p-4 hover:bg-gray-700 transition-colors">
          <NavLink 
            to="/bookings" 
            className="flex items-center text-3xl font-bold text-white"
            activeClassName="bg-gray-700"
          >
            Bookings
          </NavLink>
        </li>
        <li className="p-4 hover:bg-gray-700 transition-colors">
          <NavLink 
            to="/partners" 
            className="flex items-center text-3xl font-bold text-white"
            activeClassName="bg-gray-700"
          >
            Partners
          </NavLink>
        </li>
        <li className="p-4 hover:bg-gray-700 transition-colors">
          <NavLink 
            to="/settings" 
            className="flex items-center text-3xl font-bold text-white"
            activeClassName="bg-gray-700"
          >
            Settings
          </NavLink>
        </li>
      </ul>

      {/* Logout or Additional Links */}
      <div className="p-4 bg-gray-800">
        <NavLink 
          to="/logout" 
          className="flex items-center text-3xl font-bold text-red-400 hover:text-red-300 transition-colors"
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
