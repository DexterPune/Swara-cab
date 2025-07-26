// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     info: '',
//     message: '',
//   });

//   const [alertMessage, setAlertMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Example: replace with actual form submission logic
//     console.log('Submitted:', formData);
//     setAlertMessage('Your message has been sent!');
//   };

//   return (


//      <>
     
     
//       <section id="slider" className="hero p-0 odd featured">
//         <div className="swiper-container no-slider animation slider-h-50 slider-h-auto">
//           <div className="swiper-wrapper">
//             {/* Item 1 */}
//             <div className="swiper-slide slide-center">
//               {/* Media */}
              
//               <div className="slide-content row text-center">
//                 <div className="col-12 mx-auto inner">
//                   <h1 className="mb-0 title effect-static-text pt-5">Contact Us </h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     <section id="contact" className="section-1 form contact theabhi">
//       <div className="container">
//         <div className="row">
//           {/* Left Side - Form */}
//           <div className="col-12 col-md-8 pr-md-5 align-self-center text">
//             <div className="row intro">
//               <div className="col-12 p-0">
//                 <span className="pre-title m-0">Connect with Us</span>
//                 <h2>Get in <span className="featured"><span>Touch</span></span></h2>
//                 <p>Seamless Connectivity, Exceptional Service</p>
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-12 p-0">
//                 <form id="nexgen-simple-form" className="nexgen-simple-form" onSubmit={handleSubmit}>
//                   <div className="row form-group-margin">
//                     <div className="col-12 col-md-6 m-0 p-2 input-group">
//                       <input
//                         type="text"
//                         name="name"
//                         className="form-control field-name"
//                         placeholder="Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="col-12 col-md-6 m-0 p-2 input-group">
//                       <input
//                         type="email"
//                         name="email"
//                         className="form-control field-email"
//                         placeholder="Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="col-12 col-md-6 m-0 p-2 input-group">
//                       <input
//                         type="text"
//                         name="phone"
//                         className="form-control field-phone"
//                         placeholder="Phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                       />
//                     </div>
                  
//                     <div className="col-12 m-0 p-2 input-group">
//                       <textarea
//                         name="message"
//                         className="form-control field-message"
//                         placeholder="Message"
//                         value={formData.message}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="col-12 m-0 p-2 input-group">
//                       <span className="form-alert">{alertMessage}</span>
//                     </div>
//                     <div className="col-12 input-group m-0 p-2 ">
//                       <button type="submit" className="btn primary-button border">Submit</button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Contact Info */}
//           <div className="col-12 col-md-4">
//             <div className="contacts">
//               <h4>Contact Number</h4>
//               <p>Reach Out to Swara Cabs for Inquiries and Assistance</p>
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <a href="tel:+919697780707" className="nav-link">
//                     <i className="fas fa-phone-alt mr-2"></i>
//                     +91 9697780707
//                   </a>
//                 </li>
//                  <li className="nav-item">
//                   <a href="tel:+918975330707" className="nav-link">
//                     <i className="fas fa-phone-alt mr-2"></i>
//                      +91 8975330707
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="mailto:booking@swaracabs.in" className="nav-link">
//                     <i className="fas fa-envelope mr-2"></i>
//                     booking@swaracabs.in
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="#" className="nav-link">
//                     <i className="fas fa-map-marker-alt mr-2"></i>
//                     Swara Cabs :<br/>
//                     Near Ambika Mata Mandir, Ghorpade Wasti Loni Kalbhor, Tal - Haveli, Dist - Pune, Maharashtra, India.
//                   </a>
//                 </li>
               
//               </ul>

           

//             </div>
//           </div>
//              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5981.518118088941!2d74.018369!3d18.482543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e447bd523cb09%3A0x24bd63f3ed185fff!2sSwara%20Cabs%20Service%20In%20Pune!5e1!3m2!1sen!2sin!4v1750745094347!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

//         </div>
//       </div>
//     </section>
//      </>
//   );
// };

// export default Contact;


import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAlertMessage('');

    const payload = {
      access_key: "8b2150bf-3087-4bcc-af4c-33e79bad0f03", 
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      subject: "New Contact Form Submission - Swara Cabs",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setAlertMessage("✅ Your message has been sent successfully!");
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setAlertMessage("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setAlertMessage("❌ Network error. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <section id="slider" className="hero p-0 odd featured">
        <div className="swiper-container no-slider animation slider-h-50 slider-h-auto">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide-center">
              <div className="slide-content row text-center">
                <div className="col-12 mx-auto inner">
                  <h1 className="mb-0 title effect-static-text pt-5">Contact Us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-1 form contact theabhi">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 pr-md-5 align-self-center text">
              <div className="row intro">
                <div className="col-12 p-0">
                  <span className="pre-title m-0">Connect with Us</span>
                  <h2>Get in <span className="featured"><span>Touch</span></span></h2>
                  <p>Seamless Connectivity, Exceptional Service</p>
                </div>
              </div>

              <div className="row">
                <div className="col-12 p-0">
                  <form onSubmit={handleSubmit} className="nexgen-simple-form">
                    <div className="row form-group-margin">
                      <div className="col-12 col-md-6 m-0 p-2 input-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control field-name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6 m-0 p-2 input-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control field-email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6 m-0 p-2 input-group">
                        <input
                          type="text"
                          name="phone"
                          className="form-control field-phone"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12 m-0 p-2 input-group">
                        <textarea
                          name="message"
                          className="form-control field-message"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12 m-0 p-2 input-group">
                        <span className="form-alert">{alertMessage}</span>
                      </div>
                      <div className="col-12 input-group m-0 p-2">
                        <button type="submit" className="btn primary-button border" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Submit"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="contacts">
                <h4>Contact Number</h4>
                <p>Reach Out to Swara Cabs for Inquiries and Assistance</p>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="tel:+919697780707" className="nav-link">
                      <i className="fas fa-phone-alt mr-2"></i>
                      +91 9697780707
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="tel:+918975330707" className="nav-link">
                      <i className="fas fa-phone-alt mr-2"></i>
                      +91 8975330707
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="mailto:booking@swaracabs.in" className="nav-link">
                      <i className="fas fa-envelope mr-2"></i>
                      booking@swaracabs.in
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      Swara Cabs:<br />
                      Near Ambika Mata Mandir, Ghorpade Wasti Loni Kalbhor, Tal - Haveli, Dist - Pune, Maharashtra, India.
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5981.518118088941!2d74.018369!3d18.482543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e447bd523cb09%3A0x24bd63f3ed185fff!2sSwara%20Cabs%20Service%20In%20Pune!5e1!3m2!1sen!2sin!4v1750745094347!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Swara Cabs Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
