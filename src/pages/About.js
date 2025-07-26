import React from 'react';
import VisionMissionGoal from './VisionMissionGoal';
import Testimonials from './Testimonials';

export default function About() {
  return (
<>
   <section id="slider" className="hero p-0 odd featured border">
            <div className="swiper-container no-slider animation slider-h-50 slider-h-auto">
                <div className="swiper-wrapper">
                    {/* Item 1 */}
                    <div className="swiper-slide slide-center">
                        <div className="slide-content row text-center">
                            <div className="col-12 mx-auto inner">
                                <h1 className="mb-0 title effect-static-text   pt-5">About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    <section id="about" className="section-2 odd highlights image-right featured sectionn">
      <div className="container">
        <div className="row">
          {/* Text Section */}
          <div className="col-12 col-md-6 pr-md-5 align-self-center text-center text-md-left text ">
            <div data-aos="fade-up" className="row intro">
              <div className="col-12 p-0">
                <span className="pre-title m-auto m-md-0">About the network</span>
                <h2 className='text-dark'>
                  <span className="featured">
                    <span>Swara Cabs</span>
                  </span>{' '}
                  Creating Journeys
                </h2>
                <p className='text-dark'>
                 Welcome to Swara Cabs, where we go beyond being just a transportation service, we are your trusted companion in every journey. Our commitment at Swara Cabs is deeply rooted in providing not just rides but experiences that are reliable, comfortable, and tailored to meet the unique needs of our valued customers. As we embark on this journey together, allow us to share the core of our identity through our vision, mission, goals, and a brief insight into the essence of who we are.
                </p>
                <p>Swara Cabs is more than just a transportation service; we are a team of dedicated professionals passionate about transforming the way people travel. Established with a commitment to reliability and customer satisfaction, Swara Cabs has become a name synonymous with trust and efficiency.</p>
              </div>
            </div>

          
          </div>

          <div className="col-12 col-md-6 p-0 image">
            <img src="/images/homeabout.jpg" className="fit-image" alt="Fit" />
          </div>
        </div>
      </div>
    </section>
    <VisionMissionGoal/>
    <Testimonials/>
</>
  );
}
