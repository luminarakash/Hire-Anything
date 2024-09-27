import { Outlet } from 'react-router-dom';
import Banner from '../components/HomePage/Banner';
import Headers from '../components/HomePage/Headers';
import Footer from '../components/HomePage/Footer';
import Libraries from '../components/Dashboard/Libraries';
import Service from '../components/Dashboard/Services';

function MyService() {
  return (
    <div className="bg-gray-100">
      <Libraries />
      <Headers />

      {/* Banner Section */}
      <div className="relative">
        <Banner />
        <div className="absolute inset-0 mt-3 ml-3 flex items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-2 ml-3 text-3xl text-black">Discover the services we offer to meet your needs</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-10 rounded-lg">
        <div className="flex justify-center rounded-lg">
          <div className="w-full max-w-6xl  rounded-lg shadow-lg p-6">
            <Service />
          </div>
        </div>
      </div>

      <Footer />
      <Outlet />
    </div>
  );
}

export default MyService;
