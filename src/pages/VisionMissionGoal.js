import React from 'react';

import visionIcon from '../images/logo-1.png';
import missionIcon from '../images/logo-2.png';
import goalIcon from '../images/logo-3.png';

export default function VisionMissionGoal() {
  return (
    <section className="vmg-section">
      <div className="container text-center">
        <div className="section-header">
          <p className="section-subtitle">VISION, MISSION, GOAL</p>
          <h2 className="section-title">Driving Tomorrow’s Transportation</h2>
          <p className="section-description">"Discover Our Aspirations and Commitment to Transforming Your Travel Experience"</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="vmg-card">
              <img src={visionIcon} alt="Vision" className="vmg-icon" />
              <p>
                Our vision at Swara Cabs is to be the forefront of innovation in the transportation industry. We envision a future where commuting is not just a necessity but an enjoyable and stress-free experience. Through cutting-edge technology and unwavering dedication, we aim to redefine how people perceive and experience travel.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="vmg-card">
              <img src={missionIcon} alt="Mission" className="vmg-icon" />
              <p>
                At the heart of Swara Cabs lies a mission to provide safe, convenient, and efficient transportation services. We are committed to creating a seamless and enjoyable journey for our customers, ensuring that every ride with us is a pleasant and memorable experience.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="vmg-card">
              <img src={goalIcon} alt="Goal" className="vmg-icon" />
              <p>
                Our primary goal is to exceed customer expectations. We strive to consistently provide services that meet and surpass the needs of our diverse clientele. Our goal is to contribute to a greener environment by adopting eco-friendly initiatives and reducing our carbon footprint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
