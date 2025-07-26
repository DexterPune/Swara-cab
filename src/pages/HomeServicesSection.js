import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const HomeServicesSection = () => {
    return (
        <section id="services" className="section-3 odd offers" style={{ background: "#f8f9fa", padding: "60px 0" }}>
            <div className="container">
                <div className="row intro">
                    <div className="col-12 col-md-9 align-self-center text-center text-md-left">
                        <span className="pre-title m-auto ml-md-0">Our Best Services</span>
                        <h2 className='text-dark'>
                            Swara Cabs <span className="featured"><span>Our Tailored Services</span></span>
                        </h2>
                        <p>
                            "Embark on a Journey of Seamless Convenience with Our Comprehensive Transportation Solutions"
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center items mt-4">
                    <div className="col-12 col-md-6 col-lg-4 item mb-4">
                        <div className="card p-4 shadow-sm text-center h-100">
                            <i className="fas fa-plane-departure fa-2x mb-3 darkcolor"></i>
                            <h4 className='text-dark'>Airport Transfers</h4>
                            <p className='text-dark'>Our dedicated airport transfer service ensures a seamless transition from your doorstep to the airport and vice versa.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 item mb-4">
                        <div className="card p-4 shadow-sm text-center h-100">
                            <i className="fas fa-briefcase fa-2x mb-3 darkcolor"></i>
                            <h4 className='text-dark'>Corporate Travel Solutions</h4>
                            <p className='text-dark'>Swara Cabs understands the importance of time and professionalism in corporate settings.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 item mb-4">
                        <div className="card p-4 shadow-sm text-center h-100">
                            <i className="fas fa-road fa-2x mb-3 darkcolor"></i>
                            <h4 className='text-dark'>Outstation Trips</h4>
                            <p className='text-dark'>Enjoy a relaxing and scenic journey with our skilled drivers, ensuring safety and comfort on long-distance travels.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 item mb-4">
                        <div className="card p-4 shadow-sm text-center h-100">
                            <i className="fas fa-headset fa-2x mb-3 darkcolor"></i>
                            <h4 className='text-dark'>24/7 Customer Support</h4>
                            <p className='text-dark'>Our round-the-clock customer support ensures that you can reach us anytime, anywhere.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 item mb-4">
                        <div className="card p-4 shadow-sm text-center h-100">
                            <i className="fas fa-calendar-check fa-2x mb-3 darkcolor"></i>
                            <h4 className='text-dark'>Event Transportation</h4>
                            <p className='text-dark'>Whether it is a wedding, conference, or any other special occasion, Swara Cabs ensures smooth and stylish transit for you and your guests.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 item mb-4">
                        <div className="card p-4 shadow-sm text-center h-100">
                            <i className="fas fa-car-side fa-2x mb-3 darkcolor"></i>
                            <h4 className='text-dark'>Luxury Fleet</h4>
                            <p className='text-dark'>Impeccably maintained and equipped with modern amenities, our luxury cars redefine comfort and style, making your journey as enjoyable as the destination.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeServicesSection;
