import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const HireServices = [
    { name: "Tool Hire", img: "image/toolhire.jpeg", info: "Extensive collection of tools for various applications and tasks." },
   
    { name: "Luxury Car Rental", img: "image/car-luxury.jpeg", info: "High-end vehicles for a premium driving experience." },
    { name: "Standard Car Hire", img: "image/car.jpeg", info: "Reliable car rentals for everyday and occasional needs." },
    { name: "Group Transport", img: "image/minibus.jpeg", info: "Comfortable minibuses for group travel and events." },
    { name: "Building Equipment", img: "image/construction.jpeg", info: "Top-grade equipment for construction and renovation." },
    { name: "Professional Cleaning", img: "image/cleaning.jpeg", info: "Thorough cleaning services for both residential and commercial spaces." },
    { name: "Music Entertainment", img: "image/music.jpeg", info: "Live music and entertainment services for various events." },
    { name: "Artistic Services", img: "image/artist-drawing.jpeg", info: "Custom artwork and artistic services tailored to your needs." },
    { name: "Custom Carpentry", img: "image/carpenter2.jpeg", info: "Expert carpentry services for bespoke woodwork and repairs." },
    { name: "Home Construction", img: "image/house maker.jpeg", info: "Complete home building and renovation services." },
    { name: "Fencing Solutions", img: "image/Fencer.jpeg", info: "Professional fencing installation for security and aesthetics." },
    { name: "Flooring Installation", img: "image/Flooring.jpeg", info: "High-quality flooring services for various types of flooring." },
    { name: "Professional Writing", img: "image/writer.jpeg", info: "Experienced writers offering top-notch writing and editing services." },
    { name: "Advanced Tool Hire", img: "image/toolhire2.jpeg", info: "Specialized tools for professional and personal use." },
    { name: "Comprehensive Tools", img: "image/tools.jpeg", info: "Wide-ranging tool rental options for diverse projects." },
    { name: "Experienced Trades People", img: "image/Tradesperson.jpeg", info: "Skilled trades professionals available for a variety of services." },
    { name: "Specialized Services", img: "image/WhatsApp Image 2024-07-27 at 7.37.21 PM (1).jpeg", info: "Unique and tailored services for specialized needs." },
    { name: "Architectural Design", img: "image/Architectural.jpeg", info: "Innovative architectural solutions for residential and commercial projects." },
    { name: "Luxury Vehicle Hire", img: "image/carblue.jpeg", info: "Exclusive luxury vehicles for an upscale travel experience." },
    { name: "Extended Car Rental", img: "image/car-2.jpeg", info: "Additional car rental options for diverse requirements." },
    { name: "Castle Event Services", img: "image/castle.jpeg", info: "Elegant event services at historic castle venues." },
    { name: "Eco-Friendly Cleaning", img: "image/cleaner.jpeg", info: "Green cleaning services for a sustainable environment." },
    { name: "Waste Collection Services", img: "image/dustbincollection.jpeg", info: "Efficient waste and recycling collection for various needs." },
    { name: "Creative Comics Art", img: "image/comics.jpeg", info: "Artistic comic illustrations and designs for entertainment and promotion." },
    { name: "Fireplace Solutions", img: "image/Fireplace.jpeg", info: "Professional installation and maintenance of fireplaces." },
    { name: "Flat Roofing Experts", img: "image/Flat Roofer.jpeg", info: "Specialized services for flat roof installation and repair." },
    { name: "Carriage Hire", img: "image/horse and carriage.jpeg", info: "Elegant horse-drawn carriages for special events and occasions." },
    { name: "Versatile Horse and Car Rentals", img: "image/horseandcar.jpeg", info: "Flexible horse and car rental options for various events." },
    { name: "Classic Horse and Carriage", img: "image/horseandcarriage.jpeg", info: "Traditional horse and carriage hire for a timeless travel experience." },
    { name: "Music Performance Services", img: "image/music.jpeg", info: "Live performances and music services for events and functions." },
    { name: "Premium Car Hire", img: "image/pacific car.jpeg", info: "High-quality cars for an enhanced driving experience." },
    { name: "Secure Storage Solutions", img: "image/storage.jpeg", info: "Reliable storage options for personal and business needs." }
  ];
  
  
  
  const HireServicesComponent = () => {
    const location = useLocation();
  
    // Check if the current page is Home
    const isHomePage = location.pathname === '/';
  
    // Limit the services to the first 4 for the Home page
    const limitedServices = isHomePage ? HireServices.slice(0, 4) : HireServices;
  
    return (
      <div className="categorypage">
        <div className="page-wrapper container ">
          {/* Conditionally render the heading only on the inner pages */}
          
          {!isHomePage && (
            <div className="row">
              <div className="col-12 text-center mb-4">
                <h3 className="primary-btn cat">Explore Our Categories</h3>
                <h4>Discover Our Wide Range of Categories</h4>
              </div>
            </div>
          )}
            <h3  className="primary-btn">Find Affordable Options from Nearby Rental Providers</h3>

          <div className="row">
            {limitedServices.map((service, index) => (
              <div className="col-lg-3 col-md-12 col-sm-12 mb-5" key={index}>
                <div className="single-other-issue">
                  <div className="thumb">
                    <img className="img-fluid" src={service.img} alt={service.name} />
                  </div>
                  <div className="category-text">
                    <a href="#">
                      <h4>{service.name}</h4>
                    </a>
                    <p>{service.info}</p>
                    <Link  className="catprimary-btn text-uppercase" to="/signup">Get Quote</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Show the "View All" button only on the Home page */}
          {isHomePage && (
            <div className="row">
              <div className="col-12 text-center">
                <Link to="/category" className="primary-btn text-uppercase">
                  View All
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default HireServicesComponent;
  