
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Navimumbaitopunecab() {



    const cardData =
    {
        keyword: 'Navi Mumbai to Pune Cab',
        heading: 'Swara Cabs : Navi Mumbai to Pune Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Navi Mumbai to Pune. Pune, Maharashtra’s vibrant cultural and educational hub, is known for its historic landmarks, lush greenery, and dynamic urban life. Whether you are traveling for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a seamless and hassle‑free experience. Covering approximately 130 to 140 kilometers via the Mumbai–Pune Expressway, the journey typically takes around 2½ to 3½ hours depending on traffic conditions. With our well‑maintained fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Pune with Swara Cabs',

        "topPlaces": [
      {
        "title": "Raja Dinkar Kelkar Museum",
        "description": "The Raja Dinkar Kelkar Museum is a rich cultural repository, home to over 20,000 artifacts collected by Dr. Dinkar G. Kelkar in memory of his son. The museum showcases an incredible variety of items ranging from antique musical instruments and ancient sculptures to everyday household items from bygone eras. Each gallery offers a fascinating glimpse into India’s diverse artistic and cultural traditions. Located in the heart of Pune, it is a must-visit destination for art lovers, history buffs, and curious travelers alike."
    },
    {
        "title": "Shaniwar Wada",
        "description": "Shaniwar Wada is one of the most iconic historical structures in Pune, built in 1732 by the Peshwas of the Maratha Empire. The fort was originally the seat of power for the Peshwas and witnessed several key events in Maratha history. Though much of the structure was destroyed by fire in 1828, the remaining ruins, including the massive Dilli Darwaza (main gate), strong ramparts, and open courtyards, speak volumes about its glorious past. The fort is also known for its haunting legends, making it a popular spot for heritage walks and history enthusiasts."
    },
     {
        "title": "Sinhagad Fort",
        "description": "Sinhagad Fort is a majestic hill fortress located about 30 kilometers from Pune, standing tall at an altitude of 1,312 meters. Known for its strategic location, the fort has played a crucial role in many battles, including the famous battle of Tanaji Malusare, a brave Maratha warrior. Today, it is a favorite trekking destination for adventure lovers and history buffs alike. Once at the top, visitors are rewarded with stunning views of the surrounding Sahyadri hills, rustic food stalls serving traditional Maharashtrian dishes like pithla-bhakri, and a strong sense of Maratha pride."
    },
    {
        "title": "Aga Khan Palace",
        "description": "The Aga Khan Palace is a majestic building located in the Yerwada area of Pune, built in 1892 by Sultan Aga Khan III. It holds great historical importance as it served as a prison for Mahatma Gandhi, Kasturba Gandhi, and other freedom fighters during the Quit India Movement. The palace now houses a museum dedicated to Mahatma Gandhi, with photographs, personal items, and his ashes. The beautiful Italian arches, sprawling lawns, and peaceful surroundings make it a tranquil place to explore the legacy of India’s freedom struggle."
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
      "name": "Navi Mumbai to Pune Cab",
      "description": "Travel from Navi Mumbai to Pune in comfort with our reliable cab services. We offer multiple vehicle types to suit your needs, whether it's a solo business trip, a family visit, or a quick intercity transfer. Enjoy a smooth ride on the expressway with courteous drivers and well-maintained vehicles."
    },
    {
      "name": "AC Taxi Navi Mumbai to Pune",
      "description": "Beat the heat with our fully air-conditioned taxis from Navi Mumbai to Pune. Our AC cabs ensure a cool, comfortable, and fatigue-free journey even during peak travel hours. Ideal for long-distance travel across the expressway."
    },
    {
      "name": "One-Way Cab Navi Mumbai to Pune",
      "description": "Need a one-way drop to Pune? Book our economical and convenient one-way taxi service from Navi Mumbai. Pay only for what you use, with no extra charges for return travel. Ideal for students, professionals, and weekend travelers."
    },
    {
      "name": "Online Cab Booking Navi Mumbai",
      "description": "Book your cab from Navi Mumbai to Pune easily using our online platform. Whether on mobile or desktop, enjoy instant confirmation, multiple payment methods, and real-time cab availability. No phone calls or long waits required."
    },
    {
      "name": "Affordable Fare Navi Mumbai to Pune",
      "description": "Our transparent and budget-friendly pricing ensures you get the best value for your ride. We offer economical options for all budgets, without compromising on safety, cleanliness, or service quality."
    },
    {
      "name": "Round Trip Taxi Navi Mumbai",
      "description": "Planning a same-day return or a short stay in Pune? Choose our round-trip cab services from Navi Mumbai and enjoy the flexibility of a return ride without booking another taxi. Perfect for business meetings or family functions."
    },
    {
      "name": "Sedan Cab Navi Mumbai to Pune",
      "description": "Enjoy a quiet, comfortable ride in our premium sedan cabs. Ideal for solo or duo travelers seeking a smooth and stylish commute between Navi Mumbai and Pune. Choose from well-maintained models with professional drivers."
    },
    {
      "name": "SUV Taxi Navi Mumbai",
      "description": "Need more space or traveling with luggage and family? Book our SUV taxi from Navi Mumbai to Pune. Spacious, powerful, and perfect for long highway drives with multiple passengers or heavy bags."
    },
    {
      "name": "Corporate Cab Navi Mumbai to Pune",
      "description": "Choose our professional corporate cab services for business travel between Navi Mumbai and Pune. Get clean cars, punctual pickups, and courteous drivers with invoicing support and flexible scheduling."
    },
    {
      "name": "Executive Cabs Navi Mumbai",
      "description": "Opt for our executive cab services for a more luxurious travel experience. Featuring high-end vehicles, plush seating, and professional drivers, our executive cars are perfect for VIPs and business travelers."
    },
    {
      "name": "Airport Pickup Navi Mumbai to Pune",
      "description": "Flying into Navi Mumbai and heading to Pune? Our airport pickup service offers a stress-free connection to Pune from Navi Mumbai. On-time arrivals, professional drivers, and flight tracking ensure a seamless transfer."
    },
    {
      "name": "Quick Booking Navi Mumbai Cab",
      "description": "Need a cab urgently? Our quick booking feature ensures that you get a cab at your doorstep in minutes. Ideal for last-minute plans, emergencies, or unplanned business trips from Navi Mumbai to Pune."
    },
    {
      "name": "24/7 Cab Navi Mumbai to Pune",
      "description": "Travel at your convenience with our round-the-clock taxi service. Whether it's a late-night pickup or an early morning drop, our cabs operate 24/7 to get you to Pune safely and comfortably anytime."
    },
    {
      "name": "Safe Cab Ride Navi Mumbai to Pune",
      "description": "Safety is a priority in every ride. Our cabs are equipped with GPS, sanitized regularly, and driven by experienced, trained, and background-verified drivers. Travel with peace of mind across the highway."
    },
    {
      "name": "Verified Drivers Navi Mumbai",
      "description": "All our drivers are professionally trained and verified for background and driving history. Friendly, punctual, and knowledgeable about the Navi Mumbai–Pune route, they ensure a smooth and courteous ride every time."
    }
  ],
  "tableData": [
    ["Navi Mumbai to Pune Cab", "AC Taxi Navi Mumbai to Pune"],
    ["One-Way Cab Navi Mumbai to Pune", "Online Cab Booking Navi Mumbai"],
    ["Affordable Fare Navi Mumbai to Pune", "Round Trip Taxi Navi Mumbai"],
    ["Sedan Cab Navi Mumbai to Pune", "SUV Taxi Navi Mumbai"],
    ["Corporate Cab Navi Mumbai to Pune", "Executive Cabs Navi Mumbai"],
    ["Airport Pickup Navi Mumbai to Pune", "Quick Booking Navi Mumbai Cab"],
    ["24/7 Cab Navi Mumbai to Pune", "Safe Cab Ride Navi Mumbai to Pune"],
    ["Verified Drivers Navi Mumbai", ""]
  ],




"whychoose": [
  {
    "WhyChooseheading": "Convenient Navi Mumbai Pickups",
    "WhyChoosedescription": "Our Navi Mumbai to Pune cab service provides reliable and timely pickups from all major locations in Navi Mumbai, including Vashi, Nerul, and CBD Belapur, ensuring a smooth and stress-free start to your journey."
  },
  {
    "WhyChooseheading": "Comfortable and Well-Maintained Vehicles",
    "WhyChoosedescription": "Travel comfortably in our clean, sanitized fleet of cars, including sedans, SUVs, and premium models like Innova Crysta and Ertiga, all designed to offer ample space and air conditioning for a pleasant ride."
  },
  {
    "WhyChooseheading": "Transparent and Competitive Pricing",
    "WhyChoosedescription": "We offer upfront and transparent pricing for Navi Mumbai to Pune trips, inclusive of all tolls, taxes, and other charges, with no hidden fees, so you can plan your budget with confidence."
  },
  {
    "WhyChooseheading": "Experienced and Professional Drivers",
    "WhyChoosedescription": "Our drivers are highly trained, knowledgeable about the best routes between Navi Mumbai and Pune, and committed to ensuring your safety and comfort throughout the journey."
  },
  {
    "WhyChooseheading": "Strict Safety and Hygiene Protocols",
    "WhyChoosedescription": "Your safety is our top priority. All vehicles are regularly sanitized, equipped with safety features like airbags and seat belts, and tracked via GPS for a secure and hygienic travel experience."
  },
  {
    "WhyChooseheading": "24/7 Availability for Flexible Travel",
    "WhyChoosedescription": "No matter what time you need to travel, our Navi Mumbai to Pune cab service is available round the clock, ready to accommodate early morning departures or late-night arrivals."
  },
  {
    "WhyChooseheading": "Seamless Online Booking Experience",
    "WhyChoosedescription": "Book your cab quickly and easily through our website or mobile app with instant confirmation and real-time ride tracking, making your travel planning hassle-free."
  },
  {
    "WhyChooseheading": "Customizable Travel Plans",
    "WhyChoosedescription": "We offer personalized travel options, including multi-stop journeys, vehicle preferences, and luggage assistance, so you can tailor your Navi Mumbai to Pune trip exactly to your needs."
  }
]
























    }


const faqData = [
    {
        question: "Do you provide cab services from Navi Mumbai to Pune?",
        answer: "Yes, Swara Cabs offers reliable and comfortable cab services from Navi Mumbai to Pune."
    },
    {
        question: "What is the fare for a cab from Navi Mumbai to Pune?",
        answer: "Fares start from ₹5,800 for a sedan. Pricing varies based on vehicle type and travel time."
    },
    {
        question: "How can I book a cab from Navi Mumbai to Pune?",
        answer: "You can book online via our website or call +91 9697780707 for quick and easy booking."
    },
    {
        question: "What vehicle options are available for Navi Mumbai to Pune trips?",
        answer: "We provide sedans, SUVs, Innova Crysta, and tempo travellers according to your group size and comfort needs."
    },
    {
        question: "Are tolls and driver charges included in the fare?",
        answer: "Yes, all tolls, taxes, and driver allowances are included with no hidden fees."
    },
    {
        question: "Is night service available from Navi Mumbai to Pune?",
        answer: "Yes, we operate 24/7 with a nominal surcharge for trips between 10 PM and 6 AM."
    },
    {
        question: "Can I book a round trip from Navi Mumbai to Pune?",
        answer: "Yes, round-trip bookings are available and can be customized as per your schedule."
    },
    {
        question: "Is it safe to travel with Swara Cabs?",
        answer: "Absolutely. Our drivers are professionally trained and background-verified for your safety."
    },
    {
        question: "Do you offer doorstep pickup in Navi Mumbai?",
        answer: "Yes, we provide doorstep pickup service directly from your location in Navi Mumbai."
    },
    {
        question: "What payment methods are accepted?",
        answer: "We accept UPI, cash, debit/credit cards, and popular digital wallets for convenient payment."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Amit Patil',
        review: 'Swara Cabs made my journey from Navi Mumbai to Pune very comfortable and hassle-free. The driver was very professional.'
    },
    {
        name: 'Ms. Sneha Deshmukh',
        review: 'Excellent service with timely pickup from Navi Mumbai. The vehicle was clean and the ride was smooth. Highly recommend Swara Cabs!'
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







// const productSchema = {
//   "@context": "https://schema.org",
//   "@type": "Product",
//   "name": "Navi Mumbai to Pune Cab",
//   "image": "https://www.swaracabs.in/assets/images/navi-mumbai-to-pune-cab.jpg",
//   "description": "Book Navi Mumbai to Pune cab with Swara Cabs for safe, reliable, and affordable taxi services. Available 24/7 with AC taxis, SUVs, sedans, corporate and executive cabs.",
//   "brand": {
//     "@type": "Brand",
//     "name": "Swara Cabs"
//   },
//   "aggregateRating": {
//     "@type": "AggregateRating",
//     "bestRating": "5",
//     "worstRating": "1",
//     "ratingValue": "4.8",
//     "ratingCount": "15645"
//   },
//   "offers": {
//     "@type": "Offer",
//     "priceCurrency": "INR",
//     "price": "2500",
//     "availability": "https://schema.org/InStock",
//     "url": "https://www.swaracabs.in/navi-mumbai-to-pune-cab"
//   }
// };


const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Navi Mumbai to Pune Cab",
  "image": "https://www.swaracabs.in/images/keyword/31.jpg",
  "description": "Book a cab from Navi Mumbai to Pune with Swara Cabs. Get safe, verified drivers, AC sedans & SUVs at affordable prices. 24x7 service with fixed fare options.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "15645"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2500",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/navi-mumbai-to-pune-cab"
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
      "name": "Verified Passenger"
    }
  },
  "areaServed": {
    "@type": "Place",
    "name": "Navi Mumbai, Pune"
  },
  "serviceType": "Intercity Cab Service"
};



    return (
        <div>

<Helmet>
  <title>Navi Mumbai to Pune Cab | 24/7 AC Taxi ₹2500 | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Navi Mumbai to Pune cab with Swara Cabs. AC sedan or SUV from ₹2500. Safe, affordable & verified taxi service. 24x7 availability, highway pickup & corporate cabs." 
  />
  <meta 
    name="keywords" 
    content="Navi Mumbai to Pune Cab, Cab from Navi Mumbai to Pune, AC Taxi Navi Mumbai to Pune, SUV Sedan Cab Navi Mumbai, One-Way Navi Mumbai to Pune Cab, Verified Drivers Navi Mumbai Cab, 24x7 Cab Booking Navi Mumbai, Airport Pickup Navi Mumbai to Pune, Affordable Intercity Taxi Navi Mumbai, Corporate Cab Navi Mumbai to Pune, Executive Taxi Navi Mumbai Pune, Highway Cab Navi Mumbai to Pune, Online Cab Booking Navi Mumbai to Pune" 
  />
  <meta property="og:title" content="Navi Mumbai to Pune Cab | Book Safe AC Taxi Online – Swara Cabs" />
  <meta property="og:description" content="Get reliable cabs from Navi Mumbai to Pune. AC taxi at ₹2500 with Swara Cabs. Quick booking, verified drivers, and express travel guaranteed." />
  <meta property="og:image" content="https://www.swaracabs.in/images/keyword/31.jpg" />
  <meta property="og:url" content="https://www.swaracabs.in/navi-mumbai-to-pune-cab" />
  <meta property="og:type" content="website" />
  
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>


{/* <Helmet>
  <title>Navi Mumbai to Pune Cab | Affordable & Reliable Taxi Service | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Navi Mumbai to Pune cab with Swara Cabs for safe, reliable, and affordable taxi services. Available 24/7 with AC taxis, SUVs, sedans, corporate and executive cabs." 
  />
  <meta 
    name="keywords" 
    content="Navi Mumbai to Pune Cab, AC Taxi Navi Mumbai to Pune, One-Way Cab Navi Mumbai to Pune, Online Cab Booking Navi Mumbai, Affordable Fare Navi Mumbai to Pune, Round Trip Taxi Navi Mumbai, Sedan Cab Navi Mumbai to Pune, SUV Taxi Navi Mumbai, Corporate Cab Navi Mumbai to Pune, Executive Cabs Navi Mumbai, Airport Pickup Navi Mumbai to Pune, Quick Booking Navi Mumbai Cab, 24/7 Cab Navi Mumbai to Pune, Safe Cab Ride Navi Mumbai to Pune, Verified Drivers Navi Mumbai" 
  />
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
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
                            <img src='/images/keyword/31.jpg' alt='img' />
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

export default Navimumbaitopunecab;