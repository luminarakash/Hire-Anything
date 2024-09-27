import { Outlet } from 'react-router-dom';
import Banner from '../components/HomePage/Banner';
import Headers from '../components/HomePage/Headers';
import Footer from '../components/HomePage/Footer';
import Libraries from '../components/Dashboard/Libraries';
import SearchPage from '../components/BookingSearch/SearchPage';

function About() {
  return (
    <div className="bg-gray-100">
      <Libraries />
      <Headers />

      {/* Banner Section */}
      <div className="relative">
        <Banner />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-lg">Learn more about our mission and services</p>
        </div>
      </div>

      {/* Search Page Section */}
      <div className="flex justify-center py-10">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
          <SearchPage />
        </div>
      </div>

      <Footer />
      <Outlet />
    </div>
  );
}

export default About;
