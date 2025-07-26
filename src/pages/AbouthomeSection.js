import React from 'react';

export default function AbouthomeSection() {
  return (
    <section id="about" className="section-2 odd highlights image-right featured sectionn">
      <div className="container">
        <div className="row">
          {/* Text Section */}
          <div className="col-12 col-md-6 pr-md-5 align-self-center text-center text-md-left text ">
            <div data-aos="fade-up" className="row intro">
              <div className="col-12 p-0">
                <span className="pre-title m-auto m-md-0">About Us</span>
                <h2 className='text-dark'>
                  <span className="featured">
                    <span>Swara Cabs</span>
                  </span>{' '}
                  Driving Your Journey, Creating Memories
                </h2>
                <p>
Welcome to Swara Cabs, where we go beyond being just a transportation service, we are your trusted companion in every journey. Our commitment at Swara Cabs is deeply rooted in providing not just rides but experiences that are reliable, comfortable, and tailored to meet the unique needs of our valued customers. As we embark on this journey together, allow us to share the core of our identity through our vision, mission, goals, and a brief insight into the essence of who we are.
                </p>
                <p>
                  Swara Cabs is more than just a transportation service; we are a team of dedicated professionals passionate about transforming the way people travel. Established with a commitment to reliability and customer satisfaction, Swara Cabs has become a name synonymous with trust and efficiency.

                </p>
              </div>
            </div>

          
            {/* <div className="row items">
              <div data-aos="fade-up" className="col-12 col-md-6 p-0 pr-md-4 item">
                <h4>
                  <i className="mr-2 icon-badge"></i>Tradition
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
              <div data-aos="fade-up" className="col-12 col-md-6 p-0 item">
                <h4>
                  <i className="mr-2 icon-lock"></i>Security
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="row items">
              <div data-aos="fade-up" className="col-12 col-md-6 p-0 item">
                <h4>
                  <i className="mr-2 icon-note"></i>Certificate
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
              <div data-aos="fade-up" className="col-12 col-md-6 p-0 pr-md-4 item">
                <h4>
                  <i className="mr-2 icon-graduation"></i>Expertise
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div> */}

            {/* Buttons */}
            {/* <div data-aos="fade-up" className="buttons">
              <div className="d-sm-inline-flex mb-5 mb-md-0">
                <a href="#contact" className="smooth-anchor mx-auto mt-4 btn primary-button">
                  GET IN TOUCH
                </a>
                <a href="#" className="mx-auto ml-sm-4 mt-4 btn outline-button">
                  READ MORE
                </a>
              </div>
            </div> */}
          </div>

          {/* Image Section */}
          <div className="col-12 col-md-6 p-0 image">
            <img src="/images/homeabout.jpg" className="fit-image" alt="Fit" />
          </div>
        </div>
      </div>
    </section>
  );
}
