import { Outlet } from 'react-router-dom';
import Libraries from '../components/Dashboard/Libraries';
import Banner from '../components/HomePage/Banner';
import Headers from '../components/HomePage/Headers';
import Category from '../components/Dashboard/Category';
import Footer from '../components/HomePage/Footer';
import Homepage from '../components/HomePage/HomePage';
import Service from '../components/Dashboard/Services';

function Home() {
  return (
    <div className="bg-gray-100">
      <Libraries />
      <Headers />

      {/* Banner Section */}
      <div className="relative">
        <Banner />
        <div className="absolute inset-0 mt-3 ml-3 flex items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-black shadow-lg">Welcome to HireAnything</h1>
          <p className="mt-2 ml-3 text-3xl text-black">Your one-stop solution for all your service needs</p>
        </div>
      </div>

      {/* Category Section */}
      <div className="py-10">
        <Category />
      </div>

      {/* Services Section */}
      <div className="py-10 bg-green-200 shadow-md">
        <Service />
      </div>

      {/* Custom Package Request Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 bg-blue-500 text-black rounded-lg shadow-lg text-center">
        <Homepage 
          title="Did not find your Package?"
          subtitle="Feel free to ask us."
          description="Don’t worry if you haven’t found exactly what you’re looking for on our platform. At HireAnything, we’re dedicated to meeting your unique needs. Simply reach out to us with your specific requirements, and our team will work diligently to create a tailored package just for you. Your satisfaction is our priority, and we’re here to ensure you get the service or equipment you need. Contact us today, and let us help you find the perfect solution!"
          buttonText="Request Custom Price"
          buttonLink="/contact"
          imgSrc="image/about.png"
        />
      </div>

      <Footer />
      <Outlet />
    </div>
  );
}

export default Home;
