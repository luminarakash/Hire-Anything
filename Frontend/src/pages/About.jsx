import { Outlet } from 'react-router-dom';
import Banner from '../components/HomePage/Banner';
import Headers from '../components/HomePage/Headers';
import Footer from '../components/HomePage/Footer';
import Libraries from '../components/Dashboard/Libraries';
import Aboutus from '../components/HomePage/About';

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Libraries />

      {/* Header */}
      <Headers />

      {/* Banner */}
      <div className="relative bg-blue-500 text-white">
        <Banner />
        <div className="absolute inset-0 mt-3 ml-3 flex items-center justify-center ">
          <h1 className="text-4xl font-bold">Welcome to Our Dashboard</h1>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Aboutus />
      </div>

      {/* Footer */}
      <Footer />

      <Outlet />
    </div>
  );
}

export default About;
