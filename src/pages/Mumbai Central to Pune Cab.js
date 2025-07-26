
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Mumbaicentraltopunecab() {



    const cardData =
    {
        keyword: 'Mumbai Central to Pune Cab',
        heading: 'Swara Cabs : Mumbai Central to Pune Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Mumbai Central to Pune. Pune, Maharashtra’s vibrant cultural and educational hub, is known for its historic landmarks, lush greenery, and dynamic city life. Whether you are traveling for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a smooth and hassle‑free experience. Covering approximately 150–160 kilometers via the Mumbai–Pune Expressway, the journey typically takes around 3 to 4 hours depending on traffic conditions. With our well‑maintained fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Pune with Swara Cabs',

        "topPlaces": [
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
      "name": "Mumbai Central to Pune Cab",
      "description": "Enjoy a comfortable and seamless journey from Mumbai Central to Pune with our reliable cab services. We offer a fleet of well-maintained vehicles, professional drivers, and flexible booking options to make your travel stress-free. Whether for personal, business, or family travel, we ensure a smooth and timely ride."
    },
    {
      "name": "AC Cab Mumbai Central to Pune",
      "description": "Beat the heat and travel in style with our fully air-conditioned cabs from Mumbai Central to Pune. Designed for long-distance comfort, our AC cabs ensure a cool and refreshing ride along the expressway with amenities for your convenience and safety."
    },
    {
      "name": "Online Cab Booking Mumbai Central",
      "description": "Book your Mumbai Central to Pune cab online with ease using our intuitive booking platform. Choose your vehicle, schedule your pickup, and confirm your trip—all in just a few clicks. Enjoy transparent pricing and instant confirmation with no hidden charges."
    },
    {
      "name": "Affordable Cab Mumbai Central to Pune",
      "description": "Looking for budget-friendly travel? Our Mumbai Central to Pune cab services offer competitive rates without compromising on service quality. Perfect for solo travelers, families, or groups looking to reach Pune comfortably at the best price."
    },
    {
      "name": "One-Way Taxi Mumbai Central to Pune",
      "description": "Need a one-way trip to Pune? Our Mumbai Central to Pune one-way taxi service offers flexible and affordable options. Skip the hassle of return charges and pay only for the journey you need. Ideal for relocations, business visits, and short trips."
    },
    {
      "name": "Round Trip Cab Mumbai Central",
      "description": "Planning a return journey? Book our round trip cabs from Mumbai Central to Pune and back at discounted fares. This service ensures convenience for day trips or weekend plans with guaranteed return cab availability and no extra waiting charges."
    },
    {
      "name": "SUV Cab Mumbai Central to Pune",
      "description": "Travel with more space and power in our premium SUV cabs from Mumbai Central to Pune. Ideal for families and groups, these vehicles offer comfort, extra luggage capacity, and a safe highway experience with skilled drivers at the wheel."
    },
    {
      "name": "Sedan Cab Mumbai Central",
      "description": "Our sedan cabs from Mumbai Central to Pune are perfect for small families or business travelers who want a stylish, comfortable, and fuel-efficient ride. These cars ensure a smooth journey with plush seating and professional service."
    },
    {
      "name": "Verified Drivers Mumbai Central",
      "description": "Safety is our top priority. All Mumbai Central to Pune cabs come with verified, background-checked, and professionally trained drivers. You can relax knowing you're in trustworthy hands for your long-distance journey."
    },
    {
      "name": "Corporate Cab Hire Mumbai Central",
      "description": "For business travelers, we provide premium corporate cab services from Mumbai Central to Pune. Enjoy timely pickups, invoicing support, and executive-grade vehicles designed for professional comfort and style."
    },
    {
      "name": "Safe Ride Mumbai Central to Pune",
      "description": "Travel securely from Mumbai Central to Pune with our safety-first cab services. All vehicles are regularly sanitized and equipped with GPS, and our drivers are trained to follow safety protocols for a worry-free journey."
    },
    {
      "name": "Executive Cab Mumbai Central",
      "description": "Upgrade your trip with our executive cabs from Mumbai Central to Pune. These luxury vehicles are ideal for high-end travel needs, business clients, or anyone seeking extra comfort and privacy during the ride."
    },
    {
      "name": "24/7 Taxi Mumbai Central",
      "description": "No matter the time of day or night, our Mumbai Central to Pune cabs are available 24/7. Book a cab anytime and enjoy timely service with prompt response and full customer support around the clock."
    },
    {
      "name": "Expressway Cab Mumbai Central",
      "description": "Reach Pune faster via the Mumbai-Pune Expressway in our specialized expressway cabs. Our drivers are well-versed with highway travel, ensuring a swift, smooth, and comfortable journey with minimal stops."
    },
    {
      "name": "Quick Pickup Cab Mumbai Central to Pune",
      "description": "In a hurry? Our quick pickup service ensures your cab arrives promptly at Mumbai Central for your journey to Pune. No delays, no long waits—just instant, reliable service when you need it most."
    }
  ],
  "tableData": [
    ["Mumbai Central to Pune Cab", "AC Cab Mumbai Central to Pune"],
    ["Online Cab Booking Mumbai Central", "Affordable Cab Mumbai Central to Pune"],
    ["One-Way Taxi Mumbai Central to Pune", "Round Trip Cab Mumbai Central"],
    ["SUV Cab Mumbai Central to Pune", "Sedan Cab Mumbai Central"],
    ["Verified Drivers Mumbai Central", "Corporate Cab Hire Mumbai Central"],
    ["Safe Ride Mumbai Central to Pune", "Executive Cab Mumbai Central"],
    ["24/7 Taxi Mumbai Central", "Expressway Cab Mumbai Central"],
    ["Quick Pickup Cab Mumbai Central to Pune", ""]
  ],




"whychoose": [
  {
    "WhyChooseheading": "Convenient Pickups from Mumbai Central",
    "WhyChoosedescription": "Our Mumbai Central to Pune cab service ensures smooth and timely pickups right from the heart of Mumbai Central, whether it’s the railway station, nearby hotels, or offices, making your journey hassle-free from the start."
  },
  {
    "WhyChooseheading": "Comfortable and Well-Maintained Vehicles",
    "WhyChoosedescription": "Choose from a wide range of well-maintained and sanitized vehicles, including spacious sedans, SUVs, and premium cars like Innova Crysta and Ertiga, all designed to provide a comfortable and relaxing ride to Pune."
  },
  {
    "WhyChooseheading": "Transparent and Affordable Pricing",
    "WhyChoosedescription": "We offer clear, upfront pricing for the Mumbai Central to Pune route that includes tolls, taxes, and driver allowances, with no hidden fees to surprise you. Our competitive rates ensure value for your money."
  },
  {
    "WhyChooseheading": "Experienced and Courteous Drivers",
    "WhyChoosedescription": "Our professional drivers are well-versed with Mumbai Central and Pune routes, committed to ensuring your safety and convenience. They drive responsibly and maintain excellent customer service throughout the trip."
  },
  {
    "WhyChooseheading": "Safe and Sanitized Vehicles",
    "WhyChoosedescription": "Prioritizing your health and safety, we thoroughly sanitize all vehicles before every trip. Equipped with modern safety features including airbags, seat belts, and GPS tracking, we guarantee a secure journey."
  },
  {
    "WhyChooseheading": "Round-the-Clock Availability",
    "WhyChoosedescription": "Whether you need an early morning departure or a late-night ride, our Mumbai Central to Pune cab service is available 24/7 to fit your schedule and travel needs."
  },
  {
    "WhyChooseheading": "Easy and Fast Online Booking",
    "WhyChoosedescription": "Booking your Mumbai Central to Pune cab is hassle-free with our intuitive website and mobile app. Receive instant confirmations and real-time trip updates to stay informed at every step."
  },
  {
    "WhyChooseheading": "Tailored Travel Experience",
    "WhyChoosedescription": "We offer customizable options such as multiple stops, luggage assistance, and vehicle preferences to provide a personalized and comfortable travel experience from Mumbai Central to Pune."
  }
]























    }


const faqData = [
    {
        question: "Do you provide cab services from Mumbai Central to Pune?",
        answer: "Yes, Swara Cabs offers reliable and comfortable cab services from Mumbai Central to Pune."
    },
    {
        question: "What is the fare for a cab from Mumbai Central to Pune?",
        answer: "Fares start from ₹5,500 for a sedan. Prices vary depending on the vehicle type and travel time."
    },
    {
        question: "How can I book a cab from Mumbai Central to Pune?",
        answer: "You can book online through our website or call +91 9697780707 for instant booking assistance."
    },
    {
        question: "What types of vehicles are available for Mumbai Central to Pune trips?",
        answer: "We provide sedans, SUVs, Innova Crysta, and tempo travellers based on your group size and comfort needs."
    },
    {
        question: "Are tolls and driver charges included in the fare?",
        answer: "Yes, all tolls, taxes, and driver allowances are included in the fare with no hidden charges."
    },
    {
        question: "Is night service available from Mumbai Central to Pune?",
        answer: "Yes, we operate 24/7 and offer night rides with a small surcharge for trips between 10 PM and 6 AM."
    },
    {
        question: "Can I book a round trip from Mumbai Central to Pune?",
        answer: "Yes, round-trip bookings are available and can be customized as per your schedule."
    },
    {
        question: "Is it safe to travel with Swara Cabs?",
        answer: "Absolutely. Our drivers are background-verified and professionally trained to ensure your safety."
    },
    {
        question: "Do you offer doorstep pickup in Mumbai Central?",
        answer: "Yes, we provide doorstep pickup service directly from your location in Mumbai Central."
    },
    {
        question: "What payment methods are accepted?",
        answer: "We accept UPI, cash, debit/credit cards, and popular digital wallets for easy payment."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Anil Deshpande',
        review: 'Swara Cabs provided excellent service from Mumbai Central to Pune. The driver was professional and punctual.'
    },
    {
        name: 'Ms. Kavita Rao',
        review: 'The cab ride from Mumbai Central to Pune was smooth and comfortable. Highly recommend Swara Cabs!'
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
//   "name": "Mumbai Central to Pune Cab",
//   "image": "https://www.swaracabs.in/assets/images/mumbai-central-to-pune-cab.jpg",
//   "description": "Book Mumbai Central to Pune cab with Swara Cabs for affordable, safe, and reliable travel. Choose from AC sedans, SUVs with verified drivers, and enjoy 24/7 availability for one-way and round trips.",
//   "brand": {
//     "@type": "Brand",
//     "name": "Swara Cabs"
//   },
//   "aggregateRating": {
//     "@type": "AggregateRating",
//     "bestRating": "5",
//     "worstRating": "1",
//     "ratingValue": "4.8",
//     "ratingCount": "8598"
//   },
//   "offers": {
//     "@type": "Offer",
//     "priceCurrency": "INR",
//     "price": "2699",
//     "availability": "https://schema.org/InStock",
//     "url": "https://www.swaracabs.in/mumbai-central-to-pune-cab"
//   }
// };


const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Mumbai Central to Pune Cab",
  "image": "https://www.swaracabs.in/images/keyword/28.jpg",
  "description": "Book Mumbai Central to Pune cab online from ₹2699 with Swara Cabs. Choose AC sedan or SUV for one-way or round trip. 24x7 verified drivers, fixed pricing, and expressway comfort.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "16589"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2699",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/mumbai-central-to-pune-cab"
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
    "name": "Mumbai Central, Pune"
  },
  "serviceType": "Intercity Taxi Service"
};



    return (
        <div>

<Helmet>
  <title>Mumbai Central to Pune Cab | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Mumbai Central to Pune cab from ₹2699. AC sedan or SUV, verified drivers, 24/7 availability. One-way and round trip options with Swara Cabs. Safe, fast & affordable intercity travel." 
  />
  <meta 
    name="keywords" 
    content="Mumbai Central to Pune Cab, AC Cab from Mumbai Central, Verified Driver Mumbai Central Cab, One-Way Taxi Mumbai Central to Pune, Round Trip Cab Mumbai Central to Pune, Online Booking Mumbai Pune Cab, SUV Cab Mumbai Central, 24x7 Intercity Taxi Mumbai Central, Executive Cab Mumbai Central, Corporate Travel Cab Mumbai Central to Pune, Safe AC Sedan Mumbai Central to Pune, Fast Expressway Cab Booking Mumbai, Affordable Taxi Mumbai Central"
  />
  <meta property="og:title" content="Mumbai Central to Pune Cab | Book AC Sedan/SUV Online – Swara Cabs" />
  <meta property="og:description" content="Get fast and affordable cab from Mumbai Central to Pune. AC taxi at ₹2699. Choose sedan or SUV with verified drivers. 24/7 booking and fixed pricing." />
  <meta property="og:image" content="https://www.swaracabs.in/images/keyword/28.jpg" />
  <meta property="og:url" content="https://www.swaracabs.in/mumbai-central-to-pune-cab" />
  <meta property="og:type" content="website" />

  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>


{/* <Helmet>
  <title>Mumbai Central to Pune Cab | Affordable & Reliable Taxi | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Mumbai Central to Pune cab with Swara Cabs for affordable, safe, and reliable travel. Choose from AC sedans, SUVs with verified drivers, and enjoy 24/7 availability for one-way and round trips." 
  />
  <meta 
    name="keywords" 
    content="Mumbai Central to Pune Cab, AC Cab Mumbai Central to Pune, Online Cab Booking Mumbai Central, Affordable Cab Mumbai Central to Pune, One-Way Taxi Mumbai Central to Pune, Round Trip Cab Mumbai Central, SUV Cab Mumbai Central to Pune, Sedan Cab Mumbai Central, Verified Drivers Mumbai Central, Corporate Cab Hire Mumbai Central, Safe Ride Mumbai Central to Pune, Executive Cab Mumbai Central, 24/7 Taxi Mumbai Central, Expressway Cab Mumbai Central, Quick Pickup Cab Mumbai Central to Pune" 
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
                            <img src='/images/keyword/28.jpg' alt='img' />
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

export default Mumbaicentraltopunecab;