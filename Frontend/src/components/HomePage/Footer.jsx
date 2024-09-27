import React from 'react';
import { Helmet } from 'react-helmet';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const websiteName = "Hire Anything"; // Replace with your website name
    return (
      <>
    

        {/* Start home-about Area */}
        {/* <section className="home-about-area">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-end">
              <div className="col-lg-6 col-md-12 home-about-left">
                <h1>
                  Did not find your Package? <br />
                  Feel free to ask us. <br />
                  We‘ll make it for you
                </h1>
                <p>
                  Inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. Inappropriate behavior is often laughed.
                </p>
                <a href="#" className="primary-btn text-uppercase">request custom price</a>
              </div>
              <div className="col-lg-6 col-md-12 home-about-right no-padding">
                <img className="img-fluid" src="img/about-img.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* End home-about Area */}

        {/* Start blog Area */}
        {/* <section className="recent-blog-area section-gap">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-30 col-lg-9">
                <div className="title text-center">
                  <h1 className="mb-10">Latest from Our Blog</h1>
                  <p>With the exception of Nietzsche, no other madman has contributed so much to human sanity as has.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="active-recent-blog-carusel">
                <div className="single-recent-blog-post item">
                  <div className="thumb">
                    <img className="img-fluid" src="img/b1.jpg" alt="" />
                  </div>
                  <div className="details">
                    <div className="tags">
                      <ul>
                        <li><a href="#">Travel</a></li>
                        <li><a href="#">Life Style</a></li>
                      </ul>
                    </div>
                    <a href="#"><h4 className="title">Low Cost Advertising</h4></a>
                    <p>Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.</p>
                    <h6 className="date">31st January, 2018</h6>
                  </div>
                </div>
                {/* Add more blog posts as needed *
              </div>
            </div>
          </div>
        </section> */} 
        {/* End recent-blog Area */}

        {/* Start footer Area */}
        <footer className="footer-area section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <h6>About Agency</h6>
                  <p>
                    The world has become so fast-paced that people don’t want to stand by reading a page of information; they would much rather look at a presentation and understand the message. It has come to a point
                  </p>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <h6>Newsletter</h6>
                  <p>
                    For business professionals caught between high OEM price and mediocre print and graphic output.
                  </p>
                  
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget mail-chimp">
                  <h6 className="mb-20">InstaFeed</h6>
                  <ul className="instafeed d-flex flex-wrap">
                    <li><img src="img/i1.jpg" alt="" /></li>
                    <li><img src="img/i2.jpg" alt="" /></li>
                    <li><img src="img/i3.jpg" alt="" /></li>
                    <li><img src="img/i4.jpg" alt="" /></li>
                    <li><img src="img/i5.jpg" alt="" /></li>
                    <li><img src="img/i6.jpg" alt="" /></li>
                    <li><img src="img/i7.jpg" alt="" /></li>
                    <li><img src="img/i8.jpg" alt="" /></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
            <p>
              © {currentYear} {websiteName}. All rights reserved 
             
            </p>              <div className="footer-social d-flex align-items-center">
                <a href="https://www.facebook.com/profile.php?id=61565067325640&sk=photos"><i className="fa fa-facebook"></i>acebook</a>
          
              </div>
            </div>
          </div>
        </footer>
        {/* End footer Area */}

        <Helmet>
      
    <script src="js/vendor/jquery-2.2.4.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script>			
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"></script>		
     <script src="js/jquery-ui.js"></script>					
      <script src="js/easing.min.js"></script>			
    <script src="js/hoverIntent.js"></script>
    <script src="js/superfish.min.js"></script>	
    <script src="js/jquery.ajaxchimp.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>						
    <script src="js/jquery.nice-select.min.js"></script>					
    <script src="js/owl.carousel.min.js"></script>							
    <script src="js/mail-script.js"></script>	
    <script src="js/main.js"></script>	
   
      </Helmet>
      </>
    );
  }

