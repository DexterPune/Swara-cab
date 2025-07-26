import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

// Updated testimonials array with name and review
const testimonials = [
    {
        logo: 'assets/images/logo-1.png',
        name: 'Mr. Rahul Sharma',
        review: 'Excellent service from Swara Cab! Driver was polite and on time.'
    },
    {
        logo: 'assets/images/logo-2.png',
        name: 'Miss. Priya Deshmukh',
        review: 'The ride was smooth and comfortable. Highly recommend Swara Cab!'
    },
    {
        logo: 'assets/images/logo-3.png',
        name: 'Mr. Amit Joshi',
        review: 'Very professional and reliable taxi service. Great experience!'
    },
    {
        logo: 'assets/images/logo-4.png',
        name: 'Miss. Sneha Kulkarni',
        review: 'Affordable and punctual. Swara Cab made our trip stress-free.'
    },
    {
        logo: 'assets/images/logo-5.png',
        name: 'Mr. Rohan Mehta',
        review: 'The booking process was easy and the cab arrived right on time.'
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section-4 carousel testimonials">
            <div className="overflow-holder">
                <div className="container">
                    <div className="row text-center intro">
                        <div className="col-12">
                            <span className="pre-title m-auto">Customer Testimonials</span>
                            <h2>Trusted <span className="featured"><span>Feedback</span></span></h2>
                            <p className="text-max-800">
                                We work intensively in search of ideals that can add up in the lives of our customers.
                                This is what moves us and we are grateful for the recognition.
                            </p>
                        </div>
                    </div>

                    <Swiper
                        className="mid-slider items"
                        spaceBetween={30}
                        slidesPerView={3}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        modules={[Autoplay]}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="slide-center item">
                                <div className="row card">
                                    <div className="col-12">
                                        <p>{testimonial.review}</p>
                                        <p className="font-italic">"Swara Cab"</p>
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

export default Testimonials;
