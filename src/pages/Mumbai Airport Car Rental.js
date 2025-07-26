
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Mumbaiairportcarrentals() {



    const cardData =
    {
        keyword: 'Mumbai Airport Car Rental',
        heading: 'Swara Cabs : Mumbai Airport Car Rental',
        headingDescription: 'Swara Cabs offers dependable and budget-friendly car rental services at Mumbai Airport, providing travelers with a smooth and convenient start to their journey. Whether you are arriving at Terminal 1 for domestic flights or Terminal 2 and 3 for international arrivals, our fleet is readily available to serve your travel needs. From sedans and SUVs to spacious multi-seaters like Ertiga and Innova Crysta, we have the perfect vehicle for solo travelers, families, or business groups. Whether you are heading to Pune, exploring Mumbai, or embarking on an outstation trip, Swara Cabs ensures a comfortable and timely experience. With professional chauffeurs, 24/7 support, and well-maintained vehicles, Swara Cabs makes Mumbai Airport car rental easy, reliable, and stress-free for all types of travelers.',

        top: 'Top Places to Visit in Pune with Swara Cabs',

        "topPlaces": [
     {
        "title": "Sinhagad Fort",
        "description": "Sinhagad Fort is a majestic hill fortress located about 30 kilometers from Pune, standing tall at an altitude of 1,312 meters. Known for its strategic location, the fort has played a crucial role in many battles, including the famous battle of Tanaji Malusare, a brave Maratha warrior. Today, it is a favorite trekking destination for adventure lovers and history buffs alike. Once at the top, visitors are rewarded with stunning views of the surrounding Sahyadri hills, rustic food stalls serving traditional Maharashtrian dishes like pithla-bhakri, and a strong sense of Maratha pride."
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
        "title": "Pataleshwar Cave Temple",
        "description": "Hidden amidst the urban chaos of JM Road, the Pataleshwar Cave Temple is a serene, 8th-century rock-cut shrine carved out of a single basalt rock. Dedicated to Lord Shiva, the temple features a beautifully carved sanctum, a circular Nandi Mandapa (pavilion), and intricate stone pillars that reflect ancient Indian architecture. Despite its location in the city, the temple offers a peaceful escape for spiritual seekers and architecture lovers. It’s also recognized as a protected monument by the Archaeological Survey of India."
    },
    {
        "title": "Osho Ashram (Osho International Meditation Resort)",
        "description": "Located in the lush and upscale Koregaon Park area, the Osho International Meditation Resort is a globally renowned spiritual retreat founded by spiritual teacher Osho. The ashram offers a wide range of meditation practices, wellness programs, spa treatments, and dynamic activities aimed at personal growth and mindfulness. Surrounded by tall bamboo trees, modern architecture, and a calm atmosphere, it attracts seekers from around the world. Visitors can take day passes or stay longer to experience a unique blend of spiritual retreat and luxurious comfort."
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
    "name": "Mumbai Airport Car Rental",
    "description": "Get easy and convenient car rentals right from Mumbai Airport. Our service ensures reliable pickups, a range of vehicle options, and professional drivers to make your travel from the terminal to any destination smooth and hassle-free."
  },
  {
    "name": "Car on Rent from Mumbai Airport",
    "description": "Rent a car directly from Mumbai Airport and enjoy flexible pickup timing, fixed pricing, and zero waiting. Whether you're heading to Pune, Nashik, or within Mumbai, our rental service provides complete convenience at competitive rates."
  },
  {
    "name": "Online Car Booking Mumbai Airport",
    "description": "Book your airport car online within minutes. With real-time availability, secure payments, and instant confirmation, our online platform offers a seamless car booking experience from Mumbai Airport to any location."
  },
  {
    "name": "Affordable Car Hire Mumbai Airport",
    "description": "Looking for a cost-effective ride? Our affordable car hire services from Mumbai Airport combine quality and value, with clean vehicles, fixed fares, and no hidden charges—ideal for budget-conscious travelers."
  },
  {
    "name": "Sedan Rental Mumbai Airport",
    "description": "Travel in comfort with our sedan rentals from Mumbai Airport. Perfect for solo travelers, couples, or business executives looking for a smooth and economical ride to Pune or other nearby cities."
  },
  {
    "name": "SUV Rental Mumbai Airport",
    "description": "Need more space? Book an SUV from Mumbai Airport and enjoy a roomy, air-conditioned ride ideal for families or groups with luggage. Our SUVs are perfect for long-distance airport transfers."
  },
  {
    "name": "One-Way Car Rental Airport to Pune",
    "description": "Book a one-way car rental from Mumbai Airport to Pune and pay only for the drop. This service is ideal for travelers who don’t need a return trip and want a clean, comfortable ride at fair rates."
  },
  {
    "name": "Round Trip Car Hire Mumbai Airport",
    "description": "Plan both legs of your journey with our round trip car hire from Mumbai Airport. Enjoy a discounted return fare, a dedicated vehicle, and the same driver for maximum continuity and comfort."
  },
  {
    "name": "Business Travel Car Rental Airport",
    "description": "Our business travel car rental service from Mumbai Airport is perfect for executives. Get luxury vehicles, punctual pickups, and priority support tailored for time-sensitive corporate needs."
  },
  {
    "name": "24/7 Car Hire Mumbai Airport",
    "description": "No matter the time, our 24/7 car hire service at Mumbai Airport is ready for you. Whether it's a red-eye flight or early morning arrival, we provide reliable cars and timely pickups around the clock."
  },
  {
    "name": "Verified Drivers Car Rental",
    "description": "Travel with peace of mind. All our drivers are background-verified, experienced, and courteous—ensuring a safe and professional travel experience from the airport to your destination."
  },
  {
    "name": "Airport Transfer Car Hire Mumbai",
    "description": "Get smooth and efficient airport transfers with our car hire service. Our drivers track flight timings and ensure prompt pickups, helping you avoid delays and unnecessary stress after landing."
  },
  {
    "name": "Executive Car Rental Mumbai Airport",
    "description": "Upgrade your ride with our executive car rental service from Mumbai Airport. Enjoy leather interiors, climate control, and professional chauffeurs—perfect for VIP clients and business travelers."
  },
  {
    "name": "Safe Car Rental Mumbai Airport",
    "description": "Your safety is our top priority. Our cars are sanitized, inspected, and driven by professionals trained in road safety protocols—making every airport-to-city ride worry-free and comfortable."
  },
  {
    "name": "Mumbai Airport Car Booking App",
    "description": "Use our mobile app to book cars instantly from Mumbai Airport. Track driver status, manage bookings, and access support easily—all from your phone for a faster, smarter travel experience."
  }
],
"tableData": [
  ["Mumbai Airport Car Rental", "Online Car Booking Mumbai Airport"],
  ["Car on Rent from Mumbai Airport", "Affordable Car Hire Mumbai Airport"],
  ["Sedan Rental Mumbai Airport", "SUV Rental Mumbai Airport"],
  ["One-Way Car Rental Airport to Pune", "Round Trip Car Hire Mumbai Airport"],
  ["Business Travel Car Rental Airport", "Executive Car Rental Mumbai Airport"],
  ["Verified Drivers Car Rental", "Safe Car Rental Mumbai Airport"],
  ["Airport Transfer Car Hire Mumbai", "24/7 Car Hire Mumbai Airport"],
  ["Mumbai Airport Car Booking App", ""]
],




"whychoose": [
  {
    "WhyChooseheading": "Reliable Mumbai Airport Car Rental Service",
    "WhyChoosedescription": "Experience punctual and hassle-free car rental services from Mumbai Airport. Whether you're arriving for business or leisure, we ensure timely pickups and drop-offs, so your journey starts and ends smoothly."
  },
  {
    "WhyChooseheading": "Wide Range of Vehicle Options",
    "WhyChoosedescription": "Choose from a diverse fleet of cars at Mumbai Airport, including economical sedans, spacious SUVs, luxury vehicles, and premium taxis to suit your travel needs and group size."
  },
  {
    "WhyChooseheading": "Transparent and Affordable Pricing",
    "WhyChoosedescription": "Our Mumbai Airport car rental service offers clear, competitive pricing inclusive of all tolls, taxes, and driver charges. No hidden fees guarantee you can plan your travel budget with confidence."
  },
  {
    "WhyChooseheading": "Experienced and Courteous Drivers",
    "WhyChoosedescription": "Our professional drivers are well-acquainted with Mumbai Airport and the city’s best routes, ensuring a safe, comfortable, and courteous travel experience throughout your rental period."
  },
  {
    "WhyChooseheading": "Convenient Online Booking",
    "WhyChoosedescription": "Booking your Mumbai Airport car rental is quick and easy via our website or mobile app. Get instant booking confirmation, live vehicle tracking, and flexible cancellation or rescheduling policies."
  },
  {
    "WhyChooseheading": "24/7 Customer Support",
    "WhyChoosedescription": "Our customer support team is available around the clock to assist with bookings, answer your queries, and provide real-time support to ensure a smooth rental experience."
  },
  {
    "WhyChooseheading": "Clean and Well-Maintained Vehicles",
    "WhyChoosedescription": "Travel in clean, air-conditioned vehicles that are regularly serviced and sanitized. Our fleet at Mumbai Airport is equipped with modern amenities for your comfort and safety."
  },
  {
    "WhyChooseheading": "Multiple Secure Payment Options",
    "WhyChoosedescription": "Pay securely using credit/debit cards, UPI, digital wallets, or cash. We provide transparent billing and detailed receipts for every rental transaction to keep your experience hassle-free."
  }
]





















    }


const faqData = [
    {
        question: "Do you offer car rental services at Mumbai Airport?",
        answer: "Yes, Swara Cabs provides convenient and reliable car rental services directly from Mumbai Airport (Terminals 1, 2, and 3)."
    },
    {
        question: "What types of cars are available for rent at Mumbai Airport?",
        answer: "We offer a wide range of vehicles including sedans, SUVs, Ertiga, Innova Crysta, and tempo travellers to suit your travel needs."
    },
    {
        question: "How can I rent a car from Mumbai Airport?",
        answer: "You can book your rental car in advance through our website or by calling us at +91 9697780707. We also accommodate last-minute bookings based on availability."
    },
    {
        question: "Is airport pickup included in the rental service?",
        answer: "Yes, our driver will pick you up directly from the terminal with a name placard for easy identification."
    },
    {
        question: "Can I rent a car from Mumbai Airport to travel to another city like Pune?",
        answer: "Absolutely. We specialize in intercity rentals, including Mumbai Airport to Pune with one-way and round-trip options."
    },
    {
        question: "Are tolls, taxes, and driver charges included in the rental fare?",
        answer: "Yes, our transparent pricing includes tolls, taxes, and driver allowances. There are no hidden charges."
    },
    {
        question: "Do you provide car rentals for night arrivals at the airport?",
        answer: "Yes, we offer 24/7 car rental services at Mumbai Airport including late-night and early morning pickups with a nominal surcharge."
    },
    {
        question: "Is it safe to book a car rental from Mumbai Airport with Swara Cabs?",
        answer: "Yes. All vehicles are well-maintained and our drivers are experienced, trained, and background-verified for your safety."
    },
    {
        question: "Can I choose the type of vehicle at the time of booking?",
        answer: "Yes, you can select your preferred vehicle category (sedan, SUV, MPV, etc.) while booking."
    },
    {
        question: "What payment methods do you accept for car rentals?",
        answer: "We accept UPI, cash, debit/credit cards, and all major digital wallets."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Nilesh Jadhav',
        review: 'Used Swara Cabs for a car rental from Mumbai Airport. The service was seamless, and the vehicle was clean and ready when I arrived.'
    },
    {
        name: 'Ms. Rupal Thakur',
        review: 'Great experience renting a car at Mumbai Airport with Swara Cabs. Prompt pickup, polite driver, and easy booking process.'
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







// const mumbaiAirportCarRentalSchema = {
//   "@context": "https://schema.org",
//   "@type": "Service",
//   "serviceType": "Car Rental",
//   "provider": {
//     "@type": "LocalBusiness",
//     "name": "Swara Cabs",
//     "image": "https://www.swaracabs.in/assets/images/mumbai-airport-car-rental.jpg",
//     "telephone": "+91 9697780707",
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "Mumbai Airport Road",
//       "addressLocality": "Mumbai",
//       "addressRegion": "MH",
//       "postalCode": "400099",
//       "addressCountry": "IN"
//     },
//     "url": "https://www.swaracabs.in/mumbai-airport-car-rental"
//   },
//   "areaServed": {
//     "@type": "City",
//     "name": "Mumbai"
//   },
//   "availableChannel": {
//     "@type": "ServiceChannel",
//     "serviceUrl": "https://www.swaracabs.in/mumbai-airport-car-rental"
//   }
// };

const mumbaiAirportCarRentalSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Car Rental",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Swara Cabs",
    "image": "https://www.swaracabs.in/assets/images/mumbai-airport-car-rental.jpg",
    "telephone": "+91 9697780707",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mumbai Airport Road",
      "addressLocality": "Mumbai",
      "addressRegion": "MH",
      "postalCode": "400099",
      "addressCountry": "IN"
    },
    "url": "https://www.swaracabs.in/mumbai-airport-car-rental"
  },
  "areaServed": {
    "@type": "City",
    "name": "Mumbai"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://www.swaracabs.in/mumbai-airport-car-rental"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Verified Customer"
    }
  }
};




    return (
        <div>

        <Helmet>
  <title>Mumbai Airport Car Rental | Swara Cabs</title>
  <meta
    name="description"
    content="Rent a car from Mumbai Airport starting at ₹1200 with Swara Cabs. AC sedans & SUVs available for airport drop, one-way, round trip or corporate travel. Verified drivers. 24x7 online booking."
  />
  <meta
    name="keywords"
    content="Mumbai Airport Car Rental, Rent Car from Mumbai Airport, Airport Pickup Car Mumbai, 24x7 Car Hire Mumbai Airport, SUV Car Rental Mumbai Airport, Sedan Hire Mumbai Airport, One-Way Car Hire Airport to Pune, Executive Car Rental Mumbai, Verified Drivers Mumbai Airport Car, Online Cab Booking Mumbai Airport, Safe Airport Taxi Mumbai, Mumbai Airport Car Hire with Driver, Affordable Airport Car Booking Mumbai"
  />
  <meta property="og:title" content="Mumbai Airport Car Rental | Online Booking from ₹1200 – Swara Cabs" />
  <meta property="og:description" content="Car rental from Mumbai Airport made easy. AC sedan and SUV cars with drivers at fixed fare. Book one-way or round trip with 24/7 availability." />
  <meta property="og:image" content="https://www.swaracabs.in/assets/images/mumbai-airport-car-rental.jpg" />
  <meta property="og:url" content="https://www.swaracabs.in/mumbai-airport-car-rental" />
  <meta property="og:type" content="website" />

  <script type="application/ld+json">
    {JSON.stringify(mumbaiAirportCarRentalSchema)}
  </script>
</Helmet>
    
{/* <Helmet>
  <title>Mumbai Airport Car Rental | Affordable & Verified Drivers | Swara Cabs</title>
  <meta
    name="description"
    content="Book affordable car rentals from Mumbai Airport with verified drivers. Sedans, SUVs available for one-way, round trips, business travel. 24/7 online booking & safe airport transfers."
  />
  <meta
    name="keywords"
    content="Mumbai Airport Car Rental, Car on Rent from Mumbai Airport, Online Car Booking Mumbai Airport, Affordable Car Hire Mumbai Airport, Sedan Rental Mumbai Airport, SUV Rental Mumbai Airport, One-Way Car Rental Airport to Pune, Round Trip Car Hire Mumbai Airport, Business Travel Car Rental Airport, 24/7 Car Hire Mumbai Airport, Verified Drivers Car Rental, Airport Transfer Car Hire Mumbai, Executive Car Rental Mumbai Airport, Safe Car Rental Mumbai Airport, Mumbai Airport Car Booking App"
  />
  <script type="application/ld+json">
    {JSON.stringify(mumbaiAirportCarRentalSchema)}
  </script>
</Helmet> */}
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
                            <img src='/images/keyword/50.jpg' alt='img' />
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

export default Mumbaiairportcarrentals;