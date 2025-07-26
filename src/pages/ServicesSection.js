import React from 'react';
// import 'font-awesome/css/font-awesome.min.css'; 

const ServicesSection = () => {
    return (
        <section id="services" className="section-1 offers featured">
            <div className="container">
                <div className="row intro">
                    <div className="col-12 col-md-9 align-self-center text-center text-md-left">
                        <span className="pre-title m-auto ml-md-0">Our business areas</span>
                        <h2>
                            Unveiling Distinctive Excellence <span className="featured"><span>Swara Cabs</span></span>
                        </h2>
                        <p>
                           "Explore the Unmatched Qualities that Define Our Commitment to Premium Transportation"
                        </p>
                    </div>
                    <div className="col-12 col-md-3 align-self-end">
                        <a href="#" className="btn mx-auto mr-md-0 ml-md-auto primary-button">SEE ALL</a>
                    </div>
                </div>

                <div className="row justify-content-center items">
                    {[
                        { icon: "icon-organization", title: "Reliability", para:"Trust Swara Cabs for punctual and dependable transportation services." },
                        { icon: "icon-briefcase", title: "Professionalism", para:"Experience professionalism at its best with our courteous and well-trained drivers." },
                        { icon: "icon-chart", title: "Comfort", para:"Our fleet comprises well-maintained vehicles designed to provide maximum comfort." },
                        // { icon: "icon-plane", title: "Middle Marketing" },
                        // { icon: "icon-globe-alt", title: "Legal Consulting" },
                        // { icon: "icon-drawer", title: "Regulatory Risk" },
                    ].map((service, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4 item">
                            <div className="card">
                                <i className={`icon ${service.icon}`}></i>
                                <h4>{service.title}</h4>
                                <p>{service.para}</p>
                                <a href="">
                                    <i className="btn-icon pulse fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
