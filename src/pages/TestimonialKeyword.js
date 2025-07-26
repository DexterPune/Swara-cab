import React from 'react';
import Slider from 'react-slick';

// The Testimonials component takes `testimonials` and `title` as props
const Testimonials = ({ testimonials, title = "Love from our Clients" }) => {

  // Slick slider settings for auto sliding
  const settings = {
    dots: true,               // Show dots for navigation
    infinite: true,           // Infinite looping
    speed: 500,               // Speed of sliding (in ms)
    autoplay: true,           // Enable auto sliding
    autoplaySpeed: 3000,      // Time delay between auto slides (in ms)
    slidesToShow: 2,          // Show two slides at once
    slidesToScroll: 1,        // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on medium and larger screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens (tablets or smaller)
        },
      },
    ],
  };

  return (
    <section className="testimonial-style-two white-bg py-3 centred">
      <div className="auto-container">
        <div className="sec-title mb_50">
          <span className="sub-title">Testimonials</span>
          <h2>{title}</h2>
        </div>
        <Slider {...settings} className="three-item-carousel owl-carousel owl-theme owl-nav-none">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-block-two">
              <div className="inner-box">
                {/* <figure className="thumb-box">
                  <img src={testimonial.image} alt={testimonial.name} />
                </figure> */}
                <h3>{testimonial.name}</h3>
                {/* <span className="designation">{testimonial.designation}</span> */}
                <ul className="rating">
                  {testimonial.rating.map((star, index) => (
                    <li key={index}>
                      <img src="/images/icons/icon-1.png" alt={`star-${index}`} />
                    </li>
                  ))}
                </ul>
                <p>{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
