import { Outlet } from 'react-router-dom';
import Libraries from '../components/Dashboard/Libraries';
import Headers from '../components/HomePage/Headers';
import Banner from '../components/HomePage/Banner';
import Category from '../components/Dashboard/Category';
import Footer from '../components/HomePage/Footer';

function Categories() {
  return (
    <div className="bg-gray-100">
      <Libraries />
      
      <Headers />

      {/* Banner Section */}
      <div className="relative">
        <Banner />
        <div className="absolute inset-0 mt-3 ml-3 flex items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold">Explore Our Categories</h1>
          <p className="mt-2 ml-3 text-lg text-black">Find the services that suit your needs</p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-10">
        <Category />
      </div>

      <Footer />
      <Outlet />
    </div>
  );
}

export default Categories;
