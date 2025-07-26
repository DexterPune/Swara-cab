import React from 'react';

const teamMembers = [
  {
    name: 'Sedan - Swift Dzire (4+1 Seater)',
    role: 'CTO & CO-FOUNDER',
    image: '/images/ourfleet/1.jpg',
  },
  {
    name: 'Sedan - Hyundai Xcent (4+1 Seater)',
    role: 'CHIEF MARKETING',
    image: '/images/ourfleet/3.jpg',
  },
  {
    name: 'Sedan - Toyota Etios (4+1 Seater)',
    role: 'CHIEF PROCUREMENT',
    image: '/images/ourfleet/2.jpg',
  },
  {
    name: 'MUV - Maruti Ertiga (6+1 Seater)',
    role: 'CEO & PRESIDENT',
    image: '/images/ourfleet/4.jpg',
  },
  {
    name: 'SUV -Toyota Innova (6+1 Seater) Tourist',
    role: 'CTO & CO-FOUNDER',
    image: '/images/ourfleet/7.jpg',
  },
  {
    name: 'SUV - Toyota Innova Crysta (6+1 Seater)',
    role: 'CHIEF MARKETING',
    image: '/images/ourfleet/9.jpg',
  },
  {
    name: 'SUV - Kia Carens (6+1 Seater)',
    role: 'CHIEF PROCUREMENT',
    image: '/images/ourfleet/11.jpg',
  },
  {
    name: 'MUV - Tavera (8 + 1 Seater)',
    role: 'CEO & PRESIDENT',
    image: '/images/ourfleet/12.jpg',
  },
    {
    name: 'MUV - Mahindra Xylo (6+1 Seater)',
    role: 'CHIEF MARKETING',
    image: '/images/ourfleet/13.jpg',
  },
  {
    name: 'Tempo Traveller ( 13 Seater )',
    role: 'CHIEF PROCUREMENT',
    image: '/images/ourfleet/10.jpg',
  },
  {
    name: 'Tempo Traveller ( 17 Seater )',
    role: 'CEO & PRESIDENT',
    image: '/images/ourfleet/14.jpg',
  }
];

const Fleets = () => {
  return (
   <>
   <section id="slider" className="hero p-0 odd featured">
        <div className="swiper-container no-slider animation slider-h-50 slider-h-auto">
          <div className="swiper-wrapper">
            {/* Item 1 */}
            <div className="swiper-slide slide-center">
              {/* Media */}
              
              <div className="slide-content row text-center">
                <div className="col-12 mx-auto inner">
                  <h1 className="mb-0 title effect-static-text pt-5">our fleet </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
    <section className="section-1 odd oddd offers">
      <div className="container full-grid">
        <div className="row justify-content-center items">
          {teamMembers.map((member, index) => (
            <div className="col-12 col-md-6 col-lg-3 text-center item" key={index}>
              <img src={member.image} alt={member.name} className="person" />
              <h4 className='darkcolor'>{member.name}</h4>
              {/* <p>{member.role}</p> */}
           
            </div>
          ))}
        </div>
      </div>
    </section>
   </>
  );
};

export default Fleets;
