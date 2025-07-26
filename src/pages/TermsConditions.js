import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/TermsConditions.css'; // Ensure this file styles .highlight, .terms-content, etc.

const TermsConditions = () => {
  return (
    <div>
      <Helmet>
        <title>Swara Cab - Terms & Conditions</title>
        <meta name="description" content="Terms & Conditions of Swara Cab" />
      </Helmet>

      <section id="slider" className="hero p-0 odd featured">
        <div className="swiper-container no-slider animation slider-h-50 slider-h-auto">
          <div className="swiper-wrapper">
            {/* Item 1 */}
            <div className="swiper-slide slide-center">
              {/* Media */}
              

              <div className="slide-content row text-center">
                <div className="col-12 mx-auto inner">
                  <h1 className="mb-0 title effect-static-text pt-5">Terms & Conditions</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="terms-section">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-7">
              <div className="terms-content">
                <p><b className="highlight">1. Booking Confirmation:</b> All bookings are subject to availability and will be confirmed after successful payment and receipt of a booking reference number.</p>

                <p><b className="highlight">2. Payment:</b> Full payment is required at the time of booking. Payment methods include online options or at Swara Cab authorized offices.</p>

                <p><b className="highlight">3. Cancellation and Rescheduling:</b> Cancellations and rescheduling are subject to Swara Cab’s cancellation policy. Fees may apply depending on the notice period.</p>

                <p><b className="highlight">4. Passenger Responsibility:</b> Passengers must carry valid ID proof and a valid booking confirmation. Boarding may be denied without proper documentation.</p>

                <p><b className="highlight">5. Baggage Policy:</b> Standard baggage limits apply. Extra luggage may incur additional charges.</p>

                <p><b className="highlight">6. Travel Insurance:</b> Travel insurance is recommended for your safety in case of emergencies or trip interruptions.</p>

                <p><b className="highlight">7. Safety Regulations:</b> Passengers are expected to follow all safety instructions provided by drivers or Swara Cab staff.</p>

                <p><b className="highlight">8. Changes to Itinerary:</b> Swara Cab reserves the right to alter itineraries due to weather, traffic, or operational reasons.</p>

                <p><b className="highlight">9. Refusal of Service:</b> Swara Cab may deny service to passengers violating rules or causing disruption.</p>

                <p><b className="highlight">10. Jurisdiction:</b> These terms are governed by Indian law. Legal matters will be subject to Pune jurisdiction.</p>

                <h3>General Policy</h3>
                <p><b className="highlight">Booking Procedure:</b> Book rides through our website, customer service, or authorized agents.</p>
                <p><b className="highlight">Customer Support:</b> Our support team is available to assist with all bookings, changes, or issues.</p>

                <h3>Refund Policy</h3>
                <p><b className="highlight">Cancellation Charges:</b> Charges may apply based on how early the cancellation request is received.</p>
                <p><b className="highlight">Refund Method:</b> Refunds will be issued to the original payment method within the stipulated time.</p>
                <p><b className="highlight">No-Show Clause:</b> No-shows without prior notice are not eligible for refunds.</p>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>If you have any questions about our Terms & Conditions, please contact us:</p>
            <ul>
              <li><b>Phone:</b> <a href="tel:+919697780707">+91 9697780707</a></li>
              <li><b>Email:</b> <a href="mailto:booking@swaracabs.in">booking@swaracabs.in</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
