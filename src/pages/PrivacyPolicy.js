import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/privacy-policy.css'; 

const PrivacyPolicy = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Pune to Mumbai Cab",
    "description": "Book your comfortable Pune to Mumbai cab for a smooth and hassle-free journey. Choose from one-way, round trip, and group travel options with both affordable and luxury cabs.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "bestRating": "5",
      "worstRating": "1",
      "ratingValue": "4.7",
      "ratingCount": "450"
    }
  };

  return (
    <div>
      <Helmet>
        <title>Pune to Mumbai Cab | One-Way & Round Trip Taxi Service</title>
        <meta 
          name="description" 
          content="Book a reliable cab for your Pune to Mumbai journey. Affordable and luxury cabs available for one-way, round-trip, and group travel services." 
        />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <section id="slider" className="hero p-0 odd featured">
        <div className="swiper-container no-slider animation slider-h-50 slider-h-auto">
          <div className="swiper-wrapper">
            {/* Item 1 */}
            <div className="swiper-slide slide-center">
              {/* Media */}
              
              <div className="slide-content row text-center">
                <div className="col-12 mx-auto inner">
                  <h1 className="mb-0 title effect-static-text pt-5">Privacy Policy</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-policy">
        <div className="container px-0">
          <div className="row g-0">
            <div className="col-12 col-md-7">
              <h3 className="title text-dark">Privacy Policy</h3>

              <p>
                At <strong className=''>Swara Cab</strong>, we are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our services.
              </p>

              <div className="section">
                <p className="highlight darkcolor">Information We Collect:</p>
                <p className="highlight darkcolor">1. Personal Information:</p>
                <p>
                  When you book a service with us, we may collect personal information such as your name, contact details, payment information, and travel preferences.
                </p>

                <p className="highlight darkcolor">2. Usage Information:</p>
                <p>
                  We may collect information about how you interact with our website and mobile app, including IP address, device details, and pages visited.
                </p>

                <p className="highlight darkcolor">3. Location Information:</p>
                <p>
                  With your consent, we may collect location data to provide accurate cab services and improve route efficiency.
                </p>
              </div>

              <div className="section">
                <p className="highlight darkcolor">How We Use Your Information:</p>
                <p className="highlight darkcolor">1. To Provide Services:</p>
                <p>
                  Your data helps us manage bookings, assign drivers, and offer smooth transportation experiences.
                </p>

                <p className="highlight darkcolor">2. To Improve Services:</p>
                <p>
                  We analyze user feedback and app/website behavior to improve features and service quality.
                </p>

                <p className="highlight darkcolor">3. For Communication:</p>
                <p>
                  Your contact info is used to send trip confirmations, alerts, or important service messages.
                </p>

                <p className="highlight darkcolor">4. For Marketing:</p>
                <p>
                  With your consent, we may send occasional promotional emails or offers related to our cab services.
                </p>
              </div>

              <div className="section">
                <p className="highlight darkcolor">Information Sharing and Disclosure:</p>
                <p className="highlight darkcolor">1. Third-Party Service Providers:</p>
                <p>
                  Trusted third-party partners may access your data only to assist in service delivery (e.g., payment gateways, SMS providers).
                </p>

                <p className="highlight darkcolor">2. Legal Compliance:</p>
                <p>
                  We may share your information if required by law or to protect rights, safety, or security.
                </p>
              </div>

              <div className="section">
                <p className="highlight darkcolor">Data Security:</p>
                <p>
                  We use industry-standard measures to protect your data. While we aim for full security, no system is completely immune from risks.
                </p>

                <p className="highlight darkcolor">Your Rights:</p>
                <p>
                  You may request access to your personal data, request updates or deletion, and opt out of promotional messages at any time.
                </p>

                <p className="highlight darkcolor">Changes to this Privacy Policy:</p>
                <p>
                  Swara Cab may update this policy from time to time. Any changes will be posted here, and significant changes may be notified via email.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>For any questions about our Privacy Policy, reach out to us at:</p>
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

export default PrivacyPolicy;
