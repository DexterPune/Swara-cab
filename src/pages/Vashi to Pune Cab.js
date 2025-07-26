
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Vashitopunecabs() {



    const cardData =
    {
        keyword: 'Vashi to Pune Cab',
        heading: 'Swara Cabs : Vashi to Pune Cab',
        headingDescription: 'Swara Cabs offers dependable, comfortable, and cost-effective cab services for your journey from Vashi to Pune. Vashi, a well-developed commercial and residential hub in Navi Mumbai, provides direct access to the Mumbai–Pune Expressway, making travel to Pune smooth and efficient. Pune, known for its rich history, educational institutions, and booming IT sector, is a popular destination for both business and leisure travelers. Whether you’re heading out for a corporate meeting, family visit, or weekend retreat, Swara Cabs ensures a stress-free experience. The distance from Vashi to Pune is approximately 130 to 150 kilometers, and the journey typically takes around 3 to 4 hours, depending on traffic. With our well-maintained fleet, experienced drivers, and round-the-clock service, Swara Cabs guarantees a safe, timely, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Pune with Swara Cabs',

        "topPlaces": [
    {
        "title": "Sinhagad Fort",
        "description": "Sinhagad Fort is a majestic hill fortress located about 30 kilometers from Pune, standing tall at an altitude of 1,312 meters. Known for its strategic location, the fort has played a crucial role in many battles, including the famous battle of Tanaji Malusare, a brave Maratha warrior. Today, it is a favorite trekking destination for adventure lovers and history buffs alike. Once at the top, visitors are rewarded with stunning views of the surrounding Sahyadri hills, rustic food stalls serving traditional Maharashtrian dishes like pithla-bhakri, and a strong sense of Maratha pride."
    },
    {
        "title": "Pataleshwar Cave Temple",
        "description": "Hidden amidst the urban chaos of JM Road, the Pataleshwar Cave Temple is a serene, 8th-century rock-cut shrine carved out of a single basalt rock. Dedicated to Lord Shiva, the temple features a beautifully carved sanctum, a circular Nandi Mandapa (pavilion), and intricate stone pillars that reflect ancient Indian architecture. Despite its location in the city, the temple offers a peaceful escape for spiritual seekers and architecture lovers. It’s also recognized as a protected monument by the Archaeological Survey of India."
    },
    {
        "title": "Osho Ashram (Osho International Meditation Resort)",
        "description": "Located in the lush and upscale Koregaon Park area, the Osho International Meditation Resort is a globally renowned spiritual retreat founded by spiritual teacher Osho. The ashram offers a wide range of meditation practices, wellness programs, spa treatments, and dynamic activities aimed at personal growth and mindfulness. Surrounded by tall bamboo trees, modern architecture, and a calm atmosphere, it attracts seekers from around the world. Visitors can take day passes or stay longer to experience a unique blend of spiritual retreat and luxurious comfort."
    },
    {
        "title": "Raja Dinkar Kelkar Museum",
        "description": "The Raja Dinkar Kelkar Museum is a rich cultural repository, home to over 20,000 artifacts collected by Dr. Dinkar G. Kelkar in memory of his son. The museum showcases an incredible variety of items ranging from antique musical instruments and ancient sculptures to everyday household items from bygone eras. Each gallery offers a fascinating glimpse into India’s diverse artistic and cultural traditions. Located in the heart of Pune, it is a must-visit destination for art lovers, history buffs, and curious travelers alike."
    },
    {
        "title": "Shaniwar Wada",
        "description": "Shaniwar Wada is one of the most iconic historical structures in Pune, built in 1732 by the Peshwas of the Maratha Empire. The fort was originally the seat of power for the Peshwas and witnessed several key events in Maratha history. Though much of the structure was destroyed by fire in 1828, the remaining ruins, including the massive Dilli Darwaza (main gate), strong ramparts, and open courtyards, speak volumes about its glorious past. The fort is also known for its haunting legends, making it a popular spot for heritage walks and history enthusiasts."
    },
    {
        "title": "Aga Khan Palace",
        "description": "The Aga Khan Palace is a majestic building located in the Yerwada area of Pune, built in 1892 by Sultan Aga Khan III. It holds great historical importance as it served as a prison for Mahatma Gandhi, Kasturba Gandhi, and other freedom fighters during the Quit India Movement. The palace now houses a museum dedicated to Mahatma Gandhi, with photographs, personal items, and his ashes. The beautiful Italian arches, sprawling lawns, and peaceful surroundings make it a tranquil place to explore the legacy of India’s freedom struggle."
    },
    {
        "title": "Pune Okayama Friendship Garden",
        "description": "Also known as Pu La Deshpande Garden, the Pune Okayama Friendship Garden is one of the largest Japanese-style gardens outside Japan, inspired by the famous Korakuen Garden in Okayama. Sprawling across 10 acres, the garden features meticulously landscaped lawns, flowing streams, arched bridges, and tranquil walking paths. It's an ideal place for family picnics, photography, meditation, or simply unwinding amidst nature. The garden also hosts a musical fountain show in the evenings, adding to the charm of this beautifully designed space."
    },
    {
        "title": "Dagdusheth Halwai Ganpati Temple",
        "description": "The Dagdusheth Halwai Ganpati Temple is one of Pune’s most beloved spiritual landmarks, visited by thousands of devotees each day. Dedicated to Lord Ganesha, the temple is known for its grand celebrations during Ganesh Chaturthi and its beautifully adorned deity that exudes peace and blessings. Located in Budhwar Peth, the temple is a fine example of modern temple architecture, with ornate gold embellishments and intricate carvings. The temple’s trust is also involved in numerous social welfare activities, adding a layer of social service to spiritual devotion."
    },
    {
        "title": "Khadakwasla Dam",
        "description": "Khadakwasla Dam, situated just 20 km from Pune, is a favorite weekend retreat for locals. The dam is built on the Mutha River and is surrounded by scenic hills and lush greenery, making it a perfect place for nature lovers and photographers. Visitors often enjoy local snacks like corn, bhel, and tea by the waterfront. The area is also en route to Sinhagad Fort and National Defence Academy (NDA), making it a good pitstop for a full-day trip. The cool breeze and calming ambiance make it ideal for morning drives and romantic evening outings."
    }
],

"services": [
  {
    "name": "Vashi to Pune Cab",
    "description": "Experience a hassle-free and comfortable journey from Vashi to Pune with our reliable cab service. We ensure timely pickups, clean and well-maintained vehicles, and professional drivers to make your intercity travel smooth and stress-free. Whether traveling for business or leisure, our cabs are ready to serve you round the clock."
  },
  {
    "name": "One-Way Cab Vashi to Pune",
    "description": "Our one-way cab service from Vashi to Pune is perfect for solo travelers, students, or professionals who require a single trip without any return obligations. Enjoy transparent pricing with no hidden fees, flexible pickup times, and door-to-door service tailored to your schedule."
  },
  {
    "name": "AC Taxi Vashi to Pune",
    "description": "Travel comfortably in our fully air-conditioned taxis from Vashi to Pune. Ideal for long highway trips, our AC taxis are equipped with modern amenities to keep you cool and relaxed, making your journey pleasant regardless of the weather conditions."
  },
  {
    "name": "Online Cab Booking Vashi",
    "description": "Book your cab from Vashi to Pune easily via our user-friendly online platform. Enjoy instant booking confirmation, multiple payment options including digital wallets, and real-time vehicle tracking to stay updated throughout your trip."
  },
  {
    "name": "SUV Cab Vashi to Pune",
    "description": "Need more space for family or luggage? Our spacious SUV cabs from Vashi to Pune provide ample room and superior comfort. Perfect for group travel, weekend getaways, or transporting bulky items with ease and safety."
  },
  {
    "name": "Sedan Taxi Vashi to Pune",
    "description": "Opt for our sedan taxis for an affordable yet stylish ride from Vashi to Pune. Ideal for individuals or couples, these sedans offer smooth rides with comfortable seating, excellent mileage, and a professional driver to ensure a seamless journey."
  },
  {
    "name": "Round Trip Cab Vashi to Pune",
    "description": "Planning to return the same day or later? Our round trip cab service from Vashi to Pune offers fixed return fares, priority vehicle allocation, and the convenience of traveling in the same car with the same driver for both legs of your trip."
  },
  {
    "name": "Executive Cab Hire Vashi",
    "description": "For business travelers seeking luxury and professionalism, our executive cab hire from Vashi to Pune offers premium vehicles equipped with top-class interiors and experienced chauffeurs dedicated to delivering a sophisticated travel experience."
  },
  {
    "name": "Corporate Cab Vashi to Pune",
    "description": "Our corporate cab service from Vashi to Pune caters to business needs with monthly invoicing, priority bookings, and professional drivers. Enjoy punctuality, comfort, and seamless travel arrangements tailored for corporate clients."
  },
  {
    "name": "Verified Drivers Vashi",
    "description": "Safety is paramount. All drivers operating on the Vashi to Pune route undergo strict background verification, extensive training, and customer service orientation to provide you with a secure and pleasant journey."
  },
  {
    "name": "Affordable Taxi Vashi to Pune",
    "description": "Travel smart without breaking the bank. Our affordable taxi service from Vashi to Pune offers competitive pricing, no hidden charges, and reliable vehicles maintained to high standards for budget-conscious travelers."
  },
  {
    "name": "Safe Ride Vashi to Pune",
    "description": "Ride with peace of mind knowing our cabs from Vashi to Pune follow strict safety protocols including regular vehicle sanitization, driver health checks, and adherence to traffic regulations to ensure your well-being throughout the journey."
  },
  {
    "name": "24/7 Cab Booking Vashi",
    "description": "No matter the hour, our cabs from Vashi to Pune are available 24/7. Whether it’s an early morning departure or a late-night arrival, our team ensures prompt service and reliable rides anytime you need."
  },
  {
    "name": "Airport Pickup Vashi to Pune",
    "description": "Need a smooth airport transfer? Book our airport pickup cab from Vashi to Pune. Our drivers monitor your flight schedule, assist with luggage, and guarantee timely pickups to and from the airport with zero hassles."
  },
  {
    "name": "Expressway Cab Vashi to Pune",
    "description": "Travel swiftly on the Mumbai-Pune Expressway with our specialized expressway cab service from Vashi to Pune. Benefit from experienced drivers familiar with the route, ensuring safe, fast, and comfortable journeys without delays."
  }
],
"tableData": [
  ["Vashi to Pune Cab", "Online Cab Booking Vashi"],
  ["One-Way Cab Vashi to Pune", "AC Taxi Vashi to Pune"],
  ["Round Trip Cab Vashi to Pune", "Sedan Taxi Vashi to Pune"],
  ["SUV Cab Vashi to Pune", "Affordable Taxi Vashi to Pune"],
  ["Verified Drivers Vashi", "Executive Cab Hire Vashi"],
  ["24/7 Cab Booking Vashi", "Safe Ride Vashi to Pune"],
  ["Airport Pickup Vashi to Pune", "Expressway Cab Vashi to Pune"],
  ["Corporate Cab Vashi to Pune", ""]
],



"whychoose": [
  {
    "WhyChooseheading": "Reliable Vashi to Pune Cab Service",
    "WhyChoosedescription": "Count on our Vashi to Pune cab service for punctual and dependable travel. Whether for business trips or leisure, we ensure timely pickups and drop-offs, making your journey smooth and hassle-free."
  },
  {
    "WhyChooseheading": "Wide Range of Vehicle Options",
    "WhyChoosedescription": "Choose from a variety of well-maintained vehicles including economical sedans, spacious SUVs, and luxury cars to match your travel needs and group size, ensuring a comfortable ride from Vashi to Pune."
  },
  {
    "WhyChooseheading": "Transparent and Affordable Pricing",
    "WhyChoosedescription": "Our Vashi to Pune cab service offers clear and competitive pricing inclusive of tolls, taxes, and driver charges, with no hidden fees, helping you plan your travel budget effectively."
  },
  {
    "WhyChooseheading": "Experienced and Courteous Drivers",
    "WhyChoosedescription": "Our professional drivers are familiar with the best routes between Vashi and Pune, prioritizing your safety and comfort while providing courteous and helpful service."
  },
  {
    "WhyChooseheading": "Convenient Online Booking",
    "WhyChoosedescription": "Booking your Vashi to Pune cab is quick and easy through our website or mobile app, with instant confirmation, real-time tracking, and flexible cancellation or rescheduling options."
  },
  {
    "WhyChooseheading": "24/7 Customer Support",
    "WhyChoosedescription": "Our customer support team is available around the clock to assist you with bookings, answer queries, and provide support during your Vashi to Pune journey."
  },
  {
    "WhyChooseheading": "Clean and Well-Maintained Vehicles",
    "WhyChoosedescription": "Travel in clean, air-conditioned vehicles that are regularly serviced and sanitized, ensuring a safe and comfortable trip from Vashi to Pune."
  },
  {
    "WhyChooseheading": "Multiple Secure Payment Options",
    "WhyChoosedescription": "Pay conveniently using credit/debit cards, UPI, wallets, or cash. We provide transparent billing and detailed receipts for every Vashi to Pune cab ride."
  }
]









    }


const faqData = [
    {
        question: "Do you offer cab services from Vashi to Pune?",
        answer: "Yes, Swara Cabs provides reliable and comfortable cab services from Vashi to Pune."
    },
    {
        question: "What is the fare for a cab from Vashi to Pune?",
        answer: "Fares start from ₹6,000 for a sedan. The exact fare depends on vehicle type and travel time."
    },
    {
        question: "How can I book a cab from Vashi to Pune?",
        answer: "You can book a cab through our website or call us directly at +91 9697780707."
    },
    {
        question: "What types of vehicles are available for Vashi to Pune trips?",
        answer: "We offer a range of vehicles including sedans, SUVs, Innova Crysta, and tempo travellers."
    },
    {
        question: "Are tolls and driver charges included in the cab fare?",
        answer: "Yes, all tolls, taxes, and driver allowances are included in the fare. No hidden charges."
    },
    {
        question: "Can I book a cab for night travel from Vashi to Pune?",
        answer: "Yes, Swara Cabs offers 24/7 cab services including night travel with a nominal night-time surcharge."
    },
    {
        question: "Is a round trip option available from Vashi to Pune?",
        answer: "Yes, you can book both one-way and round-trip rides based on your convenience."
    },
    {
        question: "Is it safe to travel with Swara Cabs?",
        answer: "Absolutely. Our drivers are professional, trained, and background-verified to ensure your safety."
    },
    {
        question: "Do you offer doorstep pickup in Vashi?",
        answer: "Yes, we provide hassle-free doorstep pickup from any location in Vashi."
    },
    {
        question: "What payment methods can I use?",
        answer: "We accept UPI, cash, debit/credit cards, and all major digital wallets for your convenience."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Nilesh Jadhav',
        review: 'Booked a cab from Vashi to Pune with Swara Cabs. The ride was smooth, the driver was punctual, and the vehicle was in excellent condition.'
    },
    {
        name: 'Ms. Rupal Thakur',
        review: 'Great experience with Swara Cabs on my Vashi to Pune trip. Clean car, friendly driver, and timely pickup. Highly recommended!'
    }
];

































































    const contactData = {
        heading: `${cardData.keyword} Contact Number`,
        contactNumbers: [
            "+91 9697780707",
            "+91 8975330707",

        ],
        email: "booking@swaracabs.in"
    };


    const Images = [
        {
            place: "/images/keyword/1.jpg",
            text: "Pune to Mumbai Taxi Fare",
        },
        {
            place: "/images/keyword/2.jpg",
            text: "Pune to Mumbai Online Cab Booking",
        },
        {
            place: "/images/keyword/3.jpg",
            text: "Pimpri Chinchwad to Mumbai Cab",
        },
        {
            place: "/images/keyword/4.jpg",
            text: "Baner to Mumbai Cabs",
        },
        {
            place: "/images/keyword/5.jpg",
            text: "Hinjewadi to Mumbai Cab",
        },
        {
            place: "/images/keyword/6.jpg",
            text: "Pimple Saudagar to Mumbai Cab Service",
        },
        {
            place: "/images/keyword/7.jpg",
            text: "Wakad to Mumbai Cab",
        },
        {
            place: "/images/keyword/8.jpg",
            text: "Hadapsar to Mumbai Cab",
        },
        {
            place: "/images/keyword/9.jpg",
            text: "Kalyani Nagar to Mumbai Taxi",
        },
        {
            place: "/images/keyword/10.jpg",
            text: "Koregaon Park to Mumbai Cab",
        },
        {
            place: "/images/keyword/11.jpg",
            text: "Kothrud to Mumbai Cab",
        },
        {
            place: "/images/keyword/12.jpg",
            text: "Kharadi to Mumbai Cab",
        },
        {
            place: "/images/keyword/13.jpg",
            text: "Shivajinagar to Mumbai Cab",
        },
        {
            place: "/images/keyword/14.jpg",
            text: "Pune to Mumbai Ertiga Cab",
        },
        {
            place: "/images/keyword/15.jpg",
            text: "Pune to Mumbai Innova Crysta Cab",
        },
        {
            place: "/images/keyword/16.jpg",
            text: "Pune to Mumbai Sedan Cab",
        },
        {
            place: "/images/keyword/17.jpg",
            text: "Kondhwa to Mumbai cab",
        },
        {
            place: "/images/keyword/18.jpg",
            text: "Viman Nagar to Mumbai Cabs",
        },
        {
            place: "/images/keyword/19.jpg",
            text: "Katraj to Mumbai Cab Service",
        },
        {
            place: "/images/keyword/20.jpg",
            text: "Pune Station to Mumbai Cabs Service",
        },
        {
            place: "/images/keyword/22.jpg",
            text: "Mumbai to Pune Cabs",
        },
        {
            place: "/images/keyword/23.jpg",
            text: "Mumbai Airport to Pune Cab",
        },
        {
            place: "/images/keyword/24.jpg",
            text: "Dadar to Pune Cab",
        },
        {
            place: "/images/keyword/25.jpg",
            text: "Mumbai to Pune One Way Cab",
        },
        {
            place: "/images/keyword/26.jpg",
            text: "Andheri to Pune Cab",
        },
        {
            place: "/images/keyword/27.jpg",
            text: "Bandra to Pune Cab",
        },
    ];


    const images = [
        { src: "/images/ourfleet/1.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/5.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/2.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/3.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/4.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/7.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/8.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/9.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/6.jpg", alt: "Image 1" },

    ];





const vashiToPuneCabSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Swara Cabs",
  "description": "Reliable Vashi to Pune cab service offering AC taxis, SUVs, sedans with verified drivers, 24/7 online booking, airport pickups, and expressway rides.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Swara Cabs",
    "telephone": "+91 9697780707",
    "url": "https://www.swaracabs.in/vashi-to-pune-cab",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vashi",
      "addressRegion": "MH",
      "addressCountry": "IN"
    }
  },
  "areaServed": ["Vashi", "Pune"],
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://www.swaracabs.in/vashi-to-pune-cab"
  }
};





    return (
        <div>
<Helmet>
  <title>Vashi to Pune Cab | AC, SUV & Sedan Taxi | Swara Cabs</title>
  <meta
    name="description"
    content="Book AC, SUV, and sedan cabs from Vashi to Pune with verified drivers, affordable fares, airport pickups, expressway rides, and 24/7 online booking."
  />
  <meta
    name="keywords"
    content="Vashi to Pune Cab, One-Way Cab Vashi to Pune, AC Taxi Vashi to Pune, Online Cab Booking Vashi, SUV Cab Vashi to Pune, Sedan Taxi Vashi to Pune, Round Trip Cab Vashi to Pune, Executive Cab Hire Vashi, Corporate Cab Vashi to Pune, Verified Drivers Vashi, Affordable Taxi Vashi to Pune, Safe Ride Vashi to Pune, 24/7 Cab Booking Vashi, Airport Pickup Vashi to Pune, Expressway Cab Vashi to Pune"
  />
  <script type="application/ld+json">
    {JSON.stringify(vashiToPuneCabSchema)}
  </script>
</Helmet>


            <section id="slider" className="hero p-0 odd featured">
                <div className="swiper-container no-slider animation slider-h-50 slider-h-auto">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide slide-center">

                            <div className="slide-content row text-center">
                                <div className="col-12 mx-auto inner">
                                    <h1 className="mb-0 title effect-static-text pt-5">{cardData.keyword}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section id="about" className="jarallax text-light py-0">
                <div className="center-y relative text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid py-0" >
                    <div className="row ">
                        <div className="col-12 col-md-7 ">
                            <img src='/images/keyword/54.jpg' alt='img' />
                            <h3 className="py-1"
                                style={{
                                    color: '#AA5225', // Red color for the title 
                                    textShadow: '5px 5px 10px rgba(255, 255, 255, 0.7)', // Light shadow effect
                                    fontWeight: 'bold'
                                }}


                            >{cardData.heading} </h3><p className='fw-bold '>{cardData.headingDescription}</p>
                            <div className="">
                                <p className='fw-bold py-3 darkcolorrr'>{cardData.top}</p>
                                {cardData.topPlaces.map((place, index) => (
                                    <div key={index} className="">
                                        <div
                                            style={{
                                                cursor: 'pointer',
                                                padding: '10px',
                                                marginBottom: '7px',
                                                borderRadius: '8px',
                                                transition: 'transform 0.2s'
                                            }}

                                        >
                                            <h4 className="mb-1 darkcolorrr">{place.title}</h4>
                                            <p className="mb-0">{place.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div
                                style={{
                                    cursor: 'pointer',
                                    padding: '10px',
                                    marginBottom: '7px',
                                    borderRadius: '8px', // Optional: rounded corners
                                    transition: 'transform 0.2s' // Optional: smooth scaling effect
                                }}
                            >
                                {cardData.services.map((service, index) => (
                                    <div key={index} className=" my-4">
                                        <h4 className="py-1 darkcolorrr">{service.name}</h4>
                                        <p>{service.description}</p>
                                    </div>
                                ))}
                            </div>

                            <table className="table table-responsive Border-key my-2">
                                <tbody className=' Border-key'>
                                    {cardData.tableData.map((row, rowIndex) => (
                                        <tr className='Border-key ' key={rowIndex}>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className=' Border-key bluecolor fw-bold' >{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h3 className='pt-md-3'>{cardData.keyword + " Rates"}</h3>
                            <BusRatesTable />

                            <div id="why-choose-section"
                                className='px-2'>
                                <h2 className='whycolor py-3'>Why Choose us for  {cardData.keyword}</h2>
                                {cardData.whychoose.map((item, index) => (
                                    <div key={index}>
                                        <h4 className="py-1 whycolor">{item.WhyChooseheading}</h4>
                                        <p>{item.WhyChoosedescription}</p>
                                    </div>
                                ))}
                            </div>


                            <div className="row twm-faq-section-1 m-b30">


                                <div className=" col-md-12 wow fadeInDown" data-wow-delay="0.2">
                                    <div className="twm-faq-info-wrap">

                                        <div className="section-head left">
                                            <h2 className="twm-large-title site-text-dark darkcolor">FAQS {cardData.keyword} For  Swara cabs</h2>
                                        </div>


                                        <div className="twm-faq-info">
                                            <div className="accordion twm-acdn" id="sf-faq-accordion">

                                                <Accordion data={faqData} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <Testimonialskeywords
                                sectionId="customer-feedback"
                                title="Customer"
                                subtitle="Reviews"
                                testimonials={testimonialsData}
                            />
                            <div className='py-4'>

                                <div className="contact-box Borderr">
                                    <h3>{contactData.heading}</h3>
                                    <p className='text-black'>For booking inquiries or any assistance, please feel free to contact us:</p>
                                    <div className="contact-details">
                                        <p><strong className='darkcolor'>Mobile No:</strong></p>
                                        <ul>
                                            {contactData.contactNumbers.map((number, index) => (
                                                <li key={index}>
                                                    <a href={`tel:${number}`} className="contact-link fw-bold fs-5">
                                                        {number}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                        <p><strong className='darkcolor'>Email Id: </strong>
                                            <a href={`mailto:${contactData.email}`} className="contact-link">
                                                {contactData.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-md-4' >
                            {Images.map((e) => {
                                return (
                                    <div className="box1">
                                        <a
                                            href="./"
                                            className="d-flex justify-content-around align-items-center"
                                        >
                                            <div className="b1">
                                                <img src={e.place} alt="img" />
                                            </div>
                                            <div className="b2">
                                                {" "}
                                                <a href="./" className='px-3'>{e.text}</a>
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}


                            <div className="gallery-container">
                                <h2 className="gallery-title">Our Fleets</h2>
                                <div className="gallery-row d-flex flex-wrap">
                                    {images.map((image, index) => (
                                        <div className="gallery-item col-md-4" key={index}>
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="gallery-image"

                                            />
                                        </div>
                                    ))}

                                </div>
                            </div>

                            <div className=" rounded p-4 shadow-sm Uni_border "
                                style={{
                                    cursor: 'pointer',
                                    padding: '10px',
                                    border: '3px dotted #AA5126',
                                    marginBottom: '7px',
                                    fontWeight: 'bold',
                                }}

                            >
                                <h4 className="pb-3 pt-3 lead fw-bold text-dark">Contact Information</h4>

                                <div className="row">

                                    <div className="col-12 mb-3">
                                        <div className="Small_border  rounded text-center py-2 " style={{ backgroundColor: '#AA5126' }}>
                                            <h4 className=" lead fw-semibold whitt text-darkk">Phone Numbers</h4>
                                            <i className="bi bi-telephone-fill fs-1 mb-2"></i>
                                            <div className=''>
                                                <a href="tel:+919697780707" className="d-block  text-white">+91 9697780707</a>
                                                <a href="tel:+918975330707" className="d-block  text-white">+91 8975330707</a>



                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12 mb-3 ">
                                        <div className="Small_border rounded text-center">
                                            <i className="bi bi-envelope fs-1 mb-2"></i>
                                            <div className='rounded py-2' style={{ backgroundColor: '#AA5126' }}>
                                                <h4 className=" fw-semibold lead whitt text-darkk">Email</h4>
                                                <a href="mailto:booking@swaracabs.in" className=" text-white d-block">
                                                    booking@swaracabs.in
                                                </a>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12 mb-3 ">
                                        <div className="Small_border  rounded text-center">
                                            <i className="bi bi-house-fill fs-1 mb-2"></i>
                                            <div className='rounded py-2' style={{ backgroundColor: '#AA5126' }}>
                                                <h4 className=" fw-semibold lead whitt text-darkk">Address</h4>
                                                <p className="whit text-white ">
                                                    <i> Swara Cabs : <br />
                                                        Near Ambika Mata Mandir, Ghorpade Wasti Loni Kalbhor, Tal - Haveli, Dist - Pune, Maharashtra, India.
                                                    </i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}

export default Vashitopunecabs;