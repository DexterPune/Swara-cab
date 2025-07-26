
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Mumbaiairporttopunecitycab() {



    const cardData =
    {
        keyword: 'Mumbai Airport to Pune City Cab',
        heading: 'Swara Cabs : Mumbai Airport to Pune City Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Mumbai Airport to Pune city. Pune, Maharashtra’s vibrant cultural and educational hub, is known for its historic landmarks, lush greenery, and dynamic urban life. Whether you are arriving for a business meeting, visiting family, or heading straight to your hotel, Swara Cabs ensures a smooth and hassle‑free experience right from the airport. Covering approximately 150 kilometers via the Mumbai–Pune Expressway, the journey typically takes around 3 to 4 hours depending on traffic conditions. With our well‑maintained fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

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
      "name": "Mumbai Airport to Pune City Cab",
      "description": "Planning your journey from Mumbai Airport to Pune? Swara Cab offers a reliable and comfortable cab service tailored to suit travelers arriving at the airport. Whether you’re heading to Pune for work or a family visit, our cabs ensure a stress-free experience with prompt pickups, courteous drivers, and well-maintained vehicles. Choose from a wide fleet including sedans, SUVs, and premium cars for a safe and smooth ride to Pune City."
    },
    {
      "name": "Online Cab Booking Mumbai Airport",
      "description": "Booking a cab from Mumbai Airport to Pune has never been easier. With Swara Cab’s user-friendly online platform, you can reserve your ride in just a few clicks. Enjoy real-time confirmations, live tracking, and multiple payment options for your convenience. Our platform ensures transparent pricing and zero hidden charges, making your online cab booking experience reliable and secure."
    },
    {
      "name": "Mumbai Airport to Pune AC Taxi",
      "description": "Travel from Mumbai Airport to Pune in cool comfort with our fully air-conditioned taxis. Swara Cab’s AC taxi service ensures you beat the heat while enjoying a smooth and peaceful ride. Perfect for long-distance journeys, our taxis are cleaned regularly and driven by trained professionals who prioritize your safety and comfort."
    },
    {
      "name": "Affordable Airport to City Taxi",
      "description": "Looking for budget-friendly travel from Mumbai Airport to Pune City? Swara Cab provides affordable airport transfer solutions without compromising on service quality. We offer competitive fares, fuel-efficient vehicles, and timely pickups to ensure your journey is smooth and economical. Ideal for students, solo travelers, or anyone looking to save without sacrificing comfort."
    },
    {
      "name": "One-Way Airport Cab to Pune",
      "description": "Swara Cab offers a dedicated one-way cab service from Mumbai Airport to Pune for travelers who only need a single drop. This service is cost-effective, convenient, and perfect for quick transfers. Whether you’re catching a meeting, heading home, or starting a vacation in Pune, our one-way taxi is a hassle-free choice."
    },
    {
      "name": "Round Trip Cab from Mumbai Airport",
      "description": "Need to return to Mumbai after a visit to Pune? Book a round trip cab from Mumbai Airport with Swara Cab. Enjoy the flexibility of return scheduling, reliable vehicle options, and professional drivers who ensure timely service both ways. Ideal for business trips or family outings that require a planned return."
    },
    {
      "name": "SUV Taxi Airport to Pune",
      "description": "Travel with extra comfort and luggage space with Swara Cab’s SUV taxi service from Mumbai Airport to Pune. Whether you're traveling with family, a group of friends, or need room for bags and equipment, our spacious SUVs like Ertiga and Innova offer a powerful and relaxed ride over the Expressway."
    },
    {
      "name": "Sedan Cab Airport to Pune City",
      "description": "For a perfect balance of comfort and economy, Swara Cab offers sedan taxi services from Mumbai Airport to Pune City. Enjoy a peaceful ride in a spacious sedan, driven by experienced chauffeurs. This option is perfect for individuals or couples looking for privacy, comfort, and affordability in a long-distance cab."
    },
    {
      "name": "Executive Taxi Mumbai Airport",
      "description": "Travel in style with our executive taxi service from Mumbai Airport to Pune. Swara Cab’s executive fleet includes high-end sedans and SUVs designed for maximum comfort, making it a great choice for corporate travelers and VIPs. Expect punctual service, professional drivers, and premium interiors."
    },
    {
      "name": "Corporate Cab Mumbai Airport",
      "description": "Swara Cab understands the needs of business travelers. Our corporate cab service from Mumbai Airport to Pune is designed to offer smooth logistics, invoice support, and business-class travel. Our chauffeurs are trained to ensure a formal and respectful experience for executives, clients, and employees."
    },
    {
      "name": "24/7 Cab Mumbai Airport to Pune",
      "description": "No matter the time of your flight, Swara Cab is ready with 24/7 cab services from Mumbai Airport to Pune. Our round-the-clock operations ensure you’re never stranded. Book a ride anytime and enjoy prompt service, reliable pickups, and comfortable vehicles for a stress-free commute."
    },
    {
      "name": "Verified Drivers Airport Pickup",
      "description": "Your safety is our priority. Swara Cab employs only verified and background-checked drivers for all airport pickups. With years of experience and training, our drivers ensure safe driving practices, courteous service, and efficient navigation from Mumbai Airport to your destination in Pune."
    },
    {
      "name": "Quick Booking Airport to Pune",
      "description": "Need a cab fast? Swara Cab offers instant booking for airport-to-Pune transfers. Use our app or website to book within minutes and get instant confirmation. Our drivers arrive on time, and our support team is always available to assist you throughout your journey."
    },
    {
      "name": "Safe Airport to Pune Taxi",
      "description": "Safety comes first at Swara Cab. All our airport to Pune cabs are GPS-tracked, sanitized, and maintained to the highest standards. Our drivers follow strict protocols, ensuring a safe, clean, and reliable ride every time — ideal for families, solo travelers, and women passengers."
    },
    {
      "name": "Mumbai Airport to Pune Drop Cab",
      "description": "Looking for a quick drop from Mumbai Airport to Pune? Swara Cab offers direct, non-stop drop services that ensure timely arrivals without delays. With well-maintained vehicles, courteous drivers, and seamless scheduling, your airport-to-doorstep transfer is smooth and comfortable."
    }
  ],
  "tableData": [
    ["Mumbai Airport to Pune City Cab", "Online Cab Booking Mumbai Airport"],
    ["Mumbai Airport to Pune AC Taxi", "Affordable Airport to City Taxi"],
    ["One-Way Airport Cab to Pune", "Round Trip Cab from Mumbai Airport"],
    ["SUV Taxi Airport to Pune", "Sedan Cab Airport to Pune City"],
    ["Executive Taxi Mumbai Airport", "Corporate Cab Mumbai Airport"],
    ["24/7 Cab Mumbai Airport to Pune", "Verified Drivers Airport Pickup"],
    ["Quick Booking Airport to Pune", "Safe Airport to Pune Taxi"],
    ["Mumbai Airport to Pune Drop Cab", ""]
  ],




"whychoose": [
  {
    "WhyChooseheading": "Reliable Airport Pickup and Drop",
    "WhyChoosedescription": "Our Mumbai Airport to Pune City cab service ensures punctual pickups and drop-offs, helping you avoid any travel stress and making your journey seamless right from the airport arrival."
  },
  {
    "WhyChooseheading": "Comfortable and Spacious Vehicles",
    "WhyChoosedescription": "Travel in well-maintained, sanitized vehicles equipped with air conditioning and ample luggage space, perfect for airport transfers and long journeys to Pune city."
  },
  {
    "WhyChooseheading": "Transparent and All-Inclusive Pricing",
    "WhyChoosedescription": "We offer clear pricing with no hidden charges, including tolls, taxes, and airport fees, so you get a hassle-free booking experience and budget-friendly travel from Mumbai Airport to Pune."
  },
  {
    "WhyChooseheading": "Professional and Courteous Drivers",
    "WhyChoosedescription": "Our drivers are trained to assist with luggage, provide local guidance, and ensure a safe, smooth ride from the airport to your destination within Pune city."
  },
  {
    "WhyChooseheading": "Safety and Hygiene Focused",
    "WhyChoosedescription": "All vehicles are regularly sanitized and equipped with modern safety features such as airbags, seat belts, and GPS tracking to guarantee your security and comfort during the trip."
  },
  {
    "WhyChooseheading": "24/7 Service Availability",
    "WhyChoosedescription": "No matter your flight arrival time, our airport cab service operates around the clock to accommodate early morning or late-night transfers without any inconvenience."
  },
  {
    "WhyChooseheading": "Easy Online Booking and Instant Confirmation",
    "WhyChoosedescription": "Book your Mumbai Airport to Pune City cab effortlessly through our website or app, with instant confirmation and real-time updates on your driver’s location and estimated arrival."
  },
  {
    "WhyChooseheading": "Customized Travel Options",
    "WhyChoosedescription": "Whether you require a luxury sedan, a spacious SUV, or multiple stops along the way, we offer personalized services to meet your specific travel preferences and requirements."
  }
]

























    }


const faqData = [
    {
        question: "Do you provide cab services from Mumbai Airport to Pune City?",
        answer: "Yes, Swara Cabs offers reliable and comfortable cab services from Mumbai Airport to Pune City."
    },
    {
        question: "What is the fare for a cab from Mumbai Airport to Pune City?",
        answer: "Fares start from ₹6,000 for a sedan. Pricing varies based on vehicle type and travel time."
    },
    {
        question: "How can I book a cab from Mumbai Airport to Pune City?",
        answer: "You can book online through our website or call +91 9697780707 for quick booking assistance."
    },
    {
        question: "What vehicle options are available for Mumbai Airport to Pune City trips?",
        answer: "We provide sedans, SUVs, Innova Crysta, and tempo travellers depending on your group size and comfort preferences."
    },
    {
        question: "Are tolls and driver charges included in the fare?",
        answer: "Yes, all tolls, taxes, and driver allowances are included with no hidden fees."
    },
    {
        question: "Is night service available from Mumbai Airport to Pune City?",
        answer: "Yes, we operate 24/7 and offer night service with a nominal surcharge for trips between 10 PM and 6 AM."
    },
    {
        question: "Can I book a round trip from Mumbai Airport to Pune City?",
        answer: "Yes, round-trip bookings are available and customizable according to your needs."
    },
    {
        question: "Is it safe to travel with Swara Cabs?",
        answer: "Absolutely. Our drivers are professional, background-verified, and trained to ensure your safety."
    },
    {
        question: "Do you offer doorstep pickup at Mumbai Airport?",
        answer: "Yes, we provide convenient doorstep pickup service directly from Mumbai Airport terminals."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept UPI, cash, debit/credit cards, and popular digital wallets for hassle-free payment."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Rohit Sharma',
        review: 'Swara Cabs made my transfer from Mumbai Airport to Pune City very smooth and comfortable. The driver was punctual and courteous.'
    },
    {
        name: 'Ms. Anjali Verma',
        review: 'Excellent service from Mumbai Airport to Pune City. The cab was clean and the driver was very professional. Highly recommend Swara Cabs!'
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
//   "name": "Mumbai Airport to Pune City Cab",
//   "image": "https://www.swaracabs.in/assets/images/mumbai-airport-to-pune-city-cab.jpg",
//   "description": "Book Mumbai Airport to Pune City cab with Swara Cabs for reliable, safe, and affordable taxi service. Available 24/7 with AC taxis, SUVs, sedans, executive and corporate cabs.",
//   "brand": {
//     "@type": "Brand",
//     "name": "Swara Cabs"
//   },
//   "aggregateRating": {
//     "@type": "AggregateRating",
//     "bestRating": "5",
//     "worstRating": "1",
//     "ratingValue": "4.9",
//     "ratingCount": "8956"
//   },
//   "offers": {
//     "@type": "Offer",
//     "priceCurrency": "INR",
//     "price": "1800",
//     "availability": "https://schema.org/InStock",
//     "url": "https://www.swaracabs.in/mumbai-airport-to-pune-city-cab"
//   }
// };

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Mumbai Airport to Pune City Cab",
  "image": "https://www.swaracabs.in/assets/images/mumbai-airport-to-pune-city-cab.jpg",
  "description": "Book 24/7 Mumbai Airport to Pune City cab service with Swara Cabs. Comfortable AC sedans, SUVs, and corporate taxis available at affordable rates. Verified drivers & fixed pricing.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "16542"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "1800",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/mumbai-airport-to-pune-city-cab"
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
  },
  "areaServed": {
    "@type": "Place",
    "name": "Mumbai, Pune"
  },
  "serviceType": "Airport Taxi Service"
};





    return (
        <div>
{/* <Helmet>
  <title>Mumbai Airport to Pune City Cab | Affordable & Reliable Taxi Service | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Mumbai Airport to Pune City cab with Swara Cabs for reliable, safe, and affordable taxi service. Available 24/7 with AC taxis, SUVs, sedans, executive and corporate cabs." 
  />
  <meta 
    name="keywords" 
    content="Mumbai Airport to Pune City Cab, Online Cab Booking Mumbai Airport, Mumbai Airport to Pune AC Taxi, Affordable Airport to City Taxi, One-Way Airport Cab to Pune, Round Trip Cab from Mumbai Airport, SUV Taxi Airport to Pune, Sedan Cab Airport to Pune City, Executive Taxi Mumbai Airport, Corporate Cab Mumbai Airport, 24/7 Cab Mumbai Airport to Pune, Verified Drivers Airport Pickup, Quick Booking Airport to Pune, Safe Airport to Pune Taxi, Mumbai Airport to Pune Drop Cab" 
  />
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet> */}


<Helmet>
  <title>Mumbai Airport to Pune City Cab | 24x7 Pickup & Affordable Fare</title>
  <meta 
    name="description" 
    content="Book your Mumbai Airport to Pune City cab online with Swara Cabs. 24x7 airport pickup, AC sedan or SUV options, verified drivers & fixed pricing. Quick and safe airport transfer service." 
  />
  <meta 
    name="keywords" 
    content="Mumbai Airport to Pune City Cab, Cab from Mumbai Airport to Pune, Airport Transfer Mumbai to Pune, Book AC Cab Mumbai Airport, SUV Sedan Taxi Mumbai Airport, 24x7 Cab Service Mumbai Pune, Corporate Cab Mumbai Airport, Verified Driver Pickup Mumbai Pune, One-Way Airport Cab Mumbai Pune, Cheap Fare Cab Mumbai to Pune City, Airport to Pune Drop Taxi, Online Cab Booking Mumbai Airport to Pune, Instant Taxi Booking Mumbai Pune" 
  />
  <meta property="og:title" content="Mumbai Airport to Pune City Cab | Book Verified Taxi – Swara Cabs" />
  <meta property="og:description" content="Get your Mumbai Airport to Pune City cab at affordable price. Choose sedan, SUV, or corporate taxi. Reliable 24x7 pickup with fixed rates." />
  <meta property="og:image" content="https://www.swaracabs.in/assets/images/mumbai-airport-to-pune-city-cab.jpg" />
  <meta property="og:url" content="https://www.swaracabs.in/mumbai-airport-to-pune-city-cab" />
  <meta property="og:type" content="website" />
  
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
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
                            <img src='/images/keyword/32.jpg' alt='img' />
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

export default Mumbaiairporttopunecitycab;