import { Outlet } from 'react-router-dom';
import Libraries from '../components/Dashboard/Libraries';
import Banner from '../components/HomePage/Banner';
import Headers from '../components/HomePage/Headers';
import Footer from '../components/HomePage/Footer';
import Partnersignup from '../components/BookingSearch/Booking';

function Partner() {
  return (
    <div className="bg-gray-100">
      <Libraries />
      <Headers />

      {/* Banner Section */}
      <div className="relative">
        <Banner />
        <div className="absolute inset-0 mt-3 ml-3 flex items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold">Become a Partner</h1>
          <p className="mt-2 ml-3 text-3xl text-black">Join us and grow your business</p>
        </div>
      </div>

      {/* Partner Signup Section */}
      <div className="flex align-items-md-center justify-center py-10">
        <div className="max-w-6xl mx-auto px-4 py-12 mb-4 rounded-lg shadow-lg p-6">
          <Partnersignup />
        </div>
      </div>

      <Footer />
      <Outlet />
    </div>
  );
}

export default Partner;
