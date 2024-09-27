import { Outlet } from 'react-router-dom';
import Libraries from '../components/Dashboard/Libraries';
import Headers from '../components/HomePage/Headers';
import Banner from '../components/HomePage/Banner';
import Footer from '../components/HomePage/Footer';
import Contactmy from '../components/ContactPage/Contactus';

function Contact() {
  return (
    <div className="bg-gray-100">
      <Libraries />
      <Headers />

      {/* Banner Section */}
      <div className="relative">
        <Banner />
        <div className="absolute  mt-3 ml-3 inset-0 flex items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="mt-2 text-lg text-black ml-3 ">We’re here to help you</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-10">
        <Contactmy />
      </div>

      <Footer />
      <Outlet />
    </div>
  );
}

export default Contact;
