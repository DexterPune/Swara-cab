import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen] = useState(false);


  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  return (
    // <header className={`header ${scrolling ? 'sticky-header' : ''}`}>
    <header className>
      {/* Header Top */}
      <div className="header-top bg-darkk">
        <div className="container">
          <div className="row justify-content-center justify-content-xl-between align-items-center">
            <div className="col-auto">
              <div className="header-top-contact">
                <ul className='anchor d-md-flex '>
                  <li className='px-md-5 fw-bold'>
                    <a className='text-white' href="tel:+919697780707 fw-bold">
                      <i className="fas fa-phone-volume  "></i> +91 9697780707
                    </a>
                  </li>
                  <li className='px-md-5 fw-bold'>
                    <a className='text-white' href="tel:+918975330707 fw-bold">
                      <i className="fas fa-phone-volume  "></i> +91 8975330707
                    </a>
                  </li>
                  <li>
                    <a className='text-white' href="mailto:booking@swaracabs.in">
                      <i className="far fa-envelope  "></i>
                      <span className='text-white fw-bold emailfont'> booking@swaracabs.in</span>
                    </a>
                  </li>

                  <div class="px-md-5 ">
    
					              <ul class="socials-2 d-flex">
					   					     <li><a href="https://www.facebook.com/profile.php?id=61565910670526" target='_blank'><i class="fab fa-facebook-square px-2 text-white"></i></a></li>
					   					     <li><a href="https://www.instagram.com/swara_cabs/" target='_blank'><i class="fab fa-instagram px-2 text-white"></i></a></li>
					   					     {/* <li><a href="#"><i class="fab fa-twitter px-2 text-white"></i></a></li> */}
					   					     <li><a href="https://www.linkedin.com/in/swara-cabs-938311290/" target='_blank'><i class="fab fa-linkedin px-2 text-white"></i></a></li>
					   					    <li><a href="https://www.youtube.com/shorts/KmALUVop__I" target='_blank'><i class="fab fa-youtube px-2 text-white"></i></a></li>
                          </ul>

				                  </div> 
                </ul>


              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-navigation">
        <Navbar expand="lg">
          <Container>
            <img src="/images/logo.png" className='logoo' alt="logo" />
            <Navbar.Toggle aria-controls="main_nav" onClick={toggleNav}>
              <i className="fas fa-bars darkcolor"></i> {/* Mobile Menu Icon */}
            </Navbar.Toggle>

            <Navbar.Collapse id="main_nav" className={isNavOpen ? "show" : ""}>
              <Nav className="mx-auto">
                <Nav.Link href="/" className='fw-bold nav-item'>Home</Nav.Link>
                <NavDropdown title="About Us" id="about-us-dropdown" className='fw-bold'>
                  <NavDropdown.Item href="/about" className='fw-bold nav-item'>About Us</NavDropdown.Item>
                  <NavDropdown.Item href="/term-condition" className='fw-bold nav-item'>Term & Condition</NavDropdown.Item>
                  <NavDropdown.Item href="/privacy-policy" className='fw-bold '>Privacy Policy</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/packages" className='fw-bold nav-item'>Packages</Nav.Link>
                <NavDropdown title="Pune ⇌ Mumbai Cab" id="about-us-dropdown" className='fw-bold'>
                  <NavDropdown.Item href="/pune-mumbai-daily-cab-service" className='fw-bold nav-item'>Pune Mumbai Daily Cab Service</NavDropdown.Item>
                  <NavDropdown.Item href="/mumbai-to-pune-daily-cab" className='fw-bold nav-item'>Mumbai to Pune Daily Cab</NavDropdown.Item>

                </NavDropdown>


                <NavDropdown title="Mumbai Airport Cabs ⇌ Pune" id="about-us-dropdown" className='fw-bold'>
                  <NavDropdown.Item href="/mumbai-airport-to-pune-cab" className='fw-bold nav-item'>Mumbai Airport to Pune Cab</NavDropdown.Item>
                  <NavDropdown.Item href="/pune-airport-to-mumbai-daily-cab" className='fw-bold nav-item'>Pune Airport to Mumbai Daily Cab</NavDropdown.Item>

                </NavDropdown>


                <Nav.Link href="/our-fleet" className='fw-bold nav-item'>Fleets</Nav.Link>

                <NavDropdown title="Contact Us" id="contact-dropdown" className='fw-bold'>
                  <NavDropdown.Item href="/contact-us" className='fw-bold nav-item'>Contact Us</NavDropdown.Item>
                  <NavDropdown.Item href="/enquiry" className='fw-bold'>Enquiry</NavDropdown.Item>
                </NavDropdown>
              </Nav>

            </Navbar.Collapse>

          </Container>

        </Navbar>
      </div>


    </header>
  );
};

export default Header;