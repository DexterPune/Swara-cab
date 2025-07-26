// import React, { useState } from 'react';

// // FAQ Component
// const FAQKeyword = ({ title = '', faqs }) => {
//   // Manage the open state of each accordion
//   const [activeIndex, setActiveIndex] = useState(null);

//   // Handle accordion item toggle
//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="faq-section ">
//       <div className="auto-container">
//         <div className="sec-title mb_50 centred">
//           <h2>{title}</h2>
//         </div>
//         <div className="inner-box">
//           <div className="row clearfix">
//             {/* Loop through FAQ items */}
//             {faqs.map((faqGroup, groupIndex) => (
//               <div key={groupIndex} className="col-12 accordion-column">
//                 <ul className="accordion-box">
//                   {faqGroup.map((faq, index) => (
//                     <li
//                       key={index}
//                       className={`accordion block ${activeIndex === index ? 'active-block' : ''}`}
//                     >
//                       <div
//                         className={`acc-btn ${activeIndex === index ? 'active' : ''}`}
//                         onClick={() => toggleAccordion(index)}
//                       >
//                         <div className="icon-box"></div>
//                         <h5 className='darkcolorr'>{faq.question}</h5>
//                       </div>
//                       <div className={`acc-content ${activeIndex === index ? 'current' : ''}`}>
//                         <div className="text">
//                           <p className='darkcolor'>{faq.answer}</p>
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQKeyword;


import React, { useState } from 'react';

// FAQ Component
const FAQKeyword = ({ title = '', faqs }) => {
  // Manage the open state of each accordion
  const [activeIndex, setActiveIndex] = useState(null);

  // Handle accordion item toggle
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section ">
      <div className="auto-container">
        <div className="sec-title mb_50 centred">
          <h2>{title}</h2>
        </div>
        <div className="inner-box">
          <div className="row clearfix">
            {/* Loop through FAQ items */}
            {faqs.map((faqGroup, groupIndex) => (
              <div key={groupIndex} className="col-12 accordion-column">
                <ul className="accordion-box">
                  {faqGroup.map((faq, index) => (
                    <li
                      key={index}
                      className={`accordion block ${activeIndex === index ? 'active-block' : ''}`}
                    >
                      <div
                        className={`acc-btn ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                      >
                        <div className="icon-box"></div>
                        <h5 className='darkcolorr'>{faq.question}</h5>
                      </div>
                      <div className={`acc-content ${activeIndex === index ? 'current' : ''}`}>
                        <div className="text">
                          <p className='darkcolor'>{faq.answer}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQKeyword;
