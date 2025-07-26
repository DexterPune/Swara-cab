import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

// Swiper config for autoplay
const Testimonialskeywords = ({
    testimonials = [],
    sectionId = "testimonials",
    title = "Trusted",
    subtitle = "Feedback"
}) => {
    return (
        <section id={sectionId} className="section-4 carousel testimonials">
            <div className="overflow-holder">
                <div className="container">
                    <div className="row text-center intro">
                        <div className="col-12">
                            <span className="pre-title m-auto">Customer Testimonials</span>
                            <h2>
                                {title} <span className="featured"><span>{subtitle}</span></span>
                            </h2>
                        </div>
                    </div>

                    <Swiper
                        className="mid-slider items"
                        spaceBetween={30}
                        slidesPerView={2}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        modules={[Autoplay]}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 2 }
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="slide-center item">
                                <div className="row card">
                                    <div className="col-12">
                                        <p>{testimonial.review}</p>
                                        {/* <p className="font-italic">"Swara Cab"</p> */}
                                        <h6 className="mt-3 mb-0 font-weight-bold darkcolor">{testimonial.name}</h6>
                                        <i className="quote-right fas fa-quote-right"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonialskeywords;
