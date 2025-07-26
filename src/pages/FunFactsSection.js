import React, { useEffect, useState } from 'react';

const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000; // animation duration in ms
        const stepTime = Math.max(Math.floor(duration / target), 10);

        const counter = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= target) {
                clearInterval(counter);
            }
        }, stepTime);

        return () => clearInterval(counter);
    }, [target]);

    return <span>{count}</span>;
};

const FunFactsSection = () => {
    return (
        <section id="funfacts" className="section-2 odd counter funfacts sectionn">
            <video className="full-image to-bottom grayscale" data-mask="70" playsInline autoPlay muted loop>
                <source src="assets/videos/city.mp4" type="video/mp4" />
            </video>
            <div className="container">
                <div className="row mb-md-5 text-center">
                    <div className="col-12">
                        <span className="pre-title">Swara Cabs Achievements</span>
                        <h2><span className="featured"><span>Swara Cabs</span></span> Delivering Beyond Expectations</h2>
                    </div>
                </div>
                <div className="row justify-content-center text-center items">
                    <div className="col-12 col-md-6 col-lg-3 item">
                        <div className="radial">
                            <Counter target={100} />
                        </div>
                        <h4>AVAILABLE FLEETS</h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 item">
                        <div className="radial">
                            <Counter target={135} />
                        </div>
                        <h4>DRIVERS</h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 item">
                        <div className="radial">
                            <Counter target={20000} />
                        </div>
                        <h4>HAPPY PEOPLE</h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 item">
                        <div className="radial">
                            <Counter target={1000} />
                        </div>
                        <h4>ROAD TRIP</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunFactsSection;
