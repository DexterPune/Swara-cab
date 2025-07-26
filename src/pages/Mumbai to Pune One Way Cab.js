
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Mumbaitopuneonewaycab() {



    const cardData =
    {
        keyword: 'Mumbai to Pune One Way Cab',
        heading: 'Swara Cabs : Mumbai to Pune One Way Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable one‑way cab services for your journey from Mumbai to Pune. Pune, Maharashtra’s vibrant cultural and educational hub, is known for its historic landmarks, lush greenery, and lively city atmosphere. Whether you are traveling for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a smooth and hassle‑free experience. Covering a distance of approximately 150 kilometers via the Mumbai–Pune Expressway, our one‑way trip typically takes around 3 to 4 hours depending on traffic conditions. With our well‑maintained fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Pune with Swara Cabs',

        "topPlaces": [
    {
        "title": "Pataleshwar Cave Temple",
        "description": "Hidden amidst the urban chaos of JM Road, the Pataleshwar Cave Temple is a serene, 8th-century rock-cut shrine carved out of a single basalt rock. Dedicated to Lord Shiva, the temple features a beautifully carved sanctum, a circular Nandi Mandapa (pavilion), and intricate stone pillars that reflect ancient Indian architecture. Despite its location in the city, the temple offers a peaceful escape for spiritual seekers and architecture lovers. It’s also recognized as a protected monument by the Archaeological Survey of India."
    },
    {
        "title": "Sinhagad Fort",
        "description": "Sinhagad Fort is a majestic hill fortress located about 30 kilometers from Pune, standing tall at an altitude of 1,312 meters. Known for its strategic location, the fort has played a crucial role in many battles, including the famous battle of Tanaji Malusare, a brave Maratha warrior. Today, it is a favorite trekking destination for adventure lovers and history buffs alike. Once at the top, visitors are rewarded with stunning views of the surrounding Sahyadri hills, rustic food stalls serving traditional Maharashtrian dishes like pithla-bhakri, and a strong sense of Maratha pride."
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
        "title": "Raja Dinkar Kelkar Museum",
        "description": "The Raja Dinkar Kelkar Museum is a rich cultural repository, home to over 20,000 artifacts collected by Dr. Dinkar G. Kelkar in memory of his son. The museum showcases an incredible variety of items ranging from antique musical instruments and ancient sculptures to everyday household items from bygone eras. Each gallery offers a fascinating glimpse into India’s diverse artistic and cultural traditions. Located in the heart of Pune, it is a must-visit destination for art lovers, history buffs, and curious travelers alike."
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
        "name": "Mumbai to Pune One Way Cab",
        "description": "Traveling from Mumbai to Pune just once? Swara Cabs offers reliable and affordable one-way cab services for this popular route. Whether you're headed to Pune for a meeting, personal event, or weekend getaway, enjoy a smooth ride without the need to book a return. Our experienced drivers, clean vehicles, and commitment to punctuality ensure your trip is comfortable and convenient."
    },
    {
        "name": "One Way AC Taxi Mumbai to Pune",
        "description": "Beat the heat with our fully air-conditioned one-way taxi service from Mumbai to Pune. Swara Cabs ensures a relaxed, climate-controlled ride with modern amenities and comfortable seating. Whether traveling during the day or night, our AC taxis provide the perfect environment for a restful journey on the expressway."
    },
    {
        "name": "Affordable One Way Cab Mumbai",
        "description": "Looking for value on your one-way trip from Mumbai to Pune? Swara Cabs offers budget-friendly rates without compromising on service. Enjoy professional drivers, timely pickups, and no hidden charges—just transparent, economical pricing designed for solo travelers, students, and families."
    },
    {
        "name": "Sedan One Way Cab Mumbai to Pune",
        "description": "Choose our sedan cabs for a smooth and cost-effective ride from Mumbai to Pune. Ideal for up to 4 passengers, our sedans offer the perfect balance of comfort, luggage space, and affordability. Swara Cabs provides verified, sanitized, and regularly maintained sedans for your travel peace of mind."
    },
    {
        "name": "Online One Way Booking Mumbai to Pune",
        "description": "Booking your one-way cab from Mumbai to Pune has never been easier. Swara Cabs’ online platform allows for quick booking, instant confirmation, and secure payment. Plan your travel on your terms with 24/7 access to online cab scheduling at your fingertips."
    },
    {
        "name": "SUV One Way Cab Mumbai",
        "description": "Need extra space or traveling with family? Our SUV one-way cabs from Mumbai to Pune are perfect for group travelers. With ample legroom and luggage capacity, SUVs like Ertiga or Innova ensure a comfortable and spacious ride for your long-distance journey."
    },
    {
        "name": "Mumbai to Pune Executive One Way Cab",
        "description": "For business travelers and premium clients, Swara Cabs offers executive one-way cabs from Mumbai to Pune. Enjoy plush interiors, professional chauffeurs, and top-tier service. Our executive fleet includes luxury sedans and premium SUVs for a smooth and stylish trip."
    },
    {
        "name": "Verified One Way Cab Mumbai to Pune",
        "description": "Safety is non-negotiable. All Swara Cabs one-way services from Mumbai to Pune are operated by background-verified drivers. You can trust us for a secure, professional, and comfortable travel experience every time you ride."
    },
    {
        "name": "Quick Pickup One Way Taxi",
        "description": "Need to leave quickly? Swara Cabs offers prompt pickup services for one-way rides from Mumbai to Pune. Our drivers are punctual, and our logistics team ensures minimal wait time so you can be on your way without delays."
    },
    {
        "name": "One Way Corporate Cab Mumbai to Pune",
        "description": "Swara Cabs caters to professionals with dedicated one-way corporate cab services. Our clean vehicles, punctual drivers, and invoice-ready trips make us a preferred partner for companies sending employees between Mumbai and Pune."
    },
    {
        "name": "Non-Stop One Way Cab Mumbai",
        "description": "Prefer a direct ride with no detours? Our non-stop one-way cab service from Mumbai to Pune ensures a straight route with no interruptions. Great for urgent travel, business trips, or anyone who values time and efficiency."
    },
    {
        "name": "24/7 One Way Cabs Mumbai to Pune",
        "description": "Whether it’s early morning or late at night, Swara Cabs is ready with 24/7 one-way service from Mumbai to Pune. Book anytime and travel stress-free knowing we’re available round-the-clock with reliable cabs and drivers."
    },
    {
        "name": "Airport to Pune One Way Cab",
        "description": "Flying into Mumbai and heading straight to Pune? Swara Cabs offers convenient airport-to-Pune one-way taxi service. Our drivers track your flight, meet you at arrivals, and ensure a smooth, door-to-door transfer to your Pune destination."
    },
    {
        "name": "Express Highway One Way Taxi Mumbai",
        "description": "Travel fast and safe on the Mumbai-Pune Expressway with Swara Cabs' express one-way taxi services. Our vehicles are equipped for highway comfort and driven by experts who know the route and rest stops inside-out for a seamless journey."
    },
    {
        "name": "Safe One Way Taxi Mumbai to Pune",
        "description": "Travel confidently with our safety-first one-way cab service. Each Swara Cab comes equipped with seat belts, GPS, sanitized interiors, and trained drivers to ensure that your trip from Mumbai to Pune is secure from start to finish."
    }
],

"tableData": [
    ["Mumbai to Pune One Way Cab", "One Way AC Taxi Mumbai to Pune"],
    ["Affordable One Way Cab Mumbai", "Sedan One Way Cab Mumbai to Pune"],
    ["Online One Way Booking Mumbai to Pune", "SUV One Way Cab Mumbai"],
    ["Mumbai to Pune Executive One Way Cab", "Verified One Way Cab Mumbai to Pune"],
    ["Quick Pickup One Way Taxi", "One Way Corporate Cab Mumbai to Pune"],
    ["Non-Stop One Way Cab Mumbai", "24/7 One Way Cabs Mumbai to Pune"],
    ["Airport to Pune One Way Cab", "Express Highway One Way Taxi Mumbai"],
    ["Safe One Way Taxi Mumbai to Pune", ""]
],




"whychoose": [
  {
    "WhyChooseheading": "Convenient One-Way Cab Service",
    "WhyChoosedescription": "Our Mumbai to Pune one-way cab service offers the perfect solution for travelers who want a hassle-free, direct ride without worrying about return trips. Simply book your cab for a comfortable, point-to-point journey that fits your schedule."
  },
  {
    "WhyChooseheading": "Flexible Pickup Locations Across Mumbai",
    "WhyChoosedescription": "Whether you're leaving from Mumbai airport, railway stations, or any locality such as Andheri, Bandra, or Dadar, our cabs are available to pick you up wherever is most convenient, ensuring a seamless start to your trip."
  },
  {
    "WhyChooseheading": "Wide Range of Well-Maintained Vehicles",
    "WhyChoosedescription": "Choose from a variety of vehicles including sedans, SUVs, and premium cars like Innova Crysta and Ertiga, all regularly sanitized and maintained to provide a clean and comfortable ride tailored to your needs."
  },
  {
    "WhyChooseheading": "Transparent Pricing With No Hidden Charges",
    "WhyChoosedescription": "Our pricing for one-way Mumbai to Pune cabs is upfront and all-inclusive, covering tolls, taxes, driver allowances, and any applicable airport surcharges, so you won’t face unexpected fees at the end of your journey."
  },
  {
    "WhyChooseheading": "Experienced Drivers and Efficient Routing",
    "WhyChoosedescription": "Our professional drivers are experts in navigating the Mumbai-Pune route, avoiding traffic hotspots, and ensuring you reach your destination safely and on time with a smooth and comfortable ride."
  },
  {
    "WhyChooseheading": "24/7 Service Availability",
    "WhyChoosedescription": "No matter your flight or train schedule, our one-way cab service is available round the clock. Whether it’s an early morning departure or a late-night arrival, we’re ready to serve you anytime."
  },
  {
    "WhyChooseheading": "Easy and Secure Online Booking",
    "WhyChoosedescription": "Book your one-way Mumbai to Pune cab effortlessly through our website or app with instant confirmation and real-time updates, ensuring peace of mind and convenience throughout your journey."
  },
  {
    "WhyChooseheading": "Safe and Sanitized Vehicles",
    "WhyChoosedescription": "Your safety is our priority. All our vehicles are regularly sanitized, equipped with modern safety features like airbags and seat belts, and monitored via GPS to guarantee a secure and hygienic travel experience."
  },
  {
    "WhyChooseheading": "Customized Travel Options",
    "WhyChoosedescription": "We cater to all kinds of travelers—business professionals, families, or solo adventurers—offering tailored services such as additional stops, luggage assistance, and preferred vehicle choices to make your trip comfortable and personalized."
  }
]





















    }



const faqData = [
    {
        question: "Do you provide one-way cab services from Mumbai to Pune?",
        answer: "Yes, Swara Cabs offers reliable and comfortable one-way cab services from Mumbai to Pune."
    },
    {
        question: "What is the fare for a one-way cab from Mumbai to Pune?",
        answer: "Fares start at ₹5,500 for sedans. Pricing varies based on vehicle type and time of travel."
    },
    {
        question: "How can I book a one-way cab from Mumbai to Pune?",
        answer: "You can book easily online through our website or call +91 9697780707 for instant booking."
    },
    {
        question: "What vehicle options are available for one-way trips?",
        answer: "We provide sedans, SUVs, Innova Crysta, and tempo travellers depending on your group size and comfort needs."
    },
    {
        question: "Are tolls and driver charges included in the one-way fare?",
        answer: "Yes, all tolls, taxes, and driver allowances are included in the fare with no hidden charges."
    },
    {
        question: "Is night travel available for one-way Mumbai to Pune trips?",
        answer: "Yes, our service is available 24/7 with a nominal surcharge for night trips between 10 PM and 6 AM."
    },
    {
        question: "Can I schedule the pickup time for my one-way cab?",
        answer: "Absolutely. You can choose your preferred pickup time while booking."
    },
    {
        question: "Is it safe to travel with Swara Cabs on one-way trips?",
        answer: "Yes, our drivers are professional, background-verified, and focused on passenger safety."
    },
    {
        question: "Do you provide airport drop service as part of one-way trips?",
        answer: "Yes, we offer airport drop services from Mumbai to Pune as part of our one-way cab options."
    },
    {
        question: "What payment methods are accepted for one-way cab bookings?",
        answer: "We accept UPI, cash, debit/credit cards, and popular digital wallets for convenient payment."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Vikram Shah',
        review: 'Booked a one-way cab from Mumbai to Pune with Swara Cabs. The ride was comfortable and the driver was punctual.'
    },
    {
        name: 'Ms. Anjali Desai',
        review: 'Excellent one-way service from Mumbai to Pune. Easy booking and a smooth journey. Highly recommend Swara Cabs!'
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
//   "name": "Mumbai to Pune One Way Cab",
//   "image": "https://www.swaracabs.in/assets/images/mumbai-to-pune-one-way-cab.jpg",
//   "description": "Book Mumbai to Pune one way cab with Swara Cabs. Choose from AC sedans and SUVs for a comfortable and affordable journey. 24/7 availability, verified drivers, and express highway service.",
//   "brand": {
//     "@type": "Brand",
//     "name": "Swara Cabs"
//   },
//   "aggregateRating": {
//     "@type": "AggregateRating",
//     "bestRating": "5",
//     "worstRating": "1",
//     "ratingValue": "4.9",
//     "ratingCount": "12036"
//   },
//   "offers": {
//     "@type": "Offer",
//     "priceCurrency": "INR",
//     "price": "2499",
//     "availability": "https://schema.org/InStock",
//     "url": "https://www.swaracabs.in/mumbai-to-pune-one-way-cab"
//   }
// };

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Mumbai to Pune One Way Cab",
  "image": "https://www.swaracabs.in/images/keyword/24.jpg",
  "description": "Book a one way cab from Mumbai to Pune with Swara Cabs. AC sedans and SUVs starting from ₹2499. Fast highway ride, verified drivers, and 24x7 availability guaranteed.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "12036"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2499",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/mumbai-to-pune-one-way-cab"
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
    "name": "Mumbai, Pune"
  },
  "serviceType": "One Way Cab Service"
};



    return (
        <div>
<Helmet>
  <title>Mumbai to Pune One Way Cab | 24x7 Booking – Swara Cabs</title>
  <meta 
    name="description" 
    content="Book your Mumbai to Pune one way cab with Swara Cabs. AC sedan or SUV starting at ₹2499. 24x7 availability, verified drivers, highway fast travel. Safe, reliable, affordable taxi service." 
  />
  <meta 
    name="keywords" 
    content="Mumbai to Pune One Way Cab, One Way Taxi from Mumbai to Pune, AC Sedan Cab Mumbai to Pune, SUV Taxi Mumbai to Pune One Way, Online Cab Booking Mumbai to Pune, Budget One Way Taxi Mumbai Pune, 24x7 One Way Cabs Mumbai, Verified Drivers Mumbai Pune, Fast Highway Cab Mumbai to Pune, Express Cab Mumbai Pune, Airport One Way Taxi, One Way Fare Mumbai to Pune, Safe Taxi from Mumbai to Pune, Executive One Way Cab Mumbai Pune, Cheap One Way Cab Booking Mumbai" 
  />
  <meta property="og:title" content="Mumbai to Pune One Way Cab | Fixed Fare from ₹2499 – Swara Cabs" />
  <meta property="og:description" content="Mumbai to Pune one way cab booking with Swara Cabs. AC sedan/SUV at flat ₹2499. Quick highway travel, verified drivers, and instant confirmation." />
  <meta property="og:image" content="https://www.swaracabs.in/images/keyword/24.jpg" />
  <meta property="og:url" content="https://www.swaracabs.in/mumbai-to-pune-one-way-cab" />
  <meta property="og:type" content="website" />
  
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>

{/* <Helmet>
  <title>Mumbai to Pune One Way Cab | 24/7 Online Booking | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Mumbai to Pune one way cab with Swara Cabs. Choose from AC sedans and SUVs for a comfortable and affordable journey. 24/7 availability, verified drivers, and express highway service." 
  />
  <meta 
    name="keywords" 
    content="Mumbai to Pune One Way Cab, One Way AC Taxi Mumbai to Pune, Affordable One Way Cab Mumbai, Sedan One Way Cab Mumbai to Pune, Online One Way Booking Mumbai to Pune, SUV One Way Cab Mumbai, Mumbai to Pune Executive One Way Cab, Verified One Way Cab Mumbai to Pune, Quick Pickup One Way Taxi, One Way Corporate Cab Mumbai to Pune, Non-Stop One Way Cab Mumbai, 24/7 One Way Cabs Mumbai to Pune, Airport to Pune One Way Cab, Express Highway One Way Taxi Mumbai, Safe One Way Taxi Mumbai to Pune" 
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
                            <img src='/images/keyword/24.jpg' alt='img' />
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

export default Mumbaitopuneonewaycab;