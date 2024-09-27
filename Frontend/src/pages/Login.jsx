import { Outlet } from 'react-router-dom';
import Libraries from '../components/Dashboard/Libraries';
import Headers from '../components/HomePage/Headers';
import Banner from '../components/HomePage/Banner';
import Login from '../components/Auth/Login';
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
          <h1 className="text-4xl font-bold">Welcome Back!</h1>
          <p className="mt-2 text-lg">Please log in to access your account</p>
        </div>
      </div>

      {/* Login Section */}
      <div className="flex justify-center py-10">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <Login />
        </div>
      </div>

      <Footer />
      <Outlet />
    </div>
  );
}

export default Categories;
