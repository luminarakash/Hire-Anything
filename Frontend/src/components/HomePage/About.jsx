// AboutUs.js
import React from 'react';
import users from '../img/about.jpg'; 


const Aboutus = () => {
  const teamExperience = 20;
  const problemStatement = "There’s currently no platform on the market covering the amount of services offered.";
  const solutionStatement = "hireanything.com has been created to cover as many hire services as possible, allowing customers to view multiple options for the category searched.";

  return (
    <div className="aboutus">

<section className="home-about-area inner ">
          <div className="page-wrapper container -fluid ">
            <div className="row align-items-center justify-content-end">
            <div className="col-lg-3 col-md-4  col-sm-12 home-about-right no-padding abt">
            <img className="img-fluid h-80 w-3/4" src={users} alt="" />
            </div>
            <div className="col-lg-9 col-md-8 home-about-left">
            <h1>About Us</h1>

            
            <p className='text-black'>
            Welcome to hireanything.com, the UK's best marketplace for the hire industry. We all know how long and tedious it can be to spend hours searching the internet looking for the best deals on the services you require. This can be anything from hiring a coach for a wedding to finding a tradesman. With so many different companies offering similar services, how can you be sure which ones will be the most efficient, reliable, and the best choice for you?
            </p>
            <p className='text-black'>
            Wouldn’t it be great if there was a website that could connect you to the services you need in just a few simple clicks? A place where each vendor has been vetted and reviews from previous customers can be viewed, so you don’t have to worry about the level of service you could be receiving.
            </p>
            <h3 className='text-black'>A Marketplace for Hire Services</h3>
            <p className='text-black'>
              Our team is unique, with {teamExperience} years of experience in the hire industry.
            </p>
            <h3 className='text-black'>The Problem</h3>
            <p className='text-black'>
              {problemStatement}
            </p>
            <h3 className='text-black'>The Solution</h3>
            <p className='text-black'>
              {solutionStatement}
            </p>
          </div>
          
        </div>
      </div>
    </section>

     
  </div>
  );
};

export default Aboutus;
