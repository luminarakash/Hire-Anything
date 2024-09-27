import { Outlet } from 'react-router-dom';
import Libraries from '../components/Dashboard/Libraries';
import Headers from '../components/HomePage/Headers';
import Banner from '../components/HomePage/Banner';
import Signup from '../components/Auth/Signup';
import Footer from '../components/HomePage/Footer';

function Categories() {
  return (
    <div className="bg-gray-100">
      <Libraries />
      <Headers />

      {/* Banner Section */}
      <div className="relative">
        <Banner />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold">Join Us</h1>
          <p className="mt-2 text-lg">Sign up to start your journey with us</p>
        </div>
      </div>

      {/* Signup Section */}
      <div className="flex justify-center py-10">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <Signup />
        </div>
      </div>

      <Footer />
      <Outlet />
    </div>
  );
}

export default Categories;
